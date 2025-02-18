import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper className='flex justify-center'>
      <button onClick={() => window.location.href = '/ebmembers'}>
        <span className="box font-serif">
          Executive Board Members
        </span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .box {
    width: auto;
    height: auto;
    float: left;
    transition: .5s linear;
    position: relative;
    display: block;
    overflow: hidden;
    border: 2px solid #16423C;
    padding: 15px;
    text-align: center;
    margin: 0 5px;
    background: transparent;
    text-transform: uppercase;
    font-weight: 700;
    color:#16423C;
    
  }

  .box:before {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    height: 4px;
    width: 100%;
    border-bottom: 4px solid transparent;
    border-left: 4px solid transparent;
    box-sizing: border-box;
    transform: translateX(100%);
  }

  .box:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    border-top: 4px solid transparent;
    border-right: 4px solid transparent;
    box-sizing: border-box;
    transform: translateX(-100%);
  }

  .box:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }

  .box:hover:before {
    border-color: #006A67;
    height: 100%;
    transform: translateX(0);
    transition: .3s transform linear, .3s height linear .3s;
  }

  .box:hover:after {
    border-color: #003161;
    height: 100%;
    transform: translateX(0);
    transition: .3s transform linear, .3s height linear .5s;
  }

  button {
    color: black;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    border: none;
    background: transparent;
  }`;

export default Button;
