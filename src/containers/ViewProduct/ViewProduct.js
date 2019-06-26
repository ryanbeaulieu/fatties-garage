import React,{Component} from 'react';



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
      this.setState({
        product: product.product
      })

      console.log(this.state.product.productImages[0]);
    })
  }

  render(props) {
    return (
        <div>
            {this.state.product.name}
            {this.state.product.category}
            {this.state.product.price}
            {this.state.product.salePrice ? this.state.product.salePrice : null}
            {this.state.product.productImages ? this.state.product.productImages.map(img => {
                return (
                    <img src={'http://localhost:3000/uploads/' + img} key={img} />
                )
            }) : null}
        </div>
        
    );
  }
}

export default ViewProduct;
