
## Requisitos
- Node
- Mysql

## Instalação
- Baixe o repositório
- Execute o comando: ``` npm install ``` ou ``` yarn install ``` 
- Crie um arquivo ``` .env ```
  - No arquivo adicione as seguintes variaveis:
  ```
  PORT=portaServidor
  
  DB_HOST=hostBanco
  DB_USER=userBanco
  DB_PASSWORD=senhaBanco
  DB_DATABASE=databaseNome
  
  ```
- Abra a pasta ```src/database/``` no terminal
- Dentro do terminal execute o seguinte comando para rodar as migrations: ```knex migrate:latest --env production ```
- Execute o comando ``` npm start``` ou ```yarn start``` para iniciar o servidor.

