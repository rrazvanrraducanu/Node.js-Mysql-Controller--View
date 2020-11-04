var db=require('../database');

module.exports= {
    FirstPage:function(req, res){
        var sql='SELECT * FROM flori';
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
            res.render('index', { title: 'My flowers' , flowerData: data });
            });
    },
    AddForm:function(req,res) {
        res.render('add_form', { title: 'Add flowers' });
    },
    Add:function(req,res) {
        // store all the user input data
        const flower=req.body;
        var sql = 'INSERT INTO flori SET ?';
        db.query(sql, flower,function (err, data) {
            if (err) throw err;
            console.log("User dat is inserted successfully ");
        });
        res.redirect('/');  // redirect to user form page after inserting the data
    },
    ViewFlower:function(req, res){
        var id=req.params.id;
        var sql='SELECT * FROM flori WHERE id = ?';
        db.query(sql, id, function (err, data, fields) {
            if (err) throw err;
            res.render('one_flower', { title: 'My flower' , flower: data[0] });
        });
    },
    DeleteFlower:function(req, res){
        var id=req.params.id;
        var sql='DELETE FROM flori WHERE id = ?';
        db.query(sql, id, function (err, data, fields) {
            if (err) throw err;
            res.redirect('/');  // redirect to user form page after deleting the data
        });
    },
    EditFlower:function(req,res) {
        var id = req.params.id;
        var sql='SELECT * FROM flori WHERE id = ?';
        db.query(sql, id, function (err, data, fields) {
            if (err) throw err;
            res.render('edit_form', { title: 'Update flowers' ,flower: data[0]});
        });
    },
    UpdateFlower:function(req,res) {
        // store all the user edited data
        var flower=req.body;
        var id = flower.id;
        var sql = 'UPDATE flori SET ? WHERE id= ?';
        db.query(sql, [flower, id] ,function (err, data) {
            if (err) throw err;
            console.log("Data updated successfully ");
        });
        res.redirect('/');  // redirect to user form page after inserting the data
    },
}
