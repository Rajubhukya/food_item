import app from "./App.js"

app.listen(process.env.PORT, () => {
    console.log(`server Running on Port ${process.env.PORT}`);
});