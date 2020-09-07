const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "NO NAME SPECIFIED"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 10,
  review: "Great",
});

const Pineapples = new Fruit({
  name: "Pineapples",
  rating:9,
  review: "great fruit"
})

const Watermelon = new Fruit({
  name: "Watermelon",
  rating:8,
  review: "pwolii"
})

Watermelon.save();
Pineapples.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 10,
//   review: "Best",
// });

// const orange = new Fruit({
//   name: "Orange",
//   rating: 4,
//   review: "not okay",
// });

// const banana = new Fruit({
//   name: "Banana",
//   rating: 3,
//   review: "Weird Texture",
// });

const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const People = mongoose.model("People", peopleSchema);

const people = new People({
  name:"Amy",
  age: 19,
  favoriteFruit: Pineapples
});

people.save();
fruit.save();

// Fruit.insertMany([kiwi, orange, banana], function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB")
//   }
// })

// Fruit.find(function (err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//     mongoose.connection.close();
//     // To stop automatically connectionafter running program...so you do't kave to use ctrl+c anymore...

//     fruits.forEach(function (fruit) {
//       console.log(fruit.name);
//     });
//   }
// });

// Fruit.updateOne(
//   { _id: "5f329a6515e42f51fcba0976" },
//   { name: "Mango" },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Successfully Updated");
//     }
//   }
// );

// Fruit.deleteOne({_id: "5f3292a7d5214d5398d986b0"}, function (err){
//   if(err){
//     console.log(err);
//   }else{console.log("Deleted Successfully")}
// });

// People.deleteMany({name:"Dominic"}, function (err){
//   if(err){
//     console.log(err);
//   }else{console.log("Deleted Successfully")}
// });
