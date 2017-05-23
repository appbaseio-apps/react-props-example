import React, { Component } from 'react';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editon: false
        };
        this.editNote = this.editNote.bind(this);
        this.saveEditedNote = this.saveEditedNote.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderText = this.renderText.bind(this);
    }

    editNote() {
        this.setState({
            editon: true
        });
    }

    saveEditedNote() {
        this.props.onUpdate(this.inputval.value);
        this.setState({editon:false});
    }

    renderForm() {
        return (
            <div className="flexend">
                <textarea className="reacttxt" type='text' ref={(i) => this.inputval = i} defaultValue={this.props.text} />
                <button className="btn btn-success alr b_edit" onClick={this.saveEditedNote}>
                    <i className="fa fa-floppy-o" aria-hidden="false"></i>
                </button>
            </div>
        );
    }

    renderText() {
        return (
            <div className="flexend">
                <p className="reacttxt">{this.props.text}</p>
                <button className="btn btn-success b_edit .button:hover" onClick={this.editNote}>
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                </button>
            </div>
        );
    }

    render() {
        return (this.state.editon) ? this.renderForm() : this.renderText();
    }
}

module.exports = { Edit };
