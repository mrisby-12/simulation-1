import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default class Header extends Component { 
    
    render() {
        return
            <div>
                <nav className='navbar-container'>
                    <div>Shelfie</div>
                    <Link to='/' className='shelf-button'>Shelf A</Link>
                    <Link to='/' className='shelf-button'>Shelf B</Link>
                    <Link to='/' className='shelf-button'>Shelf C</Link>
                    <Link to='/' className='shelf-button'>Shelf D</Link>
                </nav>    
            </div>
    }
}