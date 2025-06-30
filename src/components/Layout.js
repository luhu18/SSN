import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from './Header'; // CORRECTED: import Header from Header component file
import Footer from './Footer'; // CORRECTED: import Footer from Footer component file


const Layout = () =>{
    return(
       <div>
         <Header/>
         <main>
             <Outlet/>
         </main>
         <Footer/>
       </div>
    )
};
export default Layout;