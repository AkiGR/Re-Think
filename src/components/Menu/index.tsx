import { FC , useState} from 'react';
import { styled } from '@stitches/react';
import { SlNote } from 'react-icons/sl';
import { BsFillArrowLeftCircleFill , BsFillArrowRightCircleFill } from 'react-icons/bs';

// 全体の背景色
const Wrapper = styled('div', {
  display : 'block',
  background : 'rgba(6, 6, 6, 0.06)',
});

// 検索フォーム
const StyleddFrom = styled('form', {
  width : '100%',
  fontSize : '1.5rem',
  marginLeft : '15px',
  borderBottom : '1px solid black',
});

const StyledIconPosition = styled('div' , {
  textAlign : 'end',
  fontSize : '1rem',
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
        css ={{ display : isOpen ? "block" : "none", }}
      >

      <StyleddFrom>
        <SlNote />
        <input type="text" placeholder="note" ></input>
      </StyleddFrom>

    </InternalWrapper>
  </Wrapper>
  )
};
