//import {v4 as uuidv4 } from 'uuid'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cliente from "App/Models/cliente";

import ClienteValidator from 'App/Validators/ClienteValidator';





/////////////////////////////////////// %% list %%/////////////////////////////////////////////////////
export default class ClientesController {


  public async index({ response }: HttpContextContract) {
    const clientes = await Cliente.query().preload("notas_fiscais")

     response.status(201)
     return{
       message: 'Listagem do clientes:',
       data: clientes
     }
   }
  /////////////////////////////////////// %% insert %%/////////////////////////////////////////////////////

  public async store({request, response }: HttpContextContract,  ){
                                                                                          //sucesso       
    
  

    const body = await request.validate(ClienteValidator)
      //@ts-ignore
    const cliente = await Cliente.create(body)


    response.status(201)  //status : 201 msg: de sucesso para a inserção

    return {
      message: `Cadastro do ${cliente.nome},Criado com sucesso!!`,
      Date: cliente,
    }

  }


  /////////////////////////////////////// %%  list por ID  %%/////////////////////////////////////////////////////
  show({ request }: HttpContextContract) {

    const id = request.param("id")
    //sucesso
    return Cliente.findOrFail(`${id}`)

  }


  /////////////////////////////////////// %% update %%/////////////////////////////////////////////////////
  public async update({ params, request }: HttpContextContract) {
    //sucesso
    const body = await request.validate(ClienteValidator)

    const cliente = await Cliente.findOrFail(params.id);

    cliente.nome = body.nome
    cliente.cpf = body.cpf
    cliente.telefone = body.telefone
    cliente.genero = body.genero
    cliente.dt_nascimento = body.dt_nascimento
    cliente.enderecoId = body.enderecoId
    cliente.email = body.email
    cliente.password = body.password

    await cliente.save()

    return {

      message: `Update dos dados do cliente ${cliente.nome} realizado com sucesso`,


      data: cliente,
    }
  }



  /////////////////////////////////////// %% delete %%/////////////////////////////////////////////////////
  public async destroy({ params, response }: HttpContextContract) {

    const cliente = await Cliente.findOrFail(params.id)

    if (cliente.id != cliente.id) {
      return response.status(401);
    }

    await cliente.delete()
    return {

      message: `Cliente ${cliente.nome} Excluído com sucesso!`,
      descrição: cliente

    }

  }
}
