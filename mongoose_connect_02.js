import mongoose from "mongoose";

mongoose.connect(MONGO_URI, {
    useNewUrlParser:true,
    useFindAndModify:false
});

const db = mongoose.connection;

db.once("open", ()=>console.log('DB connected'));
db.on("error", error=>console.log(`Error on DB connection:${error}`));