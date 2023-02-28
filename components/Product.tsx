import React from "react";
import { urlFor } from "../sanity";
import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/basketSlice";
import toast from "react-hot-toast";
import Currency from "react-currency-formatter";
import Button from "./Button";

interface Props {
  product: Product;
}

function Product({ product }: Props) {
  //redux - useDispatch, shoot actions to store
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(addToBasket(product));
    toast.success(`${product.title} added to basket`, {
      position: "top-center",
    });
  };
  return (
    /*<div className="flex h-fit flex-col space-y-3 rounded-xl bg-white p-8 md:h-[500px] md:w-[400px] md:p-10">
      <div className="relative h-64 w-full md:h-72">
        <Image
          src={urlFor(product.image[0]).url()}
          fill
          alt="product-image"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="flex flex-1 items-center justify-between space-x-3">
        <div className="space-y-2 text-xl text-black md:text-2xl">
          <p>{product.title}</p>
          <p>€{product.price}</p>
        </div>
        <div
          className="flex h-16 w-16 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-violet-500 "
          onClick={addItemToBasket}
        >
          <ShoppingCartIcon className="h-8 w-8 text-white" />
        </div>
      </div>
    </div>
    */
    <div className=" rounded-md p-6 shadow-xl ">
      <div className="relative h-64 w-full md:h-72">
        <Image
          src={urlFor(product.image[0]).url()}
          alt="product-image"
          fill
          style={{ objectFit: "contain" }}
          className=" w-full rounded-md object-cover object-center "
        />
      </div>
      <div className=" mb-2">
        <span className="text-s block font-medium uppercase tracking-widest text-teal-600">
          {product.title}
        </span>
        <h2 className="mt-3 text-xl font-semibold tracking-wide">
          {" "}
          <Currency quantity={product.price} currency="EUR" />
          <div
            className="mt-3 flex h-12 w-12 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-violet-500 "
            onClick={addItemToBasket}
          >
            <ShoppingCartIcon className="h-8 w-8 text-white" />
          </div>
        </h2>
      </div>
    </div>
  );
}

export default Product;
