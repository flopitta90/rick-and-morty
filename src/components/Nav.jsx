import styled from "styled-components";
import SearchBar from "./SearchBar.jsx";
import React from "react";
import { useNavigate } from "react-router-dom";


const NavSearch= styled.nav`
    display: flex;
    height: 100px;
    background-color: #131318;
    justify-content: space-between;
    align-items: center;
`
export const NavButtons =styled.button`
 background-color: #19c1a8;
 border-radius: 5px;
 margin-left: 5px;
 color:black;
 border: none;
 font-size: 16px;
 padding:7px 9px;
 margin-right: 10px;
 &:hover{
    background-color: black;
    color: white;  
    cursor: pointer;
    box-shadow: 0 0 10px #19c1a8;
 }
`

export default function Nav (props) {

    const navigate = useNavigate()

    const handleClick = () => 
        {let id = Math.floor(Math.random() * 826) + 1;
            props.onSearch(id)
        }
    function handleNavButton (event){
        navigate(event.target.id)
    }    
    
    return (
        <NavSearch>
            <img height='100px'src="https://w0.peakpx.com/wallpaper/940/144/HD-wallpaper-rick-and-morty-logo-ultra-cartoons-others-logo-rickandmorty.jpg"/>
            <NavButtons onClick={handleNavButton} id='/home'>Home</NavButtons>
            <NavButtons onClick={handleNavButton} id='/About'>About</NavButtons>
            <NavButtons onClick={handleNavButton} id='/favorites'>❤</NavButtons>
            <NavButtons onClick={handleClick}>Random</NavButtons>
            <SearchBar onSearch={props.onSearch}/>
        </NavSearch>
    )
}



