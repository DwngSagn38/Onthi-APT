const mongoose = require('mongoose');

const uri = 'mongodb+srv://shallot38hk:62WWpx8QQGvpyzTk@cluster0.4vigwt9.mongodb.net/onthi'

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connect success');
    } catch (error) {
        console.log(error);
        console.log("Connect fail")
    }
}

module.exports = {connect}