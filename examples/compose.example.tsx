

/*
function InputExample({value, onChange, onClick} : any) {
  return (
    <div>
      <input 
        value={value}>
        onChange={preventDefault(stopPropagation(getValue(onChange)))} 
        onChange={compose(onChange,getValue,stopPropagation,preventDefault)}
        onChange={pipe(preventDefault, stopPropagation, getValue, onChange)}
        onClick={preventDefault(stopPropagation(props.onClick))}
      </input>
    </div>
  )
}

*/

function compose<U>(fns: Function[]) {
  return (initialValue: any): U => 
  fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue);
}

function pipe<U>(fns: Function[]) {
  return (initialValue: any): U => 
  fns.reduce((previousValue, fn) => fn(previousValue), initialValue);
}

function isEqual<T>(left: T) {
  return <E extends T> (right: E) => left === right
}

function pick<K extends string>(prop: K) {
  return <O extends Record<K, any>>(obj: O) => obj[prop] 
}


function cond(b: boolean) {
  return !b;
}
const some = pick('value')({value:1}) // -> 1

const comments = [ { id: 22, text: 'text One'}, {id: 44, text: 'Text Two'} ];

const filteredComments = comments.filter( ( {id} ) => id !== 22 ); // old way 

const filteredCommentsTrue = comments.filter(pipe([pick('id'), isEqual(22), cond ])); //error lector

const filterWithId1 = (id: number) => pipe([pick('id'), isEqual(id), cond ]);

const filteredComments2 = comments.filter(filterWithId1(22));




const createFilterBy = (prop: string) => (compareWith: number) => pipe([pick(prop), isEqual(compareWith), cond ]);

const filterWithId2 = createFilterBy('id');

const filteredComments3 = comments.filter(filterWithId2(22));

const filterWithValue = createFilterBy('value');



/*
pipe([pick('id'), isEqual(22)]  == pick('id')({id}) // {id} is initial value}



(startValue) => myFunctions.reduce .... // each func call
.filter((startValue) => doSomethings)); // startValue == {id} !
*/