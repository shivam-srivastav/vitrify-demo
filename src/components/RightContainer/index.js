'use client';
import styled from "styled-components";
import Navbar from "./NavBar";
import Section from "./Section";

const RightContainer = () => {
    return <StyledWrapperRight>
        <Navbar />
        <Section/>
    </StyledWrapperRight>
}

export default RightContainer;

const StyledWrapperRight= styled.div`
width:100%;
background:#fafafa;
`   