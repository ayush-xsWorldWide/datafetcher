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

exports.getData = async(req,res)=>{
    const { name, email, phoneNumber, screenshot } = req.body;
    console.log(name, email, phoneNumber, screenshot);
    try{
        await User.create({ name, email, phoneNumber, screenshot });
        return res.send("Submited!");
    }
    catch(error)
    {
        return res.send("Server error");
    }
}