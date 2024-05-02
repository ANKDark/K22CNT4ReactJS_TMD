import React, { Component } from 'react';

class TMD_Form1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName: "Tran Minh Duc"
        };
    }

    handleChange = (event) => {
        this.setState({ studentName: event.target.value }); 
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(this.state.studentName);
        alert(this.state.studentName)
    }

    render() {
        return (
            <div>
                <h2>Demo ReactJS Form - Text</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="studentName">Student Name: </label>
                    <input type="text" id="studentName" value={this.state.studentName} onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default TMD_Form1;
