import React from 'react'
import styled from 'styled-components';
import { Button, TomatoButton } from '../components/shared/Button';

const Wrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    background: white;
`;

const MainContent = styled.div`
    background-color: ${props=> props.theme.blue};
    padding: 10px;
    color: white;
    flex: 1;
`;

const SideBar = styled.div`
    flex: 0 auto;
    background-color: ${props => props.theme.gray};
    padding: 10px;
    width: 200px;
    color: white;
`;

function Article() {
    return (
        <Wrapper>
            <MainContent>
               <p>Main Content</p> 
               <Button size="small">Click Me</Button>
               <Button>Click Me</Button>
               <Button size="large">Click Me</Button>
               <Button block>Click Me</Button>
               <Button block noBorder>Click Me</Button>
            </MainContent>
            <SideBar>
                SideBar
            </SideBar>
        </Wrapper>
    )
}

export default Article
