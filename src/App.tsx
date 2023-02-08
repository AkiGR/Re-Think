import 'destyle.css';
import { styled } from '@stitches/react';
import { Sidebar , Menu , Note } from './components';

const StyledDiv = styled('div', {
  width : '100%',
  height : '100%',
  margin : 'auto',
  display : 'flex',
  border : 'solid 1px black',
});

function App() {
  return (
    <StyledDiv>
        <Sidebar />
        <Menu />
        <Note />
    </StyledDiv>
  );
}

export default App;
