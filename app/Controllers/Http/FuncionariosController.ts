import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Funcionario from "App/Models/funcionario";
import FuncionarioValidator from 'App/Validators/FuncionarioValidator';
 

/////////////////////////////////////// %% list %%/////////////////////////////////////////////////////
export default class FuncionariosController {
  
  
  public async index({response}: HttpContextContract ) {
  
    const body = response.getBody()
 
    const funcionario = await Funcionario.all(body);

    response.status(201)  //status : 201 msg: de sucesso para a inserção

    return{
      message: `Listagem de dados dos funcionarios: `,
      data: funcionario,
    }

  }
/////////////////////////////////////// %% insert %%/////////////////////////////////////////////////////

  public async store({request, response}: HttpContextContract){
                                                                                          //sucesso
    const body = await request.validate(FuncionarioValidator)
    //@ts-ignore
    const funcionario = await Funcionario.create(body)
    
    response.status(201)  //status : 201 msg: de sucesso para a inserção

    return{
      message: `Cadastro do no Funcionario ${funcionario.nome} Realizado com sucesso !`,
      Date: funcionario,
    }
  }


/////////////////////////////////////// %%  list por ID  %%/////////////////////////////////////////////////////
  show({ request }: HttpContextContract ) {   
 
    const id = request.param("id")      
                                                                                        //sucesso
    return Funcionario.findOrFail(`${id}`) 
         
  }


   /////////////////////////////////////// %% update %%/////////////////////////////////////////////////////
   public async update({params, request}: HttpContextContract ) {
    //sucesso
              const body = await request.validate(FuncionarioValidator)    
                
              const funcionario = await  Funcionario.findOrFail(params.id);
                
              funcionario.nome  = body.nome
              funcionario.cpf  = body.cpf
              funcionario.matricula  = body.matricula
              funcionario.telefone  = body.telefone
              funcionario.email  = body.email
              funcionario.estado_civil  = body.estado_civil
              funcionario.genero  = body.genero
              funcionario.dt_nascimento  = body.dt_nascimento
              funcionario.enderecoId  = body.enderecoId
              funcionario.cargoId  = body.cargoId
              funcionario.setorId   = body.setorId
                   
                
              await funcionario.save()
                
              return{
              
              message: `Update do campo do Funcionario realizado com sucesso`,
              data: funcionario,

              }

}



   /////////////////////////////////////// %% delete %%/////////////////////////////////////////////////////
  public async destroy({params,response}:HttpContextContract ) {
  
    const funcionario = await  Funcionario.findOrFail(params.id)
    
    if (funcionario.id != funcionario.id ){
      return response.status(401);
    }

   await funcionario.delete()
   return {
    
    message:`Funcionario ${funcionario.nome} realizado com sucesso !`,
    descrição:funcionario
    
   }
  
  }
}
