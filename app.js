const express = require('express');
const app = express();

const Spirit = require('./model/Spirit');

// settings
app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Request root and respond with item Model Spirit (from models schema)
//and if it exists based on db connected too we propagate and
//return as array to index
app.get('/', async (req, res) => {
    
    //if(req.query.key === "123"){
        const spirits = await Spirit.find();
        console.log(spirits)
        res.render('index', { spirits });
   // } else { res.send('sorry you are not authed') }
    
})

// Create Task
app.post('/add', async (req, res) => {
    const newSpirit = new Spirit({
        spirit: req.body.spirit,
        description: req.body.description,
        price: req.body.price
    });
    await newSpirit.save();
    res.redirect('/');
})

// Create Task
app.post('/delete', async (req, res) => {
    const SpiritId = req.body.SpiritId;
    console.log(SpiritId);
    const deleted = await Spirit.deleteOne({ _id: SpiritId });

    if(deleted.deletedCount == 1){
        console.log('Spirit with id ' + SpiritId + ' has been deleted');
        //refresh view
        //res.send('Spirit with id ' + SpiritId + ' has been deleted');
        res.redirect()
    } else {
        console.log('Spirit with id ' + SpiritId + ' has NOT been deleted and probs doesnt exist');
        res.send('Spirit with id ' + SpiritId + ' has NOT been deleted and probs doesnt exist');
    }

    
})

// STATIC Files
app.use(express.static(__dirname + '/public'));

module.exports = app;