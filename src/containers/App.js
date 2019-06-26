import React,{Component} from 'react';
import Header from '../components/Header/Header';
import {Route} from 'react-router-dom';
import Shop from './Shop/Shop';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import NotFound from './NotFound/NotFound';
import ViewProduct from './ViewProduct/ViewProduct';
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
        <div className="page-container">
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/product/:id" exact component={ViewProduct} />
        </div>
        
        {/* <Route path='*' exact component={NotFound} /> */}
      </div>
    );
  }
}

export default App;
