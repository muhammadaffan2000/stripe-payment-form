import './App.css';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Q0og1RqBaSwLtkHuaIRN6Y1acTr1JKhMIobNYF7uRq5W0WOCb29qWPDurFw8XDaGVuFYG18qDUPzrmlYYqhThAj00HkXn62qu');

function App() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
}

export default App;
