// Request
// {
//     animal: 'cat' | 'dog' | 'bird',
//     breed: string,
//     sterilized?: string
// }

// Response #1

// {
//     status: 'available',
//     data: {
//         animal: 'cat' | 'dog' | 'bird',
//         breed: string,
//         sterilized?: string,
//         location: string,
//         age?: number
//     }
// }

// Response #2

// {
//     status: 'not available',
//     data: {
//         message: string,
//         nextUpdateIn: Date
//     }
// }

// function checkAnimalData1(animal) {
//   if ("available") {
//     // Заменить условие!
//     return animal.data;
//   } else {
//     return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
//   }
// }

// * ===========================================================================================================

type Animal = "cat" | "dog" | "bird";

// Можно и не создавать перечисление, но вдруг в будущем статусов будет больше?

enum AnimalStatus {
  Available = "available",
  NotAvailable = "not available",
}

interface AnimalData {
  animal: Animal;
  breed: string;
  sterilized?: string;
}
// Не повторяем код, используем extends
interface AnimalAvailableData extends AnimalData {
  location: string;
  age?: number;
}

interface AnimalNotAvailableData {
  message: string;
  nextUpdateIn: Date;
}

// Интерфейсы стоит разделить, так как оба ответа будут иметь поле data
// И только по статусу будет сложно определить данные

interface AnimalAvailableResponse {
  status: AnimalStatus.Available;
  data: AnimalAvailableData;
}

interface AnimalNotAvailableResponse {
  status: AnimalStatus.NotAvailable;
  data: AnimalNotAvailableData;
}

type Res = AnimalAvailableResponse | AnimalNotAvailableResponse;

function isAvailable(res: Res): res is AnimalAvailableResponse {
  //   if (res.status === AnimalStatus.Available) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return (res as AnimalAvailableResponse).status === AnimalStatus.Available;
}

function checkAnimalData(animal: Res): AnimalAvailableData | string {
  if (isAvailable(animal)) {
    return animal.data;
  } else {
    return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
  }
}
const val = {
  message: "Not to easy !!!",
  nextUpdateIn: new Date(),
};
const sampleNotAval = {
  status: AnimalStatus.NotAvailable,
  data: val,
} as AnimalNotAvailableResponse;

const sampleAval = {
  //   status: "available",
  status: AnimalStatus.Available,
  data: {
    animal: "cat",
    breed: "Scottish Fold",
    sterilized: "NEVER",
    location: "Poland",
    age: 7,
  },
} as AnimalAvailableResponse;

console.log(checkAnimalData(sampleAval));
console.log(checkAnimalData(sampleNotAval));
