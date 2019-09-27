import React from 'react'

import Footer from './Footer'
import VisibleTodoList from './TodoList'
import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import { bindActionCreators } from 'redux'

import { getCompletedTodoCount } from '../selectors'


class MainSection extends React.Component<any, any> {

    render() {
        // debugger;
        return (
            <section className="main">
                {
                    !!this.props.todosCount &&
                    <span>
                        <input
                            className="toggle-all"
                            type="checkbox"
                            checked={this.props.completedCount === this.props.todosCount}
                            readOnly
                        />
                        <label onClick={this.props.actions.completeAllTodos} />
                    </span>
                }
                <VisibleTodoList />
                {
                    !!this.props.todosCount &&
                    <Footer
                        completedCount={this.props.completedCount}
                        activeCount={this.props.todosCount - this.props.completedCount}
                        onClearCompleted={this.props.actions.clearCompleted}
                    />
                }
            </section>
        );
    }
}
// MainSection.propTypes = {
//     todosCount: PropTypes.number.isRequired,
//     completedCount: PropTypes.number.isRequired,
//     actions: PropTypes.object.isRequired
// }

// export default MainSection;
const mapStateToProps = (state: any) => ({
    todosCount: state.todos.length,
    completedCount: getCompletedTodoCount(state)
})


const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(TodoActions, dispatch)
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainSection)

