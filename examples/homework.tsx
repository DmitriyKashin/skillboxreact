///////////     1
// string
const concat = (a: string, b: string): string => `${a}${b}`;
let mystring = concat('Hello ', 'World') // -> Hello World; String

///////////     2
interface HomeTask {
  howIDoIt: string,
  simeArray: Array<string | number>,
  withData: [
    {
      howIDoIt: string,
      simeArray: Array<string | number>,
    }
  ]
}
const MyHometask: HomeTask = {
  howIDoIt: "I Do It Wel",
  simeArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}


///////////     3


interface MyArray<T> {
  [N: number]: T,
  reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T, // without initial
  reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T, // with initial, same type as array elements
  reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U, // with initial, new type 
}



///////////     4

interface IHomeTask {
  data: string;
  numbericData: number;
  date: Date;
  externalData: {
    basis: number;
    value: string;
  }
}

const homeTask: MyPartial<IHomeTask> = {
  externalData: {
    value: 'win'
  }
}

type MyPartial<T> = {
  [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}



///////////     5

function HomeComponent(props:{firstProp: string}) {
  return (
      <div>

          { props.firstProp }
      </div>
  )
}
interface IProps {
  firstProp: string
}

type TMyType<T> =  T extends (React.ComponentType<infer props>) ? props : T;
type t = TMyType<typeof HomeComponent>;



///////////     6



type TGetJSXPropsProp<T extends keyof JSX.IntrinsicElements> = {
  [N in keyof JSX.IntrinsicElements[T]]: JSX.IntrinsicElements[T][N]
}

type TDivProps = TGetJSXPropsProp<'div'>;

const props: TDivProps = {
    some: '1233', // error here
    className: 'handler' 
}

