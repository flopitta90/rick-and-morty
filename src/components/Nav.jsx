import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";
import menu from "../img/menu.png"
import { useState } from "react";
import rickLogo from "../img/rick-logo.png"

const NavDiv= styled.nav`
    display: flex;
    height: 100px;
    background-color:black;
    align-items: center;
    justify-content: space-between;

`
const Menu= styled.div`
    display: flex;
    height: 100px;
    width: 500px;
    background-color: black;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 960px) {
        display: flex;
        position: absolute;
        top:100px;
        left:${({open}) => open ? '0' : '-100%'};
        width:100%;
        height: 90vh;
        flex-direction: column;
        transition: 0.5s all ease;
        z-index: 999;
        }
`

export const NavButtons = styled(NavLink)`
 text-decoration: none;
 color:#19c1a8;
 border: none;
 font-size: 18px;
 padding:35px 0px;
 width: 120px;
 text-align: center;
 justify-content: center;
 align-items: center;
 &:hover{
    background-color: #19c1a8;  
    color:black;
    cursor: pointer;
    @media screen and (max-width: 960px){
        width: 100%;
        display: flex;
        justify-content: center;
    }
 }
`
const Menudiv= styled.div`
    display: none;
    @media screen and (max-width: 960px){
        display: flex;
        margin-right: 20px;
    }
`
const Logo = styled.img`
    width: 200px;
    margin: 10px;
`


export default function Nav (props) {

const [menuMobile, setMenuMobile] = useState(false)
      
    
    return (
        <NavDiv>
            <NavLink to='/home'><Logo src={rickLogo}/></NavLink>
            <Menudiv onClick={()=> setMenuMobile(!menuMobile)}><img alt='menu' src={menu}/></Menudiv>
            <Menu open= {menuMobile}>
            <NavButtons onClick={()=> setMenuMobile(!menuMobile)} to='/home'>Home</NavButtons>
            <NavButtons onClick={()=> setMenuMobile(!menuMobile)} to='/About'>About</NavButtons>
            <NavButtons onClick={()=> setMenuMobile(!menuMobile)} to='/favorites'>???</NavButtons>
            <NavButtons onClick={()=> props.logout()}>Log out</NavButtons>
            </Menu>
        </NavDiv>
    )
}



