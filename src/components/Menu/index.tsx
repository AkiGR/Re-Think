import { FC } from 'react';
import { styled } from '@stitches/react';
import { AiOutlineSortAscending } from 'react-icons/ai';
import { SlNote } from 'react-icons/sl';

// 全体の背景色
const StyledBackground = styled('body', {
  background : 'rgba(6, 6, 6, 0.06)',
  fontSize : '16px',
});

// 昇順・降順切り替えボタン
const StyledASC = styled('button', {
  fontSize : '4.5rem',
  color : 'rgb(86,87,79)',
  marginTop : '15px',
  border : 'none',
  '&:hover' : {
    color : '#2e94a6',
  }
});

// 検索フォーム
const StyleddFrom = styled('form', {
  marginTop : '2rem',
  float : 'right',
});


// 新規ノート追加ボタン
const StyledIconbutton = styled('button', {
  fontSize : '3rem',
  marginLeft : '1rem',
  marginRight : '1rem',
  border : 'none',
});

export const Menu : FC = () => {
  return (
  <StyledBackground>
    <StyledASC>
      <AiOutlineSortAscending />
    </StyledASC>

    <StyleddFrom>
      <input type="text" placeholder="search" />

      <StyledIconbutton>
        <SlNote />
      </StyledIconbutton>
    </StyleddFrom>

  </StyledBackground>
  )
}