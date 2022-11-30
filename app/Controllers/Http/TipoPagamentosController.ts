import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


import TipoPagamento from "App/Models/tipoPagamento";

//LISTA
export default class NotasController {
 
  public async index({ response }: HttpContextContract) {
    const tipoPagamento = await TipoPagamento.query().preload("notas_fiscais")

     response.status(201)
     return{
       message: 'Listagem do tipoPagamento:',
       data: tipoPagamento
     }
   }
/////////////////////////////////////// %% insert %%/////////////////////////////////////////////////////

  public async store({request, response}: HttpContextContract){
                                                                                          //sucesso       
    const body = request.body()
    
    const tipopagamento = await TipoPagamento.create(body)
    
    response.status(201)  //status : 201 msg: de sucesso para a inserção

    return{
      message: `cadastro ${tipopagamento.dsc_tipo_pagamento}, que um novo de tipo de pagamento realizado com sucesso`,
      Date: tipopagamento,
    }
  }


/////////////////////////////////////// %%  list por ID  %%/////////////////////////////////////////////////////
  show({ request }: HttpContextContract ) {   
 
    const id = request.param("id")      
                                                                                        //sucesso
    return TipoPagamento.findOrFail(`${id}`) 
         
  }


   /////////////////////////////////////// %% UPDATE %%/////////////////////////////////////////////////////
   public async update({params, request}: HttpContextContract ) {
    //sucesso
              const body = request.body()    
                
              const tipopagamento = await  TipoPagamento.findOrFail(params.id);
                
              tipopagamento.dsc_tipo_pagamento  = body.dsc_tipo_pagamento       
                   
                
              await tipopagamento.save()
                
              return{ 
              
              message: `Update do campo tipo de pagamento: ${tipopagamento.dsc_tipo_pagamento},realizado com sucesso`,
              data: tipopagamento,
              }
}



   /////////////////////////////////////// %% delete %%/////////////////////////////////////////////////////
  public async destroy({params,response}:HttpContextContract ) {
  
    const tipopagamento = await  TipoPagamento.findOrFail(params.id)
    
    if (tipopagamento.id != tipopagamento.id ){
      return response.status(401);
    }

   await tipopagamento.delete()
   return {
    
    message:`Tipo de pagamento: ${tipopagamento.dsc_tipo_pagamento},Excluído com sucesso!`,
    descrição:tipopagamento
    
   }
  
  }
}