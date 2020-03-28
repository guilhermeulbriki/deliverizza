const connection = require('../database/connection');

module.exports = {
  async userLogon(request, response) {
    const { id } = request.body;
    const user = await connection('user')
      .where('id', id)
      .select('name')
      .first();

    if (!user) {
      return response.status(400).json({ error: 'No USER found with this ID.' });
    }

    return response.json(user);
  },

  async pizzariaLogon(request, response) {
    const { id } = request.body;
    const pizzaria = await connection('pizzaria')
      .where('id', id)
      .select('name')
      .first();

    if (!pizzaria) {
      return response.status(400).json({ error: 'No PIZZARIA found with this ID.' });
    }

    return response.json(pizzaria);
  }
}
