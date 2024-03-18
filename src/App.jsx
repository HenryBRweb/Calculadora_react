import { useState } from 'react'
import './App.css'

function App() {
  //armazena a minha digitação no texto e o resultado
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  //quando eu clicar vai chamar o número
  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  //calcula os números e operadores lógicos que eu coloquei na digitação
  const handleCalculate = () => {
    try {
      const calculatedResult = eval(expression);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  //especialmente feita para o butão AC, redefine para uma string vazia, aí limpa minha calculadora
  const handleClear = () => {
    setExpression('');
    setResult('');

  };

  return (
    <div className="calc">
      <h2>Calculadora-HG</h2>
      <div class="input">
        <input id="expressionInput" value={expression} placeholder="Seus números..."></input>
        <input value={result} readOnly placeholder="Calculo..." />
      </div>  
      <div className="lista1">
        <button id="b" onClick={handleClear}>AC</button>
        <button id="b" onClick={() => handleButtonClick('1')}>1</button>
        <button id="b" onClick={() => handleButtonClick('2')}>2</button>
        <button id="b" onClick={() => handleButtonClick('3')}>3</button>
      </div>
      <div className="lista2">
        <button id="b" onClick={() => handleButtonClick('4')}>4</button>
        <button id="b" onClick={() => handleButtonClick('5')}>5</button>
        <button id="b" onClick={() => handleButtonClick('6')}>6</button>
        <button id="b" onClick={() => handleButtonClick('7')}>7</button>
      </div>
      <div className="lista3">
        <button id="b" onClick={() => handleButtonClick('8')}>8</button>
        <button id="b" onClick={() => handleButtonClick('9')}>9</button>
        <button id="b" onClick={() => handleButtonClick('0')}>0</button>
        <button id="b" onClick={() => handleButtonClick('+')}>+</button>
      </div>
      <div className="lista4">
        <button id="b" onClick={() => handleButtonClick('-')}>-</button>
        <button id="b" onClick={() => handleButtonClick('*')}>*</button>
        <button id="b" onClick={() => handleButtonClick('/')}>/</button>
        <button id="b" onClick={handleCalculate}>=</button>
      </div>
    </div>

  )
}

export default App
