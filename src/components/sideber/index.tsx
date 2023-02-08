import { FC } from 'react';
import { styled } from '@stitches/react';
import { AiFillFolderAdd } from 'react-icons/ai';

// 全体の背景色
const StyledBackground = styled('body', {
  minHeight : '100vh',
  Width : 'auto',
  display : 'block',
  background : 'rgba(39, 100, 119, 0.7)',
  borderTopLeftRadius : '6px',
  borderBottomLeftRadius : '6px',
});


// Topのデザイン
const StyledH1 = styled('h1', {
  fontSize : '2rem',
  marginLeft : '1rem',
})
// サイドバーボタンのデザイン
const StyledSideberButton = styled('button', {
  display : 'block',
  border : 'none',
  borderRadius : '5px',
  background : 'rgba(39 100 119 / 0%)',
  fontSize : '16px',
  margin : '10px',
  marginLeft : '3rem',
})

// テスト表示配列
const ProOption  = [ 'React', 'TypeScript', 'Node', 'Go', 'Swift' ];
const DesignOption = [ 'ノンデザイナーズ・デザインブック', 'In Design 基礎入門' ];
const BookOption = [ 'リーダブルコード', 'React 実践の教科書', 'Flutter 入門' ];

export const Sideber : FC = () => {
  return (
    <StyledBackground>
        <StyledH1>All Note <AiFillFolderAdd /></StyledH1>
            {ProOption.map((item) => {
              return <StyledSideberButton>{item}</StyledSideberButton>
            })}
          
            {DesignOption.map((item) => {
              return <StyledSideberButton>{item}</StyledSideberButton>
            })}
          
            {BookOption.map((item) => {
              return <StyledSideberButton>{item}</StyledSideberButton>
            })}
    </StyledBackground>
    )
  };
