// const express = require('express');
// const app = express();
// const usermodel = require('./usermodel');

// // Middleware to parse JSON data
// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send(`/create`);
// });

// // Route to create a new user
// app.get('/create', async (req, res) => {
//     try {
//         let createduser = await usermodel.create({
//             name: "Ahmed",
//             email: "aitisam24@gmail.com",
//             username: "Aitisam Ahmed"
//         });

//         res.json(createduser);  // Sending response as JSON
//     } catch (error) {
//         console.error("Error creating user:", error);
//         res.status(500).send("Internal Server Error");
//     }
// });

// // Route to update a user
// app.get('/update', async (req, res) => {
//     try {
//         let updateduser = await usermodel.findOneAndUpdate(
//             { username: "Aitisam" }, // Find by username
//             { name: "Aitisam" },          // Update name
//             { new: true }                 // Return updated document
//         );

//         if (!updateduser) {
//             return res.status(404).send("User not found");
//         }

//         res.json(updateduser);
//     } catch (error) {
//         console.error("Error updating user:", error);
//         res.status(500).send("Internal Server Error");
//     }
// });

// // Route to read all users
// app.get("/read", async (req, res) => {
//     try {
//         let users = await usermodel.find();
//         res.json(users);
//     } catch (error) {
//         console.error("Error reading users:", error);
//         res.status(500).send("Internal Server Error");
//     }
// });

// // Route to delete a user
// app.get("/delete", async (req, res) => {
//     try {
//         let deleteduser = await usermodel.findOneAndDelete({ username: "Aitisam" });

//         if (!deleteduser) {
//             return res.status(404).send("User not found or already deleted");
//         }

//         res.json({ message: "User deleted successfully", deleteduser });
//     } catch (error) {
//         console.error("Error deleting user:", error);
//         res.status(500).send("Internal Server Error");
//     }
// });

// // Start the server
// app.listen(3000, () => {
//     console.log('Server running on port 3000');
// });



const express =  require('express');
const app = express();

app.get("/" , function(req , res){
    res.send("Welcome")
})

app.listen(3000);