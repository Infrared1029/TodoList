import React from 'react';
import { connect } from 'react-redux';


import TodoList from './components/TodoList/TodoList';
import Layout from './components/Layout/Layout';
import BackDrop from './components/BackDrop/BackDrop';
import Modal from './components/Modal/Modal';


class App extends React.Component {




render(){


let todoList = this.props.todoList.length? <TodoList/>: <h1 style={{marginLeft: '5%'}}>Start creating your Todo List!</h1>;


  return (
    <div>
      {this.props.createTodo? <React.Fragment> <BackDrop/><Modal/> </React.Fragment>:null}
      <Layout/>
     {todoList}
    </div>
  );
}

}


const mapStateToProps = state => {
  return {
    todoList: state.todoList,
    createTodo: state.createTodo,
  }
}


export default connect(mapStateToProps)(App);
