import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Produto from "App/Models/produto";
import ProdutoValidator from 'App/Validators/ProdutoValidator';
 

/////////////////////////////////////// %% list %%/////////////////////////////////////////////////////
export default class NotasController {
 
  
  public async index({ response }: HttpContextContract) {
    const produto = await Produto.query().preload("marcas")

     response.status(201)
     return{
       message: 'Listagem do produto:',
       data: produto
     }
   }
/////////////////////////////////////// %% insert %%/////////////////////////////////////////////////////

  public async store({request, response}: HttpContextContract){
                                                                                          //sucesso       
    const body = await request.validate(ProdutoValidator)
    
    const produto = await Produto.create(body)
    
    response.status(201)  //status : 201 msg: de sucesso para a inserção

    return{
      message: `Cadastro do produto ${produto.dsc_produto}, realizado com sucesso`,
      Date: produto,
    }
  }


/////////////////////////////////////// %%  list por ID  %%/////////////////////////////////////////////////////
  show({ request }: HttpContextContract ) {   
 
    const id = request.param("id")      
                                                                                        //sucesso
    return Produto.findOrFail(`${id}`) 
         
  }


   /////////////////////////////////////// %% update %%/////////////////////////////////////////////////////
   public async update({params, request}: HttpContextContract ) {
                                                                                          //sucesso
              const body = await request.validate(ProdutoValidator)    
                
              const produto = await  Produto.findOrFail(params.id);
                
              produto.dsc_produto  = body.dsc_produto       
              produto.departamento  = body.departamento       
              produto.preco  = body.preco       
              produto.quantidade  = body.quantidade       
              produto.marcaId  = body.marcaId       
              produto.fornecedorId  = body.fornecedorId       
                   
                
              await produto.save()
                
              return{ 
              
              message: `Update do campo do produto${produto.id} realizado com sucesso`,
              data: produto,
              }
}



   /////////////////////////////////////// %% delete %%/////////////////////////////////////////////////////
  public async destroy({params,response}:HttpContextContract ) {
  
    const produto = await  Produto.findOrFail(params.id)
    
    if (produto.id != produto.id ){
      return response.status(401);
    }

   await produto.delete()
   return {
    
    message:`Produto ${produto.dsc_produto}Excluído com sucesso!`,
    descrição:produto
    
   }
  
  }
}
