import MemoEditor from 'app/components/memo/Editor';
import MemoList from 'app/components/memo/List';
import MemoToolBar from 'app/components/memo/Toolbar';
import * as React from 'react';
import styled from 'styled-components';

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export function HomePage() {
  return (
    <>
      <div>
        <MemoToolBar />
        <FlexRow>
          <MemoList />
          <MemoEditor />
        </FlexRow>
      </div>
    </>
  );
}
