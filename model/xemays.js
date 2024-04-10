const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const XeMayModel = new Schema({
    ten_xe_ph42693 : {type : String, required: true},
    mau_sac_ph42693 : {type : String, required: true},
    gia_ban_ph42693 : {type : Number, required: true, default: 0},
    mo_ta_ph42693 : {type: String},
    hinh_anh_ph42693 : {type: String}
});

module.exports = mongoose.model('xemay',XeMayModel);