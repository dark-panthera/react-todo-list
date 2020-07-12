import React, { Component } from 'react'
// https://www.fontawesomecheatsheet.com/font-awesome-cheatsheet-5x/

class TodoItem extends Component {
    render() {
        return (
            <div>
                hello from todo item <i className="fas fa-moon"></i> 
                <i className="fab fa-asymmetrik"></i> 
                <i className="fas fa-eye-dropper"></i>
                <i className="fas fa-feather-alt"></i>
            </div>
        )
    }
}

export default TodoItem;