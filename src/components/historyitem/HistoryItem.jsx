import React from 'react'

const HistoryItem = ({ history }) => {
    return (
        <div className='HistoryItem'>
            {history.length === 0 ? <p>Aucun historique </p> : (
                <table>
                    <thead>
                        <tr>
                            <td>Date</td>
                            <td>Montant</td>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((item, index) =>
                            <tr key={index}>
                                <td>
                                    {item.date}
                                </td>
                                <td>{item.total_price}</td>
                            </tr>)}
                    </tbody>
                </table>)}
        </div>
    )
}

export default HistoryItem
