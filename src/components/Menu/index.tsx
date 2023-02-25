import { FC , useEffect, useState} from 'react';
import { styled } from '@stitches/react';
import { SlNote } from 'react-icons/sl';
import { BsFillArrowLeftCircleFill , BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Note } from '../../types';


type Props = {
  folderId : number;
  sendMenuName : (name : string) => void;
}
// 全体の背景色
const Wrapper = styled('div', {
  fontFamily : 'serif',
  display : 'block',
  background : 'rgba(6, 6, 6, 0.06)',
});

// 検索フォーム
const StyleddFrom = styled('form', {
  width : '100%',
  fontSize : '1rem',
  marginTop : '10px',
  marginLeft : '15px',
  borderBottom : '1px solid black',
});

const StyledIconPosition = styled('div' , {
  textAlign : 'end',
  fontSize : '1rem',
  marginBottom : '26px',
})

// メニューボタンのデザイン
const StyledMenuButton = styled('button', {
  display : 'block',
  border : 'none',
  borderRadius : '5px',
  background : 'rgba(39 100 119 / 0%)',
  fontSize : '20px',
  margin : '10px',
  marginTop : '20px',
  marginLeft : '2rem',
  '&:hover' : {
    width : '100%',
    color : '#6fb1de',
  },
})

const InternalWrapper = styled('div', {});

export const Menu: FC<Props> = ( { folderId , sendMenuName }) => {
  const [ isOpen , setIsOpen ] = useState(true);
  const [ button , setButton ] = useState(true);
  const [ noteName , setNotename ] = useState<string>('');
  const [ Notes , setNotes ] = useState<Note[]>([]);

  const handleClick = ()  => {
    setIsOpen((c) => !c);
  }

  useEffect (() => {
    if(folderId == 0){
      setButton(false)
    } else {
      setButton(true)
    }
  });

  const handleAddNote = () => {
    const newNote : Note = { folderId : folderId , name : noteName , body : ''};
    setNotes((curNote) => curNote.concat(newNote))

    setNotename("");
  }

  return (
  <Wrapper css={{ display : button ? "block" : "none"}}>
    <StyledIconPosition>
      { isOpen ? <BsFillArrowLeftCircleFill onClick={handleClick} /> : <BsFillArrowRightCircleFill onClick={handleClick}/> }
    </StyledIconPosition>
      <InternalWrapper
        css ={{ display : isOpen ? "block" : "none", }}
      >

      <StyleddFrom>
        <SlNote onClick={handleAddNote}/>
        <input 
          type="text" 
          placeholder="note" 
          value={noteName} 
          onChange={ (e) => setNotename(e.target.value)} />
      </StyleddFrom>


      { Notes.map( (item) => {
        return item.folderId == folderId ? 
          <StyledMenuButton 
            key={item.name} 
            onClick={ () => sendMenuName(item.name) }> {item.name} </StyledMenuButton> 
          : <></> })
      }

    </InternalWrapper>
  </Wrapper>
  )
};
