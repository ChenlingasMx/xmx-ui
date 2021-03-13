# XUploadExcel

# 批量导入导入excel文件

<!--XUploadExcel Demo-->

```js
const Demo = () => {
    return (
      <div>
       <XUploadExcel 
          getData={(value)=>{console.log(value)}}
          text="导入"
          uploadProps={ }
          buttonProps={ }
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
| getData     | 获取操作后的值                                  | void        | underfine |
| buttonProps     | Button的属性(antd4.x)                      | object{}        | object |
| uploadProps     | 上传组件的属性(antd4.x)                      | object{}        | object |




