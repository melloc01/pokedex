import styled from 'styled-components'

export const RoundButton = styled.button`
  border:0;
  background-color: ${ ({bg}) => bg || 'white'};
  border-radius:50%;
  width: 1em;
  height: 1em;
  margin-right: 0.5em;
`

export const GlassButton = styled.div`
  position: relative;

  width: 60px;
  height: 60px;

  margin-right: 1em;

  border: 5px solid #fff;
  box-shadow: 0 0 10px #490000;
  background: radial-gradient(#05fbfb, #29abe3);
  border-radius: 50%;

  &:hover {
    // background: radial-gradient(hsl(180, 88%, 82%), #57c1ee);
    &:after {
      width: 100%;
      height: 100%;
      left:0;
      top:0;
    }
  }

  &:after {
    content: ' ';
    position: absolute;
    top: 20%;
    left: 35%;

    width: 40%;
    height: 25%;

    background-color: hsla(0, 0%, 100%, 0.85);
    border-radius: 50%;
    transition: all .25s ease-out;


  }
`
