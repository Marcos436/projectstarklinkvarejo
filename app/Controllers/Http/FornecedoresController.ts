import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


import Fornecedore from "App/Models/fornecedore";
import FornecedoreValidator from 'App/Validators/FornecedoreValidator';
 

/////////////////////////////////////// %% list %%//////////////////////////////////////////////////////////////
export default class FornecedoresController {

  public async index({ response }: HttpContextContract) {
   const fornecedor = await Fornecedore.query().preload("produtos")
    response.status(201)
    return{
      message: 'Listagem do Cargos:',
      data: fornecedor
    }
  }
/////////////////////////////////////// %% insert %%////////////////////////////////////////////////////////////

  public async store({request, response}: HttpContextContract){
                                                                                                    //sucesso       
    const body = await request.validate(FornecedoreValidator)
    
    const fornecedore = await Fornecedore.create(body)
    
    response.status(201)  //status : 201 msg: de sucesso para a inserção

    return{
      message: `Fornecedor ${fornecedore.nome_comercial} cadastrado com sucesso !`,
      Date: fornecedore,
    }
  }


/////////////////////////////////////// %%  list por ID  %%/////////////////////////////////////////////////////
  show({ request }: HttpContextContract ) {   
 
    const id = request.param("id")      
                                                                                                    //sucesso
    return Fornecedore.findOrFail(`${id}`) 
         
  }


   /////////////////////////////////////// %% update %%/////////////////////////////////////////////////////////
   public async update({params, request}: HttpContextContract ) {
                                                                                                    //sucesso
          const body = await request.validate(FornecedoreValidator)    

          const fornecedore = await  Fornecedore.findOrFail(params.id);

          fornecedore.nome_comercial  = body.nome_comercial       
          fornecedore.cnpj  = body.cnpj     
          fornecedore.telefone   =  body.telefone    
          fornecedore.enderecoId   = body.enderecoId

          await fornecedore.save()

          return{ 
          
          message: `Update do campo fornecedor realizado com sucesso`,
          data: fornecedore,
          }
}



   /////////////////////////////////////// %% delete %%/////////////////////////////////////////////////////////
  public async destroy({params,response}:HttpContextContract ) {
                                                                                                   //sucesso
    const fornecedore = await  Fornecedore.findOrFail(params.id)
    
    if (fornecedore.id != fornecedore.id ){
      return response.status(401);
    }

   await fornecedore.delete()
   return {
    
    message:`Fornecedor ${fornecedore.nome_comercial} Excluído com sucesso!`,
    descrição:fornecedore
    
   }
  
  }
}
