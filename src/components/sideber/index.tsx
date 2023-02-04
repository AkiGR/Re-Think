import { FC } from 'react';
import { styled } from '@stitches/react';
import Select from 'react-select';
import { AiFillFolderAdd } from 'react-icons/ai';

// 全体の背景色
const StyledBackground = styled('body', {
  minHeight : '100vh',
  display : 'block',
  background : 'rgba(39, 100, 119, 0.7)',
  borderTopLeftRadius : '6px',
  borderBottomLeftRadius : '6px',
});

// サイドバーのデザイン
const StyledSideber = styled('header', {
  color : 'rgb(86,87,79)',
  fontSize : '16px',
  padding : '5px',
  marginLeft : '10px',
});

// フォームの背景デザイン
const StyledFormBackground = styled('form', {
  background : '#FFFFFF',
  padding : '5px',
});

// 要素数の文字色
const StyledLiColor = styled('li', {
  listStyle : 'none',
  marginLeft : 'auto',
  color : 'rgba(255, 255, 255, 0.7)',
});

// タイトル項目の文字
const Styledh3 = styled('h3', {
  marginLeft : '10%',
});

const ProOption  = [ 'React', 'TypeScript', 'Node', 'Go', 'Swift' ];

const DesignOption = [ 'ノンデザイナーズ・デザインブック', 'In Design 基礎入門' ];

const BookOption = [ 'リーダブルコード', 'React 実践の教科書', 'Flutter 入門' ];

export const Sideber : FC = () => {
  return (
    <StyledBackground>
      <StyledSideber>
        <h2>All Note <AiFillFolderAdd /></h2>

        <Styledh3>
          Programing
          <ul>
              {ProOption.map((item) => {
                return <StyledLiColor>{item}</StyledLiColor>
              })}
          </ul>
        </Styledh3>

        <Styledh3>
          Designi
          <ul>
              {DesignOption.map((item) => {
                return <StyledLiColor>{item}</StyledLiColor>
              })}
          </ul>
        </Styledh3>

        <Styledh3>
          Books
          <ul>
              {BookOption.map((item) => {
                return <StyledLiColor>{item}</StyledLiColor>
              })}
          </ul>
        </Styledh3>
      </StyledSideber>


    </StyledBackground>
  );
}
