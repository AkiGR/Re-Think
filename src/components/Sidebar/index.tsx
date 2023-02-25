import { FC, useState } from 'react';
import { styled } from '@stitches/react';
import { AiFillFolderAdd } from 'react-icons/ai';
import { Folder } from '../../types';


type Props = {
  sendFolderId : (id : number) => void;
}

// 全体の背景色
const Wrapper = styled('div', {
  fontFamily : 'serif',
  minHeight : '100vh',
  minWidth : '20%',
  display : 'block',
  background : 'rgba(39, 100, 119, 0.7)',
  borderTopLeftRadius : '6px',
  borderBottomLeftRadius : '6px',
});

// 入力フォーム
const StyleddFrom = styled('form', {
  fontSize : '1.3rem',
  marginTop : '10px',
  marginLeft : '20px',
  borderBottom : '1px solid black',
});
// Topのデザイン
const StyledH1 = styled('h1', {
  fontSize : '2rem',
  marginLeft : '1rem',
  marginTop : '10px',
})
// サイドバーボタンのデザイン
const StyledSidebarButton = styled('button', {
  display : 'block',
  border : 'none',
  borderRadius : '5px',
  background : 'rgba(39 100 119 / 0%)',
  fontSize : '2.5rem',
  margin : '10px',
  marginLeft : '3rem',
  '&:hover' : {
    color : 'white',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  '&.active': {
    textDecoration: 'underline',
  },
})

const InternalWrapper = styled('div', {});

export const Sidebar : FC<Props> = ( { sendFolderId }) => {
  const [activeFolderId, setActiveFolderId] = useState<number>();
  const [ folderName , setFolderName ] = useState<string>('');
  const [ folders , setFolders] = useState<Folder[]>([]);

  const handleAddFolder = () => {
    let maxId = 0;
    for (const id of folders) {
      if (maxId < id.id) maxId = id.id
    }
    const newFolder : Folder = { id :  maxId + 1, name : folderName , notes : [] };
    setFolders((curFolders) => curFolders.concat(newFolder));

    setFolderName("");
  }

  return (
    <Wrapper>
        <StyledH1>All Folder </StyledH1>
        <StyleddFrom>
          <input 
            type="text" 
            placeholder='folder' 
            value={folderName} 
            onChange={ (e) => setFolderName(e.target.value)} />
            <AiFillFolderAdd onClick={handleAddFolder} />
        </StyleddFrom>

        <InternalWrapper>
          {folders.map( item => {
            return <StyledSidebarButton 
                      key={item.id} 
                      value={item.id} 
                      onClick={() => {
                        setActiveFolderId(item.id);
                        sendFolderId(item.id);
                      }}
                      className={activeFolderId === item.id ? 'active' : ''}
                      > {item.name} </StyledSidebarButton>;
          })}
        </InternalWrapper>
        
    </Wrapper>
    )
};
