import Image from 'next/image'
import * as Styled from './styled'

import { Roboto } from '@next/font/google'

const roboto = Roboto({weight: ['700', '400'], subsets: ['latin']})

export default function MusicCard(){
    return(
        <Styled.MusicCard>
            <Styled.MusicInfo>
            <Styled.ImageBox>
                <Image src='/image.png' alt='' fill/>
            </Styled.ImageBox>
            <Styled.MusicNames>
            <Styled.Title className={roboto.className}>Acorda Devinho</Styled.Title>
            <Styled.Subtitle>Banda Rocketseat</Styled.Subtitle>
            </Styled.MusicNames>
            </Styled.MusicInfo>
           
        </Styled.MusicCard>
    )

}