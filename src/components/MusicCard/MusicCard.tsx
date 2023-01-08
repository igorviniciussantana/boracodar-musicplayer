import Image from 'next/image'
import * as Styled from './styled'
import * as Progress from '@radix-ui/react-progress';
import { Roboto } from '@next/font/google'
import { useState, useEffect } from 'react';

const robotoBold = Roboto({weight: '700', subsets: ['latin']})
const robotoRegular = Roboto({weight: '400', subsets: ['latin']})


export default function MusicCard(){


    const [progress, setProgress] = useState(0);
    const musicDuration = 3.32 * 1000;

    useEffect(() => {
      const timer = setInterval(() => setProgress(progress => progress + 1), 1000);
      return () => clearInterval(timer);
    }, [progress]);

console.log(progress)
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

            <Progress.Root className="ProgressRoot" value={66}>
      <Progress.Indicator
        className="ProgressIndicator"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
           
        </Styled.MusicCard>
    )

}