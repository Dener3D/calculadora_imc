import React from 'react';
import { useState } from 'react';
import GlobalStyle from './global';
import { Container, Content, EntradaContainer, Entrada, Button, Mensagem } from './styles';
import logo from './assets/logo.png';

function App() {

 const [total, setTotal] = useState("");
 const [mensagem, setMensagem] = useState("");
 const [mainColor, setColor] = useState("red");
 const [borderColor, setBorderColor] = useState("red");
 var y = 0.0;
 var z = 0.0;


  function limpar () {
    setTotal("");
    setMensagem("");
    document.querySelectorAll('.altura')[0].value = "";
    document.querySelectorAll('.peso')[0].value = "";
  }

  function calcular(resultado){
    y = parseFloat(document.querySelectorAll('.altura')[0].value);
    z = parseFloat(document.querySelectorAll('.peso')[0].value);
    resultado = z / (y * y);
    setTotal("Seu IMC é de: " + resultado.toFixed(2));

    console.log(y);

    if (document.querySelectorAll('.altura')[0].value === "" || document.querySelectorAll('.peso')[0].value === ""){
      setTotal("Preencha todos os campos!");
      setBorderColor("red");
    }
    
    else{

    if (resultado.toFixed(2) <= 18.5){
      setMensagem("Você está com o peso abaixo do normal!");
      setColor("red");
    }

    else if (resultado.toFixed(2) >= 18.5 && resultado.toFixed(2) <= 24.9){
      setMensagem("Você está com o peso normal");
      setColor("green");
    }
    

    else {
      setMensagem("Você está com o peso acima do normal!");
      setColor("red");
    }
  }
  }

  return <Container>

    
    <Content>

  <img src={logo} alt="logo"></img>

  <EntradaContainer>
    <label>Altura:</label>
    <Entrada type="number" className="altura" step={0.01}/>
  </EntradaContainer> 

  <EntradaContainer>
    <label>Peso:</label>
    <Entrada type="number" className="peso"/>
  </EntradaContainer> 

  <EntradaContainer>
    <Button mainColor={"#40b884"} type="button" onClick={calcular}>CALCULAR</Button>
    <Button mainColor={"#259fcc"} type="button" onClick={limpar}>LIMPAR</Button>
  </EntradaContainer> 

    <h2>{total}</h2>
    <Mensagem mainColor={mainColor} > {mensagem}</Mensagem>

    
      <h3 borderColor={borderColor}>MENOR QUE 18,5        -     MAGREZA</h3>
      <h3>ENTRE 18,5 E 24,9     -     NORMAL</h3>
      <h3>ENTRE 25,0 E 29,9     -     SOBREPESO</h3>
      <h3>ENTRE 30,0 E 39,9     -     OBESIDADE</h3>
      <h3>MAIOR QUE 40,0        -     OBESIDADE GRAVE</h3>
    </Content>
 
    <GlobalStyle />
  </Container>
}

export default App;
