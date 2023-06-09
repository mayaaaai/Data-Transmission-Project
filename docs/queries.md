# Queries

## The basics

```js
// Asa inseram un entry in baza de date
db.getCollection("food").insert({ item: "Test Burger", description: "this is a test burger" })

// Asa inseram mai multe entry-uri in baza de date
db.getCollection("food").insertMany([
  { item: "Burger", description: "Description 1" },
  { item: "Item 2", description: "Description 2" },
  { item: "Item 3", description: "Description 3" }
]);
```

## Food

Here is the query I used to insert the food items in the database:

```js
// Asa inseram un entry in baza de date care are si un item cu mai multe iteme in el (am zis-o de numa)
db.getCollection("food").drop(); // asa dam drop unei colectii
db.getCollection("food").insertMany([
  {
    title: "Cheesy Burger",
    description: "A burger with a lot of calories... and cheese",
    ingredients: [
      "salad",
      "wagyu patty",
      "tomato",
      "sos de cheese"
    ],
    image: "https://imageresizer.static9.net.au/_qbi9WcIKC5rgmbh08350O-Twvc=/1200x628/smart/https%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2F2016%2F09%2F14%2F14%2F39%2FBlue-cheese-beef-burger-with-creamy-mushroom-sauce.jpg",
    price: 10.99
  },
  {
    title: "Pizza Pepperoni",
    description: "A perfect pie, thin crust, only the good and tasty stuff",
    ingredients: [
      "tomato sauce",
      "cheese",
      "pepperoni"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
    price: 12.99
  },
  {
    title: "Penne al Forno",
    description: "A comforting pasta for those lazy days",
    ingredients: [
      "tomato sauce",
      "ham",
      "cheese",
      "parsley"
    ],
    image: "https://static.toiimg.com/thumb/84784534.cms?width=1200&height=900",
    price: 9.99
  },
  {
    title: "Onion Soup",
    description: "'Oui, oui!' said the french onion soup",
    ingredients: [
      "onion",
      "cheese",
      "water",
      "salt"
    ],
    image: "https://amandascookin.com/wp-content/uploads/2018/03/IMG_8109-French-Onion-Soup-www.lifeslittlesweets.com-680x680-1.jpg",
    price: 6.99
  },
  {
    title: "Crispy Strips with Fries",
    description: "Delicious strips with fries and ketchup, crispy and tasty",
    ingredients: [
      "chicken",
      "fries",
      "ketchup"
    ],
    image: "https://img.freepik.com/premium-photo/fried-breaded-chicken-tender-strips-with-french-fries-tomato-ketchup-plate-dark-backgrund-top-view_89816-37176.jpg?w=2000",
    price: 6.99
  },
  {
    title: "Chicken Stew",
    description: "Has plenty of chimkemn and vemgetambles",
    ingredients: [
      "chicken",
      "carrots",
      "onion",
      "garlic",
      "pepper"
    ],
    image: "https://carlsbadcravings.com/wp-content/uploads/2020/05/Chicken-Stew-v24-500x500.jpg",
    price: 4.59
  },
  {
    title: "Meatballs",
    description: "One of Sweden's finest dishes",
    ingredients: [
      "meat",
      "onion",
      "garlic",
      "salt"
    ],
    image: "https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21-600x900.jpg",
    price: 15.50
  },
  {
    title: "Lasagna",
    description: "Giovanni's favorite dish",
    ingredients: [
      "tomato sauce",
      "cheese",
      "parsley",
      "meat"
    ],
    image: "https://3f4c2184e060ce99111b-f8c0985c8cb63a71df5cb7fd729edcab.ssl.cf2.rackcdn.com/media/19227/classiclasagna.jpg",
    price: 8.99
  },
  {
    title: "Gumbo",
    description: "Umm... what is this, exactly?",
    ingredients: [
      "chicken",
      "sausage",
      "onion",
      "garlic"
    ],
    image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FSeries%2F2023-01-how-to-make-cajun-gumbo%2F2022-how-to-make-cajun-gumbo__925",
    price: 6.99
  }
]);
```

## Users collection

```js
db.getCollection("users").drop(); // asa dam drop unei colectii
db.getCollection("users").insertMany([
  {
    email: "test@test.com",
    password: "1234",
    homeAddress : "Address 0",
    cardNumber : "1111-2222-3333-4444"

  },
  {
      email : "user1@example.com",
      password : "password1",
      homeAddress : "Address 1",
      cardNumber : "1111-2222-3333-4444"
  },
  {
      email : "user2@example.com",
      password : "password2",
      homeAddress : "Address 2",
      cardNumber : "5555-6666-7777-8888"
  },
  {
      email : "user3@example.com",
      password : "password3",
      homeAddress : "Address 3",
      cardNumber : "9999-0000-1111-2222"
  }
]);
```

## Cart collection

We want the cart collection to contain info as so:

- email: the email of the user that owns the cart
- item_id: the id of the item that is in the cart

```js
db.getCollection("cart").drop(); // asa dam drop unei colectii
db.getCollection("cart").insertMany([
  {
    email: "test@test.com",
    item: "647106ec2cd305d672aad1a9"
  },
]);
```
