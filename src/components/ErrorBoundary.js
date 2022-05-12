import { Component } from "react";
import ErrorPage from './ErrorPage'


class ErrorBoundary extends Component {
    state = {
        error: null
    }
    componentDidCatch(error){
        this.setState({
            error:error
        })
    }

    render(){
        if(this.state.error){
            return <ErrorPage />
        }
        else {
            return this.props.children
        }
    }
}

export default ErrorBoundary