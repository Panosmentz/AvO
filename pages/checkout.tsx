import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketItemsTotal,
} from "../redux/basketSlice";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import Button from "../components/Button";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { Stripe } from "stripe";
import { fetchPostJSON } from "../utils/api-helpers";
import getStripe from "../utils/get-stripe";

function Checkout() {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketItemsTotal);
  const router = useRouter();
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState(
    {} as { [key: string]: Product[] }
  );
  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results;
    }, {} as { [key: string]: Product[] });

    setGroupedItemsInBasket(groupedItems);
  }, [items]);
  const [loading, setLoading] = useState(false);
  const createCheckoutSession = async () => {
    setLoading(true);
    const checkoutSession: Stripe.Checkout.Session = await fetchPostJSON(
      "/api/checkout_sessions",
      { items: items }
    );
    //internal server error handling
    if ((checkoutSession as any).statusCode === 500) {
      console.error((checkoutSession as any).message);
      return;
    }
    //Redirect to Checkout
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: checkoutSession.id,
    });

    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message);

    setLoading(false);
  };
  return (
    <div>
      <Head>
        <title>AvO | Checkout </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto max-w-5xl pb-24">
        <div className="px-5">
          <h1 className="my-4 text-3xl font-semibold lg:text-4xl">
            {items.length > 0 ? "Review your items." : "Your bag is empty."}
          </h1>
          <p className="my-4">Free delivery and free returns.</p>

          {items.length === 0 && (
            <Button
              title="Continue Shopping"
              onClick={() => router.push("/")}
            />
          )}
        </div>

        {items.length > 0 && (
          <div className="mx-5 md:mx-8">
            {Object.entries(groupedItemsInBasket).map(([key, items]) => (
              <CheckoutProduct key={key} items={items} id={key} />
            ))}

            <div className="my-12 mt-6 ml-auto max-w-3xl">
              <div className="divide-y divide-gray-300">
                <div className="pb-4">
                  <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>
                      <Currency quantity={basketTotal} currency="EUR" />
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p>Shipping</p>
                    <p>FREE</p>
                  </div>
                </div>

                <div className="flex justify-between pt-4 text-xl font-semibold">
                  <h4>Total</h4>
                  <h4>
                    {" "}
                    <Currency quantity={basketTotal} currency="EUR" />
                  </h4>
                </div>
              </div>

              <div className="my-14 space-y-4">
                <h4 className="text-xl font-semibold">
                  How would you like to pay?
                </h4>
                <div className="flex flex-col gap-4 md:flex-row">
                  <div className="flex flex-1 flex-col items-center space-y-8 rounded-xl bg-gray-200 p-8 py-12 md:order-2">
                    <h4 className="mb-4 flex flex-col text-xl font-semibold">
                      Pay in full
                      <span>
                        {" "}
                        <Currency quantity={basketTotal} currency="EUR" />
                      </span>
                    </h4>

                    <Button
                      noIcon
                      loading={loading}
                      title="Continue with Stripe"
                      width="w-full"
                      onClick={createCheckoutSession}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Checkout;
