import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        'pk_test_51IdeQHGH1TmOVZ4dcHOS9qhRZdUB9VzuxOo94XNW4kB2PNjWBmTdehOqPd6Kb4vN6LiulecnzUL0QCc6AJ0VdaeE00vGQG85T4';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Succesful!');
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
