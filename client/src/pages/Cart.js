import Layout from '../components/Layout/Layout';
import React, { useEffect, useState } from "react";
import '../styles/Cart.css';

let totalprice = 0;

function Body({ items = [] }) {



  async function deleteRecord(e) {
    const item = e.target.id;
    const email = localStorage.getItem("email");
    await fetch(`http://localhost:5050/record/delete?item=${item}&email=${email}`, {
      method: "DELETE"
    });

    window.location.reload();
  }

  async function completeOrder() {
    const email = localStorage.getItem("email");

    // Call the server-side route to complete the order
    await fetch("http://localhost:5050/record/complete-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });

   
    alert("You successfully completed the order");

    window.location.reload();
  }

  function calculateTotalPrice() {
    let totalprice = 0;
    items.forEach((item) => {
      totalprice += item.price * item.quantity;
    });

    return totalprice;
  }

  totalprice = calculateTotalPrice();

  return (
    <div className="container">
      <table className="table">
        {/* Head of the table */}
        <thead>
          <tr>
            <th scope="col" className="th-text">Image</th>
            <th scope="col" className="th-text">Item</th>
            <th scope="col" className="th-text">Price</th>
            <th scope="col" className="th-text">Quantity</th> 
            <th scope="col" className="th-text"></th>
          </tr>
        </thead>

        {/* Body of the table */}
        <tbody>
          {items.map((item) => (
            <tr>
              <td className="td-img"><img src={item.image} className="card-img-top" alt="..." /></td>
              <td className="td-text">{item.title}</td>
              <td className="td-text">{item.price}</td>
              <td className="td-text">{item.quantity}</td>
              <td className="td-text"><button id={item._id} className="btn btn-danger" onClick={deleteRecord}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="total-price text-white">Total Price: ${totalprice}</h2>
      <button className="btn btn-primary" onClick={completeOrder}>Complete Order</button>
    </div>
  );
}

function Prnt() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const email = localStorage.getItem("email");
      const response = await fetch(`http://localhost:5050/record/cart?email=${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
        .catch(error => {
          window.alert(error);
          return;
        });

      const records = await response.json();
      setRecords(records);
    }

    getRecords();
  }, []);

  return (
    <>
      <Layout>
        <Body items={records} />
      </Layout>
    </>
  );
}

export default Prnt;
