import { styled } from '@stitches/react';
import { type } from 'os';
import { useState } from 'react';
import { Sidebar , Menu , Note } from './components';

const Wrapper = styled('div', {
  maxWidth : '100vw',
  display : 'flex',
});

function App() {
  const [ folderId , setFolderId ] = useState<number>(0);
  const handleSendFolderId = ( id : number) => {
    return setFolderId(id);
  }
  return (
    <Wrapper>
        <Sidebar sendFolderId={handleSendFolderId}/>
        <Menu folderId={folderId}/>
        <Note />
    </Wrapper>
  );
}

export default App;
