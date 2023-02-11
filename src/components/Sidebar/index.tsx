import { FC } from 'react';
import { styled } from '@stitches/react';
import { AiFillFolderAdd } from 'react-icons/ai';

// 全体の背景色
const Wrapper = styled('div', {
  minHeight : '100vh',
  minWidth : '20%',
  display : 'block',
  background : 'rgba(39, 100, 119, 0.7)',
  borderTopLeftRadius : '6px',
  borderBottomLeftRadius : '6px',
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
  fontSize : '16px',
  margin : '10px',
  marginLeft : '3rem',
  '&:hover' : {
    color : 'white',
  },
})

// テスト表示配列
const ProOption  = [ 'React', 'TypeScript', 'Node', 'Go', 'Swift' ];
const DesignOption = [ 'デザインブック', 'In Design 基礎入門' ];
const BookOption = [ 'リーダブルコード', 'React 実践の教科書', 'Flutter 入門' ];

export const Sidebar : FC = () => {
  return (
    <Wrapper>
        <StyledH1>All Note <AiFillFolderAdd /></StyledH1>
            {ProOption.map((item) => {
              return <StyledSidebarButton key={item}>{item}</StyledSidebarButton>
            })}
          
            {DesignOption.map((item) => {
              return <StyledSidebarButton key={item}>{item}</StyledSidebarButton>
            })}
          
            {BookOption.map((item) => {
              return <StyledSidebarButton key={item}>{item}</StyledSidebarButton>
            })}
    </Wrapper>
    )
  };
