"use strict";
// структура данных склада с одеждой
// главный объект со всеми данными, должен подходить под формат TotalWarehouse
const totalData = {
    jackets: 5,
    hats: "empty",
    socks: "empty",
    pants: 15,
    scissors: 15,
    paper: true,
    dishwashers: 3,
    cookers: "empty",
    mixers: 14,
    deficit: true,
    date: new Date(),
};
// Реализуйте функцию, которая принимает в себя главный объект totalData нужного формата
// и возвращает всегда строку
// Функция должна отфильтровать данные из объекта и оставить только те названия товаров, у которых значение "empty"
// и поместить их в эту строку. Если таких товаров нет - возвращается другая строка (см ниже)
// С данным объектом totalData строка будет выглядеть:
// "We need this items: hats, socks, cookers"
// Товары через запятую, в конце её не должно быть. Пробел после двоеточия, в конце строки его нет.
function printReport(data) {
    const entries = Object.entries(data)
        // .filter((d) => typeof d[1] === "string")
        .filter((d) => d[1] === "empty")
        .reduce((tot, item) => {
        return `${tot} ${item[0]},`;
    }, "");
    if (entries.trim().length) {
        // console.log("entries.trim().length--", entries.trim().length);
        // console.log("entries.length--", entries.length);
        return `We need this items:${entries.slice(0, -1)}`;
    }
    else {
        return "Everything fine";
    }
}
console.log(printReport(totalData));
