const express=require('express');
const app =express();
const path=require('path')
const bodyParser=require('body-parser')
const methodOverride=require('method-override')
const { v4: uuid } = require('uuid');

app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({extended:true}));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')

let friends=[
    {
        id:uuid(),
        name:"saif",
        age:24,
        location:"Banglore"
    },
    {
        id:uuid(),
        name:"irfan",
        age:24,
        location:"Lucknow"
    },
    {
        id:uuid(),
        name:"anand",
        age:24,
        location:"Sitapur"
    },
    {
        id:uuid(),
        name:"vikas",
        age:24,
        location:"Gorakhpur"
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
    friends.push({id:uuid(),name,age});
    res.redirect('/friends')
})


app.get('/friends/:id',(req,res)=>{
    const id=req.params.id;
    const friendsInfo=friends.find(f=>f.id==id);
    res.render('show.ejs',{friendsInfo})
})

app.get('/friends/:id/edit',(req,res)=>{
    const {id}=req.params;
    const friendsInfo=friends.find(f=>f.id==id);
    res.render('edit.ejs',{friendsInfo})
})
app.patch('/friends/:id',(req,res)=>{
    const editFriend=req.body;
    const {id}=req.params;
    let friendsInfo=friends.find(f=>f.id==id);
    friendsInfo.name=editFriend.name;
    friendsInfo.age=editFriend.age;
    friendsInfo.location=editFriend.location;
    res.redirect('/friends');
})

app.delete('/friends/:id',(req,res)=>{
    const {id}=req.params;
    friends=friends.filter(i=>i.id!=id);
    res.redirect('/friends')
})

app.listen(8000,()=>{
    console.log("listening");
})