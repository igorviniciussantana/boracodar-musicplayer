import styled from "styled-components";

export const MusicCard = styled.main`

background-color: #2A2141;
padding: 3rem;
border-radius: 0.5rem;


@media screen and (min-width: 700px){
    width: 50vw;
    height: 30vw;
    display: flex;
    align-items: center;
    flex-direction: column;
}
`

export const MusicInfo = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`

export const MusicNames = styled.div`
display: flex;
flex-direction: column;
`
export const Title = styled.h1`

`

export const Subtitle = styled.h2`

`


export const ImageBox = styled.div`
position: relative;
width: 6rem;
aspect-ratio: 1/1;
background-color: red;
`