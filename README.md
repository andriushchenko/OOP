Потрібно створити два класи Casino (Казино) і SlotMachine (Ігровий Автомат)
Конструктор класу Casino приймає два параметри: кількість SlotMachine у казино (number) і початкову суму грошей яка заноситься в казино (number).
Конструктор класу SlotMachine приймає один вхідний параметр: початкову суму грошей яка заноситься в автомат (number).
При створенні екземпляру Casino його конструктор створює необхідну кількість екземплярів SlotMachine (один з екземплярів SlotMachine повинен бути lucky) і розподіляє рівномірно(залишок заноситься на перший автомат) вхідну суму між усіма автоматами.
Клас Casino має мати публічні методи, які дозволяють:
Отримати загальну суму грошей у казино
Отримати кількість автоматів у казино
Додати новий автомат (в цьому випадку новий автомат має отримати як стартову суму, половину грошей з автомата, у якому їх на даний момент найбільше)
Видалити автомат за номером (гроші з видаленого автомату розподіляються між рештою кас)
Забрати з казино гроші. Вхідний аргумент - сума (number). Функція має зібрати потрібну суму з автоматів(послідовність від автомата, у якому грошей найбільше, до автомата у якому грошей найменше) і повернути її. 
Клас SlotMachine має мати публічні методи, які дозволяють:
Отримати загальну суму грошей у автоматі
Забрати гроші . Вхідний аргумент - сума (number).
Покласти гроші . Вхідний аргумент - сума (number).
Зіграти. Вхідний аргумент - сума (number) грошей яку гравець закидує в автомат. Гроші зараховуються у суму автомату.  Метод генерить випадкове 3-х значне число (наприклад 124). Якщо у числі 2 цифри однакові, повертається сума у 2 рази більша ніж прийшла в аргументі (і віднімається від суми грошей в автоматі). Якщо 3 цифри однакові - повертається 5-кратна сума. Якщо число дорівнює 777, повертаються усі гроші, які є в автоматі.  Якщо даний SlotMachine є lucky тоді 3-х значне число не випадкове а дорівнює 777.
Необхідно запобігти нелогічній поведінці (кількість автоматів менше нуля, намагаємось видалити неіснуючий автомат, кількість грошей в автоматі чи в казино менше нуля)
Потрібно написати скрипт, який буде демонструвати роботу усіх створених методів.
