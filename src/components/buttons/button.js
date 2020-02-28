import React from 'react';
import { Link} from 'react-router-dom';

import  './button.css';


const button = (props) => {
    let template = null;

    switch(props.type){
        case 'loadmore':
            template = (
                <div className='btn1'>
                    onClick={props.loadMore}
                >
                    {props.cta}
                </div>
            );
            break;
        case 'linkTo':
            template = (
                <Link to={props.linkTo}
                    className='btn1'>
                    {props.cta}
                </Link>
            )
            break;
        default:
            template = null
    }
    return template;
}

export default button;