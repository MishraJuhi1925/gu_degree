

const Degree = require("../models/degreeModel");

const { Op } = require("sequelize");

module.exports = class DegreeController {
    static async showDegreeForm(req, res) {
        res.render("degreeForm"); 
    }

    static async submitDegree(req, res) {
        const { name, degree, college, year, division, date } = req.body;
        try {
            const degreeRecord = await Degree.create({
                name,
                degree,
                college,
                year,
                division,
                date
            });

           
            res.render("paymentPage", { degreeRecord });
        } catch (err) {
            console.error(err);
            res.status(500).send("Error saving degree details");
        }
    }

    static async handlePayment(req, res) {
       
        const degreeData = req.body; 
        console.log('hjsdfgjhdsjfhsj',degreeData)
        res.render("certificate", { degreeData });
    }
};
