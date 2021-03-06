import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import ProductImages from '../../components/ProductImages/ProductImages'; 


class ViewProduct extends Component {

  state = {
    product: {}
  }

  componentDidMount = () => {
      console.log(this.props.match.params.id);
    fetch('http://localhost:3000/products/' + this.props.match.params.id)
    .then(response => {
      return response.json();
    })
    .then(product => {
      if(product.error) {
        this.props.history.push('/404');
        return;
      }

      this.setState({
        product: product.product
      })
    })
    .catch(err => {
      console.log("Errors", err)
    })
  }

  render(props) {
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-4">
            <ProductImages images={this.state.product.productImages ? this.state.product.productImages : null }></ProductImages>
            </div>
            <div className="col-md-8">
              {this.state.product.name}
              {this.state.product.category}
              {this.state.product.price}
              {this.state.product.salePrice ? this.state.product.salePrice : null}
            </div>
          </div>           
        </div>
        
    );
  }
}

export default withRouter(ViewProduct);
