import { FC, useState } from 'react';
import SimpleMDE , { SimpleMDEReactProps } from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import 'github-markdown-css';
import { styled } from '@stitches/react';
import './style.css';
import { Note } from '../../types';

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

const options : SimpleMDEReactProps['options'] = {
  previewClass : 'markdown-body',
  minHeight : "590px",
}

export const MarkdownEditor : FC<Props> = ( { folderId , menuName } ) => {
  const [ noteValue , setNoteValue ] = useState<string>('');
  const [ Notes , setNotes ] = useState<Note[]>([]);

  const handleSaveNote = (value : string) => {
    setNoteValue(value);
    const newNote : Note = { folderId : folderId , name : menuName , body : noteValue};
    setNotes((curNote) => curNote.concat(newNote))
  }
  return (
    <Wrapper>
      <button> Test!! </button>
      
      <StyledH1>Markdown Editor</StyledH1>
        <SimpleMDE
          value={noteValue} 
          options={options} 
          onChange={handleSaveNote} 
        />
    </Wrapper>
  )
}
