import { FC } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { styled } from '@stitches/react';

const StyledBackground = styled('body', {
  minHeight : '100vh',
  fontSize : '20px',
  maxHeight : '100%',
  background : '#b3c8c9',
  borderTopRightRadius : '6px',
  borderBottomRightRadius : '6px',
});

const StyledH1 = styled('h1', {
  textAlign : 'center',
  color : 'rgb(86,87,79)',
});

export const Note : FC = () => {
  return (
    <StyledBackground>
    <StyledH1>Markdown Editor</StyledH1>
      <SimpleMDE  />
    </StyledBackground>
  )
}
