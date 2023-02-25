import { FC, useState , useEffect} from 'react';
import SimpleMDE , {SimpleMDEReactProps } from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import 'github-markdown-css';
import { styled } from '@stitches/react';
import './style.css';
// import { Note } from '../../types';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

type Props = {
  folderId : number;
  menuName : string;
}

interface Note {
  folderId : number;
  menuName : string;
  body : string;
}

const Wrapper = styled('div', {
  fontFamily : 'serif',
  overflowY : 'scroll',
  minHeight : '100vh',
  maxHeight : '100vh',
  height : '100%',
  width : '100%',
  maxWidth : '100vw',
  fontSize : '20px',
  background : '#b3c8c9',
  borderTopRightRadius : '6px',
  borderBottomRightRadius : '6px',
});

const StyledH1 = styled('h1', {
  zIndex : '1000',
  textAlign : 'center',
  color : 'rgb(86,87,79)',
  fontSize : '3rem',
  padding : '10px',
});

const StyledTitle = styled('h1', {
  marginTop : '20px',
  zIndex : '1000',
  textAlign : 'center',
  color : '#ff4500',
  fontSize : '5rem',
  padding : '10px',
});


const Styledbutton = styled('div', {
  marginTop : '20px',
  zIndex : '1000',
  textAlign : 'center',
  color : 'rgb(86,87,79)',
  fontSize : '2rem',
  padding : '10px',
  '&:hover ' : {
    color : '#4682b4',
  },
});

const Styledbutton2 = styled('div', {
  marginTop : '20px',
  color : 'rgb(86,87,79)',
  fontSize : '1rem',
  padding : '10px',
  '&:hover ' : {
    color : '#4682b4',
  },
});

const StyledItemRight = styled('div' , {
  textAlign : 'right',
  fontSize : '3rem',
});

const StyledAnswerText = styled('div', {
  textAlign : 'center',
  marginTop : '10%',
  fontSize : '2rem',
});

const StyleTextView = styled('div', {
  textAlign : 'center',
  marginTop : '28%',
  color : 'gray',
});

const options : SimpleMDEReactProps['options'] = {
  previewClass : 'markdown-body',
  minHeight : "560px",
}

const InternalWrapper = styled('div', {});

export const MarkdownEditor : FC<Props> = ( { folderId , menuName } ) => {
  const [ isOpen , setIsOpen ] = useState(true);
  const [ noteValue , setNoteValue ] = useState<string>('');
  const [ Notes , setNotes ] = useState<Note[]>([]);
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  Modal.setAppElement('#root');

  Notes.map((item) => {
    console.log("ID : " + item.folderId + "\n" + "NAME : " + item.menuName + "\n"+ "BODY : " + item.body);
  })

  const handleClick = () => {
    setIsOpen((c) => !c);
  }

  const handleSaveNote = (value : string) => {
    setNoteValue(value);

    const note : Note = {
      folderId : folderId,
      menuName : menuName,
      body : value
    }

    const index = Notes.findIndex((item) => item.menuName === menuName);
    if (index >= 0) {
      setNotes((notes) =>
        notes.map((item, i) => {
          if (i === index) {
            return { ...item, body: value };
          }
          return item;
        })
      );
    } else {
      setNotes((notes) => [...notes, note]);
    }
  };

  useEffect(() => {
    const note = Notes.find((item) => item.menuName === menuName);
    if (note) {
      setNoteValue(note.body);
    } else {
      setNoteValue('');
    }
  }, [menuName, Notes]);

  useEffect(() => {
    const text = noteValue ? noteValue.valueOf() : '';
    const regex = /^#\s(.+)/gm;
    const match = regex.exec(text);
    if (match) {
      setHeading(match[1]);
    } else {
      setHeading('');
    }
  });

  useEffect(() => {
    const text = noteValue ? noteValue.valueOf() : '';
    const regex = /^#\s.*\n\n(.+)/s;
    const match = regex.exec(text);
    if (match) {
      setContent(match[1]);
    } else {
      setContent('');
    }
  });

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(true);
    setModalIsOpen(false);
  };


  return (
    <Wrapper>
      {noteValue != "" ? <Styledbutton2 onClick={openModal}> Test!! </Styledbutton2> : <></>}
      
      <StyledH1>{menuName}</StyledH1>

      {menuName != "" ? <SimpleMDE
                          value={noteValue} 
                          options={options} 
                          onChange={handleSaveNote} /> 
                          : <StyleTextView>ノートが開かれていません<br />新規ノートを作成して下さい</StyleTextView>}

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <StyledItemRight>
          <AiOutlineClose onClick={closeModal} />
        </StyledItemRight>

        <StyledTitle>{heading}</StyledTitle>

        <Styledbutton>
            { isOpen ? <button onClick={handleClick} >答え合わせ</button> : <button onClick={handleClick} >答え合わせ</button> }
        </Styledbutton>

      <InternalWrapper
        css ={{ display : isOpen ? "none" : "block", }}
      >
        <StyledAnswerText>
          <div>{content}</div>
        </StyledAnswerText>
      </InternalWrapper>
      </Modal>

    </Wrapper>
  )
}
