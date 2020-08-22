import React from 'react';
import { connect } from 'react-redux';


import TodoList from './components/TodoList/TodoList';
import Layout from './components/Layout/Layout';
import BackDrop from './components/BackDrop/BackDrop';
import Modal from './components/Modal/Modal';


class App extends React.Component {




render(){


let todoList = this.props.todoList.length? <TodoList/>: <h1 style={{marginLeft: '5%', marginTop: '10%'}}>Start creating your Todo List!</h1>;


  return (
    <React.Fragment>
      <Layout/>
      {this.props.createTodo? <React.Fragment> <BackDrop/><Modal/></React.Fragment>:null}
     {todoList}
    </React.Fragment>
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
