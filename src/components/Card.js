import React, { Component } from 'react'
import Navigation from './Navigation'
import ModalCard from './ModalCard'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Tablero tareas',
            ntareas: props.todos.length,
            todos: props.todos
        }
    }

    removeTodo(index) {
        console.log(index, "INDEX");
        if (window.confirm('Are you sure you want to delete it?')) {
            this.setState({
                todos: this.state.todos.filter((todo, i) => {
                    console.log(i !== index);
                    return i !== index
                }),
                ntareas: this.state.todos.length - 1
            })
        }
    }
    render() {
        // const todos = [];
        const todos = this.state.todos.map((todo, i) => {
            return (
                <div className="col-md-4" key={i}>
                    <div className="card mt-4">
                        <div className="card-header">
                            <h3 className="text-dark">{todo.title}</h3>
                            <span className="text-danger badge badge-danger ml-2">
                                {todo.priority}
                            </span>
                        </div>
                        <div className="card-body">
                            <p className="text-dark">{todo.description}</p>
                            <p><mark>{todo.responsable}</mark></p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-danger" onClick={this.removeTodo.bind(this, i)}>Delete</button>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div>
                <Navigation title={this.state.title} ntareas={this.state.ntareas} />
                <ModalCard />
                <div className="container">
                    <div className="row mt-4">
                        {todos}
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
