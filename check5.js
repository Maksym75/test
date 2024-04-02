"use strict";
// Request
// {
//     animal: 'cat' | 'dog' | 'bird',
//     breed: string,
//     sterilized?: string
// }
// Можно и не создавать перечисление, но вдруг в будущем статусов будет больше?
var AnimalStatus;
(function (AnimalStatus) {
    AnimalStatus["Available"] = "available";
    AnimalStatus["NotAvailable"] = "not available";
})(AnimalStatus || (AnimalStatus = {}));
function isAvailable(res) {
    //   if (res.status === AnimalStatus.Available) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    return res.status === AnimalStatus.Available;
}
function checkAnimalData(animal) {
    if (isAvailable(animal)) {
        return animal.data;
    }
    else {
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
};
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
};
console.log(checkAnimalData(sampleAval));
console.log(checkAnimalData(sampleNotAval));
