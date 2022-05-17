const mongoose = require('mongoose');
    //connect to db via DB's url

    mongoose.connect("mongodb+srv://ClaudioCCT2019231:SveHGsUyV2yYMmy@cluster0.evzxp.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true})
        .then(() => console.log('db connected hi mongon'))
        .catch(e => console.log(e));