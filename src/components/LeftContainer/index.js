'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import SearchBar from '../SearchBar';
import SubMenu from '../SubMenu';
import { DoubleArrow } from '../SubMenu/Icons';
const LeftContainer = () => {
   return <StyledWrapperLeft>
       <LogoWrapper className='flex justify-center'>
        <Image src={'/icons/logo.PNG'} width={108} height={38} alt="logo"/>
       </LogoWrapper>
       <SearchBar $circle={true} />
       <SubMenu />
       <CollapseButton className='flex justify-between items-center'>
           <span>Collapse</span> <DoubleArrow/>
       </CollapseButton>
    </StyledWrapperLeft>
}
export default LeftContainer;


const StyledWrapperLeft= styled.div`
width:300px;
background:#fafafa;

`   

const LogoWrapper = styled.div`
width:261px;
height:49px;
box-shadow: 0px 2px 4px 0px rgba(208, 208, 208, 0.25);
border: 0.5px solid rgba(209, 204, 204, 1);
background: rgba(255, 255, 255, 1);
margin:1rem;
`
const CollapseButton = styled.div`
box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
background: rgba(153, 146, 189, 1);
color: rgba(255, 255, 255, 1);
margin: 1rem;
width: 261px;
padding:0.5rem 1.5rem;
border-radius:2rem;
font-size:16px;
font-weight:400;
box-sizing:border-box;
cursor:pointer;
`