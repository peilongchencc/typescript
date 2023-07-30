const jsonwebtoken = require('jsonwebtoken');       // npm install jsonwebtoken，安装需要3分钟；

const secret = 'mySecretKey';                       // 有点类似zip文件解压需要输入的密码，但不完全相同，主要是确保JWT在传输过程中不被篡改；
const data = { userId: 12345, role: 'admin' };      // 要加密的数据；
const options = { expiresIn: '1h' };

/**
 * Encrypt data and return jwt.加密数据并返回 JWT。
 *
 * @param data
 */
function sign(data: { userId: number; role: string; }): Promise<string> {
    return new Promise((resolve, reject) => {
        jsonwebtoken.sign(data, secret, options, (err: any, token: any) => {
            err ? reject(err) : resolve(token || '');
        });
    });
}

sign(data)
  .then(token => {
    console.log(`Signed JWT的值为:\n${token}`);
  })
  .catch(err => {
    console.error(`登录验证的时候发生错误，错误信息为:\n${err}`);
  });

// 终端输出的结果为：
// Signed JWT的值为:
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMzQ1LCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTA3MDkwODEsImV4cCI6MTY5MDcxMjY4MX0.8lWWu7wO_L55tDLGG95l8PE9lwmR5T_Wy8Fc5rOawqg
