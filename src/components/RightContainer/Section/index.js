'use client';
import styled from "styled-components";

const Section = () => {
    return <StyledSection className=" flex">
        <LeftSide>
        <H1>
        HEADING OF THE PAGE
            </H1>
            <Dialog>
                <Header className="flex items-center justify-between ">
                <span>
                PRE EXISTING CONDITIONS
                </span>
                <span>
                    <Arrow/>
                </span>
                </Header>
                <Body>
                    <div className="flex items-center">
                    <Input>
                        <label htmlFor="condition" >Condition</label>
                       <input type="text" id="condition" placeholder="" name="condition"></input> 
                    </Input>
                    <Input>
                        <label htmlFor="since" >Since</label>
                       <input type="text" id="since" placeholder="Enter Details" name="since"></input> 
                        </Input>
                        <RedButton>
                            Delete
                        </RedButton>
                        
                    </div>
                    <div className="flex items-center justify-end" > 
                    <BlueButton>
                            Add 
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.25 9.75H3.75V8.25H8.25V3.75H9.75V8.25H14.25V9.75H9.75V14.25H8.25V9.75Z" fill="white" stroke="white"/>
                        </svg>
                        </BlueButton>
                        </div>

                </Body>
            </Dialog>

            <Dialog>
                <Header className="flex items-center justify-between ">
                <span>
                SELECT COMPLAINT
                </span>
                <span>
                    <Arrow/>
                </span>
                </Header>
                <Body>
                    <div className="flex items-center">
                    <Input>
                        <label htmlFor="condition" >Condition</label>
                       <input type="text" id="condition" placeholder="" name="condition"></input> 
                    </Input>
                    <Input>
                        <label htmlFor="since" >Since</label>
                       <input type="text" id="since" placeholder="Enter Details" name="since"></input> 
                        </Input>
                        <RedButton>
                            Delete
                        </RedButton>
                        
                    </div>
                    <div className="flex items-center justify-end" > 
                    <BlueButton>
                            Add 
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.25 9.75H3.75V8.25H8.25V3.75H9.75V8.25H14.25V9.75H9.75V14.25H8.25V9.75Z" fill="white" stroke="white"/>
                        </svg>
                        </BlueButton>
                        </div>

                </Body>
            </Dialog>

        </LeftSide>
        <RightSide>
            <History>
                <H2>PREVIOUS HISTORY</H2>
                <HistoryDropdown className="flex justify-between items-center">
                    <span>06-06-2025 </span>
                    <span>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 19.5938L7.5 12.0938L9.09375 10.5L15 16.4062L20.9062 10.5L22.5 12.0938L15 19.5938Z" fill="#2B2064"/>
                      </svg>
                    </span>
                </HistoryDropdown>
            </History>
        </RightSide>
    </StyledSection>
};

export default Section;

const StyledSection = styled.section`
width: calc(100% - 350px);
margin:0 1rem;
padding:1rem;
border:1px solid rgba(209, 204, 204, 1);
border-top:none;
`
const RightSide = styled.div`
width:100%;
`
const LeftSide = styled.div`
width:100%;
`
const H1 = styled.h1`
font-size:24px;
font-weight:800;
color:rgba(32, 56, 78, 1);
margin:0 1rem;
`
const Dialog = styled.div`
width:708px;
background: rgba(255, 255, 255, 1);
box-shadow: 0px 1px 4px 0px rgba(161, 143, 154, 1);  
border-radius:10px;
margin:1rem;
`

const Header = styled.div`
    padding:0.5rem 1rem;
    background:rgba(255, 244, 244, 1);
    box-shadow: 0px 1px 4px 0px rgba(161, 143, 154, 1);
    border: 0.5px solid rgba(209, 204, 204, 1);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    span{
        font-size: 20px;
        color: rgba(43, 32, 100, 1);
        font-weight:600;
    }

`
const Body = styled.div`
    width:100%;
    padding:1rem;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`
const Input = styled.div`
display:flex;
margin:1rem;
flex-direction:column;
width:270px;
input{
padding:0.5rem 1rem;
box-shadow: 0px 1px 10px 0px rgba(241, 239, 239, 1);
border: 0.5px solid rgba(140, 132, 182, 1)
}
label{
font-weight:400;
font-size:15px;
margin-bottom:4px;
}`
const RedButton = styled.button`
background:rgba(229, 80, 46, 1);
color:#fff;
font-size:16px;
font-weight:700;
padding:0.5rem 1rem;
border-radius:5px;
border:none;
margin-top:1rem; 
`;
const BlueButton = styled.button`
background:rgba(43, 32, 100, 1);
color:#fff;
font-size:16px;
font-weight:700;
padding:0.5rem 1rem;
border-radius:5px;
border:none;
`
const H2 = styled.h2`
    color:rgba(43, 32, 100, 1);
    font-size:20px;
    font-weight:600;
`
const History = styled.div`
box-shadow: 0px 1px 2px 0px rgba(43, 32, 100, 1);
margin:2.3rem 1rem;
padding:1rem;
border-radius:10px;
width:380px;
`
const HistoryDropdown = styled.div`
margin:1rem;
padding:1rem;
background: rgba(238, 237, 246, 1);
border-radius:30px;
box-shadow: 0px 1px 2px 0px rgba(43, 32, 100, 1);
span{
    font-family: Inter;
    font-weight: 600;
    font-size: 20px;
    color: rgba(43, 32, 100, 1);
    text-align: center;
    vertical-align: middle;
    text-transform: uppercase;

}
`
const Arrow = () => {
    return <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 10.4062L7.5 17.9062L9.09375 19.5L15 13.5938L20.9062 19.5L22.5 17.9062L15 10.4062Z" fill="#B079A6"/>
    </svg> 
}