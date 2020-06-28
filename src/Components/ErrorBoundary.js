import React,{Component} from 'react';

export default class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError : false

        }
    }

    componentDidCatch(error,info){
        this.setState({hasError:true})
        console.log(error)
    }
    render(){
        if (this.state.hasError){
            return(
                <div>
                    <h1>
                        There has been some issues with the site loading.
                        Check your browser console.
                    </h1>
                </div>
            )
        }
        else{
            return this.props.children
        }
    }
}