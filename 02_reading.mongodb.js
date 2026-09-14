use ('ecommerce');

// db.products.find({"name":"Wireless Mouse"})

// db.products.find({"price":{$gte : 1000 , $lte : 10000}})

// db.products.find({ $or: [{ category: "Electronics" }, { stock: { $lt: 50 } }] })

db.products.find({}, { name: 1, price: 1, _id: 0 })