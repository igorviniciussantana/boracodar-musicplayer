import Image from "next/image";
import * as Styled from "./styled";
import { Roboto } from "@next/font/google";
import { MutableRefObject, useEffect, useRef, useState } from "react";
const robotoBold = Roboto({ weight: "700", subsets: ["latin"] });
const robotoRegular = Roboto({ weight: "400", subsets: ["latin"] });

export default function MusicCard() {
  const audioRef = useRef() as MutableRefObject<HTMLAudioElement>;

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState<number | undefined>(0);
  const [remainingDuration, setRemainingDuration] = useState<number | undefined>(0);


  function setPlayingState(state: any) {
    setIsPlaying(state);
  }

  function toggleIsPlaying() {
    setIsPlaying(!isPlaying);
  }

  function formatDuration(durationToFormat : number){
    const formatedDuration = (durationToFormat) - 0.60 > Math.floor(durationToFormat) ? Math.ceil(durationToFormat) + ( durationToFormat - (Math.floor(durationToFormat) + 0.6)) : durationToFormat
    return formatedDuration
  }
  function restartAudio(){
    audioRef.current.currentTime = 0;
    setDuration(formatDuration(audioRef.current?.duration / 60))
  }


  useEffect(() => {
    const initialDuration = audioRef.current?.duration / 60;


    duration == 0
      ? setDuration(formatDuration(initialDuration))
      : setDuration(parseFloat(typeof duration == "number" ? duration.toPrecision(3) : '0'));

    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
      const timer = setInterval(
        () => (typeof duration == "number" ? Number.isInteger(duration * duration) ? setDuration(duration - 0.41) : setDuration(duration - 0.01) : 0),
        1000
      );
      return () => clearInterval(timer);
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, duration]);

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
          <Image src="/icons/play-back.svg"  onClick={restartAudio} alt="back-button" fill />
        </Styled.IconBox>
        <Styled.IconBox>
          {!isPlaying ? (
            <Image
              src="/icons/play.svg"
              onClick={toggleIsPlaying}
              alt="back-button"
              fill
            />
          ) : (
            <Image
              src="/icons/pause.svg"
              onClick={toggleIsPlaying}
              alt="back-button"
              fill
            />
          )}
        </Styled.IconBox>
        <Styled.IconBox>
          <Image src="/icons/play-forward.svg" alt="back-button" fill />
        </Styled.IconBox>
      </Styled.Icons>

      <audio
        src="/acorda-pedrinho.mp3"
        autoPlay={false}
        ref={audioRef}
        onPlay={() => setPlayingState(true)}
        onPause={() => setPlayingState(false)}
      />
     <Styled.Timer className={robotoRegular.className}> {typeof duration == "number"
        ? duration.toString().length == 3 ? `0${duration.toString().replace('.', ':')}0` : `0${duration.toString().replace('.', ':')}`
        : "00:00"}</Styled.Timer>
    </Styled.MusicCard>
  );
}
