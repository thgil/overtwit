'use strict'

mongoose = require 'mongoose'
Thing = mongoose.model 'Thing'

###
  Get awesome things
###
exports.awesomeThings = (req, res) ->
  Thing.find (err, things) ->
    return res.send(err) if err
    res.json things
  
