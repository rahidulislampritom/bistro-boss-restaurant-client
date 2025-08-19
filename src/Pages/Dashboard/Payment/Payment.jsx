import { Elements } from "@stripe/react-stripe-js";
import CardHeading from "../../Shared/CardHeading/CardHeading";
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm";

const Payment = () => {


    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
    return (
        <div>
            <section className="mb-12">
                <CardHeading
                    title='Please,pay to eat!'
                    heading='Payment'
                />
            </section>

            <section>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </section>
        </div>
    );
};

export default Payment;