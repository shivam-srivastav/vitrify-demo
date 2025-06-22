import Button from "@/components/Button";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import styled from "styled-components";

import { ArrowLeft, Notification, User, FindPatient } from "@/components/SubMenu/Icons";

const Navbar = () => {
    return <navbar>
            <Row1>

            <div className="flex">
                <Image src="/images/wife.png" alt="wife" width={45} height={45}/>
                <OuterWrapper className="flex items-center">
                    <InnerWrapper $inverted={false} className="flex flex-col justify-center">
                        <Name>Alisha Kher</Name>
                        <SubName>WIFE</SubName>
                    </InnerWrapper>
                        <ArrowLeft/>
                </OuterWrapper>
                </div>
                <VerticleLine/>
            <div className="flex">
                <Image src="/images/husband.png" alt="wife" width={45} height={45} />
                <OuterWrapper $inverted={true} className="flex items-center">
                    <InnerWrapper className="flex flex-col justify-center">
                        <Name>Siddhart Kher</Name>
                        <SubName>HUSBAND</SubName>
                    </InnerWrapper>
                        <ArrowLeft inverted={true}/>
                    
                </OuterWrapper>
                </div>
                <SearchBar />
                <div className="flex justify-end" style={{width: '30%'}}>
                    <NotificationWrapper className="flex justify-center items-center">
                    <Notification/>
                    </NotificationWrapper>
                    <VerticleLine/>
                    <NotificationWrapper className="flex justify-center items-center">

                        <User />
                        <span style={{fontSize:'22px', color:'rgba(43, 32, 100, 1)',marginLeft:'1rem'}}> Natura IVF</span>
                    </NotificationWrapper>
                </div>
            </Row1>
            <Row2>
                <Button name="Find Patient" icon={()=>FindPatient}/>
                <Button name="Configuration" variant={'selected'} icon={()=>FindPatient}/>
                <Button name="Revenue" icon={()=>FindPatient}/>
                <Button name="Patient Hub" icon={()=>FindPatient}/>
                <Button name="Pharmacy" icon={()=>FindPatient}/>
                <Button name="Accounts" icon={()=>FindPatient}/>
                <Button name="Embryology" icon={()=>FindPatient}/>
                <Button name="CRM" icon={()=>FindPatient}/>
                <Button name="Reports" icon={()=>FindPatient}/>
                <Button name="LAB" icon={()=>FindPatient}/>
                <Button name="IPD" icon={()=>FindPatient}/>
                <Button name="OPD" icon={()=>FindPatient}/>
            </Row2>
    </navbar>
}

const Row1 = styled.div`
    width: calc(100% - 350px);
    display:flex;
    margin:1rem 1rem 0 1rem;
    padding:1rem;
    border:1px solid rgba(209, 204, 204, 1);
    border-top-left-radius:4px;
    border-top-right-radius:4px;
    overflow:auto;
`
const Name = styled.span`
font-size:14px;
font-weight:500;
margin-bottom:3px;
`
const SubName = styled.span`
font-weight:400;
font-size:9px`
const OuterWrapper = styled.div`
border: ${props=>props.$inverted?'1px solid rgba(43, 32, 100, 1) ':'1px solid rgba(206, 170, 199, 1)'};
border-radius:1rem;
margin: 0 1rem;
background:${props=>props.$inverted?'rgba(43, 32, 100, 1)':'rgba(206, 170, 199, 1)'};
`
const InnerWrapper = styled.div`
width: 137px;
height:100%;
background:rgba(255, 255, 255, 1);
border-radius:1rem;
padding-left:1rem;`
const VerticleLine = styled.span` 
    height: 31px;
    width:1px;
    background: rgba(209, 204, 204, 1);
    margin: 0 1rem;
    align-self:center;
`
const NotificationWrapper = styled.div`
padding:0 1rem;
font-size:22px;
font-weight:400;
border-radius:4px;
border:1px solid rgba(209, 204, 204, 1);
box-shadow: 0px 1px 4px 0px rgba(91, 100, 108, 0.25);


`

const Row2 = styled.div`
width: calc(100% - 350px);
overflow:auto;
display:flex;
margin:0 1rem;
padding:1rem;
border:1px solid rgba(209, 204, 204, 1);
border-top:none;
width:100
button{
marign:0 1rem}
`
export default Navbar;