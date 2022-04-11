import React from 'react';
import styles from './FormToDo.module.css';
import cx from 'classnames';

class FormToDo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todo: '',
            isValid: true
        }
    }
    changeInput = (event) =>{
        const {name, value} = event.target;
        if(value.includes(' ')){
            this.setState({
                isValid: false
            })
        }
        this.setState({
            [name]: value
        })
    }
    submitHandler = (event) => {
        event.preventDefault()
        const {props, state} = this;
        props.addToDo(state.todo);
        this.setState({
            todo: ''
        })
    }


    render() {
        const inputClassname = cx ({
            [styles.inputNormal]: true,
            [styles.invalidInput]: !this.state.invalid
        })
        return(
            <form className={styles.container} onSubmit={this.submitHandler}>
                <input className={cx} type='text' name='todo' value={this.state.todo} onChange={this.changeInput}/>
                <button type='submit' >Add ToDo</button>
            </form>
        )
    }
}

export default FormToDo
