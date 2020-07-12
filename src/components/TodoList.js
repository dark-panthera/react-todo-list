import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
    render() {
        const { items, clearList, handleDelete, handleEdit } = this.props;

        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">todo list</h3>
                {items.map((item) => {
                    return (
                        <TodoItem
                            key={item.id}
                            title={item.title}
                            handleEdit={() => handleEdit(item.id)}
                            handleDelete={() => handleDelete(item.id)}
                        ></TodoItem>
                    );
                })}
                <button
                    type="button"
                    className="btn btn-danger btn-block text-uppercase mt-5"
                    onClick={clearList}
                >
                    Clear
                </button>
            </ul>
        );
    }
}

export default TodoList;
/*
<section>
    <h2>todo list</h2>
    <Item>hello from todo item</Item>
</section>
*/
