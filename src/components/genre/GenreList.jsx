import React from 'react'
import GenreItem from './GenreItem';
import styled from 'styled-components';

const GenreList = ({ genres, sliceValue = genres.length }) => {
  return (
    <GenreListWrapper>
        <div className='card-list'>
            {
                genres?.slice(0, sliceValue).map((item, idx) => (<GenreItem key = {idx} genreItem = {item} />))
            }
        </div>
    </GenreListWrapper>
  )
}

export default GenreList

const GenreListWrapper = styled.div`
  div:has(.section-btn){
    margin-top: 60px;
  }
`;