import React, { Component } from 'react';
import QuantityPicker from './quantityPicker';
import "./item.css";



class Item extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="item">
                
                <img src={"/images/boardShorts.jpeg"}alt="Product" />

                <h5>This is a title</h5>
                <QuantityPicker class="quantityPicker"></QuantityPicker>
                <label><span>Price:</span></label>
                <label><span>Total:</span></label>

                

            </div>
         );
    }
}
 
export default Item;