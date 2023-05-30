import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// This section will help you get a list of all the food.
router.get("/", async (req, res) => {
    let collectionName = req.query.collectionName;
    let collection = await db.collection(collectionName);
    let results = await collection.find({}).toArray();

    // console.log("📜 " + collectionName + " collection accessed!");
    res.send(results).status(200);
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

    // If the food item exists, add it to the cart collection.
    if (!newDoc) res.send("Not found").status(404);
    else {
        // If it is not in the cart, add it to the cart.
        collection = await db.collection("cart");
        let found = await db.collection("cart").findOne(query);
        if (!found) {
            let result = await collection.insertOne(newDoc);
            console.log("➕ " + req.body.title + " added to cart!")
            res.send(result).status(204);
        }
        else {

            console.log("❌ " + req.body.title + " is already in the cart!")
            res.send("Already in cart").status(204);
        }
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
router.delete("/:id", async (req, res) => {
    const query = { title: req.query.title };
    const collection = db.collection("cart");
    let result = await collection.deleteOne(query);

    if (result.deletedCount === 0) res.send("Not found").status(404);
    else {
        console.log("🗑 " + req.query.title + " removed from cart!");
        res.send(result).status(200);
    }
});

export default router;