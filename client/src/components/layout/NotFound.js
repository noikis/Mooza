import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='x-large text-dark'>
        <i className='fas fa-exclamation-triangle'> Not Found</i>
        <p className='large my-2'>This page does not exist</p>
      </h1>
    </Fragment>
  );
};

export default NotFound;
