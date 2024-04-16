import React from 'react';
import ReactQuill from 'react-quill';
import styled from 'styled-components';

import 'react-quill/dist/quill.snow.css';
import Block from 'app/components/Block';

const Box = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  padding: 0 0 0 10px;
  overflow: auto;

  & * {
    font-family: 'Noto Sans KR' !important;
    letter-spacing: -0.2px;
  }

  & .ql-container.ql-snow {
    border: none !important;
  }

  & .ql-container > .ql-editor {
    min-height: 50vh;
  }
`;

const MemoDate = styled.div`
  font-size: 0.85em;
  letter-spacing: -0.3px;
  color: #8b8b8b;
  text-align: center;
`;

export default function MemoEditor() {
  const [value, setValue] = React.useState('');
  return (
    <Box>
      <Block marginTop="5px" />
      <MemoDate>{new Date().toLocaleString()}</MemoDate>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        style={{ border: 'none' }}
        modules={{
          toolbar: {
            container: '#toolbar',
          },
        }}
        formats={['bold', 'size', 'header', 'image', 'list', 'link']}
      />
    </Box>
  );
}
