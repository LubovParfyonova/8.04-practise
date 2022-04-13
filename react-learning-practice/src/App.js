import './App.css';
import React from 'react'
import FormContainer from './components/FormContainer';
// import ToDoList from './components/ToDoList';

const List = (props) => { 
  const {children} = props;
  return (
   
    <article>
      <ul title='test'>
        {children}
      </ul>
    </article>
  )
}
function App() {


  const number = [1, 2, 3, 4, 5];
  const renderElement = () => {
    return number.map((currentNumber, index) => {
      const liJSX = <li key={currentNumber}>{currentNumber}</li>
      return liJSX
    })
  }
  return (
    <List>
      {renderElement()}
    </List>

  );
}

export default App;