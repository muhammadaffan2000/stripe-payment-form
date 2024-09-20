# Payment Form with Stripe Integration

This project is a simple payment form built using React and Material UI, integrated with Stripe for payment processing in test mode. The form collects user information and card details, processes payments, and provides feedback on the transaction status.

## Features

- **Responsive UI**: A user-friendly interface created with Material UI components.
- **Form Fields**: Collects user information including name, email, and card details.
- **Stripe Integration**: Utilizes Stripe's API for secure payment processing.
- **Form Validation**: Ensures all fields are filled with valid data before submission.
- **Loading Indicator**: Displays a loading spinner while processing payments.
- **Success and Error Messages**: Shows appropriate messages based on payment status.
- **Form Reset**: Clears the form fields upon successful payment submission.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Material UI**: React components that implement Google’s Material Design.
- **Stripe**: Payment processing platform for accepting online payments.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v14 or later)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/muhammadaffan2000/stripe-payment-form.git

2. **Navigate to the project directory**:
   ```bash
   cd stripe-payment-form
   
3. **Install dependencies**:
   ```bash
   npm install

4. **Start the development server**:
   ```bash
   npm start
5. **Open your browser**: Navigate to `http://localhost:3000` to view the application.

### Usage
1. Fill in the **Name** and **Email** fields.
2. Enter your card details in the Stripe `CardElement`.
3. Click the **Submit Payment** button to process the payment.
4. Upon successful payment, a success message will be displayed along with the payment details. In case of an error, an appropriate message will be shown.

### Code Explanation
The payment form is structured as follows:

#### Components
- **PaymentForm**:
  - Collects user input and card details.
  - Validates the form before submission.
  - Handles payment submission via Stripe API.
  - Displays success and error messages based on the transaction result.

#### Form Fields
1. **Text Fields**:
  - **Name**: Captures the user’s name.
  - **Email**: Captures the user’s email address.
2. **Card Element**:
  - Displays Stripe’s CardElement for secure card input.
3. **Submit Button**:
  - Disabled until valid inputs are provided.
  - Shows a loading spinner during the payment process.

#### State Management
- **useState**: Manages form input values and feedback messages (loading, error, success).
- **useCallback**: Memoizes the `handleSubmit` function to prevent unnecessary re-renders.

#### Stripe Integration
- Utilizes Stripe’s `createPaymentMethod` function to handle payment processing securely.
- Displays appropriate success/error messages based on the API response.

### Acknowledgments
- [Stripe](https://stripe.com/) for their excellent payment processing API.
- [Material UI](https://mui.com/) for the user interface components.




# Two Sum Problem

This project implements a function in JavaScript that finds the indices of two numbers in an array that add up to a given target sum. The solution is efficient, achieving a time complexity of **O(n)**.

## Problem Statement

Given an array of integers and a target sum, the goal is to find the indices of two numbers in the array such that they add up to the target sum.

- Each input will have exactly **one solution**.
- You may **not use the same element twice**.

### Function Signature

```
const findTwoSum = (arr, target) => {
  const indicesMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (indicesMap.has(complement)) {
      return [indicesMap.get(complement), i];
    }

    indicesMap.set(arr[i], i);
  }

  return [];
}
```

### Features
- **Efficient Solution**: The function uses a hash map to achieve a time complexity of **O(n)**, where `n` is the length of the input array.
- **Single Pass Algorithm**: The function solves the problem in a single iteration over the array.
- **Space Efficiency**: The function uses additional space proportional to the size of the input array for storing elements in the hash map.

### Approach
#### Algorithm Explanation
1. **Iterate Through the Array**: The function loops through each element of the array.
2. **Calculate Complement**: For each element, it calculates the difference between the target sum and the current element (i.e., the complement).
3. **Check if Complement Exists in the Hash Map**: If the complement exists in the hash map, return the current index and the index of the complement.
4. **Store the Element in the Hash Map**: If the complement is not found, store the current element and its index in the hash map.
5. **Return Result**: Once the solution is found, the indices of the two numbers that sum up to the target are returned.

#### Code Implementation
```
const findTwoSum = (arr, target) => {
  const indicesMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (indicesMap.has(complement)) {
      return [indicesMap.get(complement), i];
    }

    indicesMap.set(arr[i], i);
  }

  return [];
}
```

#### Time Complexity
- **Time Complexity: O(n)** - We traverse the array once, and each lookup and insertion in the hash map takes constant time (`O(1)`).
- **Space Complexity: O(n)** - In the worst case, all elements will be stored in the hash map.

### Example Usage
Here’s how you can use the `findTwoSum` function:
```
const arr = [2, 7, 11, 15];
const target = 9;

const result = findTwoSum(arr, target);
console.log(result); // Output: [0, 1]
```
In this example:
- The target sum is `9`.
- The first element is `2`, and the complement (target - 2) is `7`.
- The complement `7` is found at index `1`, so the function returns `[0, 1]`.

#### Additional Examples
```
// Example 1
const arr1 = [1, 3, 4, 2];
const target1 = 6;
console.log(findTwoSum(arr1, target1)); // Output: [2, 3] (4 + 2 = 6)

// Example 2
const arr2 = [3, 3];
const target2 = 6;
console.log(findTwoSum(arr2, target2)); // Output: [0, 1] (3 + 3 = 6)
```
