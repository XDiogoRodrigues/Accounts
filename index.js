const chalk = require("chalk");
const inquirer = require("inquirer");

function operation() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "O que você gostaria de fazer?",
        choices: [
          "Criar Conta",
          "Consultar Saldo",
          "Depositar",
          "Sacar",
          "Sair",
        ],
      },
    ])
    .then()
    .catch((error) => console.log(error));
}
