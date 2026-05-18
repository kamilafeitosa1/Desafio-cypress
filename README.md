🚀 Desafio Cypress - Automação UI e API
📌 Sobre o projeto
Este projeto tem como objetivo automatizar testes de um sistema de e-commerce utilizando Cypress, cobrindo tanto fluxos Web (UI) quanto testes de API, aplicando boas práticas de automação, organização e segurança.

O sistema alvo utilizado foi:
👉 https://www.automationexercise.com

🧪 Cenários automatizados
✅ UI (Web)
Fluxo automatizado:

Acesso ao site
Navegação até Signup / Login
Cadastro de novo usuário
Validação de login com sucesso
Busca do produto “Men Tshirt”
Captura de nome e valor do produto
Adição do produto ao carrinho
Validação da mensagem de sucesso
Validação do produto dentro do carrinho


✅ API
Automação do endpoint:
POST /api/createAccount

Validações implementadas:

Status code 201
Mensagem: "User created!"
Validação da estrutura da resposta
Confirmação da criação do usuário


🛠️ Tecnologias utilizadas

Cypress
Cucumber (BDD)
JavaScript (Node.js)
Faker (dados dinâmicos)


🧱 Estrutura do projeto A estrutura foi organizada com foco em escalabilidade e separação de responsabilidades: DESAFIO_CYPRESS │ ├── cypress │ ├── e2e │ │ ├── back-end │ │ │ ├── api.feature │ │ │ └── site.feature │ │ │ ├── fixtures │ │ └── example.json │ │ │ ├── plugins │ │ └── file-tasks.js │ │ │ ├── support │ │ ├── pages │ │ │ ├── API │ │ │ ├── adicionarCarrinho.page.js │ │ │ ├── cadastro.page.js │ │ │ └── portal.page.js │ │ │ │ │ ├── step-definitions │ │ │ ├── automationexercise.cy.js │ │ │ ├── formulario.cy.js │ │ │ └── item.cy.js │ │ │ │ │ ├── commands.js │ │ └── e2e.js │ ├── node_modules ├── .gitignore ├── cypress.config.js ├── cypress.env.json ├── package.json ├── package-lock.json └── README.md

🔎 Padrões e boas práticas aplicadas

✅ Page Object Model (POM)
✅ BDD com Cucumber
✅ Separação de camadas (UI e API)
✅ Uso de dados dinâmicos com Faker
✅ Requisições organizadas e reutilizáveis
✅ Uso de cypress.env.json para dados sensíveis
✅ Não reutilização de e-mails


▶️ Como executar o projeto
1. Clonar o repositório
git clone https://github.com/seu-usuario/seu-repo.git

2. Instalar dependências
npm install

3. Executar os testes

Modo interativo:
npx cypress open

Modo headless:
npx cypress run

⚙️ Configuração

Crie o arquivo:
cypress.env.json

Exemplo de configuração:
JSON{  "baseUrl": "https://www.automationexercise.com",  
"apiUrl": "https://automationexercise.com/api"}

📊 Diferenciais implementados

✅ Estrutura escalável
✅ Código reutilizável
✅ Custom commands
✅ Geração de dados dinâmicos
✅ Separação clara entre UI e API


📈 Critérios atendidos

Organização do projeto
Clareza dos cenários
Boas práticas de automação
Cobertura de testes UI + API


👩‍💻 Autora
Kamila Feitosa

💡 Observações
Este projeto foi desenvolvido com foco em:

Código limpo e organizado

Facilidade de manutenção

Escalabilidade dos testes
