const express = require('express');
const app = express();
const sequelize = require('./connection/db')

const path = require('path')
const DegreeController = require("./controllers/degreeController");
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())


app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// app.get('/', (req, res) => {
//     res.render('certificate', {
//         name: "Pawan Kumar",
//         degree: "Bachelor of Science",
//         college: "St. Wilfred's P.G. College, Mansarovar (Jaipur)",
//         year: 2018,
//         division: "Second",
//         date: "13-12-2018"
//     });
// });

app.get("/degreeForm", DegreeController.showDegreeForm);  
app.post("/submitDegree", DegreeController.submitDegree);  
app.post("/payment", DegreeController.handlePayment); 

sequelize.sync().then(() => { console.log('Database & tables created!'); });


module.exports = app 