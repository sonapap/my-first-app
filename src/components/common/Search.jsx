import React from 'react';
import { handleResponce } from '../../helpers';
import Loading from './Loading';
import { API_URL } from '../../config';
import './search.css'

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            searchQuery: '',
            searchResult: [],
            loading: false
        }
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        const searchQuery = event.target.value;
        this.setState({
            searchQuery,

        })
        this.setState({
            loading: true
        })
        if (!searchQuery) {
            return ''
        }
        fetch(`${API_URL}/autocomplete?searchQuery=${searchQuery}`)
            .then(handleResponce)
            .then(result => {
                this.setState({
                    searchResult: result,
                    loading: false
                })
            })

    }


    renderSearchResult() {
        const { searchQuery, searchResult, loading } = this.state
        if (!searchQuery) {
            return ''
        }
        if (searchResult.length > 0) {
            return (
                <div className="Search-result-container">
                    {
                        searchResult.map(item => (
                            <div
                                key={item.id}
                                className="Search-result"
                            >
                                {item.name} {item.symbol}
                            </div>
                        ))
                    }
                </div>

            )
        }

       {
            return (
                <div className = "Search-result-container">
                    <div className = "Search-no-result">
                        <Loading width = "10px" height = "10px"/>
                    </div>

                </div>
            )
        } 


    }


    render() {

        const { searchQuery, loading } = this.state
        return (
            <div className="Search">
                <span className="Search-icon" />
                <input
                    type="text"
                    name="searchQuery"
                    onChange={this.handleChange}
                    className="Search-input"
                    placeholder="Currency Name"
                />
                {loading && <div className="Search-loading">
                    <Loading />
                </div>}

                {this.renderSearchResult()}

            </div>
        )
    }
}
export default Search;