//require("dotenv").config();

import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import BillingForm from '../Module Components/billings/BillingForm';
import Layout from "../Header component/Layout";

//DO NOT DELETE COMMENTED CODE -we
/* class Billing extends Component {
  constructor() {
    super();
    this.state = {stripe: null}
  }

  componentDidMount() {
    const stripeJs = document.createElement('script');
    stripeJs.src = 'https://js.stripe.com/v3/';
    stripeJs.async = true;
    stripeJs.onload = () => {
      // The setTimeout lets us pretend that Stripe.js took a long time to load
      // Take it out of your production code!
      setTimeout(() => {
        this.setState({
          stripe: window.Stripe('pk_test_8ORBm2Wl7klSkjJI4PtWHT5Q'),
        });
      }, 500);
    };
    document.body && document.body.appendChild(stripeJs);
  }
  
  render() {
    return (
      <Layout>
        <StripeProvider stripe={this.state.stripe}>
          <div className="example">
            <h1>React Stripe Elements Example</h1>
            <Elements>
              <BillingForm />
            </Elements>
          </div>
        </StripeProvider>
      </Layout>
    );
  }
} */

class Billing extends Component {
  render() {
    return (
      <Layout>
      <StripeProvider apiKey="pk_test_8ORBm2Wl7klSkjJI4PtWHT5Q">
        <div className="example">
          <h1>Billing</h1>
          <Elements>
            <BillingForm />
          </Elements>
        </div>
      </StripeProvider>
      </Layout>
    );
  }
};

export default Billing;