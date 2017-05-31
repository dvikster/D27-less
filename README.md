# D27-less

D27-less

npm i -g gulp

npm i gulp gulp-less gulp-watch path

gulp watch

## ГЕНЕРАТОР ПАРОЛІВ
### Завдання 1
Напишіть об'єкт, який має 2 властивості:
- .before - приймає рядок
- .after - рядок
- .url - адреса сайту
і метод pass (), який повертає рядок створеного пароля.
Пароль створюється за правилами:
- адреса сайту (.url) обробляється. Видаляється http: //, https: //, www.
- видаляється домен (символи після останньої крапки, крапка також
віддаляється)
- усі символи "про" - замінюються на нулі.
- все символи l замінюються на 1 (маленька латинська “ель”
замінюється на одиницю)
- все символи i замінюються на I
- все символи s замінюються на 5
- перед рядком пароля додається рядок з властивості .after
- до результату додається рядок із властивості .before
Приклад. .after = dtT, .before = 738, .url = chobirushka.ua
Метод .pass () - поверне рядок dtTch0bIru5hka738
### Завдання 2
    - Створіть SPA сайт на основі цього завдання.
    - Не застосовувати фреймворки.
    - Код CSS повинен бути написаний на Less.
    - При створенні сайту використовуйте модульний підхід.
### Завдання 3
Додайте на сайт дві вкладки. Перша вкладка виконує зазначені вище дії і
називається Lite. Друга вкладка називається Strong. На вкладці Strong
генерується пароль на основі наступного алгоритму:
- властивість .after генерується випадковим алгоритмом. Це рядок 2-4
символів, який бере дані з властивості .salt у якій записані символи
(наприклад 2; + / < '\')
- також замінюється 3,5,7 символ пароля на випадковий символ з .salt.
- додаються правила заміни: z-> 2, 2> Z, 4> H, h-> 4.
Елемент input для введення url - єдиний для двох вкладок.