import styled from "styled-components";

export const MusicCard = styled.main`
background-color: #2A2141;
padding: 3rem;
border-radius: 0.5rem;
color: #E1E1E6;



@media screen and (min-width: 700px){
    width: 50vw;
    display: flex;
    align-items: center;
    flex-direction: column;
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
font-size: 3rem;
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