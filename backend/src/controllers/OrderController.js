const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const id = request.headers.id;

    const orders = await connection('order')
      .where('pizzaria_id', id)
      .select('*');

    return response.json(orders);
  },

  async create(request, response) {
    const pizzaria_id = request.headers.pizzaria;
    const user_id = request.headers.user_id;
    const user_name = request.headers.user_name;
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
        user_id,
        user_name,
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
