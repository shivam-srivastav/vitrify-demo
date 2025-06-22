'use client';
import Image from "next/image";
import styled from "styled-components";

const SearchBar = ({$circle}) => {
    return <SearchBarWrapper $circle={$circle} style={{width:$circle?"auto":'340px'}} className="flex justify-start items-center">
        <span><Image src={ "/icons/search.svg"} alt="Search-icon" width="16" height="16"/> </span>
        <input type="text" placeholder="Search bar" name="search-bar" />
    </SearchBarWrapper>
}

const SearchBarWrapper = styled.div`
    height:36px;
    max-width:340px;
    background: rgba(235, 226, 233, 1);
    color: rgba(176, 121, 166, 1);
    margin:0 1rem;
    padding:${props=>props.$circle?'0 16px;':'4px 16px;'}; 
    border-radius:${props=>props.$circle?'2rem':'4px'};
    input{
        background:  rgba(235, 226, 233, 1);
        border:none;
        color: rgba(176, 121, 166, 1);
        outline:none;
        font-size:16px;
        font-weight:400;
        padding-left:.5rem;
        
    }
    input::placeholder {
        color: rgba(176, 121, 166, 1);
    }
`

export default SearchBar;