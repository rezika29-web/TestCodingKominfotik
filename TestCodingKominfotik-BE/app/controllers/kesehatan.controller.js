const db = require('../models');
const Kesehatan = db.kesehatan


exports.create = async (req, res) => { 
console.log(req.body)
 const data_kesehatan = {
    elemenData: req.body.elemenData,
    id_pasien: req.body.id_pasien,
    rincian_gejala: req.body.rincian_gejala,
    diagnosa: req.body.diagnosa,
    test_yg_dilakukan: req.body.test_yg_dilakukan,
    status_diagnosa: req.body.status_diagnosa,
}
console.log("data_kesehatan",data_kesehatan)  
  await Kesehatan.create(data_kesehatan) //menyimpan data_kesehatan ke table peserta
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
  await Kesehatan.findAll()
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
    await Kesehatan.findOne({where: { id: id}})
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
  await Kesehatan.update(req.body, { where: { id: id}})
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
  await Kesehatan.destroy({ where: { 
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
