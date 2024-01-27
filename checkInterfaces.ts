// структура данных склада с одеждой

type EmptyNumber = "empty" | number;
interface ClothesWarehouse {
  jackets: EmptyNumber;
  hats: EmptyNumber;
  socks: EmptyNumber;
  pants: EmptyNumber;
}

// структура данных склада с канцтоварами

interface StationeryWarehouse {
  scissors: EmptyNumber;
  paper: "empty" | boolean;
}

// структура данных склада с бытовой техникой

interface AppliancesWarehouse {
  dishwashers: EmptyNumber;
  cookers: EmptyNumber;
  mixers: EmptyNumber;
}

// общая структура данных, наследует все данные из трех выше
// + добавляет свои

interface TotalWarehouse
  extends ClothesWarehouse,
    StationeryWarehouse,
    AppliancesWarehouse {
  deficit: boolean;
  date: Date;
}

// главный объект со всеми данными, должен подходить под формат TotalWarehouse

const totalData: TotalWarehouse = {
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

function printReport(data: TotalWarehouse): string {
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
  } else {
    return "Everything fine";
  }
}

console.log(printReport(totalData));
