import Image from 'next/image'
import * as Styled from './styled'

import { Roboto } from '@next/font/google'

const robotoBold = Roboto({weight: '700', subsets: ['latin']})
const robotoRegular = Roboto({weight: '400', subsets: ['latin']})


export default function MusicCard(){
    return(
        <Styled.MusicCard>
            <Styled.MusicInfo>
            <Styled.ImageBox>
                <Image src='/image.png' alt='' fill/>
            </Styled.ImageBox>
            <Styled.MusicNames>
            <Styled.Title className={robotoBold.className}>Acorda Devinho</Styled.Title>
            <Styled.Subtitle className={robotoRegular.className}>Banda Rocketseat</Styled.Subtitle>
            </Styled.MusicNames>
            </Styled.MusicInfo>
            <Styled.Icons>
                <Styled.IconBox>
                <Image src='/icons/play-back.svg' alt='back-button' fill/>
                </Styled.IconBox>
                <Styled.IconBox>
                <Image src='/icons/play.svg' alt='back-button' fill/>
                </Styled.IconBox>
                <Styled.IconBox>
                <Image src='/icons/play-forward.svg' alt='back-button' fill/>
                </Styled.IconBox>

            </Styled.Icons>
           
        </Styled.MusicCard>
    )

}