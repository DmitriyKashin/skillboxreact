const str = 'string';
const num = 2;
const nan = NaN;
const obj = {};
const arr = [];
const nul = null;
const sym = Symbol();
const und = undefined;
const _void = void 0;
const bool = true;
const fn = () => {};

let tsStr = 'asd';
tsStr = '1';

function sumJS(arr) {
  return arr.reduce((a, b) => a+b);
}
function sumTS(arr: number[]) {
  return arr.reduce((a, b) => a+b);
}
// 'some'+2 -> 'some2'
// 'some' - 2 -> NaN
// '2' + 2 -> '22'
// '2' - 2 -> NaN

const tsNumber = 2;
const tsString = '123';

const result = tsString + tsNumber;
const resultTwo = parseInt(tsString) - tsNumber;


if (typeof tsString === 'number') {
  const resultTwo = tsString - tsNumber;
}


// Union type
const strOrNumber: string | number = '2';
const strOrNumber2: string | number = '2';
const strOrNumber3: string | number = '2';

// =>
// Type Alias
type StrOrNumber = string | number;
const strOrNumber4: StrOrNumber = '2';


type AllJsSimpleTypes = string | number | [] | object | undefined | null | boolean | void | symbol;

const tsArray: number[] = [1, 2, 3]; 
const tsArrayGeneric: Array<number> = [];


const unionArray: (string | number)[] = [1,2,'4'];
const unionArray2: Array<string | number> = [1,2,'2'];

// Tuple - fix length!
const myTuple: [number, string] = [1, '2'];
const [val1, val2] = myTuple;

// Object
type MyObjType = { a: number, b: string };
const myObj: { a: number, b: string } = {a:1, b:'2'}; 
const myObj2: MyObjType = {a:1, b:'2'}; 

interface MyFirstInterface { // cool vs types ? 
  readonly a: number,
  readonly b: string,
  c?: number[] // optional type is bad
  e: number | undefined
}

const myObj3: MyFirstInterface = {
  a: 2,
  b: 'ok',
  e: undefined,
}
const value = myObj3.a; 

myObj3.a = 5; 


const ApiAnswer: IndexInterface = { key: 'asd', key1: 'asd' };

const val3 = ApiAnswer.randomkey;

interface IndexInterface {
  [N: string]: string; // define keys as strings (index-signature)
}


enum Methods {
  add = 0,
  sub = 1,
}

function calculate(method: Methods, left: number, right: number): number {
  switch(method) {
    case Methods.add: return left + right;
    case Methods.sub: return left - right;
  }
}

const sum = calculate(Methods.add, 2, 2);


const ArrowFn: FnInterface = (value) => 2;

type TypeFn = () => number;

interface FnInterface {
  (a: number): void;
}


type StrangeTsTypes = any | unknown | never;

const some: any = '2';
some.reduce();



const un: unknown  = '2';

function neverFn(): never {
  throw new Error('okey');
}

const someValue = neverFn();

