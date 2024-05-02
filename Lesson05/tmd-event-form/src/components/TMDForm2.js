import React, { Component } from 'react';

class TMDForm2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: "TMD-HTML5"
        };
    }

    tmdhandleChange = (event) => {
        this.setState({
            course: event.target.value
        });
    }

    tmdhandleSubmit= (event) => { 
        event.preventDefault();
        alert(this.state.course)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.tmdhandleSubmit}>
                    <label htmlFor="">Course</label>
                    <select value={this.state.course} onChange={this.tmdhandleChange}>
                        <option value={"TMD-HTML5"}>TMD-HTML5</option>
                        <option value={"TMD-CSS3"}>TMD-CSS3</option>
                        <option value={"TMD-JS"}>TMD-JS</option>
                        <option value={"TMD-RJ"}>TMD-RJ</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default TMDForm2;
