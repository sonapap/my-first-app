import React from 'react';
import { handleResponse } from '../../helpers';
import { API_URL } from './../../config';
import Table from './Table';
import Pagination from './Pagination';


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

    fetchCurrencies() {
        this.setState({
            loading: true
        })

        const { page } = this.state;
        fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`)
            .then(handleResponse)

            .then((data) => {
                this.setState({
                    loading: false,
                    currencies: data.currencies,
                    totalPages: data.totalPages
                });
                console.log(data)
            })


    }



    renderChangePercent(percent) {
        if (percent > 0) {
            return (<span className="percent-raised">
                {percent}&uarr;
            </span>)
        }
        else if (percent < 0) {
            return (
                <span className="percent-fallen">
                    {percent}&darr;
                </span>)
        }
        else {
            return ({ percent })
        }
    }


    handlePaginationClick = direction => {
        let nextPage = this.state.page;
        nextPage = direction === 'next' ? nextPage + 1 : nextPage - 1
        this.setState({
            page: nextPage
        },
        () => {
            this.fetchCurrencies()
        })
        
    }


    render() {
        const { loading, currencies, error, page, totalPages } = this.state;
        console.log(this.state)
        if (loading) {
            return (
                <div>
                    Loading..............
                </div>
            )
        }
        return (
            <div>
                <Table
                    currencies={currencies}
                    renderChangePercent={this.renderChangePercent}

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

export default List