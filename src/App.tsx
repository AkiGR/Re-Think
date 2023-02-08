import 'destyle.css';
import { styled } from '@stitches/react';
import { Sidebar , Menu , Note } from './components';

const StyledBody = styled('div', {
  width : '100%',
  height : '100%',
  margin : 'auto',
  display : 'flex',
  border : 'solid 1px black',
});

function App() {
  return (
    <StyledBody>
        <Sidebar />
        <Menu />
        <Note />
    </StyledBody>
  );
}

export default App;
