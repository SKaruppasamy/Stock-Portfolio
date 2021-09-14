Bio = require('./bioModel');

exports.index = function (req, res) {
    Bio.get(function (err, bio) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Stock Successfully!",
            data: bio       
        });
    });
};

exports.add = function (req, res) {
    var bio = new Bio();
    bio.StockHoldlerName = req.body.StockHoldlerName? req.body.StockHoldlerName: bio.StockHoldlerName;
    bio.ClientID = req.body.ClientID? req.body.ClientID: bio.ClientID;
    bio.StockName= req.body.StockName;
    bio.Exchange = req.body.Exchange;
    bio.Date = req.body.Date;
    bio.Quantity = req.body.Quantity;
    bio.StockAmount = req.body.StockAmount;
    bio.TotalAmount=bio.Quantity*bio.StockAmount;
   
  
    bio.save(function (err) {
        if (err)
            res.json(err);

        res.json({
            message: "New Stock Buying!",
            data: bio
        });
    });
};

// View Bio
exports.view = function (req, res) {
    Bio.findById(req.params.bio_id, function (err, bio) {
        if (err)
            res.send(err);
        res.json({
            message: 'Stock Details',
            data: bio
        });
    });
};

// Part of Stock Buying/Selling in Stock portfolio..
exports.update = function (req, res) {
    Bio.findById(req.params.bio_id, function (err, bio) {
        if (err)
            res.send(err);
    bio.StockHoldlerName = req.body.StockHoldlerName? req.body.StockHoldlerName: bio.StockHoldlerName;
    bio.ClientID = req.body.ClientID;
    bio.StockName= req.body.StockName;
    bio.Exchange = req.body.Exchange;
    bio.Date = req.body.Date;
    bio.Quantity = req.body.Quantity;
    bio.StockAmount = req.body.StockAmount;
    bio.TotalAmount=bio.Quantity*bio.StockAmount;
    

        //save and check errors
        bio.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Stock Updated Successfully",
                data: bio
            });
        });
    });
};

// Total of Stock Selling in Stock Portfolio..
exports.delete = function (req, res) {
    Bio.deleteOne({
        _id: req.params.bio_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Stock Selling'
        });
    });
};