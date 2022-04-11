import React from 'react';
import FormToDo from './FormToDo';
import List from './List';


class ToDoList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            todos: []
        }
    }
    newToDo = (inputValue) => {
      const {todos} = this.state;
      const copyArray = [...todos]
      copyArray.push(inputValue)
      this.setState({
        todos: copyArray
      })
    }

    render () {
        return(
            <>       
            <FormToDo addToDo={this.newToDo} />  
            <List toDoArray={this.state.todos}/>
            </>
        )
    }
}
export default ToDoList