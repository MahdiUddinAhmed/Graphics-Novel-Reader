const mongoose = require('mongoose');

mongo().catch(err => console.log(err));
async function mongo() {
    try{
        //const url = `mongodb+srv://${process.env.mongooseUser}:${process.env.mongoosePassword}@${process.env.mongooseCLUSTER}/${process.env.mongooseDatabase}`;
        const url = process.env.MONGO_URL;
        //const url = `mongodb://localhost:27017/eris`;
        await mongoose.connect(url)
                .then(() => {console.log('connected to mongo');})
                .catch(err => console.log(err));
    }
    catch(err){
        console.log(err.message);
    }
}
module.exports = mongo;