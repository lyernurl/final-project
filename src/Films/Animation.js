import React, { Component } from 'react';
import WatchLater from '../Pages/Watchlater';
import "./Films.css";

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            watchLaterList: []
        };
    }

    componentDidMount() {
        fetch("https://api.sampleapis.com/movies/animation")
        .then(res => res.json())
        .then(
            (result) =>{
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        );
    }

    handleWatchLaterClick = (id) => {
        const { items, watchLaterList } = this.state;
        const selectedItem = items.find(item => item.id === id);

        if (selectedItem && !watchLaterList.includes(selectedItem)) {
            this.setState({
                watchLaterList: [...watchLaterList, selectedItem]
            });
        }
        console.log(watchLaterList);
    };

    render() {
        const { error, isLoaded, items, watchLaterList } = this.state;
        if (error) {
            return <p>Error {error.message}</p>
        } else if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            return (
                <div className='films'>
                <h1>Classic</h1>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            <img src={item.posterURL} alt={item.title} />
                            {item.title}
                            <br/>   
                            <button onClick={() => this.handleWatchLaterClick(item.id)}>Watch Later</button>
                        </li>
                    ))}
                </ul>
                <WatchLater watchLaterList={watchLaterList} /> {/* Ensure this line is present */}
            </div>
            );
        }
    }
}

export default MyComponent;
