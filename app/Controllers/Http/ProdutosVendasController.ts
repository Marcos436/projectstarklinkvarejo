import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


import ProdutosVenda from "App/Models/produtosVenda";
import ProdutosVendaValidator from 'App/Validators/ProdutosVendaValidator';


/////////////////////////////////////// %% list %%/////////////////////////////////////////////////////
export default class ProdutoVendasController {
  
  
  public async index({response}: HttpContextContract ) {
  
    const produtosVenda = await ProdutosVenda.query().preload("produtos")//.preload("nota_fiscal").preload("clientes")

     response.status(201)
     return{
       message: 'Listagem do ProdutosVenda:',
       data: produtosVenda
     }
   }
/////////////////////////////////////// %% insert %%/////////////////////////////////////////////////////

  public async store({request, response}: HttpContextContract){
                                                                                          //sucesso       
    const body = await request.validate(ProdutosVendaValidator)
    
    const produtoVenda = await ProdutosVenda.create(body)
    
    response.status(201)  //status : 201 msg: de sucesso para a inserção

    return{
      message: `Cadastro de nova venda do produto ${produtoVenda.produtoId} realizado com sucesso`,
      Date: produtoVenda,
    }
  }


/////////////////////////////////////// %%  list por ID  %%/////////////////////////////////////////////////////
  show({ request }: HttpContextContract ) {   
 
    const id = request.param("id")      
                                                                                        //sucesso
    return ProdutosVenda.findOrFail(`${id}`) 
         
  }


   /////////////////////////////////////// %% update %%/////////////////////////////////////////////////////
   public async update({params, request}: HttpContextContract ) {
    //sucesso
              const body = await  request.validate(ProdutosVendaValidator)    
                
              const produtoVenda = await  ProdutosVenda.findOrFail(params.id);
                
              produtoVenda.dt_venda  = body.dt_venda       
              produtoVenda.nota_fiscalId  = body.nota_fiscalId
              produtoVenda.clienteId  = body.clienteId      
              produtoVenda.produtoId  = body.clienteId      
                   
                
              await produtoVenda.save()
                
              return{ 
              
              message: `Update do campo das vendas dos produtos realizado com sucesso`,
              data: produtoVenda,
              }
}



   /////////////////////////////////////// %% delete %%/////////////////////////////////////////////////////
  public async destroy({params,response}:HttpContextContract ) {
  
    const produtoVenda = await  ProdutosVenda.findOrFail(params.id)
    
    if (produtoVenda.id != produtoVenda.id ){
      return response.status(401);
    }

   await produtoVenda.delete()
   return {
    
    message:`venda do produto ${produtoVenda.produtoId}, Excluído com sucesso!`,
    descrição:produtoVenda
    
   }
  
  }
}