'use strict'
import { JSDOM } from 'jsdom'
//? TUPLE Кортеж

const userDataTuple: [boolean, number, ...string[]] = [
	true,
	48,
	'Jameson',
	'Max',
	'John',
]
const userDataTuple1: [...boolean[], number, string] = [
	true,
	false,
	false,
	48,
	'Jameson',
]
const res = userDataTuple.map(t => `${t} - data`)
const res1 = userDataTuple1.map(t => `${t} - data`)
console.log(res)
console.log(res1)

//?????      !!!!!!!!! from index1.ts  продолжение урока в видео 24 про интерфейсы на 16 minуте 30 secунде
//* Благодаря такому Интерфейсу мы можем Фильтровать то что нам приходит из например serverNewConfig и backNewConfig --

const serverNewConfig = {
	protocol: 'http',
	port: 3000,
	role: 'ADMIN',
}

//! либо  наоборот , еслт мы добавим BasicConfig - то нам не пропустит role !!  закоментир верхний BasicConfig и разкомент нижний
// const serverNewConfig: BasicConfig = {
// 	protocol: 'http',
// 	port: 3000,
// 	role: 'ADMIN',
// }

const backNewConfig = {
	protocol: 'https',
	port: 3001,
}

interface BasicConfig {
	protocol: string
	port: number
}

const startServerNew = (config: BasicConfig): 'Server started' => {
	console.log(
		`Server started on protocol ${config.protocol}://server:${config.port}`
	)
	return 'Server started'
}

startServerNew(serverNewConfig)
startServerNew(backNewConfig)

interface User {
	readonly login: string
	password: string
	age: number
	readonly addrs?: string
	parents?: {
		father?: string
		mother?: true
	}
}

const user: User = {
	login: 'Maxim75',
	password: 'qwerty',
	age: 47,
}
const userFreeze: Readonly<User> = {
	login: 'Maxim755',
	password: 'qwerty5',
	age: 45,
}

user.password = 'i8bt7'
// userFreeze.passwod="i8bt7"

function sendUserData(obj: User, db?: string): void {
	console.log(obj.parents?.father?.toLowerCase(), db?.toUpperCase())
}

const basicPorts: readonly [number, ...string[]] = [3000, '3001', '3002']
// basicPorts[0] = 55;
// basicPorts.push("guu u  ");
const basicPorts1: readonly number[] = [3000, 3001, 3002]

const basicPorts2: ReadonlyArray<number> = [3000, 3001, 3002]
// basicPorts2[0] = 55;
// basicPorts2.push("guu u  ");

//**  -- ENUM enum ---- ENUM enum ---- ENUM enum ---- ENUM enum ---- ENUM enum ---- ENUM enum -  */
enum Directions {
	TOP = 1,
	RIGHT = 2,
	LEFT = 7,
	BOTTOM = 9,
}
enum TimingFunc {
	EASE = 'ease',
	EASE_IN = 'ease-in',
	LINEAR = 'linear',
}
enum TimingFuncN {
	EASE = 9,
	EASE_IN = 10,
	LINEAR = EASE * 2,
}

function frame(elem: string, dir: Directions, tFunc: TimingFuncN): void {
	if (dir === Directions.RIGHT) {
		console.log(tFunc)
		console.log(dir)
		console.log(elem)
	}
}

frame('ID', Directions.RIGHT, TimingFuncN.LINEAR)

//* --UNKNOWN unknown=--UNKNOWN unknown--UNKNOWN unknown--UNKNOWN unknown=--UNKNOWN unknown=

// let smth: unknown;
// smth = "str";
// let data: string[] = smth;
// data.find((e) => e);

// let someValue: any;
// someValue = "str";
// let dataN: string[] = someValue;
// dataN.find((e) => e);

const userDataN = `{"isBirthdayData": true ,"userNameData": "Masha", "ageData": 36}`

function saveParse(s: string): unknown {
	return JSON.parse(s)
}
const data = saveParse(userDataN)

function transferData(d: unknown): void {
	if (typeof d === 'string') {
		console.log(d.toLocaleUpperCase())
	} else if (d && typeof d === 'object') {
		console.log(d)
	} else console.error('Some ERROR')
	;('Some')
}
// transferData(data);

// try {
//   if (1) {
//     throw new Error("eRRor");
//   }
// } catch (e) {
//   if (e instanceof Error) {
//     console.log(e.message);
//   } else if (typeof e === "string") {
//     console.log(e);
//   }
// }

type T0 = any | unknown
type T1 = number | unknown

type T2 = any & unknown
type T3 = number & unknown

//* -- Запросы Типов-- Запросы Типов -- Запросы Типов -- Запросы Типов -- Запросы Типов
const dataFromControl = {
	water: 200,
	el: 350,
}

function checkReadingsN(data: typeof dataFromControl): boolean {
	const dataFromUser = {
		water: 200,
		el: 350,
	}
	if (data.el === dataFromUser.el && data.water === dataFromUser.water) {
		return true
	} else return false
}
console.log(checkReadingsN(dataFromControl))

const PI = 3.14
let piClone: typeof PI

// * -- Type assertion-- Type assertion-- Type assertion-- Type assertion-- Type assertion

const fetchData = (url: string, method: 'GET' | 'POST'): void => {
	// console.log(method);
}
//? First ----------------------------==================================
const reqOptions = {
	url: 'https://someurl.com',
	method: 'GET',
}
fetchData(reqOptions.url, reqOptions.method as 'GET')

//? Second ----------------------------==================================
const reqOptions2 = {
	url: 'https://someurl.com',
	// method: "GET",
	method: 'GET' as 'GET',
}
fetchData(reqOptions2.url, reqOptions2.method)

//? Third ----------------------------==================================
const reqOptions3 = {
	url: 'https://someurl.com',
	method: 'GET',
} as const
fetchData(reqOptions3.url, reqOptions3.method)

//* DOM work with errors==========================================================================================

const box = document.querySelector('.box') as HTMLElement
// box.style;
// box?.classList;

// const input = document.querySelector("input") as HTMLInputElement;
// //* 1
// const someNumber: number = Number(input.value);
// console.log("someNumber", someNumber);

// //* 2
// const someNumber1: number = +input.value;
// console.log("someNumber1", someNumber1);

// //* 3 НЕ очень хорошо так делать
// const someNumber2: number = input.value as any as number;
// console.log("someNumber2", someNumber2);

let b = { e: '9y8uig', c: false } as const
let c = [44, 88] as const

let value = 'value'
let obj = { e: 'aogf', c: false }
let arr = ['yftyd', 'hv']

// let TO = arr as const;
let a = Math.round(Math.random() * 1) ? 'YES' : 'No'
// console.log("a", a);

interface Department {
	name: string
	budget: number
}
const department: Department = {
	name: 'web-dev',
	budget: 30000,
}
interface Project {
	name: string
	projectBudget: number
}
//* так будет  name и budget и projectBudget, А нам нужно name и projectBudget !
// const mainProject: Project = {
//   ...department,
//   projectBudget: 5000,
// };

function transformDepartment(dep: Department, amount: number): Project {
	return {
		name: dep.name,
		projectBudget: amount,
	}
}
const mainProject2: Project = transformDepartment(department, department.budget)
// console.log(mainProject2);

function ptintMsg1(msg: string[] | number | boolean): void {
	if (Array.isArray(msg)) {
		msg.forEach(m => console.log(m))
	} else if (isNumber(msg)) {
		console.log(msg.toFixed())
	} else console.log(msg)
	console.log('source', msg)
}

ptintMsg1(5.778787)
ptintMsg1(['jyfvvyufv', '1111', '7i6ru6ru6'])
ptintMsg1(false)

// *FOO  PREDICAT-------------------------------------------------------------------------------------------------
function isNumber(n: unknown): n is number {
	return typeof n === 'number'
}

//? video 37-38
interface Car {
	name: 'car'
	engine: string
	wheels: {
		number: number
		type: string
	}
}
interface Ship {
	name: 'ship'
	engine: string
	sail: {
		size: number
		quantity: number
	}
}
interface Airplane {
	name: 'airplane'
	engine: string
	wings: string
}
interface MistakeAirplane {
	name: 'SomeShet'
	engine: string
	wings: string
}

//* if we add in Vehicle ( | MistakeAirplane ) - and forgot add in switch case, We will see Mistake in (const smth:)
//* what why it very useful case  !!! ( const smth: never = vehicle )
type Vehicle = Car | Ship | Airplane

//? ВАЖНО !!! без : car is Car  не будет правильно работать если попробуем мспользовать boolean
//?  :car is Car -- называется type flow
function isCar(car: Vehicle): car is Car {
	// return "wheels" in car;
	//* можно и так
	return (car as Car).wheels !== undefined
}

function isShip(ship: Vehicle): ship is Ship {
	return (ship as Ship).sail !== undefined
}

function repairVehicle(vehicle: Vehicle) {
	switch (vehicle.name) {
		case 'car':
			console.log(vehicle.wheels.number * 2)
			break
		case 'ship':
			console.log(
				`Ship has ${vehicle.sail.quantity} parusa area of sails ${
					vehicle.sail.size * vehicle.sail.quantity
				} with ${vehicle.engine} engine`
			)
			break
		case 'airplane':
			console.log(vehicle.wings)
			break
		default:
			const smth: never = vehicle
			console.log('Ouuuuups!')
			break
	}
}
const korablik: Vehicle = {
	name: 'ship',
	engine: 'Dizelek',
	sail: {
		size: 200,
		quantity: 4,
	},
}

repairVehicle(korablik)

//? video 39
interface Square {
	a: number
	area: number
}
interface Rect {
	a: number
	b: number
	area: number
}

function calculateArea(side: number): Square
function calculateArea(k: number, l?: number): Rect
function calculateArea(a: number, b?: number): Square | Rect {
	if (b) {
		const rect: Rect = {
			a,
			b,
			area: a * b,
		}
		return rect
	} else {
		const square: Square = {
			a,
			area: a * a,
		}
		return square
	}
}
console.log(calculateArea(4, 9))
console.log(calculateArea(7))

//* Video 40
interface Car1 {
	name: 'car'
	engine: string
	wheels: number
}
interface Ship1 {
	name: 'ship'
	engine: string
	sail: string
}
interface Airplane1 {
	name: 'airplane'
	engine: string
	wings: string
}
// ? below is not correct! better didnt do it
interface ComplexType1 {
	name: 'car' | 'ship' | 'airplane'
	engine: string
	wheels?: number
	sail?: string
	wings?: string
}

type Vehicle1 = Car1 | Ship1 | Airplane1

const carr: ComplexType1 = {
	name: 'car',
	engine: 'V8',
}

const shippp: ComplexType1 = {
	name: 'ship',
	engine: ' 7t7tgigt',
	sail: 'TWINNSAILS',
}

function repairVehicle1(vehicle: ComplexType1) {
	switch (vehicle.name) {
		case 'car':
			console.log('vehicle.wheels! * 2', vehicle.wheels! * 2)
			console.log('wheels', vehicle.wheels)
			console.log('engine', vehicle.engine)
			break
		case 'ship':
			console.log(vehicle.sail)
			break
		case 'airplane':
			console.log(vehicle.wings)
			break
		default:
			//!   Эта проверка --> ниже не будет работать!!!!
			// const smth: never = vehicle;
			console.log('Ouuuuups!')
			break
	}
}
console.log('==================================')
repairVehicle1(carr)
console.log('==================================')
repairVehicle1(shippp)
console.log('==================================')
repairVehicle1(carr)

// function after5s(x) {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(x);
//     }, 5000);
//   });
// }
// async function mult(input) {
//   const f = await after5s(3);
//   // console.log("f", f);
//   const g = await after5s(4);
//   // console.log("f", f);
//   return input * f * g;
// }
// mult(2).then((value) => {
//   console.log("value", value);
// });
// async function second_mult(input) {
//   const f = after5s(3);
//   // console.log("f", f);
//   const g = after5s(4);
//   // console.log("f", f);
//   return input * (await f) * (await g);
// }

// second_mult(2).then((value) => {
//   console.log("value", value);
// });
