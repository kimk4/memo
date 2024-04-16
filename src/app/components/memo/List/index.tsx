import styled from 'styled-components';
import MemoItem from '../item';

const List = styled.div`
  width: 300px;
  height: calc(100vh - 60px);
  border-right: 1px solid #e9e9e9;
  padding: 0 1px;

  @media (max-width: 687px) {
    margin-left: -200px;
    transition: 0.2s;
    &:hover {
      margin-left: 0;
    }
  }
`;

export default function MemoList() {
  return (
    <List>
      <MemoItem
        id="1"
        preview={'나는 메모입니다.'}
        created_at={new Date().toString()}
        selected={true}
      />
      <MemoItem
        id="1"
        preview={'나는 메모입니다.'}
        created_at={new Date().toString()}
        selected={false}
      />
      <MemoItem
        id="1"
        preview={'나는 메모입니다.'}
        created_at={new Date().toString()}
        selected={false}
      />
    </List>
  );
}
