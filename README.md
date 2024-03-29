# Projeto App de Delivery 🍺🍸🥃

Aplicação web full construída em grupo, onde foi desenvolvido um sistema de delivery para uma distribuidora de bebidas, contendo as rotas de clientes, vendedores e administrador.

### Back-End

* Construída com Node.js, Express, JavaScript, Sequelize, MySQL e Docker
* Aplicando Arquitetura de Software, com as camadas de Modelo, Serviço e de Controladores
* Testes de integração criados utilizando Mocha, Chai e Sinon

### Front-End

* Construída com React, ContextAPI, React Hooks, Axios e CSS
* Testes de integração criados utilizando React Testing Library e Jest 


### Instruções

- Para rodar a aplicação localmente e os testes do backend, realize o clone do projeto e utilize os comandos a seguir:

```
Para clonar o projeto:
git clone git@github.com:Cleitonsub/delivery-app.git

Para rodar a aplicação "dockerizada", instalar as dependências e iniciar as aplicações:
<-- na raiz do projeto -->
npm run compose:up // para subir o docker-compose
npm run back:acess // para acessar o container do backend
npm run db:reset // para criar as tabelas e popular no banco de caso
exit // para sair do container do backend

Para parar a aplicação "dockerizada":
<-- na raiz do projeto -->
npm run compose:down // para parar os containers

Para rodar o testes do BackEnd:
<-- na raiz do projeto -->
npm run back:acess
npm test // para rodar o teste simplificado
npm run test:coverage // para avaliar a cobertura dos testes
exit // para sair do container do backend

Para rodar os testes do FrontEnd:
<-- na raiz do projeto -->
npm run front:acess
npm test // para rodar o teste simplificado
npm run test:coverage // para avaliar a cobertura dos testes
exit // para sair do container do front-end
```

<br />
<details>
  <summary><strong>A aplicação já contém alguns usuários criados:</strong></summary><br />
  
 | Usuário | E-mail | Senha |
|---|---|---|
| Delivery App Admin | `adm@deliveryapp.com` | `--adm2@21!!--` |
| Fulana Pereira | `fulana@deliveryapp.com` | `fulana@123` |
| Cliente Zé Birita | `zebirita@email.com` | `$#zebirita#$` |

</details>

### Demonstração

Rota do Cliente
<p align="center">
  <img src="https://github.com/Cleitonsub/delivery-app/blob/main/demo/customer.gif" alt="App de Delivery - Demonstração"/>
</p>

Rota do Vendedor
<p align="center">
  <img src="https://github.com/Cleitonsub/delivery-app/blob/main/demo/seller.gif" alt="App de Delivery - Demonstração"/>
</p>

Rota do Administrador
<p align="center">
  <img src="https://github.com/Cleitonsub/delivery-app/blob/main/demo/admin.gif" alt="App de Delivery - Demonstração"/>
</p>
