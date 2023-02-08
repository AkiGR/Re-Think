import { styled } from '@stitches/react';
import { Sidebar , Menu , Note } from './components';
import { useState } from 'react';

const Wrapper = styled('div', {
  width : '100%',
  height : '100%',
  margin : 'auto',
  display : 'flex',
  border : 'solid 1px black',
});

function App() {
  const [isOpen , setIsOpen] = useState(true);
  const handleToggleIsOpen = () => {
    setIsOpen((p) => !p);
  };

  return (
    <Wrapper>
        <Sidebar />
        {isOpen ? <Menu onToggle={handleToggleIsOpen} /> : undefined}
        <Note />
    </Wrapper>
  );
}

export default App;
