# TypeScript 教程  
## ts文件运行方式：  
要运行这段 TypeScript 代码，需要按照以下步骤进行设置：  
1. 首先，确保计算机上已经安装了 Node.js 运行时环境。可以从 Node.js 官方网站 https://nodejs.org 下载并安装适用于自己操作系统的版本。  
我使用的是mac电脑，所以下载的是mac版本。安装较为简单，不断按 **"继续"** 就可以了；  
> 官网安装的方式会直接把 nodejs 和 npm 都安装好，不用分开安装；  

![node版本](https://github.com/peilongchencc/typescript/blob/main/related_pictures/node%E7%89%88%E6%9C%AC.png) 

2. 打开终端，导航到 .ts 文件的目录。
3. 使用以下命令安装 TypeScript 编译器（如果尚未安装）：
```shell
sudo npm install -g typescript # 需要输入自己的mac开机密码；
                               # 该指令同样为mac版本；
```
4. 使用 TypeScript 编译器将 TypeScript 代码编译为 JavaScript。在终端中运行以下命令：  
```shell
tsc example.ts
```
   这将生成一个与 TypeScript 文件相对应的 JavaScript 文件，命名为 sample.js。  
> sample.ts是自己创建的文件，sample.js是运行上述指令后自动生成的文件。  
5. 最后，使用 Node.js 运行生成的 JavaScript 文件。在终端中运行以下命令：  
```shell
node example.js
```
   这将执行 JavaScript 代码，并输出用户的信息。  
请确保按照上述步骤进行操作，并确保 TypeScript 文件的路径和文件名正确。这样，就可以成功运行 TypeScript 代码并查看输出结果了。

## npm 查看项目中安装了哪些库：
> 上面介绍了我使用的是 npm 包管理器，所以以下用的是 npm 指令；  

1. 打开终端；  
2. cd 到项目根目录；  
3. 运行以下命令之一：  
```shell
npm ls # 查看该项目中安装的包及版本；
```
如果想查看全局安装的包而不是项目特定的包，可以添加 -g（全局）选项：  
```shell
npm ls -g --depth=0
```
