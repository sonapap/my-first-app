import React from 'react';
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
    .then (response => {
        return response.json()
            .then(json => {
                return response.ok ? json : Promise.reject(json);
        });
    })

    .then ((data) => {
        this.setState({
            loading: false,
            currencies: data.currencies
        });
    })
    // .catch (
    //     this.setState({
    //         loading:false,
    //         error: data.
    //     })
    // )


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
            <div>
                <h2>Currencies</h2>
                {
                    currencies.map (currency => {
                        return (
                            <div key={currency.id}>
                                {
                                   currency.name 
                                }

                            <div/>
                        )
                    })
                }
            </div>
            )
        }
}

export default List