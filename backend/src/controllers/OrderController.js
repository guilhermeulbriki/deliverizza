const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const user = request.headers.user;

    const order = await connection('order')
      .where('user', user)
      .select('*');

    return response.json(order);
  },

  async create(request, response) {
    const pizzaria_id = request.headers.pizzaria;
    const user = request.headers.user;
    const did = false;

    const {
      sizePizza,
      flavorsPizza,
      flavorEdge,
      drinks,
      value,
      address
    } = request.body;

    await connection('order')
      .insert({
        user,
        sizePizza,
        flavorsPizza: JSON.stringify(flavorsPizza),
        flavorEdge: JSON.stringify(flavorEdge),
        drinks: JSON.stringify(drinks),
        value,
        address,
        did,
        pizzaria_id
      });

    return response.status(204).send();
  },

  async update(request, response) {
    const { id } = request.params;

    let [{ did }] = await connection('order')
      .where('id', id)
      .select('did');

    if (did === 0) {
      did = 1;
    } else {
      did = 0;
    }

    await connection('order')
      .where('id', id)
      .update({
        did
      });

    return response.json(did);
  },

  async delete(request, response) {
    const { id } = request.params;

    await connection('order').where('id', id).delete();
    return response.status(204).send();
  }
}
