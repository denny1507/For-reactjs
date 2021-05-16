import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {useState} from 'react';

function Calculator() {
  const [content, setContent] = useState('');
  const [temp, setTemp] = useState('');
  const [pt, setPt] = useState('');
  const [countDot, setCountDot] = useState(0);

  let handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  let addOne = () => {
    setContent(content + "1");
  };

  let addTwo = () => {setContent(content + "2")};

  let addThree = () => {setContent(content + "3")}

  let addFour = () => {setContent(content + "4")}

  let addFive = () => {setContent(content + "5")}

  let addSix = () => {setContent(content + "6")}

  let addSeven = () => {setContent(content + "7")}

  let addEight = () => {setContent(content + "8")}

  let addNine = () => {setContent(content + "9")}

  let addZero = () => {setContent(content + "0")}

  let addDot = () => {
    if (countDot === 0) {
      setContent(content + ".");
      setCountDot(1);
    } else {
      alert("You cannot use 2 '.' in a number!")
    }
  }

  let sum = () => {
    if (temp === ""){
      setTemp((content*1));
    } else {
      setTemp((temp*1) + (content*1));
    }
    setContent("");
    setPt("+");
    setCountDot(0);
  }

  let diff = () => {
    if (temp === ""){
      setTemp((content*1));
    } else {
      setTemp((temp*1) - (content*1));
    }
    setContent("");
    setPt("-");
    setCountDot(0);
  }

  let multi = () => {
    if (temp === ""){
      setTemp(content);
    }else {
      setTemp((temp*1) * (content*1));
    }
    setContent("");
    setPt("*");
    setCountDot(0);
  }

  let divi = () => {
    if (temp === ""){
      setTemp(content);
    }else {
      setTemp((temp*1) / (content*1));
    }
    setContent("");
    setPt("/");
    setCountDot(0);
  }

  let result = () => {
    if (pt === "+") {
      setContent((temp*1) + (content*1));
    }

    if (pt === "-") {
      setContent((temp*1) - (content*1));
    }

    if (pt === "*") {
      setContent((temp*1) * (content*1));
    }

    if (pt === "/") {
      if (content === "0"){
        alert("Cannot divide for zero!")
      } else {
        setContent((temp*1) / (content*1));
      }
    }
  }

  let clear = () => {
    setContent("");
    setTemp("");
    setPt("");
    setCountDot(0);
  }

  let del = () => {
    if (content.length > 0) {
      setContent(content.substring(0, content.length-1))
    }
  }

  // render 
  return <div className="calculator__form">
    <div>
      <input className="Display" type="text" value={content} onChange={handleChangeContent} />
    </div>
    <div>
      <button className="Button GrayButton LargeButton" onClick={clear}>AC</button>
      <button className="Button GrayButton" onClick={del}>Del</button>
      <button className="Button OrangeButton" onClick={divi}>/</button>
    </div>
    <div>
      <button className="Button BlackButton" onClick={addOne}>1</button>
      <button className="Button BlackButton" onClick={addTwo}>2</button>
      <button className="Button BlackButton" onClick={addThree}>3</button>
      <button className="Button OrangeButton" onClick={sum}>+</button>
    </div>
    <div>
      <button className="Button BlackButton" onClick={addFour}>4</button>
      <button className="Button BlackButton" onClick={addFive}>5</button>
      <button className="Button BlackButton" onClick={addSix}>6</button>
      <button className="Button OrangeButton" onClick={diff}>-</button>
    </div>
    <div>
      <button className="Button BlackButton" onClick={addSeven}>7</button>
      <button className="Button BlackButton" onClick={addEight}>8</button>
      <button className="Button BlackButton" onClick={addNine}>9</button>
      <button className="Button OrangeButton" onClick={multi}>*</button>
    </div>
    <div>
      <button className="Button GrayButton LargeButton" onClick={addZero}>0</button>
      <button className="Button GrayButton" onClick={addDot}>.</button>
      <button className="Button OrangeButton" onClick={result}>=</button>
      
    </div>
  </div>
}

const cal = <Calculator />;
ReactDOM.render(
  cal,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
