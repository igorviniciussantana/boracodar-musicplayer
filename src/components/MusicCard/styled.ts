import styled from "styled-components";

export const MusicCard = styled.main`
background-color: #2A2141;
padding: 3rem;
border-radius: 0.5rem;
color: #E1E1E6;



@media screen and (min-width: 800px){
    width: clamp(500px, 50vw 1000px);
    display: flex;
    align-items: center;
    flex-direction: column;
}


@import '@radix-ui/colors/blackA.css';

.ProgressRoot {
  position: relative;
  overflow: hidden;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 99999px;
  width: 300px;
  height: 25px;

  /* Fix overflow clipping in Safari */
  /* https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0 */
  transform: translateZ(0);
}

.ProgressIndicator {
  background-color: rgba(217, 217, 217, 0.8);
  width: 100%;
  height: 100%;
  transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);
}
`

export const MusicInfo = styled.div`
display: flex;
width: 100%;
column-gap: 2rem;
`

export const MusicNames = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`
export const Title = styled.h1`
font-weight: inherit;
font-size: clamp(3rem, 3vw, 6rem);
`

export const Subtitle = styled.h2`
opacity: 0.67;
margin-top: 0.5rem;
font-size: 2rem;

`


export const ImageBox = styled.div`
position: relative;
width: 12rem;
aspect-ratio: 1/1;

img{
border-radius: 0.4rem;

}
`

export const Icons = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 60%;
margin-top: 2rem;
`

export const IconBox = styled.div`
position: relative;
width: 4rem;
aspect-ratio: 1/1;

img{
    cursor: pointer;
   
    &:hover{
        filter: brightness(90%);
        
    }
    &:active{
        transform: scale(0.95);
    }
}
`

export const Timer = styled.span`

`