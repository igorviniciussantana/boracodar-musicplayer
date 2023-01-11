import Image from "next/image";
import * as Styled from "./styled";
import { Roboto } from "@next/font/google";
import { MutableRefObject, useEffect, useRef, useState } from "react";
const robotoBold = Roboto({ weight: "700", subsets: ["latin"] });
const robotoRegular = Roboto({ weight: "400", subsets: ["latin"] });

export default function MusicCard() {
  const audioRef = useRef() as MutableRefObject<HTMLAudioElement>;

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const [duration, setDuration] = useState<number | undefined>(0);
  const [remainingDuration, setRemainingDuration] = useState(0);
  const [initialDuration, setInitialDuration] = useState(0);

  function setPlayingState(state: any) {
    setIsPlaying(state);
  }

  function toggleIsPlaying() {
    setIsPlaying(!isPlaying);
  }

  function formatTimer(time: number) {
    if (time.toString().length == 3) {
      return `0${time.toString().replace(".", ":")}0`;
    } else if (time.toString().length == 1) {
      return `0${time.toString()}:00`;
    } else {
      return `0${time.toString().replace(".", ":")}`;
    }
  }

  function formatRemainingDuration(remainingDurationToFormat: number) {
    const formatedRemainingDuration = Number.isInteger(
      remainingDurationToFormat - 0.6
    )
      ? Math.ceil(remainingDurationToFormat)
      : remainingDurationToFormat;
    return formatedRemainingDuration;
  }

  function formatDuration(durationToFormat: number) {
    const formatedDuration =
      durationToFormat - 0.6 > Math.floor(durationToFormat)
        ? Math.ceil(durationToFormat) +
          (durationToFormat - (Math.floor(durationToFormat) + 0.6))
        : durationToFormat;
    return formatedDuration;
  }

  function restartAudio() {
    audioRef.current.currentTime = 0;
    setDuration(formatDuration(audioRef.current?.duration / 60));
    setRemainingDuration(0);
  }

 

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    // uncoment this line if you are in development
   // setInitialDuration(audioRef.current.duration / 60);

    if (isLoaded) {
      setInitialDuration(audioRef.current.duration / 60);
      setIsLoaded(true);
    }

    setRemainingDuration(formatRemainingDuration(remainingDuration));

    duration == 0
      ? setDuration(formatDuration(initialDuration))
      : setDuration(
          parseFloat(
            typeof duration == "number" ? duration.toPrecision(3) : "0"
          )
        );

    if (isPlaying) {
      audioRef.current.play();

      const timer = setInterval(() => {
        setRemainingDuration(
          parseFloat((remainingDuration + 0.01).toPrecision(3))
        );

        if (typeof duration == "number") {
          const timerVerify = Number.isInteger(duration * duration)
            ? setDuration(duration - 0.41)
            : setDuration(duration - 0.01);

          return timerVerify;
        }
      }, 1000);
      return () => clearInterval(timer);
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, duration, remainingDuration, initialDuration]);

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
          <Image
            src="/icons/play-back.svg"
            onClick={restartAudio}
            alt="back-button"
            fill
          />
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
        onLoadedMetadata={() =>
          setInitialDuration(audioRef.current.duration / 60)
        }
        preload="metadata"
      />

<Styled.ProgressWrapper>
<Styled.ProgressBar style={{width: `${typeof duration == 'number' ? remainingDuration * 100 / formatDuration(parseFloat(initialDuration.toPrecision(3))) : '0'}%`}}/>
</Styled.ProgressWrapper>

      <Styled.TimerWrapper className="timer">
        <Styled.Timer className={robotoRegular.className}>
          {typeof duration != "number"
            ? "00:00"
            : formatTimer(duration).slice(0, 5)}
        </Styled.Timer>
        <Styled.Timer className={robotoRegular.className}>
          {remainingDuration == 0 ? "00:00" : formatTimer(remainingDuration)}
        </Styled.Timer>
      </Styled.TimerWrapper>
    </Styled.MusicCard>
  );
}
