import { test, expect } from '../fixtures/e2ebase';

// Helper to generate unique data

function generateUniqueName(prefix: string) {
  const timestamp = Date.now();
  return `${prefix}_${timestamp}`;
}

function generateRandomAge() {
  return Math.floor(Math.random() * 60) + 18;
}

function generateRandomEmail() {
  const timestamp = Date.now();
  return `user_${timestamp}@mail.com`;
}

function generateRandomSalary() {
  return Math.floor(Math.random() * 90000) + 10000;
}

function generateRandomDepartment() {
  const departments = ['Engineering', 'HR', 'Marketing', 'Finance', 'Sales'];
  return departments[Math.floor(Math.random() * departments.length)];
}

//Test Case 1: Add Users on the table
test('Add unique user in Web Tables page', async ({ page, addOnTablePage }) => {
  await addOnTablePage.open();
  await addOnTablePage.clickAddButton();

  const firstName = generateUniqueName('First');
  const lastName = generateUniqueName('Last');
  const email = generateRandomEmail();
  const age = generateRandomAge().toString();
  const salary = generateRandomSalary().toString();
  const department = generateRandomDepartment();

  await addOnTablePage.fillAndSubmitForm(firstName, lastName, email, age, salary, department);

  const rows = await addOnTablePage.getTableRows();
  await expect(rows).toContainText(firstName);
  await expect(rows).toContainText(lastName);
}); 