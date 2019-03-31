/**
 * Created by garfield on 2017/5/23.
 */
let nextId = 1;

export class Person {
  id: number;
  constructor(
    public name: string,
    public age: number,
    public country:string) {

    this.id = nextId++;
  }
}
