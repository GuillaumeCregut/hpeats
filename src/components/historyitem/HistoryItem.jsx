import React from 'react'
import "./HistoryItem.css";
const HistoryItem = ({ history }) => {
    return (
        <div className='HistoryItem'>
            {history.length === 0 ? <p>Aucun historique </p> : (
                <div>
                    <p className="HistoryTitle">Historique de commandes</p>
                    <table className='UserHistoryTable'>
                        <thead>
                            <tr>
                                <td className='HistoryDate'>Date</td>
                                <td className='HistoryPrice'>Montant</td>
                            </tr>
                        </thead>
                        <tbody>
                            {history.map((item, index) =>
                                <tr key={index}>
                                    <td className='HistoryDate'>
                                        {item.date}
                                    </td>
                                    <td className='HistoryPrice'>{item.total_price} <i className="fab fa-d-and-d fa-2x MoneyIcon"></i></td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>)}
        </div>
    )
}

export default HistoryItem
