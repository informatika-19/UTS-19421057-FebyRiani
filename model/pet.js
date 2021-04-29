const mongoose = require('mongoose')
const Schema = mongoose.Schema

const petSchema = new Schema({
  namaPemilik: {
    type: String
  },
  jenisHewan: {
    type: String
  },
  penyakit: {
    type: String
  }
})
module.exports = mongoose.model('pet', petSchema)
