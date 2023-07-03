const User = require('../model/userdata');

exports.fetchData = async(req,res)=>{
    try{
        var data = await User.find({});
        data.reverse();
        return res.render('Product',{
            data: data
        });
    }
    catch(error){
        console.log("Some error occured!!");
    }
}

