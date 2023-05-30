import Layout from '../components/Layout/Layout';
import React, { useEffect, useState } from "react";
import '../styles/Cart.css';

function Body({ items = [] }) {
    async function deleteRecord(e) {
        const title = e.target.id;
        console.log(title);
        await fetch(`http://localhost:5050/record/647106ec2cd305d672aad1a9?title=${title}`, {
            method: "DELETE"
        });

        window.location.reload();
    }

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
                            <td className="td-text">{item.qty}</td>
                            {/* add a button */}
                            <td className="td-text"><button id={item.title} className="btn btn-danger" onClick={deleteRecord}>Remove</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function Prnt() {
    const [records, setRecords] = useState([]);

    // This method fetches the records from the database.
    useEffect(() => {
        async function getRecords() {
            const collectionName = "cart";
            const response = await fetch(`http://localhost:5050/record?collectionName=${collectionName}`);

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const records = await response.json();
            setRecords(records);
        }

        getRecords();

        return;
    }, [records.length]);

    return (
        <>
            <Layout>
                <Body items={records} />
            </Layout>
        </>
    );
}

export default Prnt;
