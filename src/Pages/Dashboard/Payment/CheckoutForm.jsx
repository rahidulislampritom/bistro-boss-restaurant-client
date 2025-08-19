import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

const CheckoutForm = () => {

    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const axiosPaymentSecure = useAxiosSecure();
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        axiosPaymentSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }, [axiosPaymentSecure, totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        };

        const card = elements.getElement(CardElement)

        if (card == null) {
            return;
        };

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('Stripe paymentMethod error', error)
            setError(error.message)
        } else {
            console.log('Stripe paymentMethod success', paymentMethod)
            setError('')
        };

    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-primary my-6" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-500">{error}</p>

        </form>
    );
};

export default CheckoutForm;