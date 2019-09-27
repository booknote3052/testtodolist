import React from 'react'
import TodoTextInput from './TodoTextInput'
import { connect } from 'react-redux'

import { addTodo } from '../actions'


class Header extends React.Component<any, any> {

    render() {
        
        return (
            <header className="header">
                <h1>todos</h1>
                <TodoTextInput
                    newTodo
                    onSave={(text: any) => {
                        if (text.length !== 0) {
                            this.props.addTodo(text)
                        }
                    }}
                    placeholder="What needs to be done?"
                />
            </header>
        );
    }
}
export default connect(null, { addTodo })(Header)