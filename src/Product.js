import React, { useEffect, useState } from 'react'
import Badge from 'react-bootstrap/Badge';

function Product() {
  
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://fake-store-api.mock.beeceptor.com/api/products').then((response) => response.json()).then((data) => {
      setData(data);
    }).catch((e) => {
      console.log("there is something wrong")
    })
  }, [])

  return (
    <div>
     <h1 style={{ textAlign: "center" }}><Badge bg="primary" fortSize="lg">List of the products</Badge></h1>
      <table className="table table-info table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Unit</th>
            <th scope="col">Image</th>
            <th scope="col">Discount</th>     
            <th scope="col">Brand</th>      
            <th scope="col">Rating</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ecom) => (
            <tr key={ecom.id}>
              <td>{ecom.name}</td>
              <td>{ecom.description}</td>
              <td>{ecom.price}</td>
              <td>{ecom.unit}</td>
              <td><img src={ecom.image} style={{ width: "30px" }} /></td>
              <td>{ecom.discount}</td>
              <td>{ecom.brand}</td>
              <td>{ecom.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <style>{'body{background-color:lightgrey}'}</style>
    </div>
  )
}

export default Product