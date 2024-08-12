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
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="xr.jpg" alt="First slide" style={{ height: '500px' }} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="laptop.jpg" alt="Second slide" style={{ height: '500px' }} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="headphone.png" alt="Third slide" style={{ height: '500px' }} />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div>
        <h1 style={{ textAlign: "center" }}><Badge bg="primary" fortSize="lg">List of the products</Badge></h1>
        <table className="table table-info table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Unit</th>
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
                <td>{ecom.discount}</td>
                <td>{ecom.brand}</td>
                <td>{ecom.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <style>{'body{background-color:lightgrey}'}</style>

      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src="ip4.jpg" alt="Card image cap" style={{ height: '120px' }} />
              <div className="card-body">
                <h5 className="card-title">Smartphone</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src="laptopyoga.jpg" alt="Card image cap" style={{ height: '120px' }} />
              <div className="card-body">
                <h5 className="card-title">Laptop</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src="headphonesony.webp" alt="Card image cap" style={{ height: '120px' }} />
              <div className="card-body">
                <h5 className="card-title">Wireless Headphone</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src="sematjam.webp" alt="Card image cap" style={{ height: '120px' }}/>
              <div className="card-body">
                <h5 className="card-title">Smartwatch</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src="cameradslr.webp" alt="Card image cap" style={{ height: '120px' }} />
              <div className="card-body">
                <h5 className="card-title">Professional DSLR Camera</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src="tvbijak.png" alt="Card image cap" style={{ height: '120px' }}/>
              <div className="card-body">
                <h5 className="card-title">Smart TV</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src="tablet.jpg" alt="Card image cap" style={{ height: '120px' }}/>
              <div className="card-body">
                <h5 className="card-title">Tablet</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src="console.webp" alt="Card image cap" style={{ height: '120px' }} />
              <div className="card-body">
                <h5 className="card-title">Gaming Console</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src="peti.webp" alt="Card image cap" style={{ height: '120px' }} />
              <div className="card-body">
                <h5 className="card-title">Energy-Efficient Refrigerator</h5>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Product