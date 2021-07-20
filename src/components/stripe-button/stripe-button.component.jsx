import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    //stripe wants to see values in cents
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JFImCCGYGL0SsopVGQPLMrkYaKaIpUgUMeP2kskaLKnDHstZ2YdQKzCS0UusSZOyrZYQrWPN8aLRbtG64EVxLMo007dufY9it';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='CROWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;