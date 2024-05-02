import React, { Component } from 'react';

class TMDForm3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName: "Tran Minh Duc",
            age: "19",
            course: "TMD-HTML5",
            gender: true
        }
    }
    tmdhandleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    tmdhandleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.onSubmit(this.state);
    }
    render() {
        return (
            <div>
                <form action="">
                    <div>
                        <label htmlFor="studentName">Student Name: </label>
                        <input type="text" name="studentName" value={this.state.studentName} onChange={this.tmdhandleChange} />
                    </div>
                    <div>
                        <label htmlFor="studentName">Age: </label>
                        <input type="text" name="age" value={this.state.age} onChange={this.tmdhandleChange} />
                    </div>
                    <div>
                        <label htmlFor="">Gender</label>
                        <input type="radio" name='gender' value={true} checked={(this.state.gender === true) ? 'checked' : ''} onChange={this.tmdhandleChange} />Nam
                        <input type="radio" name='gender' value={false} checked={(this.state.gender === false) ? 'checked' : ''} onChange={this.tmdhandleChange} />Nu
                    </div>
                    <div>
                        <label htmlFor="">Course</label>
                        <select value={this.state.course} name='course' onChange={this.tmdhandleChange}>
                            <option value={"TMD-HTML5"}>TMD-HTML5</option>
                            <option value={"TMD-CSS3"}>TMD-CSS3</option>
                            <option value={"TMD-JS"}>TMD-JS</option>
                            <option value={"TMD-RJ"}>TMD-RJ</option>
                        </select>
                    </div>
                    <button onClick={this.tmdhandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default TMDForm3;