import React, { Component } from 'react'
// https://www.fontawesomecheatsheet.com/font-awesome-cheatsheet-5x/

class TodoItem extends Component {
    render() {
        const { title, handleDelete, handleEdit } = this.props;

        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-success" onClick={handleEdit}>
                        <i className="fas fa-pen"></i> 
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                        <i className="fas fa-trash"></i> 
                    </span>
                </div>
            </li>
        )
    }
}

export default TodoItem;
/*
hello from todo item <i className="fas fa-moon"></i> 
<i className="fab fa-asymmetrik"></i> 
<i className="fas fa-eye-dropper"></i>
<i className="fas fa-feather-alt"></i>
*/