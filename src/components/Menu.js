import React from 'react';
import ReactDom from 'react-dom';
import '../Mystyle/Menustyle.css';
import { Link } from 'react-router-dom';

class Menu extends React.Component{
    render(){
        return(
            <div className = 'Menustyle'>
                <ul>
                    <li><Link to = '/'>Home</Link></li>
                    <li><Link to = 'about'>About</Link></li>
                    <li><Link to = 'contact'>Contact</Link></li>
                </ul>
            </div>
        );
    }
}

export default Menu;