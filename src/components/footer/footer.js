import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './footer.css'
import {CURRENT_YEAR} from '../../helper'

export class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <Link className='logo'>
                    <img alt='putuj jeftino' src='/images/imgbin-airplane-logo-encapsulated-postscript-vehicle-airplane-hUF07M4F0bbrGLPW1ppgng9HL.jpg'></img>
                </Link>
                <div className='footerRight'>@putuj_jeftino {CURRENT_YEAR} All rights reserved.</div>
            </div>
        )
    }
}

export default Footer
