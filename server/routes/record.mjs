import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const router = express.Router();

router.post("/complete-order", async (req, res) => {
    const email = req.body.email;
  
    // Drop the cart collection for the given email
    const collection = await db.collection("cart");
    await collection.deleteMany({ email: email });
  
    console.log("✅ Order completed for email: " + email);
  
    res.send("Order completed").status(200);
  });
  

// This section will help you get a list of all the food.
router.get("/", async (req, res) => {
    let collectionName = req.query.collectionName;
    let collection = await db.collection(collectionName);
    let results = await collection.find({}).toArray();

    // console.log("📜 " + collectionName + " collection accessed!");
    res.send(results).status(200);
});

router.get("/cart", async (req, res) => {
    let collection = await db.collection("cart");
    let query = { email: req.query.email };
    let results = await collection.find(query).toArray();

    if (results) {
        const ids = results.map((item) => new mongoose.Types.ObjectId(item.item));
        collection = await db.collection("food").find({ _id: { $in: ids } });
        results = await collection.toArray();
        res.send(results).status(200);
        return;
    }

    console.log("❌ No records found");
    res.send("No records found").status(404);
});

router.post("/register", async (req, res) => {
    let collection = await db.collection("users");
    let query = {
        email: req.body.email,
        password: req.body.password,
        homeAddress: req.body.homeAddress,
        cardNumber: req.body.cardNumber
    };

    let findAcc = await collection.findOne({ email: req.body.email });
    if (findAcc) {
        console.log("❌ Account already exists");
        res.send("Account already exists").status(404);
        return;
    }

    await collection.insertOne(query);
    console.log("✅ Account created!");
    res.send("Account created!").status(200);
});

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
    let collection = await db.collection("food");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
    let collection = await db.collection("food");
    let query = { title: req.body.title };
    let newDoc = await collection.findOne(query);

    // get the email of the user
    let email = req.body.email;

    // get the id of the food item
    let id = JSON.stringify(newDoc._id);
    id = id.substring(1, id.length - 1);

    // If the food item exists, add it to the cart collection.
    if (!newDoc) res.send("Not found").status(404);
    else {
        // If it is not in the cart, add it to the cart.
        collection = await db.collection("cart");
        let found = await db.collection("cart").findOne({email:email, item: id });
        if (!found) {
            const newRecord = {
                email: email,
                item: id
            };
            let result = await collection.insertOne(newRecord);
            console.log("➕ " + req.body.title + " added to cart!")
            res.send(result).status(204);
        }
        else {
            console.log("❌ " + req.body.title + " is already in the cart!")
            res.send("Already in cart").status(204);
        }
    }
});

router.post("/login", async (req, res) => {
    let collection = await db.collection("users");
    let query = { email: req.body.email, password: req.body.password };
    let newDoc = await collection.findOne(query);

    if (!newDoc) {
        console.log("❌ Invalid email or password");
        res.send("Invalid email or password").status(404);
    }
    else {
        console.log("✅ Login successful");
        res.send("Login successful").status(200);
    }
});

// This section will help you update a record by id.
router.patch("/:id", async (req, res) => {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
        $set: {
            name: req.body.name,
            position: req.body.position,
            level: req.body.level
        }
    };

    let collection = await db.collection("food");
    let result = await collection.updateOne(query, updates);

    res.send(result).status(200);
});

// This section will help you delete a record
router.delete("/delete", async (req, res) => {
    const item = req.query.item;
    const email = req.query.email;
    const query = { item: item, email: email };
    console.log(query);

    const collection = db.collection("cart");
    let result = await collection.deleteOne(query);

    if (result.deletedCount === 0) res.send("Not found").status(404);
    else {
        console.log("🗑 " + req.query.title + " removed from cart!");
        res.send(result).status(200);
    }
});

export default router;