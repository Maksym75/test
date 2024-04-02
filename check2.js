"use strict";
const electricityUserData = {
    readings: 95,
    units: "kWt",
    mode: "double",
};
const waterUserData = {
    readings: 3,
    units: "m3",
};
const elRate = 0.45;
const wRate = 2;
const monthPayments = [0, 0]; // [electricity, water]
const calculatePayments = ({ readings, mode }, wData, elRate, wRate) => {
    if (mode === "double" && readings < 50) {
        monthPayments[0] = readings * elRate * 0.7;
    }
    else {
        monthPayments[0] = readings * elRate;
    }
    monthPayments[1] = wData.readings * wRate;
};
calculatePayments(electricityUserData, waterUserData, elRate, wRate);
const sendInvoice1 = (monthPayments, electricityUserData, waterUserData) => {
    const text = `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity

     It will cost: ${monthPayments[0]}€

    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${monthPayments[1]}€`;
    return text;
};
const sendInvoice = ([el, wt], electricityUserData, waterUserData) => {
    const text = `    Hello!
	  This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
	  It will cost: ${el}€
	  This month you used ${waterUserData.readings} ${waterUserData.units} of water
	  It will cost: ${wt}€`;
    return text;
};
const invoice = sendInvoice(monthPayments, electricityUserData, waterUserData);
console.log(invoice);
const invoice1 = sendInvoice1(monthPayments, electricityUserData, waterUserData);
console.log(invoice);
