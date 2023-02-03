import 'destyle';
import { styled } from '@stitches/react';
import { Sideber , Menu , Note } from './components';

const StyledBody = styled('body', {
  width : '100%',
  height : '100%',
  margin : 'auto',
  display : 'flex',
  border : 'solid 1px black',
});

function App() {
  return (
    <StyledBody>
      <Sideber />
      <Menu />
      <Note />
    </StyledBody>
  );
}

export default App;
