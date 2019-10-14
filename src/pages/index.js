import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <p>
      Check out the private routes (My Account, Settings, and Billing - shown in{' '}
      <span style={{ color: `green` }}>green</span>) to generate client-side
      pages.
    </p>
    <h2>Why Client-Side?</h2>
    <p>
      If you have private routes with a authentication system, you want that
      page content to be generated on-the-fly. Since we don't have a server to
      generate content on-the-fly in a Gatsby app, the way to do this is to
      generate the content client-side.
    </p>
  </Layout>
);

export default IndexPage;
