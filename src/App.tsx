import { styled } from '@stitches/react';
import { Sidebar , Menu , Note } from './components';

const Wrapper = styled('div', {
  width : '100%',
  height : '100%',
  margin : 'auto',
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
