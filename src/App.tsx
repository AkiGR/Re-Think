import { styled } from '@stitches/react';
import { useState } from 'react';
import { Sidebar , Menu , MarkdownEditor } from './components';

const Wrapper = styled('div', {
  maxWidth : '100vw',
  display : 'flex',
});

function App() {
  const [ folderId , setFolderId ] = useState<number>(0);
  const [ menuId , setMenuName ] = useState<string>('');
  const handleSendFolderId = ( id : number) => {
    return setFolderId(id);
  }
  const handleSendMenuId = ( name : string) => {
    return setMenuName(name);
  }
  return (
    <Wrapper>
        <Sidebar sendFolderId={handleSendFolderId}/>
        <Menu 
          folderId={folderId}
          sendMenuName={handleSendMenuId}
          />
        <MarkdownEditor 
          folderId={folderId}
          menuName={menuId}
          />
    </Wrapper>
  );
}

export default App;
