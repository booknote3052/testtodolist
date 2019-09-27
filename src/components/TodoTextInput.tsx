import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class TodoTextInput extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            text: this.props.text || ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    static propTypes = {
        onSave: PropTypes.func.isRequired,
        text: PropTypes.string,
        placeholder: PropTypes.string,
        editing: PropTypes.bool,
        newTodo: PropTypes.bool
    }



    /**
     *
     *
     * @param {*} e
     * @memberof TodoTextInput
     */
    public handleSubmit(e: any) {
        const text = e.target.value.trim()
        if (e.which === 13) {
            this.props.onSave(text)
            if (this.props.newTodo) {
                this.setState({ text: '' })
            }
        }
    }

    /**
     *
     *
     * @param {*} e
     * @memberof TodoTextInput
     */
    public handleChange(e: any) {
        console.log('e' + e.target.value)

        this.setState({ text: e.target.value })
        console.log('text' + this.state.text)
    }

    /**
     *
     *
     * @param {*} e
     * @memberof TodoTextInput
     */
    public handleBlur(e: any) {
        if (!this.props.newTodo) {
            this.props.onSave(e.target.value)
        }
    }

    render() {
        return (
            <input className={
                classnames({
                    edit: this.props.editing,
                    'new-todo': this.props.newTodo
                })}
                type="text"
                placeholder={this.props.placeholder}
                autoFocus={true}
                value={this.state.text}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                onKeyDown={this.handleSubmit} />
        )
    }
}
