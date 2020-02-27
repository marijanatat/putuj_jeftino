
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import SideItem from './side-item'
import SideNav from 'react-simple-sidenav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 export default props => {
   return (
     <Menu>
       <a className="menu-item" href="/">
         Home
       </a>

       <a className="menu-item" href="/cities">
        Cities
       </a>

       <a className="menu-item" href="/news">
         News
       </a>

       <a className="menu-item" href="/videos">
         Videos
       </a>

       <a className="menu-item" href="/sign-in">
         Sign-in
       </a>

       <a className="menu-item" href="/sign-out">
         Sign-out
       </a>

       <a className="menu-item" href="/node">
        Contact
       </a>
     </Menu>
   );
 };


// const Side =(props)=>{
//     return (
//              <div>
//                 <SideNav
//                  showNavBar={props.showNavBar}
//                  onHideNav={props.onHideNav}
//                  navStyle={{
//                      background:'#242424',
//                      maxWidth:'220px'
//                  }}
//              > 
//                 OPTIONS
// <SideItem> </SideItem> 
//               </SideNav> 
//              </div>
//          )
    
//  }

//  export default Side
