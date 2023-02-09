import { FC , useState} from 'react';
import { styled } from '@stitches/react';
import { SlNote } from 'react-icons/sl';
import { BsFillArrowLeftCircleFill , BsFillArrowRightCircleFill } from 'react-icons/bs';

// 全体の背景色
const Wrapper = styled('div', {
  background : 'rgba(6, 6, 6, 0.06)',
  fontSize : '16px',
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

const StyledIconPosition = styled('div' , {
  textAlign : 'end',
  fontSize : '1.5rem',
})

const InternalWrapper = styled('div', {});

export const Menu: FC = () => {
  const [isOpen , setIsOpen] = useState(true);
  const handleClick = ()  => {
    setIsOpen((c) => !c);
  }

  return (
  <Wrapper>
    <StyledIconPosition>
      { isOpen ? <BsFillArrowLeftCircleFill onClick={handleClick} /> : <BsFillArrowRightCircleFill onClick={handleClick}/> }
    </StyledIconPosition>
      <InternalWrapper
        css ={{
          display : isOpen ? "block" : "none",
        }}
      >
      <StyleddFrom>
        <input type="text" placeholder="search" />

        <StyledIconbutton>
          <SlNote />
        </StyledIconbutton>
      </StyleddFrom>
    </InternalWrapper>
  </Wrapper>
  )
};
