import { styled } from '@stitches/react';
import { Sidebar , Menu , Note } from './components';

const Wrapper = styled('div', {
  maxWidth : '100vw',
  display : 'flex',
  border : 'solid 1px black',
});

function App() {
  return (
    <Wrapper>
        <Sidebar />
        <Menu />
        <Note />
    </Wrapper>
  );
}

export default App;
