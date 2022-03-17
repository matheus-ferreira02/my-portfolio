import './style.css';
import { useState, useRef } from 'react';

function App() {
  const rootArray = ['element1', 'element2', 'element3', 'element4', 'element5', 'element1'];
  const [currentArray, setCurrentArray] = useState(['element5', 'element1', 'element2', 'element3']);
  const teste = useRef();
  const [currentAction, setCurrentAction] = useState('');

  const prevState = () => {
    teste.current.classList.remove('teste');
    const index = rootArray.indexOf(currentArray[1]);
    console.log(index);
    if (rootArray[0] === currentArray[1]) {
      setCurrentArray([currentArray[1], rootArray[rootArray.length - 2], rootArray[1], rootArray[2]]);
    } else {
      setCurrentArray([rootArray[index - 3], rootArray[index - 2], rootArray[index - 1], rootArray[index], rootArray[index + 1]]);
    }    
  }

  const nextState = () => {
    teste.current.classList.remove('teste');
    const index = rootArray.indexOf(currentArray[1]);
    if (rootArray[rootArray.length - 2] === currentArray[1]) {
      setCurrentArray([currentArray[1], rootArray[0], rootArray[1], rootArray[2]]);
    } else setCurrentArray([rootArray[index], rootArray[index + 1], rootArray[index + 2], rootArray[index + 3]]);
  }

  const prevAnimation = () => {
    teste.current.classList.add('teste');
    teste.current.style.setProperty('--outra', '-80vw');
    setCurrentAction('prev');
  }

  const nextAnimation = () => {
    teste.current.classList.add('teste');
    teste.current.style.setProperty('--outra', '80vw');
    setCurrentAction('next');
  }

  const verify = () => {
    console.log(rootArray);
    console.log(currentArray);
    return currentAction === 'prev' ? prevState() : nextState();
  }

  return (
    <div className="App">
      <button onClick={ prevAnimation }>prev</button>
      <div onAnimationEnd={ verify }
      ref={ teste } className="teste2">
        { currentArray.map((element, index) => (
        <div
          key={ index }
          id={ index }
          className='slide'
        >
          <p>{ element }</p>
        </div>
      )) }
      </div>
      
      <button style={{
        right: '0',
      }}
      onClick={ nextAnimation }
      >Next</button>
    </div>
  )
}

export default App;
