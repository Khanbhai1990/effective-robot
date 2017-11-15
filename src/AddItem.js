import React, { Component } from 'react'

class AddItem extends Component {

  state = {
    product: 0,
    quantity: 0
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.itemAdded(this.state.product)
  }

  handleProductsList = (e) => {
    this.setState({ product: e.target.value })
  }

  

  render () {
    let productList = this.props.products.map(product => {
      return (
        <option
          key={product.id}
          value={product.id}
        >
          {product.name}
        </option>
      )
    })
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col s5">
            <select
              className="browser-default"
              value={this.state.product}
              onChange={this.handleProductsList}
            >
              <option disabled selected>Choose Product</option>
              {productList}
            </select>
            </div>
            <div className="col s5">
            <select className="browser-default" value={this.state.quantity}>
              <option disabled selected>Select Quantity</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            </div>
            <div className="col s2">
              <input type="submit" value="Add"/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default AddItem
