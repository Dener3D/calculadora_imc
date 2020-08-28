import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
`;



export const Content = styled.div`
    width: 100%;
    max-width: 400px;
    position: absolute;

    background: #FFF;
    border-radius: 4px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        height: 70px;
        margin-bottom: 23px;
    }

    h4 {
        margin-top: 10px;
        
    }

    
`;

export const Info = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 400px;
    
    
    h3 {
        padding: 10px;
        text-align: center;
        margin: 10px;
        border-radius: 5px;
        font-size: 11px;
        background-color: #338763;
        color: #FFF;
    }
`;

export const EntradaContainer = styled.form`
    height: 30px;
    width: 100%;
    font-size: 14px;
    margin-bottom: 30px;
    text-align: center;
`;

export const Entrada = styled.input`
    background-color: #d1f8ff;
    height: 30px;
    width: 70%;
    font-size: 20px;
    margin-bottom: 10px;
    margin-left: 8px;
    font-size: 20px;
    text-align: center;
    border: none;
    &:hover{
        border: solid 2px #adffee;
    }

    &:focus{
        border: solid 2px #ffc773;
    }
    
`;

export const Button = styled.button`
    color: #FFF;
    height: 40px;
    width: 40%;
    border: none;
    border-radius: 2px;
    padding: 10px;
    font-weight: bold;
    margin-left: 10px;
    &:hover{
        border: solid 2px #adffee;
    }

    background: ${props => `${props.mainColor}`} 

    
    
`;

export const Mensagem = styled.h4`
    margin-top: 10px;
    color: ${props => `${props.mainColor}`}
    
    
`;


