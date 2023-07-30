## jwt_gen.ts中主函数解释：
sign一个用于对数据进行加密并生成 JSON Web Token (JWT) 的函数。下面是对函数中的参数进行详细解释：

1. data: 这是一个对象，表示要加密并包含在 JWT 中的数据。它有两个属性：
- userId: 一个表示用户ID的数字值。
- role: 一个表示用户角色的字符串值。

2. Promise\<string>: 这是函数的返回类型注解。它表示sign函数返回一个Promise对象，该Promise对象最终解析为一个字符串（JWT）。

3. jsonwebtoken.sign(): 这是一个用于生成 JWT 的函数，可能是引入了第三方的 jsonwebtoken 库。该函数接受以下参数：
- data: 要加密的数据，这里是上述data对象。
- secret: 这是用于加密数据的密钥（或称为签名密钥）。该密钥只有在解密时才能解开 JWT，因此应保持安全。
- options: 这是一个包含各种选项的对象，用于定制生成 JWT 的行为。它可能包含例如：
- algorithm: 指定用于加密的算法，例如 "HS256"。
- expiresIn: 指定 JWT 的过期时间。
- issuer: 指定 JWT 的签发者。
- 等等，具体选项取决于所使用的jsonwebtoken库和其版本。
- (err: any, token: any) => void: 这是一个回调函数，用于处理生成 JWT 后的结果。当 JWT 成功生成时，err参数将为null，而token参数将包含生成的 JWT 字符串。如果生成 JWT 发生错误，err将包含错误信息，而token将为undefined。

4. Promise\<string>: 这表示该函数返回一个Promise对象，最终解析为一个字符串（JWT）。在函数内部，使用new Promise来将jsonwebtoken.sign的回调式异步函数转换为一个基于 Promise 的异步函数，以便更容易处理异步结果。

总结：该函数用于将data对象加密为一个 JSON Web Token (JWT)，返回一个Promise对象，最终解析为生成的 JWT 字符串。在加密过程中，需要提供一个安全的密钥secret和其他定制的选项options。生成 JWT 后，它将被传递给回调函数进行处理，而在该函数内部，使用 Promise 包装以便于异步处理。