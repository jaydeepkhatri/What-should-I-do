import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetch() {
    const [loading, setLoading] = useState(true);
    const [btnLoading, setBtnLoading] = useState('Another');
    const [activity, setActivity] = useState([]);
    const [count, setCount] = useState(0);


    useEffect(() => {
        axios.get(`https://www.boredapi.com/api/activity/`)
            .then(res => {
                setLoading(false);
                setActivity(res.data);
                setBtnLoading('Another')
            })
            .catch(error => {
                console.log(error);
            })
    }, [count]);

    function handleBtn() {
        setCount(count + 1);
        setBtnLoading(() => {
            return (
                <i className="fas fa-circle-notch fa-spin"></i>
            )
        })
    }


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
            <button className="btn" onClick={handleBtn}>{btnLoading}</button>
                </>
            }
        </>
    )
}
export default DataFetch;