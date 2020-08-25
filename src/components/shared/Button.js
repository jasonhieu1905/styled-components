import styled from 'styled-components';

const Button = styled.button`
    background-color: ${props => props.theme.blue};
    appearance: none;
    color: white;
    border: ${props => props.noBorder ? 'none' : '2px solid white'};
    padding: 0.25em 0.5em;
    transition: background-color 0.25s, color 0.25;

    ${props => {
        switch(props.size) {
            case 'large': 
                return 'font-size: 20px;';
            case 'small':
                return 'font-size: 12px;';
            default: 
                return 'font-size: 16px;';
        }
    }}

    ${props => {
        if (props.block) {
            return `
                display: block;
                width: 100%;
            `;
        }
    }}

    &:hover {
        background-color: white;
        color: ${props => props.theme.blue};
        cursor: pointer;
    }
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

export { Button, TomatoButton};