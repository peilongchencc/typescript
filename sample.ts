// 定义一个接口来描述用户对象
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}

// 创建一个用户对象
const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  age: 30
};

// 输出用户信息
console.log(`User ID: ${user.id}`);
console.log(`User Name: ${user.name}`);
console.log(`User Email: ${user.email}`);
console.log(`User Age: ${user.age}`);

// 代码中 interface 和 const 的作用：
// 1. interface：在 TypeScript 中，interface 关键字用于定义自定义类型。接口定义了一个对象的结构或契约，
// 指定了该对象应具有的属性和方法。在示例中，User 接口定义了一个用户对象应具有的属性，包括 id、name、email 和可选的 age。
// 通过定义接口，可以强制对象满足特定的结构和属性要求，增加了类型安全性和代码可读性。

// 2. const：const 关键字用于声明一个只读的常量变量。在示例中，user 是一个常量，它引用了一个具有特定属性的用户对象。
// 通过使用 const，我们确保 user 变量在赋值后不能被修改。这有助于确保代码的可维护性和可靠性，防止无意中修改了用户对象。

// 总而言之，interface 和 const 是 TypeScript 中的关键字，分别用于定义接口和常量。它们都有助于提高代码的可读性、
// 可维护性和类型安全性。