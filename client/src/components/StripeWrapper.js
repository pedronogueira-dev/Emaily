import React, { Component } from 'react';
import ReactStripeCheckout from 'react-stripe-checkout';

class StripeWrapper extends Component {
  render(){
    return(
      <ReactStripeCheckout
        amount={500}
        token={ token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        name="Emaily"
        description="$5 for 5 Survey Credits"
      >
        <button className="btn red">
          Add Credits
        </button>
      </ReactStripeCheckout>
    );
  }
}

export default StripeWrapper;
