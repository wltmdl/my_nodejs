const mongoose = require("mongoose");

const connectDB = async()=>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useFindAndModify:false,

            useCreateIndex:true,
            useUnifiedTopology:true
        });

        console.log(`MgDB connected:${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}