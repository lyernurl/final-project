import React, { Component } from 'react';
import "./Films.css";

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://api.sampleapis.com/movies/drama")
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

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <p>Error {error.message}</p>
        } else if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            return (
              <div className='films'>
                <h1>Drama</h1>
                <ul>
                    {items.map(item => (
                        <li key={item.name}>
                         <img src={item.posterURL} alt={item.title} />
                         {item.title}
                        </li>
                    ))}
                </ul>
              </div>
            );
        }
    }
}

export default MyComponent;
