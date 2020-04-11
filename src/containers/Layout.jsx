import React from 'react';
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
}

export default Layout;
