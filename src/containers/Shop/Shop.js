import React,{Component} from 'react';
import Card from '../../components/Card/Card';



class Shop extends Component {
  // ReactFC.fcRoot(FusionCharts);

  state = {
    merchandise: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/products')
    .then(response => {
      return response.json();
    })
    .then(products => {
      this.setState({
        merchandise: products.products
      })
    })
  }

  render(props) {
    return (
        <div>
        {this.state.merchandise.length === 0 ? "LOADING" : null}
        <div className="merchandise-grid">
          {
            this.state.merchandise.map(item =>{
              return (
                <Card details={item} key={item._id} />
              )
            })
          }
        </div>
        </div>
        
    );
  }
}

export default Shop;
