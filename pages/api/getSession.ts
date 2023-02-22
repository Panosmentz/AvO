import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

//This API route gets the line items from Stripe for a specific session
//this is being used by utils/fetchLineItems

const stripe: Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const sessionId = req.query.session_id as string;

  const session = await stripe.checkout.sessions.listLineItems(sessionId);

  res.status(200).json({
    session,
  });
}