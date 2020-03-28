const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection('pizzaria').count();

    const pizzarias = await connection('pizzaria')
      .offset((page - 1) * 5)
      .limit(5)
      .select('*');

    response.header('X-Total-Count', count['count(*)']);
    return response.json(pizzarias);
  },

  async create(request, response) {
    const {
      name,
      password,
      whatsapp,
      queue,
      pizzaSize,
      flavorsPizza,
      flavorsEdge,
      drinks
    } = request.body;

    await connection('pizzaria')
      .insert({
        name,
        password,
        whatsapp,
        queue,
        pizzaSize: JSON.stringify(pizzaSize),
        flavorsPizza: JSON.stringify(flavorsPizza),
        flavorsEdge: JSON.stringify(flavorsEdge),
        drinks: JSON.stringify(drinks)
      });

    return response.status(204).send();
  },

  async update(request, response) {
    const { id } = request.params;

    const {
      name,
      password,
      whatsapp,
      pizzaSize,
      flavorsPizza,
      flavorsEdge,
      drinks
    } = request.body;

    await connection('pizzaria')
      .where('id', id)
      .update({
        name,
        password,
        whatsapp,
        pizzaSize: JSON.stringify(pizzaSize),
        flavorsPizza,
        flavorsEdge,
        drinks: JSON.stringify(drinks)
      });

    return response.status(204).send();
  },

  async delete(request, response) {
    const { id } = request.params;

    await connection('pizzaria').where('id', id).delete();
    return response.status(204).send();
  }
}
