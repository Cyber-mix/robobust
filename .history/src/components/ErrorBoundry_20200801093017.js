import React, { component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    render() {
        if (this.state.hasError) {
            return <h1>O</h1>
        }
    }
}
export default ErrorBoundry;