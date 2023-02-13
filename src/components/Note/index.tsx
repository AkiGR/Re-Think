import { FC  } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { styled } from '@stitches/react';

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

export const Note : FC = () => {
  return (
    <Wrapper>
    <StyledH1>Markdown Editor</StyledH1>
        <SimpleMDE options={{ minHeight : "590px" }} />
    </Wrapper>
  )
}