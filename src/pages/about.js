import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <h2>Client-Only Routes & Deployment</h2>
    <p>
      In August 2019, I deployed a Gatsby app with Zeit now. The app had
      client-only routes, and no route configuration in a <code>now.json</code>{' '}
      file. As discussed in{' '}
      <a
        href="https://spectrum.chat/zeit/now/getting-a-404-page-not-found-when-using-gatsbyjs~b13fd04e-0136-433c-bf8c-c8fa3686fed3"
        target="_blank"
        rel="noopener noreferrer"
      >
        this Spectrum post
      </a>
      , I was having issues with client-only routes, which were returning a 404
      /<code>FILE_NOT_FOUND</code> error.
    </p>
    <p>
      It appears that since then, a Gatsby site with client-only routes is able
      to be deployed without any special route configuration, with client-only
      routes working out-of-the-box 🎉
    </p>
  </Layout>
);

export default SecondPage;
