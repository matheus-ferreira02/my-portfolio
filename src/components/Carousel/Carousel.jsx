import './style.css';
import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import CardProject from '../CardProject/CardProject';

function App({ widthSlide, array, marginLeftRigth }) {
  const [currentArray, setCurrentArray] = useState(array);
  const cardsRef = useRef(HTMLDivElement);
  const { current: { classList, style } } = cardsRef;
  const [currentAction, setCurrentAction] = useState('');

  useEffect(() => {
    const setStyleProperties = () => {
      const { current: { style } } = cardsRef;
      style.setProperty('--lengthArray', currentArray.length);
      style.setProperty('--widthSlide', widthSlide);
      style.setProperty('--MarginLeftRigh', marginLeftRigth);
    }

    const setArrayMinimumSize = () => {
      setCurrentArray((old) => old.length < 5
      ? Array.from({ length: old.length * 2 })
        .map((_current, index) => old.length - 1 < index ? old[index - old.length] : old[index])
      : old);
    }

    setStyleProperties();
    setArrayMinimumSize();
  }, [currentArray.length, widthSlide, marginLeftRigth]);

  const prevState = () => {
    classList.remove('animationSlide');
    setCurrentArray((old) => old
      .map((_current, index) => index === 0 ? old[old.length - 1] : old[index - 1])
    )
  }

  const nextState = () => {
    classList.remove('animationSlide');
    setCurrentArray((old) => old
      .map((_current, index) => index === old.length - 1 ? old[0] : old[index + 1])
    );
  }

  const prevAnimation = () => {
    classList.add('animationSlide');  
    style.setProperty('--slide', `-${widthSlide}`);
    setCurrentAction('prev');
  }

  const nextAnimation = () => {
    classList.add('animationSlide');
    style.setProperty('--slide', `${widthSlide}`);
    setCurrentAction('next');
  }

  const verifyAction = () => {
    return currentAction === 'prev' ? prevState() : nextState();
  }

  return (
    <div className="App">
      <button onClick={ prevAnimation }>
        Prev
      </button>

      <div
        onAnimationEnd={ verifyAction }
        ref={ cardsRef }
        className="cards_container"
      >
        { currentArray.map((project) => (
          <CardProject
            name={ project.name }
            thumb={ project.thumb }
            technology={ project.technologyIcons }
            gitHub={ project.urlGitHub }
            site={ project.urlSite }
          />
          ))
        }
      </div>
      
      <button className="btn-next" onClick={ nextAnimation }>
        Next
      </button>
    </div>
  );
}

App.propTypes = {
  array: PropTypes.arrayOf(PropTypes.any),
  widthSlide: PropTypes.string,
  marginLeftRigth: PropTypes.string,
}

export default App;
