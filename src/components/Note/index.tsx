import { FC } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { styled } from '@stitches/react';

const Wrapper = styled('div', {
  minHeight : '100vh',
  minWidth : '100vw',
  fontSize : '20px',
  maxHeight : '100%',
  background : '#b3c8c9',
  borderTopRightRadius : '6px',
  borderBottomRightRadius : '6px',
});

const StyledH1 = styled('h1', {
  textAlign : 'center',
  color : 'rgb(86,87,79)',
  fontSize : '2rem',
});

export const Note : FC = () => {
  return (
    <Wrapper>
    <StyledH1>Markdown Editor</StyledH1>
      <SimpleMDE />
    </Wrapper>
  )
}
