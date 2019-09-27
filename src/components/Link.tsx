import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'


class Link extends React.Component<any, any> {

    render() {
        // debugger;
        return (
            <a
                className={classnames({ selected: this.props.active })}
                href={this.props.filter}
                style={{ cursor: 'pointer' }}
                onClick={() => this.props.setFilter()}
            >

                {this.props.children}

            </a>
        );
    }
}


const mapStateToProps = (state: any, ownProps: any) => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    setFilter: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)