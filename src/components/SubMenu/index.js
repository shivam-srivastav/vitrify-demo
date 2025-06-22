import Image from "next/image";
import styled from "styled-components";
import MenuIcon from '../../icons/menu.svg';
import { AccountIcons, ArrowDownTurn, Dashborad, MenuIcons, Reports } from "./Icons";

import { useState } from"react"

const SubMenu = () => {
    const [toggleMenu, setToggleMenu] = useState('menu');
    const [select,setSelect] = useState('')
    const handleToggle = (data) => {
        setToggleMenu(data)
    }
    return <StyledSubMenu >
        <MenuToggle className="flex justify-center" >
            <div onClick={() => { handleToggle('menu')}} className={`${toggleMenu==="menu"?'active':'inactive'} flex items-center justify-center`}>
                {/* <Image src="/icons/menu.svg" alt="menu" width="14" height={14}/> */}
                <MenuIcons status={toggleMenu==="menu"}/>
                <span>MENU</span>
            </div>
            <VerticleLine/>
            <div onClick={() => { handleToggle('account')}} className={`${toggleMenu==="account"?'active':'inactive'} flex justify-center items-center`}>
            <AccountIcons status={toggleMenu==="account"}/>
            <span>ACCOUNT</span>
            </div>

        </MenuToggle>
        <MenuList>
            <StyledList className="flex items-center">
                <Dashborad/> <span>Dashborad</span>
            </StyledList>
            <StyledList className="flex items-center">
                <Dashborad/> <span>Billing Master</span>
            </StyledList>
            <StyledList className="flex items-center">
                <Dashborad/> <span>Inventory Master</span>
            </StyledList>
            <StyledList className="flex items-center">
                <Dashborad/> <span>Inventory</span>
            </StyledList>
            <StyledList className="flex items-center">
                <Dashborad/> <span>Find Patient</span>
            </StyledList>
            <StyledList className="flex items-center">
                <Dashborad/> <span>BilStyledListngs</span>
            </StyledList>
            <StyledList className="flex items-center">
                <Dashborad/> <span>Embryology</span>
            </StyledList>
            <StyledList className="flex items-center">
                <Dashborad/> <span>Clinical Master</span>
            </StyledList>
            <>
                <StyledList className="flex items-center selected ">
                    <Reports/> <span>Reports</span>
                </StyledList>
                <ul>
                    <StyledSubList>
                        <ArrowDownTurn/>
                        <span>Pkg. Payment Details</span>
                    </StyledSubList>
                    <StyledSubList>
                        <ArrowDownTurn/>
                        <span>PPharmacy Bills</span>
                    </StyledSubList>
                    <StyledSubList>
                        <ArrowDownTurn/>
                        <span>Service Bills</span>
                    </StyledSubList>
                    <StyledSubList>
                        <ArrowDownTurn/>
                        <span>Patients</span>
                    </StyledSubList>
                    <StyledSubList>
                        <ArrowDownTurn/>
                        <span>Leads</span>
                    </StyledSubList>
                    <StyledSubList>
                        <ArrowDownTurn/>
                        <span>Item Stock</span>
                    </StyledSubList>
                    <StyledSubList>
                        <ArrowDownTurn/>
                        <span>GRN</span>
                    </StyledSubList>
                    <StyledSubList>
                        <ArrowDownTurn/>
                        <span>Purchase Order</span>
                    </StyledSubList>
                </ul>
            </>

        </MenuList>

    </StyledSubMenu>
}
const MenuToggle = styled.div`
margin:1rem;
font-size:14px;
border-bottom: 1px solid rgba(206, 170, 199, 1);
.active{
    color:rgba(43, 32, 100, 1);
    font-weight:500;
    border-bottom: 2px solid rgba(43, 32, 100, 1);
    padding-bottom:1rem;

}
.inactive{
    color:rgba(133, 34, 98, 1);
    font-weight:400;
    padding-bottom:1rem;
}
div{
width:100%;
    span{
    padding:0 4px;
    cursor:pointer;
    }
}

`
const VerticleLine = styled.span` 
    height: 20px;
    border: 1px solid rgba(133, 34, 98, 1);
    margin: 0 1rem;
`
const StyledSubMenu = styled.div`
margin:1rem;
border: 1px solid rgba(206, 170, 199, 1);
border-radius:1rem;
`
const MenuList = styled.div`
font-size:19px;
margin:1rem;
ul{
    padding-inline-start:20px;}
 .selected{
  background: rgba(238, 237, 246, 1);
  font-weight:500;
  border: 1px solid rgba(238, 237, 246, 1);
  box-shadow: 0px 1px 2px 0px rgba(43, 32, 100, 1);
  padding:0.5rem 1rem;
  border-radius:2rem;
  margin:1.5rem 0rem;


}   
`
const StyledList = styled.li`
    list-style:none;
    margin:1.5rem 1rem;
    cursor:pointer;
    font-weight:400;
    color: rgba(43, 32, 100, 1);
    span{
    margin-left:4px;}
`
const StyledSubList = styled.li`

list-style:none;
margin:1.3rem 0;
cursor:pointer;
font-weight:400;
font-size:17px;
color: rgba(43, 32, 100, 1);
span{
margin-left:4px;}
`
export default SubMenu;