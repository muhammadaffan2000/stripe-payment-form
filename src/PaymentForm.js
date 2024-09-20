import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  CircularProgress,
  Box,
  Typography,
} from "@mui/material";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const isFormValid = name && email;

  ///////// Task Two FindTwoSum Function start /////////

  useEffect(() => {
    const arr = [2, 7, 11, 15];
    const target = 22;
    console.log(FindTwoSum(arr, target));
  }, []);

  const FindTwoSum = (arr, target) => {
    const indicesMap = new Map();

    for (let i = 0; i < arr.length; i++) {
      const complement = target - arr[i];

      if (indicesMap.has(complement)) {
        return [indicesMap.get(complement), i];
      }

      indicesMap.set(arr[i], i);
    }

    return [];
  };

  ///////// Task Two FindTwoSum Function end /////////

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    setPaymentDetails(null);

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: { name, email },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSuccess("Payment successful!");
      setLoading(false);
      setShowForm(false);
      setPaymentDetails(paymentMethod);
      setName("");
      setEmail("");
      cardElement.clear();
    }
  };

  const cardStyle = {
    style: {
      base: {
        color: "#424770",
        fontFamily: "Roboto, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
  };

  return showForm ? (
    <Box
      component="form"
      className="formElement"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: "400px",
        margin: "auto",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {error && (
        <Typography
          color="error"
          sx={{
            fontSize: "20px",
            textAlign: "center",
            backgroundColor: "#d32f2f30",
            borderRadius: "5px",
            padding: "5px 0px 5px 0px",
            marginBottom: "20px",
          }}
        >
          {error}
        </Typography>
      )}

      <Typography variant="h5" mb={2}>
        Payment Form
      </Typography>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <Box
        sx={{
          my: 2,
          p: 2,
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      >
        <CardElement options={cardStyle} />
      </Box>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!isFormValid || loading}
        fullWidth
      >
        {loading ? <CircularProgress size={24} /> : "Submit Payment"}
      </Button>
    </Box>
  ) : (
    <Box
      sx={{
        maxWidth: "500px",
        margin: "auto",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 0px 10px #00000029",
        borderRadius: "5px",
        marginTop: "100px !important",
      }}
    >
      {success && (
        <Box
          sx={{
            marginBottom: "20px",
          }}
        >
          <Typography
            color="success"
            sx={{
              fontSize: "20px",
              textAlign: "center",
              backgroundColor: "#2e7d3242",
              borderRadius: "5px",
              padding: "5px 0px 5px 0px",
              marginBottom: "20px",
            }}
          >
            {success}
          </Typography>
          <Box>
            <Typography variant="body2">
              Payment Method ID:{" "}
              <Typography variant="body3">{paymentDetails?.id}</Typography>
            </Typography>
            <Typography variant="body2">
              Name:{" "}
              <Typography variant="body3">
                {paymentDetails?.billing_details?.name}
              </Typography>
            </Typography>
            <Typography variant="body2">
              Email:{" "}
              <Typography variant="body3">
                {paymentDetails?.billing_details?.email}
              </Typography>
            </Typography>
            <Typography variant="body2">
              Card Brand:{" "}
              <Typography variant="body3">
                {paymentDetails?.card?.brand}
              </Typography>
            </Typography>
            <Typography variant="body2">
              Last 4 Digits:{" "}
              <Typography variant="body3">
                {paymentDetails?.card?.last4}
              </Typography>
            </Typography>
          </Box>
        </Box>
      )}

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => setShowForm(true)}
      >
        Back
      </Button>
    </Box>
  );
};

export default PaymentForm;
