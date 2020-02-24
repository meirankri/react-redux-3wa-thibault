import React from 'react';
import DetailUser from './detailsUser';
import {Link} from 'react-router-dom';

class Resume extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "test",
            lastName: "test",
            age: 34
        }
    }
    
    render() {
        return (
            <div>
                <h1>Page Resume</h1>
                <DetailUser info={this.state} bonjour="bonjour" />
            </div>
        )
    }
    
}

export default Resume;