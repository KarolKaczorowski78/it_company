import styled, { keyframes } from 'styled-components';

const Form = styled.form`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: flex-start;
    flex-wrap: wrap;
    min-height: 400px;
    flex-direction: column;
    input, label, textarea, span {
        color: white;
    }
    label, span {
        font-size: 20px;
    }
    input, textarea {
        font-size: 17px;
    }
`;

export const Input = styled.input`
    width: 300px;
    box-sizing: border-box;
    background: none;
    margin-bottom: 15px;
    padding: 3px 6px;
    border: none;
    border-bottom: 1px solid #00db53;
`;

export const Label = styled.label`
    margin-bottom: 7px;
`;

export const Textarea = styled.textarea`
    background: #212121;
    padding: 6px 12px;
    border: none;
    box-shadow: 0 0 10px #212121;
`;

export const SpaceContainer = styled.div`
    width: 300px;
    height: 100%;
    min-height: 100%;
    box-sizing: border-box;
    display: inline-block;
    display: inline-flex;
    flex-direction: column;
    margin: 20px;
`;

const submitAnim = keyframes`
    0% {
        transform: none;
    }
    33% {
        transform: translateX(-10px);
    }
    66% {
        transform: translateX(10px);
    }
    100% {
        transform: none;
    }
`

export const Submit = styled.button`
    padding: 15px 40px;
    background: #212121;
    box-shadow: 0 0 5px #00db53;
    color: #00db53;
    border: none;
    margin-top: 20px;
    font-size: 28px;
    border-radius: 15%;
    font-family: 'Averta', cursive;
    &:hover {
        animation ${submitAnim} .4s ease-in forwards;
    }
`;

export default Form;