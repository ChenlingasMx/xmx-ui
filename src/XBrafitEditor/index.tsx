import React, { useState, useEffect, memo } from 'react';
import debounce from 'lodash/debounce';
// 富文本编辑器资源引入
import BraftEditor, { BraftEditorProps } from 'braft-editor';
import 'braft-editor/dist/index.css';
import './style.css';

type myUploadParams = {
  file: File;
  progress: (progress: number) => void;
  libraryId: string;
  success: (
    res: {
      url: string;
      meta: {
        id: string;
        title: string;
        alt: string;
        loop: boolean;
        autoPlay: boolean;
        controls: boolean;
        poster: string;
      };
    }
  ) => void;
  error: (
    err: {
      msg: string;
    }
  ) => void;
}


export interface BraftEditorProp {
  viewHtml?: string;
  isView?: boolean;
  onChangeValue?: (value) => void;
  validateFn?:(file: File) => boolean | PromiseLike<any>,
  myUploadFn?:(value:myUploadParams) => void; // 指定本地校验函数
  otherProps?: Readonly<BraftEditorProps>
}

// 防止重复渲染
function areEqual(prevProps: any, nextProps: any) {
  return (
    prevProps.viewHtml&&prevProps.viewHtml === nextProps.viewHtml&&nextProps.viewHtml
  );
}

const XBraftEditor: React.FC<BraftEditorProp> = props => {
  const {
    viewHtml = '',// 富文本
    isView = false, // 是否查看模式,
    onChangeValue,
    validateFn,
    myUploadFn,
    otherProps
  } = props;

  const [editorState, setEditorState] = useState(BraftEditor.createEditorState(viewHtml));
  const [firstLoadHtml, setFirstLoadHtml] = useState(true);

  useEffect(() => {
    if (firstLoadHtml && viewHtml !== undefined) {
      setEditorState(BraftEditor.createEditorState(viewHtml));
      setFirstLoadHtml(false); // 只初始化一次
    }
  }, [viewHtml]);

  const handleEditorChange = editorState => {
    setEditorState(editorState);
    // 输出 html
    onChangeValue && onChangeValue(editorState.toHTML())
  };


  return isView ? (
    <div className="view-editor" dangerouslySetInnerHTML={{ __html: viewHtml }} />
  ) : (
    <BraftEditor
      {...otherProps}
      value={editorState}
      onChange={debounce(handleEditorChange, 300)}
      media={{
        accepts: {
          image: false, // 开启图片插入功能
          video: false, // 开启视频插入功能
          audio: false, // 开启音频插入功能
        },
        validateFn: validateFn, // 指定本地校验函数，说明见下文
        uploadFn: myUploadFn, // 指定上传函数，说明见下文
        onChange: null, // 指定媒体库文件列表发生变化时的回调，参数为媒体库文件列表(数组)
        onInsert: null, // 指定从媒体库插入文件到编辑器时的回调，参数为被插入的媒体文件列表(数组)
      }}
    />
  );
};

export default (memo(XBraftEditor, areEqual));
