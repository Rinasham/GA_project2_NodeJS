require('dotenv').config();
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require('mongoose')


const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))




//------------ DB -------------------

//--------DB settings------------------

const DB_PASS = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://admin-rina:${DB_PASS}@clustergaproj2.buzm8.mongodb.net/QuizDB`,{useNewUrlParser: true})



const quizSchema = new mongoose.Schema({
  // id: Number,
  question: {
    type : String,
    required : true
  },
  answers: {
    answer_a: String,
    answer_b: String,
    answer_c: String,
    answer_d: String
  },
  correct_answer: {
    type : String,
    required : true
  },
  category: {
    type : String,
    required : true
  },
})

const Quiz = mongoose.model('Quiz', quizSchema)





//-------------Requests targeting a specific article-----------------------


app.get("/quiz/:category", function(req, res){
  const requestedCategory = req.params.category;

  Quiz.find({category: {$regex:requestedCategory, $options: '$i'}},function(err, foundQuiz){
    if(!err){
      console.log(foundQuiz);
      res.send(foundQuiz)
      } else {
        res.send(err)
      }
  })
})


//----------------------------------------------------

let port = process.env.port
if (port == null || port == ""){
  port = 3000
}

console.log(port);

app.listen(port, function(){
  console.log('Server has started.')
})