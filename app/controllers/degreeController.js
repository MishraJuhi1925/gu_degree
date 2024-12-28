

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

           
            // res.redirect(`/payment/${degreeRecord.id}`);
            res.render(`paymentPage`,{degreeRecord});
        } catch (err) {
            console.error(err);
            res.status(500).send("Error saving degree details");
        }
    }

    static async handlePayment(req, res) {
        const {id} = req.params;
        const data =await Degree.findByPk(id);
       
        res.render("certificate", { data });
    }
};
