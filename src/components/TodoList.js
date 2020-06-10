import React, { Component } from 'react';

import Item from './Todoitem';

export default class TodoList extends Component {
    render() {
        return (
            <div>
               To Do List
               <Item/>
            </div>
        )
    }
}
