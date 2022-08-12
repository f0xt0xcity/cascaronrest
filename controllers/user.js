const { response } = require('express');

const usuariosGet = ( req, res = response) => {
  
  const { nombre, apikey } = req.query;

  res.json({
    message : 'get api - Cotrolador',
    nombre,
    apikey
  });
}

const usuariosPut = ( req, res = response) => {

  const id = req.params.id;

  res.json({
    message : 'put api - Controlador',
    id
  });
}

const usuariosPatch = ( req, res) => {
  res.json({
    ok : 'true',
    message : 'patch api - Controlador'
  });
}

const usuariosDelete = ( req, res) => {
  res.json({
    ok : 'true',
    message : 'delete api - Controlador'
  });
}

const usuariosPost = ( req, res) => {
  const { nombre, edad } = req.body;
  
  res.json({
    ok : 'true',
    message : 'post api - Controlador',
    nombre,
    edad
  });
}

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosPatch,
  usuariosDelete
}