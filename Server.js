import express from 'express';
const app = express();


app.get('/',(req, res) => {
    res.send('hi i am bts ar,my nice to meet you');
})

app.listen(5000, () =>{
    console.log('server i am started in port 5000');
})