import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../actions'

import { getVisibleTodos } from '../selectors'



class TodoList extends React.Component<any, any> {

    render() {
        // debugger;
        return (
            <ul className="todo-list">
                {this.props.filteredTodos.map((todo: any) =>
                    <TodoItem key={todo.id} todo={todo} {...this.props.actions} />
                )}
            </ul>
        );
    }
}

const mapStateToProps = (state: any) => ({
    filteredTodos: getVisibleTodos(state)
})

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(TodoActions, dispatch)
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
