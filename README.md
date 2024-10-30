# Menu-reserva-frontend

## Link da acesso

https://menu-reserva-frontend.onrender.com

## Descrição

Este projeto é uma aplicação Vue.js que utiliza várias ferramentas e bibliotecas para uma experiência de desenvolvimento suave e uma arquitetura robusta.

## Versão do Node

Este projeto requer a versão do Node.js **20.11.1**.

## Começando

Para inicializar o projeto, execute os seguintes comandos no seu terminal:

```bash
npm install
npm run dev
```

## Dependências

- **VueJS**: O framework principal para construir interfaces de usuário. O Vue.js foi projetado para ser incrementalmente adotável e se integra bem com outras bibliotecas ou projetos existentes.

- **TypeScript**: Um superconjunto de JavaScript que adiciona tipos estáticos. O TypeScript ajuda a capturar erros durante o desenvolvimento e melhora a experiência do IDE com autocompletar e verificação de tipos.

- **Vue Router**: O roteador oficial para Vue.js, permitindo que você crie aplicações de página única com navegação e roteamento dinâmico.

- **ESLint**: Uma ferramenta para identificar e corrigir problemas no código JavaScript. O ESLint ajuda a manter a qualidade e a consistência do código em toda a base de código, aplicando estilos e práticas de codificação.

- **Prettier**: Um formatador de código opinativo que ajuda a manter um estilo consistente em toda a sua base de código, formatando automaticamente o código de acordo com regras definidas.

- **Husky**: Uma ferramenta para prevenir commits, pushs e mais ruins utilizando hooks. O Husky permite que você execute scripts em diferentes pontos no fluxo de trabalho do git, melhorando a qualidade do código antes que ele chegue ao seu repositório.

- **Vuetify**: Um framework de componentes de Material Design para Vue.js. O Vuetify fornece uma ampla gama de componentes de UI que seguem as especificações de Material Design, permitindo que os desenvolvedores criem aplicações visualmente atraentes.

- **Vuex**: Uma biblioteca de gerenciamento de estado para aplicações Vue.js. O Vuex centraliza o gerenciamento de estado, tornando mais fácil gerenciar dados compartilhados entre componentes.

- **Axios**: Um cliente HTTP baseado em promessas para o navegador e Node.js. O Axios permite que você faça requisições HTTP para recuperar ou enviar dados para APIs.

- **Yup**: Um construtor de esquemas JavaScript para análise e validação de valores. O Yup é frequentemente usado em conjunto com bibliotecas de formulários para validar a entrada do usuário contra esquemas definidos.

- **vee-validate**: Uma biblioteca de validação para Vue.js que fornece uma maneira simples de validar formulários e campos. Ela se integra perfeitamente com o Vue.js e funciona bem com vários esquemas de validação.

## Uso do Commitizen

Este projeto utiliza o Commitizen para padronizar as mensagens de commit. Para fazer um commit, siga os seguintes passos:

1. **Adicionar arquivos ao commit**:

   ```bash
   git add .
   ```

   Isso adiciona todas as alterações feitas aos arquivos para o próximo commit.

2. **Iniciar o Commitizen**:

   ```bash
   git cz
   ```

   Este comando iniciará um assistente interativo que solicitará o tipo de commit.

3. **Selecionar o tipo de commit**:

   - **feat**: para novas funcionalidades.
   - **fix**: para correções de bugs.
   - (Outros tipos de commit podem ser adicionados conforme necessário).

4. **Finalizar o commit**: Após selecionar o tipo e fornecer uma descrição, o Commitizen irá formatar a mensagem do commit e concluir a operação.

5. **Enviar para o repositório remoto**:
   ```bash
   git push
   ```
   Isso envia suas alterações para o repositório remoto.
