import React, { Component } from 'react'

export default class Weather extends Component {
    constructor () {
        super();
        this.state = {
            responseData: {},
            loading: false,
            date: null
        };
    }
    async componentDidMount() {
        let data = await fetch("https://api.weatherapi.com/v1/current.json?key=c2b1a54bbd3f4d33bbd230319250609&q=India&aqi=no");
        let parsedData = await data.json();
        this.setState({
            responseData: parsedData,
            date: parsedData.current.last_updated
        });
    }
    render() {
        return (
        // <div className='p-2' style={{width: "18rem"}}>
            <div className="border-2 border-gray-300 rounded-xl shadow-md p-2.5 mt-1 h-50" style={{width: "18rem"}}>
                <div className="card bg-[#4378b5]" style={{width: "16.5rem"}}>
                    <div className="card-body">
                        <div className='flex gap-2'>
                            <img className= 'h-10'src={this.state.responseData.current?.condition?.icon} alt="weather icon"></img>
                            <h5 className="card-title text-white font-bold text-3xl">{this.state.responseData.current?.temp_c}&deg;C</h5>
                        </div>
                        <h6 className="card-subtitle mb-2 ml-10 pl-2 text-white">{this.state.responseData.current?.condition?.text}</h6>
                        <div className='flex gap-2 ml-2'>
                            <i class="fas fa-map-marker-alt text-white"></i>
                            <h4 className='text-white'>{this.state.responseData.location?.name}</h4>
                        </div>
                        <div className='flex ml-2 mt-2'>
                            <h3 className='text-white font-bold'>Last Updated:</h3>
                            <h6 className='text-white'>{this.state.date}</h6>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
        )
    }
}
