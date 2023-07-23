import React from 'react';
import { loader } from '../../utils/images';
import styled from 'styled-components';

const Preloader = () => {
  return (
    <PreloaderWrapper className='d-flex align-items-center justify-content-center'>
      <img src = { loader } alt = "preloader" />
    </PreloaderWrapper>
  )
}

export default Preloader;

const PreloaderWrapper = styled.div`
  img{
    max-width: 120px;
  }
`;
