const moment = require('moment');
const db = require('../models');
const Kunjungan = db.kunjungan
const dateFormatter = new Intl.DateTimeFormat('id', {});

exports.create = async (req, res) => { 
    date = new Date();
    var now = moment().format()
console.log(req.body)
 const data_kunjungan = {
    elemenData: req.body.elemenData,
    id_pasien: req.body.id_pasien,
    tgl_kunjungan: now,
    tgl_kunjung_kembali: req.body.tgl_kunjung_kembali,
    status: req.body.status,
}
console.log("data_kunjungan",data_kunjungan)  
  await Kunjungan.create(data_kunjungan) //menyimpan data_kunjungan ke table peserta
  .then(data => {
    res.send({
      message: "Data was insert successfully."
    })
    })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating data."
    });
  })
}

exports.readAll = async (req, res) => {
  await Kunjungan.findAll()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving data."
    });
  });
}
exports.readById = async (req, res) =>{
    const id = req.params.id
    await Kunjungan.findOne({where: { id: id}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data."
      });
    });
}


exports.update = async (req, res) => {
  const id = req.params.id
  await Kunjungan.update(req.body, { where: { id: id}})
  .then(num => {
      num == 1 ? res.send({
        message: "Data was updated successfully."
      }) : res.send({
        message: `Cannot update Data with id=${id}. Maybe Data was not found or req.body is empty!`
      });
  })
  .catch(err => {
    res.status(500).send({
      message: `Error updating Data with id=${id}`,
      error: err
    })
  })
}

exports.delete = async (req, res) => {
  const id = req.params.id
  await Kunjungan.destroy({ where: { 
    id: id
}})
.then(num => {
  num == 1 ? res.send({
    message: "Data was deleted successfully."
  }) : res.send({
    message: `Cannot delete Data with id=${id}. Maybe Data was not found or req.body is empty!`
  });
})
  .catch(err => {
    res.status(500).send({
      message: `Error deleting Data with id=${id}`,
      error: err
    })
  })
}
