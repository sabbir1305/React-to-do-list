import React, { Component } from 'react';

import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {

  state={
    items:[
      {id:1,title:'Wake Up'},
      {id:2,title:'Make Up'}
    
    ],
    id:uuidv4(),
    item:'',
    editItem:false
  };

  handleChange =(e)=>{
    console.log('handleChange');
    
  };

  
  handleSubmit =(e)=>{
    console.log('handleSubmit');
    
  };

    
  clearList =()=>{
    console.log('Clear');  
  };

  handleDelete =(id)=>{
    console.log('Delete');  
  };

  handleEdit =(id)=>{
    console.log('Delete');  
  };



render(){

 return (
 
    <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">
               todo input
            </h3>
            <TodoInput 
            item={this.state.item} 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editItem={this.editItem}
            />
            <TodoList 
            items={this.state.items}
            clearList={this.clearList}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            
            />
          </div>
        </div>
    </div>
    
  );
}
}


export default App;
