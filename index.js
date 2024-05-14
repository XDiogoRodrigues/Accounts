const chalk = require("chalk");
const inquirer = require("inquirer");
const fs = require("fs");

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
  builderAccount();
}

function builderAccount() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite um nome para a sua conta:",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];

      if (!fs.existsSync("accounts")) {
        fs.mkdirSync("accounts");
      }

      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(
          chalk.bgRed.black("Está conta já existe, escolha outra nome!")
        );
        builderAccount();
        return;
      }

      fs.writeFileSync(
        `accounts/${accountName}.json`,
        '{"balance": 0}',
        (error) => {
          console.log(error);
        }
      );

      console.log(chalk.green("Parabêns, sua conta foi criada!"));
      operation();
    })
    .catch((error) => console.log(error));
}
