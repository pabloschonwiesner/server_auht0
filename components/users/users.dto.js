
const one = (resource, authUser) => ({
  active: resource.activo,
  datetimeRegistration: resource.fechaHoraAlta,
  datetimeLastModification: resource.fechaHoraUltimaModificacion,
  id: resource.id,
  user: resource.usuario
});

const many = (resources, authUser) => resources.map((resource) => one(resource, authUser));

module.exports = {
  one,
  many,
};
