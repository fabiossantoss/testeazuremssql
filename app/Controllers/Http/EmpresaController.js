const Empresa = use("App/Models/Empresa");

class EmpresaController {
  async index({ request, response, view }) {
    const empresas = await Empresa.find(1);
    return { result: "teste" };

    // console.log(empresas);
  }

  async store({ request, response }) {}

  async show({ params, request, response, view }) {}

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = EmpresaController;
