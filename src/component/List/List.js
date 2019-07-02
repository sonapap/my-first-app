import React from 'react';
import { handleResponse } from '../../helpers';
import Table from './Table'
import './Table.css';

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            currencies: [],
            error: null,
        }
    }

    componentDidMount() {
        this.setState({
            loading:true
        })
    
    
    fetch ('https://api.udilia.com/coins/v1/cryptocurrencies?page=1&perPage=20')
    .then (handleResponse)

    .then ((data) => {
        this.setState({
            loading: false,
            currencies: data.currencies
        });
    })
   
    
    }
    renderChangePercent(percent) {
        if (percent>0){
            return (<span className="percent-raised">
                {percent}&uarr;
            </span>)}
            else if(percent<0){
                return(
                <span className="percent-fallen">
                    {percent}&darr;
                </span>)                    
        }
            else {
                return({percent})
            }
    }
    
    



    render () {
        const {loading, currencies, error} = this.state;
        if (loading) {
            return(
                <div>
                    Loading..............
                </div>
            )
        }
        return (
            <Table currencies={this.state.currencies} renderChangePercent={this.renderChangePercent} />
        )
        }
}

export default List