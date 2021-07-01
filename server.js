express=require('express');
const app=express();

port = 5000;

app.use((req,res,next)=>{
    // let date_format = new Date()
    // let Hours=date_format.getHours()
    // console.log(Hours)
    // Hours >= 8 && Hours<=17 ? next() : res.send('<h1> we are currently close please check our website during  our working hours from 8 am - 5 pm </h1>')

})

app.use(express.static(__dirname+'/build/'))


app.listen(port, ()=>{
    console.log(`listening to port ${port}`)
})