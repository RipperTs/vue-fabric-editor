# vue-fabric-editor (uTools插件版)
基于fabric.js和Vue的图片编辑器，可自定义字体、素材、设计模板。

<p align="center"><img src="./src/assets/demo.png" /></p>

## 已有功能
- 导入JSON文件
- 保存为PNG、SVG、JSON文件
- 插入SVG、图片文件
- 多元素水平、垂直对齐方式
- 组合/拆分组合
- 图层及顺序调整
- 撤销/重做
- 背景属性设置
- 外观属性/字体属性/描边/阴影
- 自定义字体
- 自定义模板素材

## 使用
### 启动项目
```
yarn install
yarn serve
```

### 自定义字体
字体相关的文件在`src/assets/fonts`中，将字体文件放目录下，并将新添加的字体名称更新到`font.css`和`font.js`文件中。
```js
// font.js
const cnList = [
    {
        "name": "汉体",
        "fontFamily": "汉体"
    },
    {
        "name": "华康金刚黑",
        "fontFamily": "华康金刚黑"
    }
]

const enList = []
export default [...cnList, ...enList]
```

```css
/* font.css */
@font-face{
    font-family: '汉体';
    src : url('./cn/汉体.ttf');
}

@font-face{
    font-family: '华康金刚黑';
    src : url('./cn/华康金刚黑.ttf');
}
```
### 自定义模板
自定义模板的入口在`src/components/importTmpl.vue`组件中，可将模板图片与JSON文件放在`public/template`文件中，将数据拼在组件中即可展示。

## 规划


### 可能新增功能
- [ ] svgIcon汇总
- [ ] 标题样式列表模板
- [ ] 渐变配置
- [x] 复制 粘贴 快捷键
- [ ] 拖动模式，放大缩小
- [ ] 画布大小保存
- [ ] 替换图片、加载url图片
- [x] 缩放
- [ ] 三角形、箭头、线条
- [ ] 平铺背景、等比例背景
- [ ] 预览
- [ ] 描边 strokeDashArray
- [ ] 绘制线条
- [ ] 绘制图形

## License
Licensed under the MIT License.
