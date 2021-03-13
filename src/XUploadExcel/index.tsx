import React from 'react';
import { Upload, UploadProps } from 'antd';
import Button from '../XButton'
import XLSX from 'xlsx';

export interface XUploadExcelrProp {
  buttonProps?: Object | undefined;
  uploadProps?: Object | undefined;
  getData?: (value: any) => void;
  text?: string;
}

const XUploadExcel: React.FC<XUploadExcelrProp> = props => {
  const {
    buttonProps = {},
    uploadProps = {},
    getData = () => { },
    text = ""
  } = props

  const onChange = (e: any) => {
    // 拿取文件对象，注：不同框架获取到的对象可能不同，传统upload拿到的对象应该是e.target.file
    var f = e.fileList[0].originFileObj;
    var binary = '';
    var wb;
    var outdata;
    var reader = new FileReader();
    reader.onload = () => {
      let dataResult: any = reader.result
      // 读取成Uint8Array，再转换为Unicode编码（Unicode占两个字节）
      var bytes = new Uint8Array(dataResult);
      var length = bytes.byteLength;
      for (var i = 0; i < length; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      wb = XLSX.read(binary, {
        type: 'binary',
      });
      outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
      let arr = outdata
      // 接受导入的数据
      getData(arr);
    };
    reader.readAsArrayBuffer(f);
  };

  let params: UploadProps = {
    name: "file",
    action: "",
    headers: {
      authorization: 'authorization-text',
      "x-auth": sessionStorage.getItem("x-auth") + "",
    },
    // 阻止组件自带post请求
    beforeUpload: () => {
      return false;
    },
    showUploadList: false,
    accept: ".xls,.xlsx",
    onChange: onChange,
    ...uploadProps
  };
  return (
    <Upload {...params}>
      <Button
        {...buttonProps}
        type="primary"
        size="default"
      >
        {text ? text : "导入"}
      </Button>
    </Upload>
  );
}

export default XUploadExcel;
