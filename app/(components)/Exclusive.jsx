"use client";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { loadStripe } from "@stripe/stripe-js";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Loader from "./Loader";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
const professionalKey = process.env.NEXT_PUBLIC_PROFESSIONAL_PRICE;

const Exclusive = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { user, isLoaded, isSignedIn } = useUser();
  const email = user?.emailAddresses[0].emailAddress;
  const item = {
    name: "Premium Wizresume",
    price: 499,
    image: "https://via.placeholder.com/150",
    quantity: 1,
  };
  const handleCheckout = async () => {
    setLoading(true);
    if (!user) {
      router.push("/sign-up");
      return;
    }

    const stripe = await stripePromise;

    const response = await fetch(`${apiUrl}stripe/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item,
        userEmail: email,
        subscriptionId: professionalKey,
      }),
    });

    const { sessionId } = await response.json();

    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({ sessionId });
    if (result.error) {
      console.error(result.error.message);
    }
    setLoading(false);
  };
  return (
    <div className="flex-col px-12 py-6 space-y-5 bg-[#49305e] text-white  w-[400px] md:rounded-xl shadow-xl ">
      <div>
        <h1 className="text-xl font-semibold">Exclusive</h1>
        <p>For Professionals</p>

        <h1 className="text-3xl font-semibold mt-5 ">
          <span className="line-through   opacity-70">$4.99 </span>
          <span className="tracking-widest ml-2 text-lg text-white font-semibold ">
            $2{" "}
          </span>
          <span className="opacity-70 text-sm">/ month</span>
          <br />
          <span className="opacity-70 text-sm font-normal ">
            Use Code LAUNCH60 For Discount
          </span>
        </h1>
      </div>
      <div className="">
        <ul className="space-y-3 mt-10">
          <li className="flex gap-2">
            <FaCheckCircle className="mt-1" />
            <span>Unlimited resumes.</span>
          </li>
          <li className="flex gap-2 ">
            <FaCheckCircle className="mt-1" />
            <span>Unlimited personal resume upload.</span>
          </li>
          <li className="flex gap-2 ">
            <FaCheckCircle className="mt-1" />
            <span>Daily limitations on multiple jobs.</span>
          </li>
          <li className="flex gap-2 ">
            <FaCheckCircle className="mt-1" />
            <span>Unlimited text regeneration.</span>
          </li>
          <li className="flex gap-2 ">
            <FaCheckCircle className="mt-1" />
            <span>Unlimited resume saves.</span>
          </li>
          <li className="flex gap-2 ">
            <FaCheckCircle className="mt-1" />
            <span>Unlimited ATS calculator.</span>
          </li>
        </ul>
      </div>
      <div className="button text-center">
        <button
          disabled={loading}
          onClick={handleCheckout}
          className=" p-2 mt-10 rounded-2xl text-xl text-[#49305e]  px-10 bg-[white]  font-semibold hover:bg-gray-300 transition-all duration-200"
        >
          {loading ? (
            <span className="flex gap-2 items-center">
              <Loader />
              <span>Subscribe</span>{" "}
            </span>
          ) : (
            <span>Subscribe</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Exclusive;
