import styled from "styled-components";
import SearchBar from "./SearchBar.jsx";
import React from "react";
import { NavLink } from "react-router-dom";
import menu from "../img/menu.png"
import { useState } from "react";

const NavSearch= styled.nav`
    display: flex;
    height: 100px;
    background-color: #131318;
    justify-content: space-between;
    align-items: center;
`
const Menu= styled.div`
    display: flex;
    height: 100px;
    background-color: #131318;
    justify-content: space-between;
    align-items: center;        

    @media screen and (max-width: 960px) {
        display: flex;
        position: absolute;
        top:100px;
        left:${({open}) => open ? '0' : '-100%'};
        width:100%;
        height: 90vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;}
        transition: 0.5s all ease;
        z-index: 999;
`

export const NavButtons = styled(NavLink)`
 text-decoration: none;
 margin-left: 5px;
 color: #19c1a8;
 border: none;
 font-size: 18px;
 padding:35px 40px;
 margin-right: 10px;
 &:hover{
    background-color: #19c1a8;  
    color:black;
    cursor: pointer;
    /* box-shadow: 0 0 10px #19c1a8; */
    @media screen and (max-width: 960px){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
 }
`
const Imagediv= styled.div`
    display: none;
    @media screen and (max-width: 960px){
        display: flex;
        margin-right: 20px;
    }
`


export default function Nav (props) {

const [menuMobile, setMenuMobile] = useState(false)

    const handleClick = () => 
        {let id = Math.floor(Math.random() * 826) + 1;
            props.onSearch(id)
            setMenuMobile(!menuMobile)
        }
      
    
    return (
        <NavSearch>
            <NavLink to='/home'><img height='100px'src="https://w0.peakpx.com/wallpaper/940/144/HD-wallpaper-rick-and-morty-logo-ultra-cartoons-others-logo-rickandmorty.jpg"/></NavLink>
            <Imagediv onClick={()=> setMenuMobile(!menuMobile)}><img alt='menu' src={menu}/></Imagediv>
            <Menu open= {menuMobile}>
            <NavButtons onClick={()=> setMenuMobile(!menuMobile)} to='/home'>Home</NavButtons>
            <NavButtons onClick={()=> setMenuMobile(!menuMobile)} to='/About'>About</NavButtons>
            <NavButtons  onClick={()=> setMenuMobile(!menuMobile)} to='/favorites'>❤</NavButtons>
            <NavButtons onClick={handleClick} >Random</NavButtons>
            <SearchBar onSearch={props.onSearch}/>
            </Menu>
        </NavSearch>
    )
}



