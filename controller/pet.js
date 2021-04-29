const petModel = require('../model/pet')
const objectid = require('mongoose').Types.ObjectId

exports.create= (data) =>
  new Promise((resolve, reject)=> {
    petModel.create(data)
      .then(()=> resolve({
        status : true,
        pesan : 'Berhasil Input'
      })).catch(()=> ({
        status : false,
        pesan : 'Gagal input'
      }))
  })

  exports.showAllData = () =>
    new Promise((resolve, reject)=>{
      petModel.find()
      .then (result =>{
        resolve({
          status : true,
          pesan : 'Berhasil Menampilkan Data',
          data : result
        })
      }).catch(()=> reject ({
        status : false,
        pesan : 'Gagal Menampilkan Data',
        data : []
      }))
    })

    exports.showbyID = (id) =>
    new Promise((resolve, reject) => {
      petModel.findOne({
        _id: objectid(id)
      })
      .then (result =>{
        resolve({
          status : true,
          pesan : 'Berhasil Menampilkan Data',
          data : result
        })
      })
      .catch(()=> reject ({
        status : false,
        pesan : 'Gagal Menampilkan Data',
        data : null
      }))
    })

    exports.update = (id, data)=>
  new Promise((resolve, reject)=>{
    petModel.updateOne({
      _id: objectid(id)
    }, data).then (() => resolve({
        status : true,
        pesan : 'Berhasil Update Data',
      })).catch(()=> reject ({
      status : false,
      pesan : 'Gagal Update Data',
    }))
  })

  exports.delete = (id) =>
  new Promise((resolve, reject)=>{
    petModel.deleteOne({
      _id: objectid(id)
    }).then (() => resolve({
      status : true,
      pesan : 'Berhasil Delete Data',
      })).catch(()=> reject ({
      status : false,
      pesan : 'Gagal Delete Data',
      }))
  })