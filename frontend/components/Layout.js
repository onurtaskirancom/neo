import React, { Component, Fragment } from 'react'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <p>header</p>
      {children}
      <p>footer</p>
    </React.Fragment>
  );
};


export default Layout;