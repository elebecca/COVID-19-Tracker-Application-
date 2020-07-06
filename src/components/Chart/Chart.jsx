import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';

const Chart = () => {
    const [dailyData, setDaylyData] = useState({})

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyDta(await fetchDailyData());
        }
    });
    return (
        <h1>Chart</h1>
    )
}

export default Chart;