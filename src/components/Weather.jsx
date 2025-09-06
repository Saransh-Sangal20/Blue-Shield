import React, { Component } from 'react'

export default class Weather extends Component {
    constructor () {
        super();
        this.state = {
            responseData: {},
            loading: false
        };
    }
    async componentDidMount() {
        let data = await fetch("https://api.weatherapi.com/v1/current.json?key=c2b1a54bbd3f4d33bbd230319250609&q=India&aqi=no");
        let parsedData = await data.json();
        this.setState({
            responseData: parsedData
        });
    }
    render() {
        return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="/" className="card-link">Card link</a>
                    <a href="/" className="card-link">Another link</a>
                </div>
            </div>
        </div>
        )
    }
}
