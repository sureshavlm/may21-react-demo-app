import React from 'react';

class Employee extends React.Component {

    constructor(props) {
        super(props); //super method from your parent class if you are explicitly adding constructor
        console.log(' ****** Employee constructor invoked *******');
       //console.log(this.props.employees);
        
        //binding is requried to make 'this' key word available in addEmployee()
        this.addEmployee = this.addEmployee.bind(this);
    }

    componentDidMount() {
        /* to fetch employees data */
        console.log(' ******* componentDidMount() *****');
    }

    componentDidUpdate() {
        console.log(' ******* componentDidUpdate() *****');
    }

    addEmployee() {
        this.props.employees.push( { name: "Suresh", dept: "IT" } ) ;
        //console.log(this.props.employees);

        alert('Employee added successfully');
    }

    render() {
        console.log(' ****** Employee render invoked *******');
       return(
           <>
                <h1 style = {{ color : "red" }}>{ this.props.title }</h1>
                <button onClick = { this.addEmployee }>Add Employee</button>
            </>
        );
    }

}

export default Employee;