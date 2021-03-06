const express = require('express');
const router = express.Router();
const passport = require('../jwt/passport');
const Board = require('../models/model_board');

// find board list
router.get('/board_list', function (req, res) {
    Board.find().then(board =>{
        if(board){
            res.send(board);
        }
    })
});


module.exports = router;