"use client";
import React, { useState } from "react";

const RazorpayPage: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_L8JOz61TePdwKy", // Replace with your Razorpay Key ID
      amount: amount * 100, // Amount is in the smallest currency unit (like paise for INR)
      currency: "INR",
      name: "SRIVATSA CHARITABLE TRUST",
      description: "Test Transaction",
      handler: (response: any) => {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        // Add your success logic here (e.g., update database, show success message, etc.)
      },
      prefill: {
        name: name,
        email: email,
        contact: phone,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
      modal: {
        ondismiss: () => {
          alert("Payment process interrupted or failed. Please try again.");
          // Add your failure logic here (e.g., show error message, retry payment, etc.)
        },
      },
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="pb-10 pl-5 pr-5 pt-5 flex justify-center">
      <div className="w-full md-min:w-[50%]">
        <h1 className="text-lg font-bold mb-4 text-center">Razorpay Payment</h1>
        <div className="block">
          <input
            type="number"
            placeholder="Enter Amount"
            onChange={(e) => setAmount(Number(e.target.value))}
            className="p-2 border rounded mb-4 w-full"
          />
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border rounded mb-4 w-full"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border rounded mb-4 w-full"
          />
          <input
            type="tel"
            placeholder="Enter Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="p-2 border rounded mb-4 w-full"
          />
          <button
            onClick={handlePayment}
            className="p-2 bg-blue-500 text-white rounded w-full"
          >
            Pay with Razorpay
          </button>
        </div>
      </div>
    </div>
  );
};

export default RazorpayPage;
