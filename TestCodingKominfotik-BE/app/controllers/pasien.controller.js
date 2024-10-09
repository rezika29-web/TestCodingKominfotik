const db = require('../models');
const moment = require('moment-timezone');
const Pasien = db.pasien


exports.create = async (req, res) => { 
  const tgllahirFormatted = req.body.tgllahir 
  ? moment.tz(req.body.tgllahir, "Asia/Jakarta").format("YYYY-MM-DD") 
  : null;
console.log(req.body)
 const data_pasien = {
    elemenData: req.body.elemenData,
    nik: req.body.nik,
    nama: req.body.nama,
    tempatlahir: req.body.tempatlahir,
    tgllahir: tgllahirFormatted,
    provinsi: req.body.provinsi,
    kabkot: req.body.kabkot,
    kec: req.body.kec,
    kel: req.body.kel,
    alamat: req.body.alamat,
}
console.log("data_pasien",data_pasien)  
  await Pasien.create(data_pasien) //menyimpan data_pasien ke table peserta
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
  await Pasien.findAll()
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




// exports.readAll = async (req, res) => {
//   await Pasien.findAll({where: { status: "Active"}})
//   .then(data => {
//     res.send(data);
//   })
//   .catch(err => {
//     res.status(500).send({
//       message:
//         err.message || "Some error occurred while retrieving data."
//     });
//   });
// }










exports.readById = async (req, res) =>{
    const id = req.params.id
    await Pasien.findOne({where: { id: id}})
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
  const tgllahirFormatted = req.body.tgllahir 
  ? moment.tz(req.body.tgllahir, "Asia/Jakarta").format("YYYY-MM-DD") 
  : null;
  const updatedData = {
    ...req.body,
    tgllahir: tgllahirFormatted,
  }
  const id = req.params.id
  await Pasien.update(updatedData, { where: { id: id }})
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

// exports.delete = async (req, res) => {
//   const id = req.params.id

//   const data_pasien = {
//     status: "Non Active",
//   }
//   await Pasien.update(data_pasien, { where: { 
//     id: id
// }})
// .then(num => {
//   num == 1 ? res.send({
//     message: "Data was deleted successfully."
//   }) : res.send({
//     message: `Cannot delete Data with id=${id}. Maybe Data was not found or req.body is empty!`
//   });
// })
//   .catch(err => {
//     res.status(500).send({
//       message: `Error deleting Data with id=${id}`,
//       error: err
//     })
//   })
// }

exports.delete = async (req, res) => {
  const id = req.params.id
  await Pasien.destroy({ where: { 
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
