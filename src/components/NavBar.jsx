import React from 'react';
import './NavBar.css';

export default function NavBar() {
  return (
    <>
        <nav>
            <div className='left'>
                <a href="">Israel Reveles</a>
            </div>
            <div className='right'>
                <a href="">About</a>
                <a href="">Projects</a>
                <a href="">Skills</a>
                <a href="">Leave a message</a>
            </div>
        </nav>
    </>
  );
}


