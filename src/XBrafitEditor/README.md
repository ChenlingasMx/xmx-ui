# x-braft-editor
基于braft-editor封装的简单业务富文本编辑器组件
#### 有关更多介绍, 请参见[详细文档](https://www.yuque.com/margox/be/lzwpnr#zrs7hr)
# 编辑表格组件

<!--XBraftEditor Demo-->

```js
const Demo = () => {
    return (
      <div>
        <XBraftEditor
          isView={isView}
          viewHtml="我是富文本编辑器"
          onChangeValue={value => window.console.log("value",value)}
        />
      </div>
    );
}
```

## 参数

### XBraftEditor

#### 基础参数

| 参数       | 说明                                                 | 类型          | 默认值 |
| :--------- | :--------------------------------------------------- | :------------ | :----- |
| isView     | 是编辑模式还是查看模式                                  | Boolean       | false  |
| viewHtml     | 文本内容                                  | string       | -  |
| onChangeValue     | 获取操作后的值                                  | function(value): object[]        | -  |




