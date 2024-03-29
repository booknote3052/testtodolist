import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'

export default class TodoItem extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            editing: false
        };

        this.handleDoubleClick = this.handleDoubleClick.bind(this);
        this.handleSave = this.handleSave.bind(this);

    }
    static propTypes = {
        todo: PropTypes.object.isRequired,
        editTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        completeTodo: PropTypes.func.isRequired
    }





    /**
     *
     *
     * @memberof TodoItem
     */
    public handleDoubleClick() {
        this.setState({ editing: true })
    }



    /**
     *
     *
     * @param {number} id
     * @param {string} text
     * @memberof TodoItem
     */
    public handleSave(id: number, text: string) {
        if (text.length === 0) {
            this.props.deleteTodo(id)
        } else {
            this.props.editTodo(id, text)
        }
        this.setState({ editing: false })
    }

    render() {
        const { todo, completeTodo, deleteTodo } = this.props

        let element
        if (this.state.editing) {
            element = (
                <TodoTextInput text={todo.text}
                    editing={this.state.editing}
                    onSave={(text: any) => this.handleSave(todo.id, text)} />

            )
        } else {
            element = (
                <div className="view">
                    <input className="toggle"
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => completeTodo(todo.id)} />
                    <label onDoubleClick={this.handleDoubleClick}>
                        {todo.text}{todo.addTime}
                    </label>
                    <button className="destroy"
                        onClick={() => deleteTodo(todo.id)} />
                </div>
            )
        }

        return (
            <li className={classnames({
                completed: todo.completed,
                editing: this.state.editing
            })}>
                {element}
            </li>
        )
    }
}
