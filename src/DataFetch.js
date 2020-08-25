import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetch() {
    const [loading, setLoading] = useState(true);
    const [activity, setActivity] = useState([]);
    const [count, setCount] = useState(0);


    useEffect(() => {
        axios.get(`https://www.boredapi.com/api/activity/`)
            .then(res => {
                setLoading(false);
                setActivity(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [count]);




    return (
        <>
            {loading ?
                <div className="bouncing-loader">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                :
                <>
                    <div className="category">{activity.type}</div>
                    <div className="boredactivity">-  {activity.activity}</div>
                    <button className="btn" onClick={() => setCount(count + 1)}> Another </button>
                </>
            }
        </>
    )
}
export default DataFetch;