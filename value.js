export class Value {
  constructor(value) {
    this.value = value;
  }
  static of(value) {
    return new Value(value);
  }
  isDefined() {
    return typeof this.value != "undefined";
  }
  get() {
    if(this.isDefined()) {
      return this.value;
    }
    throw Error("Value is not defined");
  }
  getOrElse(alternative) {
    if(this.isDefined()) {
      return this.value;
    }
    return alternative;
  }
  map(f) {
    if(this.isDefined()) {
      return new Value(f(this.value));
    }
    return new Value();
  }
  filter(f) {
    if(this.isDefined() && f(this.value)) {
      return new Value(this.value);
    }
    return new Value();
  }
  forEach(f) {
    if(this.isDefined()) {
      f(this.value);
    }
  }
}