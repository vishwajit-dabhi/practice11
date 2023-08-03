import React from 'react';
import {Link} from 'react-router-dom';


const Nav=()=>{
    return(
        <div>
            <ul className='nav-ul'>
                <li><Link to="/"> home page</Link></li>
                <li><Link to="/content">content</Link></li>
                <li><Link to="/about">about us</Link></li>
                <li><Link to="/signUp">signUp</Link> </li>
            </ul>
        </div>
    )
}

export default Nav;