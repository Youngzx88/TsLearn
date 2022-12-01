console.log("hello typescript222")
console.log("hello typescript333")
console.log("hello typescript444")

interface Foo{
  name:string,
  age:number
}
interface Joo{
  name:string,
  title:string
}
let foo:Foo = {
  name: 'wuhu',
  age: 19
}
let joo:Joo = {
  name: 'yy',
  title: 'sb'
}
// console.log(foo = joo)

declare let foo2:Foo;
declare let joo2:Joo;
// console.log(foo2 = joo2)