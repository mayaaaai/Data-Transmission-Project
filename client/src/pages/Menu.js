import Layout from '../components/Layout/Layout';
import React, { useEffect, useState } from "react";
import '../styles/Menu.css';

function Card({ image, title, description, ingredients = [], price }) {
	const ingredientsList = ingredients.map((ingredient) => (
		<li className="list-group-item text-white bg-dark">{ingredient}</li>
	));

	async function addToCart(e) {
		e.preventDefault();

		// When a post request is sent to the create url, we'll add a new record to the database.
		const newCartItem = {
			title: title,
			email: localStorage.getItem("email")
		};
		console.log(newCartItem);
		const response = await fetch("http://localhost:5050/record", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newCartItem),
		})
			.catch(error => {
				window.alert(error);
				return;
			});

		// Pop-up message
		const message = await response.text();
		if (message === "Already in cart")
			window.alert("Item is already in the cart!");
		else
			window.alert("Item added to cart!");
	}

	return (
		<div className="card text-white bg-dark" style={{ width: "18rem" }}>
			<img src={image} className="card-img-top" style={{ width: "100%" }} alt="..." />

			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{description}</p>
			</div>

			<ul className="list-group list-group-flush">
				{ingredientsList}
			</ul>

			<div className="card-buttons">
				<button type="button" className="btn btn-primary" onClick={addToCart}>Add to cart</button>
				<button type="button" className="btn btn-secondary">{price}</button>
			</div>
		</div>
	);
}

function Row({ items = [] }) {
	return (
		<div className="row">
			{items.map((item) => (
				<Card
					image={item.image}
					title={item.title}
					description={item.description}
					ingredients={item.ingredients}
					price={item.price}
					key={item._id} />
			))}
		</div>
	);
}

function Body({ items = [] }) {
	// This method splits the items into chunks of 5.
	const splitArray = (arr, chunkSize) => {
		const chunks = [];
		for (let i = 0; i < arr.length; i += chunkSize) {
			const chunk = arr.slice(i, i + chunkSize);
			chunks.push(chunk);
		}
		return chunks;
	};
	const splitItems = splitArray(items, 5);

	return (
		<div className="box">
			<div className="mycontainer">
				{splitItems.map((chunk, index) => (
					<Row key={index} items={chunk} />
				))}
			</div>
		</div>
	);
}

function Menu() {
	const [records, setRecords] = useState([]);

	// This method fetches the records from the database.
	useEffect(() => {
		async function getRecords() {
			const collectionName = "food";
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

export default Menu;
