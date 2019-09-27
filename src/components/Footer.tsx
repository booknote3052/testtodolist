import React from 'react'
import PropTypes from 'prop-types'
import Link from './Link'
import classnames from 'classnames'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'



interface FILTER {
    SHOW_ALL: string;
    SHOW_ACTIVE: string;
    SHOW_COMPLETED: string;
    [key: string]: string;
}
class Footer extends React.Component<any, any> {

    render() {

        // debugger;
        const { activeCount, completedCount, onClearCompleted } = this.props
        const itemWord = activeCount === 1 ? 'item' : 'items'
        const FILTER_TITLES = {
            SHOW_ALL: 'All',
            SHOW_ACTIVE: 'Active',
            SHOW_COMPLETED: 'Completed'

        } as FILTER
        const a: string = '555'
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{activeCount || 'No'}</strong> {itemWord} left
       </span>
                <ul className="filters">
                    {Object.keys(FILTER_TITLES).map((filter: 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED' | string) =>
                        <li key={filter} className={classnames({ selected: this.props.active })}>
                            {/* {filter} */}
                            <Link filter={filter}>
                                {FILTER_TITLES[filter]}
                            </Link>
                        </li>
                    )}
                </ul>
                {
                    !!completedCount &&
                    <button
                        className="clear-completed"
                        onClick={onClearCompleted}
                    >Clear completed</button>

                }
            </footer>
        );
    }
}

export default Footer
