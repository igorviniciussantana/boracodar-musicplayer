import Image from "next/image";
import * as Styled from "./styled";
import { Roboto } from "@next/font/google";
import { useEffect, useRef, useState } from "react";
const robotoBold = Roboto({ weight: "700", subsets: ["latin"] });
const robotoRegular = Roboto({ weight: "400", subsets: ["latin"] });

export default function MusicCard() {
    const audioRef = useRef<HTMLAudioElement>(null)

    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState<number | undefined>(0)
  
    function setPlayingState(state : any) {
      setIsPlaying(state)
    }
    {console.log(audioRef)}

    function toggleIsPlaying() {
      setIsPlaying(!isPlaying)
    }
  
    useEffect(()=> {
      setDuration(duration == 0 ? audioRef.current?.duration : duration)

      if (!audioRef.current) {
          return;
      }
  
      if (isPlaying) {
          audioRef.current.play()
          setInterval(() => typeof duration == 'number' ? setDuration( duration - 0.01 ) : 0, 1000)
      } else {
          audioRef.current.pause()
      }
    }, [isPlaying])

   

      return (
    <Styled.MusicCard>
      <Styled.MusicInfo>
        <Styled.ImageBox>
          <Image src="/image.png" alt="" fill />
        </Styled.ImageBox>
        <Styled.MusicNames>
          <Styled.Title className={robotoBold.className}>
            Acorda Devinho
          </Styled.Title>
          <Styled.Subtitle className={robotoRegular.className}>
            Banda Rocketseat
          </Styled.Subtitle>
        </Styled.MusicNames>
      </Styled.MusicInfo>
      <Styled.Icons>
        <Styled.IconBox>
          <Image src="/icons/play-back.svg" alt="back-button" fill />
        </Styled.IconBox>
        <Styled.IconBox>
          
          {!isPlaying ? (<Image src="/icons/play.svg" onClick={toggleIsPlaying} alt="back-button" fill />) : (<Image src="/icons/pause.svg" onClick={toggleIsPlaying} alt="back-button" fill />)}
          
        </Styled.IconBox>
        <Styled.IconBox>
          <Image src="/icons/play-forward.svg" alt="back-button" fill />
        </Styled.IconBox>
      </Styled.Icons>

      <audio 
            src='https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3' 
            autoPlay={false} 
            ref={audioRef}
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
        />
{ typeof duration == 'number' ? (duration / 60).toString().substring(0, 4) : '00:00'}
       
    </Styled.MusicCard>
    
  );
}
