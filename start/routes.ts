/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'




Route.group(() => {
          Route.post('login', async ({ auth, request, response }) => {
            const email = request.input('email')
            const password = request.input('password')
          
            try {
              const token = await auth.use('api').attempt(email, password)
              return token
            } catch {
              return response.unauthorized('Credenciais inválidas')
            }
          })
     Route.resource("/cargos","CargosController").apiOnly()
     Route.resource('/clientes','ClientesController').apiOnly()
     Route.resource('/enderecos','EnderecosController').apiOnly()
     Route.resource('/fornecedores','FornecedoresController').apiOnly()
     Route.resource('/funcionarios','FuncionariosController').apiOnly()
     Route.resource('/marcas','MarcasController').apiOnly()
     Route.resource('/notaFiscais','NotasFiscaisController').apiOnly()
     Route.resource('/produtos','ProdutosController').apiOnly()
     Route.resource('/setores','SetoresController').apiOnly()
     Route.resource('/tipoPagamentos','TipoPagamentosController').apiOnly()
     Route.resource('/produtosvendas','ProdutosVendasController').apiOnly()
  
   }).prefix('/api')
 
