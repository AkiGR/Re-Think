import { FC } from 'react';
import { styled } from '@stitches/react';
import Select from 'react-select';
import { AiFillFolderAdd } from 'react-icons/ai';

// 全体の背景色
const StyledBackground = styled('body', {
  background : 'rgba(39, 100, 119, 0.7)',
  borderRadius : '6px',
});

// サイドバーのデザイン
const StyledSideber = styled('header', {
  color : 'rgb(86,87,79)',
  fontSize : '20px',
  padding : '5px',
});

// フォームの背景デザイン
const StyledFormBackground = styled('form', {
  background : '#FFFFFF',
  padding : '5px',
});

// 要素数の文字色
const StyledtextColor = styled('text', {
  marginLeft : '5px',
  color : 'rgba(255, 255, 255, 0.7)',
});

const ProOption  = [
  { value : 'React', label : 'React'},
  { value : 'TypeScript', label : 'TypeScript' },
  { value : 'Node', label : 'Node' },
  { value : 'Go', label : 'Go'},
  { value : 'Swift', label : 'Swift' },
]

const DesignOption = [
  { value : 'ノンデザイナーズ・デザインブック', label : 'ノンデザイナーズ・デザインブック' },
  { value : 'In Design 基礎入門', label : 'In design 基礎入門' },
]

const BookOption = [
  { value : 'リーダブルコード', label : 'リーダブルコード' },
  { value : 'React 実践の教科書', label : 'React 実践の教科書' },
  { value : 'Flutter 入門', label : 'Flutter 入門'},
]

export const Sideber : FC = () => {
  return (
    <StyledBackground>
      <StyledSideber>
        <h2>All Note <AiFillFolderAdd /></h2>
        <h3>
          Programing
            <StyledtextColor>
              {ProOption.length}
            </StyledtextColor>
        </h3>
         <Select
            isMulti
            placeholder="programing"
            options={ProOption} />

        <h3>
          Design
            <StyledtextColor>
              {DesignOption.length}
            </StyledtextColor>
        </h3>
        <Select
            isMulti
            placeholder="design"
            options={DesignOption} />

        <h3>
          Books
            <StyledtextColor>
              {BookOption.length}
            </StyledtextColor>
        </h3>
        <Select
            isMulti
            placeholder="book"
            options={BookOption} />
      </StyledSideber>

      <StyledFormBackground>
        <input type="text" placeholder="タイトル"/><br />
        <input type="submit" value="リセット" />
        <input type="submit" value="検索" />

      </StyledFormBackground>

    <StyledSideber>
      <h3>results</h3>
    </StyledSideber>


    </StyledBackground>
  );
}
