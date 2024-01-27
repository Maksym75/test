/// <reference types="node" />
/// <reference types="jsdom" />
import { JSDOM } from 'jsdom'

const isBirthdayData: boolean = true
const userNameData: string = 'Maxim'
interface IUser {
	isBirthdayData: boolean
	userNameData: string
	ageData: number
}

const createError = (msg: string) => {
	throw new Error(msg)
}
let ageData: number
ageData = 37

const userData = `{"isBirthdayData": true ,"userNameData": "Masha", "ageData": 36}`
const userObj: IUser = JSON.parse(userData)
console.log('userObj=', userObj)

// function logBirthMsg({ isBirthdayData, userNameData, ageData }: IUser) {
function logBirthMsg(
	isBirthdayData: boolean | string,
	userNameData: string,
	ageData: number
) {
	if (isBirthdayData === true) {
		console.log(
			`Congrads ${userNameData.toUpperCase()} with your ${ageData + 1} birthday`
		)
	} else if (typeof isBirthdayData === 'string') {
		return console.log('Too bad')
	} else return createError('Errorerrerorrerer')
}
logBirthMsg('true', 'Masha', 38)
// logBirthMsg(userObj);

// const logBirthMsg = (
//   isBirthdayData: boolean,
//   userNameData: string,
//   ageData: number
// ): string => {
//   if (isBirthdayData) {
//     return `Congrads ${userNameData.toUpperCase()} with your ${
//       ageData + 1
//     } birthday`;
//   }
//   // else return createError("Error");
//   else return "Error";
// };

// logBirthMsg(isBirthdayData, userNameData, 37);
//??  Destructure OBJ ==================================================== */
const user1Data = {
	isBirthdayData: true,
	userNameData: 'Mira',
	ageData: 12,
	messages: { error: 'Error56' },
}

function logBirthMsg2({
	isBirthdayData,
	userNameData,
	ageData,
	messages: { error: error },
}: {
	isBirthdayData: boolean
	userNameData: string
	ageData: number
	messages: { error: string }
}) {
	if (isBirthdayData) {
		console.log(
			`Congrads ${userNameData.toUpperCase()} with your ${ageData + 1} birthday`
		)
	} else {
		return createError(error)
	}
}
// logBirthMsg2(user1Data);

//??  Destructure Array =================  array=================================== */
const departments = ['Dev', 'Design', 'Marketing']

const report = departments
	.filter((d: string) => d !== 'Dev')
	.map((d: string) => `${d}-Done`)

const [first] = report
// const [second] = report[1];
// const secondd = report[1];
// console.log("report", report);
// console.log("first", first);
// console.log("second", second);
// console.log("secondd", secondd);

function ptintMsg(msg: string[] | number | boolean): void {
	if (Array.isArray(msg)) {
		msg.forEach(m => console.log(m))
	} else if (typeof msg === 'number') {
		console.log(msg.toFixed())
	} else console.log(msg)
}

// ptintMsg(5.778787);
// ptintMsg(["jyfvvyufv", "1111", "7i6ru6ru6"]);
// ptintMsg(false);

const printReadings = (a: number | string, b: number | boolean): void => {
	if (typeof a === typeof b) {
		console.log(a, b)
	} else console.log('False')
}
// printReadings(2, 9);
// printReadings(2, true);

const checkReadings = (
	reading: { system: number } | { user: number }
): void => {
	if ('system' in reading) {
		console.log('System', reading.system ** 2)
	} else console.log(reading.user)
}

// checkReadings({ system: 8 });
// checkReadings({ user: 8 });

const logValue = (value: string | Date): void => {
	if (value instanceof Date) {
		console.log(value.getFullYear())
	} else console.log(value.trim())
}
logValue('        989yii8b    ')
const nn = new Date()
console.log(nn)
logValue(nn)

// ? Literal types Literal types  Literal types  Literal types  Literal types  Literal types

const port3000: number = 3000
const port3001: number = 3001

const startServer = (
	protocol: 'http' | 'https',
	port: 3000 | 3001
): 'Server startediiiii' => {
	if (port === port3000 || port === port3001) {
		console.log(`Server started on protocol ${protocol}://server:${port}`)
	}

	return 'Server startediiiii'
}
startServer('https', 3000)

//??      timingFoo: "ease" | "ease-out" | "ease-in" = "ease",   timingFoo: "ease" | "ease-out" | "ease-in" = "ease",

// function createAnimation(
// 	id: string | number,
// 	animation: string,
// 	timingFoo: 'ease' | 'ease-out' | 'ease-in' = 'ease',
// 	duration: number,
// 	iterCount: 'infinite' | number
// ): void {
// 	const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>')
// 	const elem = dom.window.document.querySelector(`#${id}`) as HTMLElement
// 	// const elem = document.querySelector(`#${id}`) as HTMLElement
// 	if (elem) {
// 		elem.style.animation = `${animation}} ${timingFoo} ${duration} ${iterCount}`
// 	}
// 	console.log(`${animation} ${timingFoo} ${duration} ${iterCount}`)
// }

function createAnimation(
	id: string | number,
	animation: string,
	timingFoo: 'ease' | 'ease-out' | 'ease-in' = 'ease',
	duration: number,
	iterCount: 'infinite' | number
): void {
	const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>')
	const elem = dom.window.document.querySelector(`#${id}`) as HTMLElement

	if (elem) {
		elem.style.animation = `${animation} ${timingFoo} ${duration} ${iterCount}`
	}
	console.log(`"ID ="${id},${animation} ${timingFoo} ${duration} ${iterCount}`)
}

// Wrap your code inside window.onload
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>')
dom.window.onload = () => {
	createAnimation('_1', 'yexyry6yy6', 'ease', 600, 3)
	createAnimation('myElement', 'myAnimation', 'ease-out', 3000, 'infinite')
}

type AnimationTimingFunc = 'ease' | 'ease-out' | 'ease-in'
function createAnimation1(
	id: string | number,
	animation: string,
	timingFoo: AnimationTimingFunc = 'ease',
	duration: number,
	iterCount: 'infinite' | number
): void {
	const elem = document.querySelector(`#${id}`) as HTMLElement
	if (elem) {
		elem.style.animation = `${animation}} ${timingFoo} ${duration} ${iterCount}`
	}
	// console.log(`${animation} ${timingFoo} ${duration} ${iterCount}`);
}
// createAnimation1("yexyry6yy6", "animation", "ease", 600, "infinite");

//? Пересечение Типов --- когда совмещаем типы через  амперсанд &
type Config1 = {
	protocol: 'http' | 'https'
	port: 3000 | 3001
}
type Role1 = { role: string }
type ConfigWithRole1 = Config1 & Role1
//? Пересечение Типов --- когда совмещаем типы через  амперсанд &

// type Config = {
//   protocol: "http" | "https";
//   port: 3000 | 3001;
// };
interface Config {
	protocol: 'http' | 'https'
	port: 3000 | 3001
	log: (msg: string) => void
}
// modify interface
interface Config {
	data: Date
}

// type Role = { role: string };
interface Role {
	role: string
}
// type ConfigWithRole = Config & Role;
interface ConfigWithRole extends Config, Role {}

const serverConfig: ConfigWithRole = {
	protocol: 'http',
	port: 3000,
	role: 'ADMIN',
	log: (body: string): void => console.log('Msgttt', body),
	data: new Date(),
}
// console.log(serverConfig)

//* Используем Type для Аннотации потому что не можем записать в interface -сламается синтаксис {}
type startServerFoo = (
	protocol: 'http' | 'https',
	port: 3000 | 3001,
	role: string,
	// log: Function
	log: (msg: string) => void,
	data: Date
) => string
const startServer1: startServerFoo = (
	protocol: 'http' | 'https',
	port: 3000 | 3001,
	role: string,
	// log: Function
	log: (msg: string) => void,
	data: Date
): 'Server strded' => {
	// console.log(`Server started on protocol ${protocol}://server:${port}`);
	log(
		`Server started on protocol ${protocol}://server:${port} with role ${role} On date ${data} `
	)

	return 'Server strded'
}
startServer1(
	serverConfig.protocol,
	serverConfig.port,
	serverConfig.role,
	serverConfig.log,
	serverConfig.data
)

//* Индексные Св-ва Индексные Св-ва Индексные Св-ва Индексные Св-ва Индексные Индексные Индексные Индексные м Индексные

interface IStyles {
	[key: string]: string
}
const styles: IStyles = {
	position: 'absolute',
	top: '30px',
	right: '50px',
}

const friendsDict = {
	Alfred: '101 oihubib i8bby 999',
	liam: ' 777 airborn ;ljmljnljn',
	Monika: ' 0987654vXXCCVV BBBBBBB',
} as const

type FriendsName = keyof typeof friendsDict
type FriendsAddress = (typeof friendsDict)[keyof typeof friendsDict]

//console.log(просто навести на friendsName);
