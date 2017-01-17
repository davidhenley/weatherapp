import React, {Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  constructor() {
    super();
    this.renderWeather = this.renderWeather.bind(this);
  }

  renderWeather({city, list}) {
    const {name} = city;
    const temps = list.map(weather => weather.main.temp * 9/5 - 459.67); // K to F
    const pressures = list.map(weather => weather.main.pressure);
    const humidities = list.map(weather => weather.main.humidity);
    const {lat, lon} = city.coord;
    return (
      <tr key={name}>
        <td><GoogleMap lat={lat} lon={lon} /><div>{name}</div></td>
        <td><Chart data={temps} color="orange" units="˚F" /></td>
        <td><Chart data={pressures} color="blue" units="hPa" /></td>
        <td><Chart data={humidities} color="green" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <div className="weather-list">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (˚F)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
