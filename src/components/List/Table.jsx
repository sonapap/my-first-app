import React from 'react';
import { withRouter } from 'react-router-dom';
import {renderChangePercent} from './../../helpers';
import PropTypes from 'prop-types';
import './table.css';

const Table = (props) => {
    const { currencies, history } = props;
    console.log(props)
    return (
        
        <div className="Table-container" >
            <table className="Table">
                <thead className="Table-head">
                    <tr>
                        <th> Criptocurrency </th>
                        <th> Price </th>
                        <th> Market Cap </th>
                        <th> 24-h Change </th>
                    </tr>
                </thead>
                <tbody className="Table-body">
                    {
                        currencies.map(currency => {
                            return (      
                                    <tr key={currency.id} onClick={()=>{history.push(`currency/${currency.id}`)}} >
                                        <td>
                                                <span className="Table-rank">
                                                    {currency.rank}
                                                </span>
                                            
                                            <span> {currency.name} </span>
                                        </td>
                                        <td>
                                            <span className="Table-dollar">
                                                $ {currency.price}
                                            </span>
                                        </td>

                                        <td>
                                            <span className="Table-dollar">
                                                {currency.marketCap}
                                            </span>
                                        </td>
                                        <td>
                                            {renderChangePercent(currency.percentChange24h)}
                                        </td>
                                    </tr>                                
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

Table.propTypes = {
    currencies: PropTypes.array.isRequired
}

export default withRouter(Table);