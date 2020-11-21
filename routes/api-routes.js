const db = require("../models");

module.exports = function(app) {
    app.get("/api/contact", (req, res) => {
        db.Contact.findAll().then(data => res.json(data));
    });
    app.post("/api/contact", (req, res) => {
        db.Contact.create({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        }).then(data => {
            res.json(data);
        }).catch(err => {
            res.json(err);
        })
    });
};