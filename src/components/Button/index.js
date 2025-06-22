const { default: styled } = require("styled-components");

const Button = ({ variant="default", name, icon }) => {
    const Icon = icon();
    return <StyledButton $varient={variant}>
        <div className={`${variant==="selected"?"selected":variant} flex items-center justify-around`}>
            <Icon />
            <span>
            {name}
            </span>
    </div>
    </StyledButton>
}

const StyledButton = styled.button`

    background: rgba(255, 255, 255, 1);
    border:none;
    cursor: pointer;
    svg {
        path{
        fill:${props=>props?.$varient==='selected'?'#fff':'#2B2064'};
    }
    }
.default{
    min-width:163px;
    padding:0.5rem 1rem;
    border: 1px solid rgba(252, 252, 252, 1) ;
    box-shadow: 0px 1px 2px 0px rgba(43, 32, 100, 1);
    color: rgba(43, 32, 100, 1);
    background: rgba(255, 255, 255, 1);
    border-radius:2rem;
    span{
        font-size:15px;
        font-weight:500;
    }
}
.selected{
    min-width:163px;
    padding:0.5rem 1rem;
    border: 1px solid rgba(169, 86, 140, 1);
    box-shadow: 0px 1px 2px 0px rgba(43, 32, 100, 1);
    color:rgba(255, 255, 255, 1);
    background: rgba(169, 86, 140, 1);
    border-radius:2rem;
    span{
        font-size:15px;
        font-weight:500;
    }
}
`
export default Button;