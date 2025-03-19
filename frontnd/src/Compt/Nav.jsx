import React, { useEffect, useRef, useState } from 'react'
import "../Css/Nav.css"
import cartLogo from "./Images"


function Nav() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const menuList = document.getElementById("menuList")

        try {
            const height = window.innerHeight;
            setWidth(window.innerWidth);
            if (width < 900) {
                menuList.classList.add("hide")
                menuList.classList.remove("show")

            } else {
                menuList.classList.add("show")
                menuList.classList.remove("hide")
            }

        } catch (error) {
            console.log(error)
        }

    }, [])

    return (
        <div className='flex H-100' id='navbarmain'>
            <div className='half-W'>
                <ul>
                    <Link to="/" ><li className='li'>World Peace</li></Link>
                </ul>
            </div>
            <div className='half-W'>
                <ul className='flex ul-nav hide' id='menuList'>
                    <Link to="/items/:all-items" ><li className='li'>Shop</li></Link>
                    <Link to="/blogs" ><li className='li'>Newstand</li></Link>
                    <Link to="/about" ><li className='li'>Who We Are</li></Link>
                    <Link to="/user-profile" ><li className='li'>My Profile</li></Link>
                    <Link to="/cart" ><li className='li'>Basket</li></Link>
                    <Link to="/login"><li className='li'>Sign In</li></Link>

                </ul>
                <ul className='flex ul-nav cartIcon'>
                   <Link to="/cart" ><li className='li'><img src={cartLogo} alt="cart" /></li></Link>
                </ul>
                {width < 900 ? <Hamburger /> : <span></span>}

            </div>
        </div>
    )
}
import MenuIcon from "../assets/menu.png"
import MenuIcon2 from "../assets/add.svg"
import { Link } from 'react-router-dom';
import Login from './Auths/Login';

function Hamburger() {
    const [Menu, setMenu] = useState(true)
    const menu1 = useRef();
    useEffect(() => {
        // const menu2 = document.getElementsByClassName("menu")
        try {
            const mainEliment = document.getElementById("main");
            mainEliment.addEventListener("click", () => {
                setMenu(true);
                // menu2[0].classList.togle("open")

            })


        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <>
            <div className='menu-icon' onClick={() => setMenu(!Menu)}>
                {
                    Menu ?
                        <img src={MenuIcon} alt="icons" /> :
                        <>
                            <ul className='flex-c ul-nav-menu show menu' ref={menu1}>
                                <li className="li"><img src={MenuIcon2} alt="icons" /></li>
                                <li className='li'>Shop</li>
                                <li className='li'>Newsstand</li>
                                <li className='li'>Who We Are</li>
                                <li className='li'>My Profile</li>
                                <li className='li'>Basket</li>
                                <li className='li'>Sign In</li>
                            </ul>
                        </>
                }
            </div>
        </>
    )
}
export default Nav