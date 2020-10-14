
class Constructor {
  public field: number = 123;
  private privateField: number = 123;

  constructor(arg: number) {
    this.field = arg;
  }
  public publicMethod(): number {
    return this.field;
  }
  protected protectedMethod() {
    return this.field + 10;
  }
  private private() {
    return this.field + 10;
  }
}

const instance = new Constructor(123);

class Child extends Constructor {
  public childMethod() {
  }
  protected protectedMethod(): number { // cant go private! it's bad
    return super.protectedMethod();
  }  
}


abstract class AbstractClass {
  public abstract abstractField: number;
  public abstract abstractMethod(): number;
  protected protectedMethod(): number { // cant go private! it's bad
    return this.abstractField;
  } 
}
// only extends !!

// const instance2 = new AbstractClass(); // BAD!

class NewChild extends AbstractClass {
  public abstractField: number =123;
  public abstractMethod(): number {
    return super.protectedMethod();
  }
}


interface MyInetface<T> {
  field: string,
  method(): string,
}


class NewClass<T> implements MyInetface<T> {
  public field: string = '123';
  public conf?: T;
  public method(): string {
    return '123';
  }
}

class MyComponent extends React.Component<{prop1: number}, {state1: string}> {
  public render() {
    return (
      <div>{this.props.prop1}</div>
    )
  }
}