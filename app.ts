import inquirer from 'inquirer';
import db from './database';
import { manageDepartments } from './department';
import { manageRoles } from './role';
import { manageEmployees } from './employee';

enum MenuOptions {
  ManageDepartments = 'Manage Departments',
  ManageRoles = 'Manage Roles',
  ManageEmployees = 'Manage Employees',
  Exit = 'Exit',
}

const mainMenu = async () => {
  const answer = await inquirer.prompt<{ action: MenuOptions }>({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: Object.values(MenuOptions),
  });

  switch (answer.action) {
    case MenuOptions.ManageDepartments:
      await manageDepartments();
      break;
    case MenuOptions.ManageRoles:
      await manageRoles();
      break;
    case MenuOptions.ManageEmployees:
      await manageEmployees();
      break;
    case MenuOptions.Exit:
      await db.disconnect();
      console.log('Goodbye!');
      return;
  }

  await mainMenu();
};

db.connect().then(mainMenu).catch(console.error);