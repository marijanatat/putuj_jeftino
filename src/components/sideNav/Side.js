
import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/laravel">
        Laravel
      </a>

      <a className="menu-item" href="/angular">
        Angular
      </a>

      <a className="menu-item" href="/react">
        React
      </a>

      <a className="menu-item" href="/vue">
        Vue
      </a>

      <a className="menu-item" href="/node">
        Node
      </a>
    </Menu>
  );
};


// const Side =(props)=>{
//         return (
//             <div>
//                <SideNav
//                 showNavBar={props.showNavBar}
//                 onHideNav={props.onHideNav}
//                 navStyle={{
//                     background:'#242424',
//                     maxWidth:'220px'
//                 }}
//             > */}
//                OPTIONS
//              </SideNav> 
//             </div>
//         )
    
// }

// export default Side
