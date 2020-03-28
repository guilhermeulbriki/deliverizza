const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const { id } = request.params;

    const [user] = await connection('user')
      .select('*')
      .where('id', id);

    return response.json(user);
  },

  async create(request, response) {
    const {
      name,
      password,
      whatsapp,
      email
    } = request.body;

    await connection('user')
      .insert({
        name,
        password,
        whatsapp,
        email
      });

    return response.status(204).send();
  },

  async update(request, response) {
    const { id } = request.params;

    const {
      name,
      password,
      whatsapp,
      email
    } = request.body;

    await connection('user')
      .where('id', id)
      .update({
        name,
        password,
        whatsapp,
        email
      });

    return response.status(204).send();
  },

  async delete(request, response) {
    const { id } = request.params;

    await connection('user').where('id', id).delete();
    return response.status(204).send();
  }
}
