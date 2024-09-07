import React, { useEffect, useState } from 'react';

const TradesList = () => {
    const [trades, setTrades] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/trades') // Backend API URL
            .then(response => response.json())
            .then(data => setTrades(data))
            .catch(error => console.error('Error fetching trades:', error));
    }, []);

    return (
        <div>
            <h1>Trades List</h1>
            <ul>
                {trades.map(trade => (
                    <li key={trade.id}>{trade.details}</li>
                ))}
            </ul>
        </div>
    );
};

export default TradesList;
