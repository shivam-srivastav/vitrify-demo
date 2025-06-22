
import styled from "styled-components";


const Dialog = ({ content, open={true}, headerText }) => {
    const contentDialoge = content();
    return <StyledDialog>
        <Header className="flex items-center justify-between ">
            <span>
            {headerText}
            </span>
            <span>
                <Arrow/>
            </span>
        </Header>
        {open && <Content>
            {contentDialoge}
        </Content>
        }
    </StyledDialog>
}

const StyledDialog = styled.div`
`
const Header = styled.div`
    padding:1rem;


`
const Content = styled.div`
`

const Arrow = () => {
    return <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 10.4062L7.5 17.9062L9.09375 19.5L15 13.5938L20.9062 19.5L22.5 17.9062L15 10.4062Z" fill="#B079A6"/>
    </svg> 
}
export default Dialog;