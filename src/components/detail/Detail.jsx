import React from 'react';
import { API_URL } from './../../config';
import { handleResponce, renderChangePercent } from './../../helpers';
import { Link } from 'react-router-dom';
import './detail.css'

class Detail extends React.Component {
    constructor() {
        super();
        this.state = {
            currency: {},
            loading: false,
            error: null
        }
    }
    componentDidMount() {
        
        const currencyId = this.props.match.params.id;
        this.setState({
            loading: true
        })

        this.fetchCurrency(currencyId)
    }

    componentWillReceiveProps(nextProps) {
        const newCurrencyId = nextProps.match.params.id
        this.fetchCurrency (newCurrencyId)
    }

    fetchCurrency(currencyId){
        fetch(`${API_URL}/cryptocurrencies/${currencyId}`)
        .then(handleResponce)
        .then(currency => {
            this.setState({
                loading: false,
                currency
            })

        })
        .catch(error => {
            console.log(error);
            this.setState({
                error: error.errorMessage,
                loading: false
            })
        })
    }

    render() {
        const { currency } = this.state;
        return (
            <div className="Detail">
                <h1 className="Detail-heading">
                    {currency.name}
                </h1>
                <div className="Detail-container">
                    <div className="Detail-item">
                         Rank<span className="Detail-value">{currency.rank} </span>
                    </div>
                    <div className="Detail-item">
                         Price<span className="Detail-value">$ {currency.price} </span>
                    </div>
                    <div className="Detail-item">
                         Volume 24 Hour<span className="Detail-value">{currency.volume24h} </span>
                    </div>
                    <div className="Detail-item">
                         Market Cap<span className="Detail-value">$ {currency.marketCap} </span>
                    </div>
                    <div className="Detail-item">
                         Total Supply<span className="Detail-value">$ {currency.totalSupply} </span>
                    </div>
                    <div className="Detail-item">
                         Percent Change 24 Hour <span className="Detail-value">{renderChangePercent(currency.percentChange24h)} </span>
                    </div>
                </div>
                <Link to="/" className="Detail-link"> <em> Go Back </em> </Link>
            </div>
        )
    }
}

export default Detail;