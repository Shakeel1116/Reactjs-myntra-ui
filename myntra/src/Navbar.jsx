import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className="nav-bar">
                <div className="logo">
                    <div className="rightnav">
                        <li>MEN</li>
                        <li>WOMEN</li>
                        <li>KIDS</li>
                        <li>HOME&IVING</li>
                        <li>BEAUTY</li>
                        <li>STUDIO</li>
                        <div className="centernav">
                            < input type="text" className='label' placeholder=' search products and brands more' />
                            <button className='search'></button>
                            <ul className='navleft'>
                                <li> SIGN&IN</li>
                                <li>SIGN&UP</li>
                                <li>WISHLIST</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    )
}

export default Navbar
