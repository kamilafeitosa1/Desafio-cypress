#utf-8
# language: pt
Funcionalidade: Automação de API - Cadastro

  Cenário: Criar um novo usuário com sucesso via API
    Dado que preparo os dados dinâmicos para um novo usuário
    Quando envio uma requisição POST para o endpoint de criação de conta
    Então validar que o usuário foi criado com sucesso com status code 201
    
    