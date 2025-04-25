// 1. Створіть змінну, що симулює вибір варіанта зі списку. Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". Використайте switch

const coffee = "кава";
const tea = "чай";
const juice = "сік";
const message = prompt("Виберіть кава, чай або сік");

switch (message) {
  case coffee:
    alert(`Ви вибрали ${coffee}`);
    break;

  case tea:
    alert(`Ви вибрали ${tea}`);
    break;

  case juice:
    alert(`Ви вибрали ${juice}`);
    break;

  default:
    break;
}

// 2. Створіть змінну для зберігання введеного рядка, який може бути днем тижня. Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.

const dayInput = prompt("Введіть день тижня:");
const day = dayInput.trim().toLowerCase();
const workDays = ["понеділок", "вівторок", "середа", "четвер", "п’ятниця"];
const weekend = ["субота", "неділя"];

if (workDays.includes(day)) {
  alert("Сьогодні робочий день.");
} else if (weekend.includes(day)) {
  alert("Сьогодні вихідний.");
} else {
  alert("Невірний день тижня.");
}

// 3. Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року і виводьте відповідне повідомлення.

const month = parseInt(prompt("Введіть номер місяця (1–12):"), 10);

let season;

switch (month) {
  case 12:
  case 1:
  case 2:
    season = "Зима";
    break;
  case 3:
  case 4:
  case 5:
    season = "Весна";
    break;
  case 6:
  case 7:
  case 8:
    season = "Літо";
    break;
  case 9:
  case 10:
  case 11:
    season = "Осінь";
    break;
  default:
    season = null; 
}

if (season) {
  alert(`Місяць №${month} — це пора року: ${season}.`);
} else {
  alert("Невірний номер місяця! Введіть число від 1 до 12.");
}

// 4. Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".

const red = "червоний";
const yellow = "жовтий";
const green = "зелений";
const proposition = prompt("Виберіть колір: червоний,жовтий,зелений")
  .trim()
  .toLowerCase();
switch (proposition) {
  case red:
    alert("Стійте!");
    break;

  case yellow:
    alert("Чекайте");
    break;

  case green:
    alert("Можете йти");
    break;

  default:
    alert("Ви вибрали не правильний колір");
}

// 5. Створіть змінні для зберігання двох чисел та оператора (як у списку select). Виконайте відповідну операцію та виведіть результат. У випадку ділення на нуль — виведіть попередження.

const a = Number(prompt("Введіть любе число"));
const b = Number(prompt("Ввідеть любе число"));
const operator = prompt("Введіть любий оператор");
let result = "";

switch (operator) {
  case "+":
    result = a + b;
    break;
  case "-":
    result = a - b;
    break;
  case "*":
    result = a * b;
    break;
  case "/":
    if (b === 0) {
      console.warn("Помилка: ділення на нуль!");
      result = null;
    } else {
      result = a / b;
    }
    break;
  case "%":
    if (b === 0) {
      console.warn("Помилка: ділення на нуль!");
      result = null;
    } else {
      result = a % b;
    }
    break;
  default:
    console.error("Невідомий оператор:", operator);
    result = null;
}

if (result !== null) {
  alert(`${a} ${operator} ${b} = ${result}`);
}
