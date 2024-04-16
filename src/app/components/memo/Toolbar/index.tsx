import SmallButton from 'app/components/Button/SmallButton';
import { TitleText } from 'app/components/Text';
import styled from 'styled-components';

import { ReactComponent as PostDeleteIcon } from './assets/delete_black_24dp.svg';
import { ReactComponent as PostAddIcon } from './assets/post_add_black_24dp.svg';
import { ReactComponent as MakeBoldIcon } from './assets/format_bold_black_24dp.svg';
import { ReactComponent as MakeSizeIcon } from './assets/text_fields_black_24dp.svg';
import { ReactComponent as MakeTodo } from './assets/check_circle_black_24dp.svg';
import { ReactComponent as MakeImageIcon } from './assets/collections_black_24dp.svg';

const Box = styled.div`
  width: 100%;
  height: 50px;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  border: 0;
  border-bottom: 1px solid #e9e9e9;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & div {
    display: flex;
  }
`;

const LeftMenu = styled(Menu)`
  width: 300px;
  height: 100%;
  background-color: #fff;
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;
`;

const RightMenu = styled(Menu)`
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 0 10px;
`;

export default function MemoToolBar() {
  return (
    <Box>
      <LeftMenu>
        <TitleText style={{ marginLeft: '5px' }}>Memo</TitleText>
        <SmallButton onClick={() => {}} Icon={() => <PostDeleteIcon />} />
      </LeftMenu>
      <RightMenu></RightMenu>
    </Box>
  );
}
