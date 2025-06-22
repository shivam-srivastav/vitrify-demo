'use client'; // 👈 very important

import LeftContainer from "@/components/LeftContainer";
import RightContainer from "@/components/RightContainer";
import Image from "next/image";
import styled from "styled-components";

export default function Home() {
  return (
    <StyledWrapper className="flex">
      <LeftContainer />
      <RightContainer/>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
width:100%;`