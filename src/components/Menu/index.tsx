import { FC } from 'react';
import { styled } from '@stitches/react';
import { SlNote } from 'react-icons/sl';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

// 全体の背景色
const Wrapper = styled('div', {
  background : 'rgba(6, 6, 6, 0.06)',
  fontSize : '16px',
});

// 昇順・降順切り替えボタン
const StyledASC = styled('button', {
  fontSize : '4rem',
  color : 'rgb(86,87,79)',
  marginTop : '15px',
  border : 'none',
  '&:hover' : {
    color : '#2e94a6',
  }
});

// 検索フォーム
const StyleddFrom = styled('form', {
  marginTop : '1rem',
  float : 'right',
});


// 新規ノート追加ボタン
const StyledIconbutton = styled('button', {
  fontSize : '2rem',
  marginLeft : '1rem',
  marginRight : '1rem',
  border : 'none',
});

type MenuProps = {
  onToggle : () => void;
};

export const Menu: FC<MenuProps> = (({onToggle}) => {
  return (
  <Wrapper>
    <StyleddFrom>
      <input type="text" placeholder="search" />
      <StyledIconbutton>
        <SlNote />
        <BsFillArrowLeftCircleFill onClick={onToggle}/>
      </StyledIconbutton>
    </StyleddFrom>
  </Wrapper>
  )
});
