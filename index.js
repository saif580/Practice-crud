const express=require('express');
const app =express();
const path=require('path')
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({extended:true}));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')

let friends=[
    {
        id:1,
        name:"saif",
        age:24
    },
    {
        id:2,
        name:"irfan",
        age:24
    },
    {
        id:3,
        name:"anand",
        age:24
    },
    {
        id:4,
        name:"vikas",
        age:24
    },

]

app.get('/',(req,res)=>{
    res.send("REstuful routes and crud operation without database");
})

//REstful routing
//show all friends
app.get('/friends',(req,res)=>{
    res.render('index.ejs',{friends});
})

app.get('/friends/new',(req,res)=>{
    res.render('new.ejs')
})
app.post('/friends',(req,res)=>{
    const {name,age}=req.body;
    friends.push({id:5,name,age});
    res.redirect('/friends')
})

app.listen(8000,()=>{
    console.log("listening");
})