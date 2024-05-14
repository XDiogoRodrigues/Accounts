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
    .then((answer) => {
      const action = answer["action"];
      if (action == "Criar Conta") {
        createAccount();
      }
    })
    .catch((error) => console.log(error));
}

// create an account
function createAccount() {
  console.log(chalk.bgGreen.black("Parabêns por escolher o nosso banco!"));
  console.log(chalk.green("Defina as opções da sua conta a seguir"));
}
