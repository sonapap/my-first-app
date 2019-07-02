import React from 'react';
import { API_URL } from './../../config';
import { handleResponse } from './../../helpers';

class Reklam extends React.Component {
    constructor() {
        super();
        this.state = {
            currency: {}
        }
    }

    UpdateCurrency = () => {
        fetch(`${API_URL}/cryptocurrencies/bitcoin`)
            .then(handleResponse)
            .then((data) => {
                this.setState({
                    currency: data
                });
            })

    }
    componentDidMount() {
        this.UpdateCurrency()
        this.interval = setInterval(this.UpdateCurrency, 2000)
    }
    
    componentWillUnmount() {
        console.log('clear. interval')
        clearInterval(this.interval)
    }
    render() {
        console.log(this.state.currency)
        return (
            <div>
                <h2>Hi</h2>
            </div>
        )
    }

}


export default Reklam;