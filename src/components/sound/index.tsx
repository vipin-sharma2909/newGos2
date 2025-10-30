// src/contexts/SoundContext.js
import React, { createContext, useContext, useEffect, useRef } from 'react';
import click from "../../assets/click.mp3";
import correct from "../../assets/correct.mp3";
import wrong from "../../assets/wrong.mp3";
type SoundContextType = {
  playClickSound: () => void;
  playCorrectSound: () => void;
  playWrongSound: () => void;
};

const SoundContext = createContext<SoundContextType>({
  playClickSound: () => {},
  playCorrectSound: () => {},
  playWrongSound: () => {},
});

function SoundProvider({ children }: React.PropsWithChildren<{}>) {
  const clickRef = useRef<HTMLAudioElement | null>(null);
  const correctRef = useRef<HTMLAudioElement | null>(null);
  const wrongRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      clickRef.current = new Audio(click);
      correctRef.current = new Audio(correct);
      wrongRef.current = new Audio(wrong);
    }
  }, []);

  const playClickSound = () => clickRef.current?.play().catch(() => {});
  const playCorrectSound = () => correctRef.current?.play().catch(() => {});
  const playWrongSound = () => wrongRef.current?.play().catch(() => {});

  return (
    <SoundContext.Provider value={{ playClickSound, playCorrectSound, playWrongSound }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  return useContext(SoundContext);
}

export default SoundProvider;
