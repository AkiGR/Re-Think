import { FC , useState} from 'react';
import { styled } from '@stitches/react';
import { SlNote } from 'react-icons/sl';
import { BsFillArrowLeftCircleFill , BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Note } from '../../types';
import { type } from 'os';


type Props = {
  folderId : number;
}
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

// メニューボタンのデザイン
const StyledMenuButton = styled('button', {
  display : 'block',
  border : 'none',
  borderRadius : '5px',
  background : 'rgba(39 100 119 / 0%)',
  fontSize : '30px',
  margin : '10px',
  marginLeft : '3rem',
  '&:hover' : {
    width : '100%',
    color : '#6fb1de',
  },
})

const InternalWrapper = styled('div', {});

export const Menu: FC<Props> = ( { folderId }) => {
  const [ isOpen , setIsOpen ] = useState(true);
  const [ noteName , setNotename ] = useState<string>('');
  const [ Notes , setNotes ] = useState<Note[]>([]);

  const handleClick = ()  => {
    setIsOpen((c) => !c);
  }

  const handleAddNote = () => {
    let maxId = 0;
    for (const id of Notes) {
      if (maxId < id.id) maxId = id.id
    }
    const newNote : Note = { id : maxId + 1 , folderId : folderId , name : noteName , body : ''};
    setNotes((curNote) => curNote.concat(newNote))

    setNotename("");
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
        <SlNote onClick={handleAddNote}/>
        <input type="text" placeholder="note" value={noteName} onChange={ (e) => setNotename(e.target.value)} />
      </StyleddFrom>


      { Notes.map( (item) => {
        return  item.folderId == folderId ? <StyledMenuButton key={item.id}> {item.name} </StyledMenuButton> : <></> })
      }

    </InternalWrapper>
  </Wrapper>
  )
};
