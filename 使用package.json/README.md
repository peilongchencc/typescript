# 含有package.json文件的ts项目运行方式：
## 1. 安装项目依赖项：  
含有 package.json 项目中依赖项的安装方式：  
在当前项目根目录(即ls后能看到package.json)时运行如下指令：  
```shell
npm install # 会默认安装package.json中的依赖项；
```
指令运行后，会自动生成 **node_modules文件夹和package-lock.json文件**。  
node_modules文件夹下是根据 package.json 安装的具体包；
package-lock.json 中指明各包的版本；  
> 如果自己想要把代码传他其他人复现，不需要传 node_modules 中的内容，也不需要传 package-lock.json；  

## 2. 根据package.json中的脚本运行文件：
以下信息为package.json中截取的脚本文件的内容，npm管理运行时全靠这个。  
我们可以看到有4个脚本，我这里只测试两个："start"和"go"。
```python
    "scripts": {
        "start": "node dist/index.js",
        "go": "./node_modules/.bin/ts-node build.ts",
        "build": "tsc",
        "test": "jest"
    },
```
运行start脚本的方式：
```shell
npm run start
```
运行效果如下：  
![index](https://github.com/peilongchencc/typescript/blob/main/related_pictures/jsfile.jpg)

要运行go脚本首先要确保自己安装了 ts-node，安装指令如下：
> 提示：build.ts 和 package.json 处于相同的目录中。
```shell
npm install ts-node
```
ts-node作用解释：  
ts-node 是一个用于在Node.js环境中直接运行TypeScript代码的工具，不需要先将ts文件转js文件，然后再运行js文件。  
运行go脚本的方式：
```shell
npm run go
```
运行效果如下：  
![ts-node](https://github.com/peilongchencc/typescript/blob/main/related_pictures/build%E8%84%9A%E6%9C%AC%E6%89%A7%E8%A1%8C%E7%BB%93%E6%9E%9C.jpg)
