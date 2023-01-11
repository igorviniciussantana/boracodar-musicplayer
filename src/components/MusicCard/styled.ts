import styled, { keyframes } from "styled-components";


const progressload = keyframes`
from{
  width: 0%
}to{
  width: 100%;
}
`

export const MusicCard = styled.main`
  background-color: #2a2141;
  border-radius: 0.5rem;
  color: rgba(217, 217, 217, 1);
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 800px) {
    width: clamp(500px, 60vw, 1000px);
    padding: 3rem;

    .timer {
      display: none;
    }
  }

  @media screen and (min-width: 480px) and (max-width: 800px) {
    width: clamp(450px, 80vw, 720px);
    padding: 2rem;
  }

  @media screen and (max-width: 480px) {
    width: clamp(300px, 80vw, 470px);
    padding: 2rem;
    border-radius: 0.5rem;
  }
`;

export const MusicInfo = styled.div`
  display: flex;
  width: 100%;
  column-gap: 2rem;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    row-gap: 1rem;
    column-gap: 0;
  }
`;

export const MusicNames = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-weight: inherit;
  font-size: clamp(2rem, 4vw, 5rem);
`;

export const Subtitle = styled.h2`
  opacity: 0.67;
  margin-top: 0.5rem;
  font-size: clamp(1.6rem, 2vw, 3rem);
`;

export const ImageBox = styled.div`
  position: relative;

  @media screen and (min-width: 800px) {
    width: 12rem;
  }

  @media screen and (min-width: 480px) and (max-width: 800px) {
    width: clamp(450px, 80vw, 720px);
    width: 8rem;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }

  aspect-ratio: 1/1;

  img {
    border-radius: 0.4rem;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 60%;
  column-gap: 1rem;
  margin-top: 2rem;
`;

export const IconBox = styled.div`
  position: relative;
  width: 4rem;
  aspect-ratio: 1/1;

  img {
    cursor: pointer;

    &:hover {
      filter: brightness(90%);
    }
    &:active {
      transform: scale(0.95);
    }
  }
`;

export const ProgressWrapper = styled.div`
@media screen and (min-width: 800px){
  display: none;
}
width: 100%;
height: 0.75rem;
background-color: rgba(217, 217, 217, 0.3);
border-radius: 10rem;
overflow: hidden;
position: relative;
margin-top: 1rem;

`
export const ProgressBar = styled.div`
height: 100%;
background-color: rgba(217, 217, 217, 0.8);
position: absolute;
top: 0;
left: 0;

`
export const TimerWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const Timer = styled.span`
  font-size: 1.25rem;
`;
