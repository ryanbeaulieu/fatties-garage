import React,{Component} from 'react';
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import {Route} from 'react-router-dom';
import Shop from './Shop/Shop';
import './App.css';
// import Person from './Person/Person';
// import Thermometer from './Thermometer/Thermometer'
// import FusionCharts from 'fusioncharts';
// import Charts from 'fusioncharts/fusioncharts.charts';
// import ReactFC from 'react-fusioncharts';
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';


class App extends Component {
  // ReactFC.fcRoot(FusionCharts);

  render(props) {
    return (
      <div className="App">
        <Header />
        <Route path="/" exact component={Shop} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/contact" exact component={Shop} />
      </div>
    );
  }
}

export default App;
