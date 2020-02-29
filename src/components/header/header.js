import React from 'react'
import   './header.css'
import {Link} from 'react-router-dom'
import FontAwesome from 'react-fontawesome';
import Side from '../sideNav/Side'


 const Header=(props) => {
    const logo=()=>
        (
           <Link to='/' className='slikaLink'>
                <img alt='fly cheep' src='/images/imgbin-airplane-logo-encapsulated-postscript-vehicle-airplane-hUF07M4F0bbrGLPW1ppgng9HL.jpg' ></img> 
           </Link>
        )
     
    // const navBars = () => (
    //     <div className='bars'>
    //         <FontAwesome name="bars"
    //             onClick={props.onOpenNav}
    //             style={{
    //                 color:'#dfdfdf',
    //                 padding:'10px',
    //                 cursor:'pointer'
    //             }}
    //         />
    //     </div>
    // )
    
        return (        
                <header className='header'>
                  
                    <Side {...props}/>
                   <div className='headerDiv'>                     
                       {/* {navBars()} */}
                       {logo()} 
                   </div>
                   <div className='naslov'>JEFTINA PUTOVANJA</div>
                  
                </header>
                           
        )  
}

export default Header;
