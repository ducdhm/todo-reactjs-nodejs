import React from 'react';
import { connect } from 'react-redux';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

class Todo extends React.Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading text-lg">Toto List</div>
                <TodoAdd />
                <TodoList />
                <TodoFilter />
            </div>
        )
    }
}

export default connect()(Todo);
