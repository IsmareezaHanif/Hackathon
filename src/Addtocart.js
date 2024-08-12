import React, { useState } from 'react';

function ShoppingCart() {
    const [cartItems, setCartItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    function addItemToCart() {
        if (newItem.trim() === '') return; // Prevent adding empty items
        const newCartItems = [...cartItems, { item: newItem.trim() }];
        setCartItems(newCartItems);
        setNewItem('');
        console.log(newCartItems);
    }

    return (
        <div className='fluid-container'>
            <h1
                className='text-center display-3'
                style={{
                    color: 'blue',
                    fontWeight: 'bold',
                    backgroundColor: 'skyblue',
                    borderRadius: '10px',
                }}
            >
                Shopping Cart
            </h1>
            <input
                type='text'
                placeholder='Add Item to Cart'
                className='form-control'
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <br />
            <button className='btn btn-success' onClick={addItemToCart}>
                Add to Cart
            </button>
            <hr />
            <table className='table'>
                <thead>
                    <tr>
                        <th>Cart Items</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((cartItem, index) => (
                        <tr key={index}>
                            <td>{cartItem.item}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <style>{'body{background-color:skyblue;}'}</style>
        </div>
    );
}

export default ShoppingCart;
