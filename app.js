const express = require('express');
const app = express();

const Spirit = require('./model/Spirit');

// settings
app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//It will make a request to the root and respond with item Model Spirit from the schema
//if there is a connection with the db it will return the index 

app.get('/', async (req, res) => {
    
    //if(req.query.key === "123"){
        const spirits = await Spirit.find();
        console.log(spirits)
        res.render('index', { spirits });
   // } else { res.send('sorry you are not authed') }
    
})

// this command Creates a new item in the table
app.post('/add', async (req, res) => {
    const newSpirit = new Spirit({
        spirit: req.body.spirit,
        description: req.body.description,
        price: req.body.price
    });
    await newSpirit.save();
    res.redirect('/');
})

// Delete one existing item from the table, it deletes from the database as well
app.post('/delete', async (req, res) => {
    const spiritId = req.body.spiritId;
    console.log(spiritId);
    const deleted = await Spirit.deleteOne({ _id: spiritId });

    if(deleted.deletedCount == 1){
        console.log('Spirit with id ' + spiritId + ' has been deleted');
        // refresh view
        res.send('Spirit with id ' + spiritId + ' has been deleted');
    } else {
        console.log('Spirit with id ' + spiritId + ' has NOT been deleted and probs doesnt exist');
        res.send('Spirit with id ' + spiritId + ' has NOT been deleted and probs doesnt exist');
    }

    
})

// STATIC Files
app.use(express.static(__dirname + '/public'));

module.exports = app;