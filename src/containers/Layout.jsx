import React from 'react';
import PropTypes from 'prop-types';
import TopBar from '../components/TopBar';


const Layout = ({ children, title}) => {
  // document.getElementsByTagName('title')[0].innerHTML = title;

  return (
    <>
      <TopBar />
      <div className="wrapper">
        {children}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Layout;
