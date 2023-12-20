// WatchLater.js
import React from 'react';
import "./Watchlater.css";

const WatchLater = ({ watchLaterList }) => {
    return (
        <div className='wat'>
            <h2>Watch Later List</h2>
            <ul>
                {watchLaterList ? (
                    watchLaterList.map(item => (
                        <li key={item.id}>
                            <img src={item.posterURL} alt={item.title} />
                            {item.title}
                        </li>
                    ))
                ) : (
                    <p>No items in Watch Later list</p>
                )}
            </ul>
        </div>
    );
};

export default WatchLater;
