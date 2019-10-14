import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/layout';

const MyAccount = () => <h2>Main Account Page</h2>;

const Settings = () => (
  <>
    <h2>Account Settings</h2>
    <p>This is where logged-in users might adjust their settings.</p>
  </>
);

const Billing = () => (
  <>
    <h2>Account Billing</h2>
    <p>It's always nice when your users can pay you for all your hard work.</p>
  </>
);

const Account = () => (
  <Layout>
    <h1>Account</h1>
    <Router>
      <MyAccount path="/account/" />
      <Settings path="/account/settings" />
      <Billing path="/account/billing" />
    </Router>
    <p>
      <strong>Note: </strong>This page was generated client-side
    </p>
  </Layout>
);

export default Account;
