//jshint esversion:6
const express =require("express");
const bodyParser= require("body-parser");

const app=express();

var items=[];

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/",function(req,res)
{
  var today=new Date();
  //var currentDay=today.getDay();
  //var day="";
  var options={
    weekday:"long",
    day:"numeric",
    month:"long"
  };
//  var day=today.toLocaleDateString("hi-IN", options);
  var day=today.toLocaleDateString("en-US", options);


  res.render("list", {kindOfDay: day , NewItems:items});

});
app.post("/",function(req,res){
  item = req.body.NewItem;
  items.push(item);
  //items.pop(item);
  //console.log(item);
  res.redirect("/");
});

app.listen(8080,function(){
  console.log("Started the server on 8080");

});








/*switch (currentDay) {
  case 0:
    day="Sunday";
    break;
  case 1:
    day="Monday";
    break;
  case 2:
    day="Tuesday";
    break;
  case 3:
    day="Wednesday";
    break;
  case 4:
    day="Thrusday";
    break;
  case 5:
    day="Friday";
    break;
  case 6:
    day="Saturday";
    break;
  default:

}*/

/*  if(currentDay===6||currentDay===0){
  day="Weekend";
  }
  else {
    day="Weekday";
  }*/
