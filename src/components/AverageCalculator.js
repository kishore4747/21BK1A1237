import React, { useState } from 'react';
import fetchNumbers from '../services/api';

const AverageCalculator = () => {
    const [numberType, setNumberType] = useState('e');
    const [data, setData] = useState(null);

    const handleFetch = async () => {
        const result = await fetchNumbers(numberType);
        setData(result);
    };

    return (
        <div>
            <h1>Average Calculator</h1>
            <div>
                <label>
                    Select Number Type:
                    <select value={numberType} onChange={(e) => setNumberType(e.target.value)}>
                        <option value="e">Even</option>
                        <option value="p">Prime</option>
                        <option value="f">Fibonacci</option>
                        <option value="r">Random</option>
                    </select>
                </label>
                <button onClick={handleFetch}>Fetch Numbers</button>
            </div>
            {data && (
                <div>
                    <h2>Response Data</h2>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default AverageCalculator;
