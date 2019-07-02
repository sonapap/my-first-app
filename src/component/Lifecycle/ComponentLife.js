import React from 'react';
import Reklam from './Relkam';


class ComponentLife extends React.Component {
    constructor() {
        super()
        this.state = {
            show: true,
        }
    }
    ChangeRandomComponent = () => {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        let RComponent 
        if (this.state.show){
            RComponent = <Reklam/>
        } else {
            RComponent = null
        }
        return (
            <div>
                <h2>Hello</h2>
                <button onClick={this.ChangeRandomComponent}>
                    {this.state.show ? 'close' : 'open'}
                </button>
                {RComponent}
            </div>
        )
    }
}
export default ComponentLife