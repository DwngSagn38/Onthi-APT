var express = require('express');
var router = express.Router();

const Xemays = require('../model/xemays');
const { route } = require('.');

// get list
router.get('/list', async (req, res) => {
    try {
        const xemays = await Xemays.find();
        if (xemays) {
            res.json({
                status: 200,
                masage: "Danh sách xe máy",
                data: xemays
            })
        } else {
            res.json({
                status: 400,
                masage: "Fail",
                data: []
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            status: 404,
            masage: "Lỗi kết nốt",
            data: []
        })
    }
});

// get theo id
router.get('/xemaybyid/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const xemay = await Xemays.findById(id);
        if (xemay) {
            res.json({
                status: 200,
                masage: "Get xe máy ok",
                data: xemay
            })
        } else {
            res.json({
                status: 400,
                masage: "Get xe máy fail",
                data: []
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            status: 404,
            masage: "Lỗi kết nốt",
            data: []
        })
    }
})


router.post('/add', async (req, res) => {
    try {
        const data = req.body;
        const xemay = new Xemays({
            ten_xe_ph42693: data.ten_xe_ph42693,
            mau_sac_ph42693: data.mau_sac_ph42693,
            gia_ban_ph42693: data.gia_ban_ph42693,
            mo_ta_ph42693: data.mo_ta_ph42693,
            hinh_anh_ph42693: data.hinh_anh_ph42693
        })

        const result = await xemay.save();

        if (result) {
            res.json({
                status: 200,
                masage: "add xe máy ok",
                data: result
            })
        } else {
            res.json({
                status: 400,
                masage: "add xe máy fail",
                data: []
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            status: 404,
            masage: "Lỗi kết nốt",
            data: []
        })
    }
})


router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await Xemays.findByIdAndDelete(id);
        if (result) {
            res.json({
                status: 200,
                masage: "delete xe máy ok",
                data: result
            })
        } else {
            res.json({
                status: 400,
                masage: "delete xe máy fail",
                data: []
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            status: 404,
            masage: "Lỗi kết nốt",
            data: []
        })
    }
})

// update 
router.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const result = await Xemays.findByIdAndUpdate(id, data, { new: true });
        if (result) {
            res.json({
                status: 200,
                masage: "update xe máy ok",
                data: result
            })
        } else {
            res.json({
                status: 400,
                masage: "update xe máy fail",
                data: []
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            status: 404,
            masage: "Lỗi kết nốt",
            data: []
        })
    }
})

// search 
router.get('/search', async (req, res) => {
    try {
        const { key } = req.query;
        const result = await Xemays.find({ ten_xe_ph42693: { "$regex": key, "$options": "i" } });
        if (result) {
            res.json({
                status: 200,
                masage: "list search xe máy ok",
                data: result
            })
        } else {
            res.json({
                status: 400,
                masage: "list search xe máy fail",
                data: []
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            status: 404,
            masage: "Lỗi kết nốt",
            data: []
        })
    }
})

// sort by price
router.get('/sort', async (req, res) => {
    const { type } = req.query;
        let result = null;
        if (type == 1) {
            result = await Xemays.find().sort({ gia_ban_ph42693: 1 });
        } else {
            result = await Xemays.find().sort({ gia_ban_ph42693: -1 });
        }
        if (result) {
            res.json({
                status: 200,
                masage: "sort by price xe máy ok",
                data: result
            })
        } else {
            res.json({
                status: 400,
                masage: "sort by price xe máy fail",
                data: []
            })
        }
})
module.exports = router;
