/**
 *
 * Error
 *
 */

import React from 'react';

import { Helmet } from 'react-helmet';

export default function Error({ errorTitle , ...props }) {
  console.log(props);
  return (
    <>
      <Helmet>
        <title>{errorTitle}</title>
        <meta
          name="Page Not Found"
          content="Page Not found  shows when it did not found any matched route"
        />
      </Helmet>

      <div id="fourOFour">
        <div className="fof">
          <h1>Error - {errorTitle || '404 Page Not Found'}</h1>
        </div>
      </div>
    </>
  );
}
