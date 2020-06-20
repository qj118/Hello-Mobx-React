## 简介

- 依照[教程](https://www.bilibili.com/video/BV1WJ411N75K?from=search&seid=1472368564885352564)实现的代码。
- 初步了解 mobx 状态管理器的逻辑。
- 功能：模拟实现一个 todo list 小程序，实现添加、删除和重置等功能。

## 装饰器支持配置

1. 用脚手架 create-react-app 创建工程；
2. 由于自动创建了 .gitignore 文件，所以需要先将文件提交一遍
    - `git add .`
    - `git commit -m "x"`
3. yarn eject 将配置暴露出来，这样 package.json 文件会多出很多配置，包括一会儿需要用到的 babel 配置。
4. 安装两个 babel 插件
    - `npm install @babel/plugin-proposal-decorators --save-dev` 
    - `npm install @babel/plugin-proposal-class-properties --save-dev`
5. 在 package.json 文件中添加以下配置
```json
"babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      [
        "@babel/plugin-proposal-class-properties",
        {
          "loose": true
        }
      ]
    ]
  },
```
```json
"eslintConfig": {
    "extends": "react-app",
    "parserOptions": {
      "ecmaFeatures": {
        "legacyDecorators": true
      }
    }
  },
``` 