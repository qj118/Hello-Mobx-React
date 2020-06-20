import React, { Component } from 'react';
import { inject, observer } from "mobx-react";

import './style.css';

export default @inject('store') @observer class Home extends Component{

    handleTodos = (type) => {
        let { store } = this.props;
        switch(type){
            case 'add':
                store.addTodo('一条新任务');
                break;
            case 'delete':
                store.deleteTodo();
                break;
            case 'reset':
                store.resetTodo();
                break;
            default:

        }
    }

    render(){
        let { store } = this.props;
        return (
            <div>
                <h2>在 React 中使用 mobx</h2>
                <div>{store.desc}</div>
                <button onClick={() => this.handleTodos('add')}>添加一条任务</button>
                <button onClick={() => this.handleTodos('delete')}>删除一条任务</button>
                <button onClick={() => this.handleTodos('reset')}>任务重置</button>
                <ul>
                    {
                        store.todos.map((todo,index) => (
                            <li key={index}>{todo}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
