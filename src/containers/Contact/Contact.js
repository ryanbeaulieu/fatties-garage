import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Contact extends Component {

  state = {
    name: '',
    price: '',
    salePrice: '',
    category: '',
    productImages: [],
    description: '',
    active: false,
    outOfStock: false
  }

  handleInput = (e) => {
    const target = e.target;
    const name = e.target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }

  handleFiles = (e) => {
    this.setState({
      productImages: [...e.target.files]
    })
  }

  submitForm(e) {
    e.preventDefault();

    const fd = new FormData();

    fd.append("name", this.state.name);
    fd.append("category", this.state.category);
    fd.append("price", this.state.price);
    fd.append("salePrice", this.state.salePrice);
    fd.append("active", this.state.active);
    fd.append("description", this.state.description);
    fd.append("outOfStock", this.state.outOfStock);
    
    this.state.productImages.forEach(image => {
        fd.append("productImages", image);
    })

    const url = 'http://localhost:3000/products'
    const params = {
      body: fd,
      method: "POST",
      cors: "no-cors"
    }



    fetch(url, params)
    .then(data => {
      return data.json();
    })
    .then(res => {
      console.log(res.createdProduct);
      this.props.history.push("/product/" + res.createdProduct._id);
    })
    .catch(err => {
        console.log("Errors my dude", err);
    })
  }

    render() {
        return (
            <form onSubmit={this.submitForm.bind(this)} noValidate autoComplete="off">
              <div className="form-row">
                <label>Product Name</label>
                <input 
                  type="text" 
                  name="name"
                  id="product-name" 
                  value={this.state.name}
                  onChange={this.handleInput}
                   />
              </div>
              <div className="form-row">
                <label>Price</label>
                <input 
                  type="number" 
                  name="price"
                  value={this.state.price}
                  onChange={this.handleInput}
                  id="product-price" />
              </div>
              <div className="form-row">
                <label>Sale Price</label>
                <input 
                type="number" 
                name="salePrice"
                value={this.state.salePrice}
                onChange={this.handleInput}
                id="product-sale-price" />
              </div>
              <div className="form-row">
                <label>Category</label>
                <select 
                  name="category"
                  id="product-category"
                  value={this.state.category}
                  onChange={this.handleInput}>
                    <option>T-Shirts</option>
                    <option>Jackets</option>
                    <option>Hoodies</option>
                    <option>Sweatshirts</option>
                </select>
              </div>
              <div className="form-row">
                <label>Upload Images</label>
                <input 
                  type="file" 
                  name="productImages"
                  onChange={this.handleFiles}
                  id="product-images" 
                  multiple 
                  accept="image/*" />
              </div>
              <div className="form-row">
                <label>Description</label>
                <textarea 
                  name="description"               
                  value={this.state.description}
                  onChange={this.handleInput}
                  id="product-description"></textarea>
              </div>
              <div className="form-row">
                <label>Active</label>
                <input 
                  type="checkbox"
                  name="active"
                  onChange={this.handleInput}
                  checked={this.state.active} 
                  id="product-active" />
              </div>
              <button type="submit">Submit</button>
            </form>
        )
    }
}

export default withRouter(Contact);