import mongoose from "mongoose";

export const dbconnection = () => {
    mongoose
        .connect(process.env.MONGO_URI, {
            dbName: "RESTAURANT_PROJ",
        })
        .then(() => {
            console.log("connected to data base sucessfully !");
        })
        .catch((err) => {
            console.log(`some error occured while connecting to database! ${ err } `);
        });
};