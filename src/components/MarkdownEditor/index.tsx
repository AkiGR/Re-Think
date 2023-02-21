import { FC, useState , useRef, useEffect} from 'react';
import SimpleMDE , {SimpleMDEReactProps } from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import 'github-markdown-css';
import { styled } from '@stitches/react';
import './style.css';
import { Note } from '../../types';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import { authPlugins } from 'mysql2';

type Props = {
  folderId : number;
  menuName : string;
}

const Wrapper = styled('div', {
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

const StyledItemRight = styled('div' , {
  textAlign : 'right',
  fontSize : '3rem',
});

const StyledAnswerText = styled('div', {
  textAlign : 'center',
  marginTop : '10%',
  fontSize : '2rem',
});

const options : SimpleMDEReactProps['options'] = {
  previewClass : 'markdown-body',
  minHeight : "590px",
}

const InternalWrapper = styled('div', {});

export const MarkdownEditor : FC<Props> = ( { folderId , menuName } ) => {
  const [ isOpen , setIsOpen ] = useState(true);
  const [ noteValue , setNoteValue ] = useState<string>('');
  const [ Notes , setNotes ] = useState<Note[]>([]);
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClick = ()  => {
    setIsOpen((c) => !c);
  }

  Modal.setAppElement('#root');
  const handleSaveNote = (value : string) => {
    setNoteValue(value);
    console.log(noteValue);
    
  };

  useEffect(() => {
    const text = noteValue ? noteValue.valueOf() : '';
    const regex = /^#\s(.+)/gm;
    // const regex = /<p>([^<]+)<\/p>/i;
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
    setModalIsOpen(false);
  };


  return (
    <Wrapper>
      <button onClick={openModal}> Test!! </button>
      
      <StyledH1>Markdown Editor</StyledH1>
        <SimpleMDE
          value={noteValue} 
          options={options} 
          onChange={handleSaveNote} 
        />

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
