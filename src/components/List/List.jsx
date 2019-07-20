import React from 'react';
import { handleResponce, renderChangePercent } from '../../helpers';
import { API_URL } from './../../config'
import Table from './Table';
import Pagination from './Pagination';
import Loading from '../common/Loading';

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            currencies: [],
            error: null,
            totalPages: 0,
            page: 1
        }
    }

    componentDidMount() {
         this.fetchCurrencies()
    }
    fetchCurrencies(){
        this.setState({
            loading: true
        })
        const { page } = this.state;

        fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`)
            .then(handleResponce)
            .then(data => {
                this.setState({
                    currencies: data.currencies,
                    loading: false,
                    totalPages: data.totalPages
                });
            })
    }

    handlePaginationClick = direction => {
        let nextPage = this.state.page;
        nextPage = direction === 'next'? nextPage+1: nextPage-1;
        this.setState({
            page:nextPage
        }, ()=> {
            this.fetchCurrencies()
        })
        
    }
    render() {
        this.currencies = this.state.currencies;
        const { loading, currencies, error, totalPages, page } = this.state;
        if (loading) {
            return (
                <div className="loading-container" >
                    <Loading />
                </div>
            )
        }
        return (
            <div>
                <Table
                    currencies={currencies}
                />
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    handlePaginationClick={this.handlePaginationClick}
                />
            </div>
        )
    }

}

export default List;