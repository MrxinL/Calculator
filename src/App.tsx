import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var content: string = '';
  const [num, setNum] = useState('');
  const [state, setState] = useState(0);
  const [conut, setCount] = useState('');
  const [symbol, setSymbol] = useState('+');

  // 获取数字
  const getNum = (e: any) => {
    console.log(e.target.innerText);
    if (state == 0) {
      content += conut + e.target.innerText;
      console.log(content)
    } else {
      content = e.target.innerText;
    }
    setState(0);
    setCount(content);
  }
  // 获取运算符
  const getOperator = (e: any) => {
    setState(1);
    setNum(conut);
    setSymbol(e.target.innerText)
    console.log(symbol)
  }
  // 删除1位
  const getDel = () => {
    var str = '';
    str = conut.slice(0, conut.length - 1);
    setCount(str)
  }
  // = 运算结果
  const opert = () => {
    var result = 0;
    switch (symbol) {
      case '+':
        result = parseFloat(num) + parseFloat(conut);
        break;
      case '-':
        result = parseFloat(num) - parseFloat(conut);
        break;
      case '*':
        result = parseFloat(num) * parseFloat(conut);
        break;
      case '/':
        result = parseFloat(num) / parseFloat(conut);
        break;
    }
    setCount(result.toFixed(10).toString());
  }

  // 清零
  const clear = () => {
    setNum('');
    setState(0);
    setCount('');
    setSymbol('+');

  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='put'>
          {conut}
        </div>
        <div className='number'>
          <div onClick={clear}>C</div>
          <div onClick={getDel}>DEL</div>
          <div onClick={getOperator}>/</div>
          <div onClick={getOperator}>*</div>
        </div>
        <div className='number'>
          <div onClick={getNum}>7</div>
          <div onClick={getNum}>8</div>
          <div onClick={getNum}>9</div>
          <div onClick={getOperator}>-</div>
        </div>
        <div className='number'>
          <div onClick={getNum}>4</div>
          <div onClick={getNum}>5</div>
          <div onClick={getNum}>6</div>
          <div onClick={getOperator}>+</div>
        </div>
        <div className='numberT'>
          <div>
            <div className='number1'>
              <div onClick={getNum}>1</div>
              <div onClick={getNum}>2</div>
              <div onClick={getNum}>3</div>
            </div>
            <div className='number0'>
              <div
                className='ling'
                onClick={getNum}
              >
                0
              </div>
              <div onClick={getNum}>.</div>
            </div>
          </div>

          <div
            className='de'
            onClick={opert}
          >
            =
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
