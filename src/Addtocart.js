import React, { useState } from 'react';

function AddToCartList() {
  const [cartItems, setCartItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  function handleAddToCart() {
    const trimmedItem = newItem.trim(); // Trim whitespace for cleaner data
    if (trimmedItem) { // Only add if there's actual content
      setCartItems([...cartItems, { item: trimmedItem, quantity: 1 }]);
      setNewItem('');
    } else {
      alert('Please enter an item name.'); // Inform user about empty input
    }
  }

  function clearCart() {
    setCartItems([]);
  }

  function handleQuantityChange(index, newQuantity) {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    setCartItems(updatedCartItems);
  }

  function handleRemoveItem(index) {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  }

  return (
    <div className="fluid-container">
      <h1 className="text-center display-3" style={{ color: "white", fontWeight: "bold", backgroundColor: "#778DA9", borderRadius: "10px" }}>Add to Cart</h1>
      <div className="search-bar d-flex justify-content-center">
      <input style={{ width: "70%"  }}
        type="text"
        placeholder="Enter item name"
        className="form-control"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button className="btn btn-success" onClick={handleAddToCart}>Add to Cart</button>
      <button className="btn btn-danger" onClick={clearCart}>Clear Cart</button>
      </div>
      <hr />
      <div className='text-center'>
      {cartItems.length > 0 && ( // Only render table if there are items
        <table className="table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem, index) => (
              <tr key={index}>
                <td>{cartItem.item}</td>
                <td>
                  <input
                    type="number"
                    min="1"
                    value={cartItem.quantity}
                    onChange={(e) => handleQuantityChange(index, e.target.value)}
                  />
                </td>
                <td>
                  <button className="btn btn-sm btn-danger" onClick={() => handleRemoveItem(index)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
  );
}


export default AddToCartList;
