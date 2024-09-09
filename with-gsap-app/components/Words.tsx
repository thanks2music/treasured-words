import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap-trial";
import { SplitText } from "gsap-trial/SplitText";
import styles from "../components/Home.module.sass";

interface AnimationOption {
  text: string;
  from: {
    rotateX?: number;
    scale?: number;
    x?: number;
    y?: number;
    autoAlpha: number;
    skewX?: number;
    ease?: string;
  };
  to: {
    rotateX?: number;
    scale?: number;
    x?: number;
    y?: number;
    autoAlpha: number;
    skewX?: number;
    ease: string;
  };
  duration: number;
  stagger: number;
}

const options: AnimationOption[] = [
  {
    text: "Playful Reveal w/ Perspective",
    from: { rotateX: 30, scale: 0, y: 50, autoAlpha: 0 },
    to: { rotateX: 0, scale: 1, y: 0, autoAlpha: 1, ease: "elastic.out" },
    duration: 3,
    stagger: 0.02,
  },
  {
    text: "Slide In & Out",
    from: { x: -50, y: 0, skewX: 30, scale: 1, autoAlpha: 0 },
    to: { x: 0, y: 0, skewX: 0, scale: 1, autoAlpha: 1, ease: "quint.out" },
    duration: 1.7,
    stagger: 0.1,
  },
  {
    text: "Slide In & Out",
    from: { x: 0, y: 0, skewX: 0, scale: 1, autoAlpha: 1 },
    to: {
      x: 150,
      y: 0,
      skewX: -30,
      scale: 1,
      autoAlpha: 0,
      ease: "quint.out",
    },
    duration: 0.4,
    stagger: -0.05,
  },
  {
    text: "Typed Reveal",
    from: { x: 0, y: 0, scale: 1, autoAlpha: 0 },
    to: { x: 0, y: 0, scale: 1, autoAlpha: 1, ease: "elastic.out" },
    duration: 0.1,
    stagger: 0.2,
  },
  {
    text: "Playful Reveal",
    from: { x: 0, y: 10, autoAlpha: 0 },
    to: { x: 0, y: 0, autoAlpha: 1, ease: "elastic.out" },
    duration: 2,
    stagger: 0.1,
  },
  {
    text: "Side Elastic Reveal",
    from: { x: -100, y: 0, autoAlpha: 0 },
    to: { x: 0, y: 0, autoAlpha: 1, ease: "elastic.out" },
    duration: 2,
    stagger: 0.1,
  },
  {
    text: "Slow Fade-In Reveal",
    from: { x: 0, y: 3, autoAlpha: 0 },
    to: { x: 0, y: 0, autoAlpha: 1, ease: "quint.out" },
    duration: 1,
    stagger: 0.1,
  },
  {
    text: "Playful Scaled Reveal",
    from: { x: 0, y: 10, scale: 1.4, autoAlpha: 0 },
    to: { x: 0, y: 0, scale: 1, autoAlpha: 1, ease: "elastic.out" },
    duration: 2,
    stagger: 0.05,
  },
  {
    text: "Playful Scaled Reveal <sup>#2</sup>",
    from: { x: 0, y: 0, scale: 0, autoAlpha: 0 },
    to: { x: 0, y: 0, scale: 1, autoAlpha: 1, ease: "elastic.out" },
    duration: 2,
    stagger: 0.05,
  },
];

const RevealAnimation = () => {
  const [currentOption, setCurrentOption] = useState(0);
  const elemRef = useRef<HTMLDivElement | null>(null);
  const counterRef = useRef<HTMLDivElement | null>(null);
  const lettersRef = useRef<any[]>([]);

  const nextReveal = () => {
    // console.log("nextReveal DONE");
    setCurrentText();
    const { duration, from, to, stagger } = options[currentOption];
    if (lettersRef.current) {
      gsap.to(lettersRef.current, {
        ...from,
        stagger,
        duration,
        ...to,
        onComplete: incrementOption,
      });
    }
  };

  const setCurrentText = () => {
    setCounter();

    // elemRefが現在参照している要素が存在しているかチェック
    if (elemRef.current) {
      // テキストを現在のオプションに基づいて設定
      elemRef.current.innerHTML = options[currentOption].text;

      // SplitTextがwindowに存在するか確認
      if (typeof (window as any).SplitText !== "undefined") {
        const mySplitText = new (window as any).SplitText(elemRef.current, {
          type: "words,chars",
        });

        // lettersRefに文字要素を格納
        lettersRef.current = mySplitText.chars;
      } else {
        // console.error("SplitText is not loaded yet.");
      }
    }
  };

  const setCounter = () => {
    if (counterRef.current) {
      counterRef.current.innerHTML = `${currentOption + 1} / ${options.length}`;
    }
  };

  const incrementOption = () => {
    setCurrentOption((prev) => (prev === options.length - 1 ? 0 : prev + 1));
    setTimeout(nextReveal, 1000);
  };

  useEffect(() => {
    nextReveal();
  }, []);

  return (
    <>
      <div ref={elemRef}></div>
      <div className={styles.counter} ref={counterRef}></div>
    </>
  );
};

export default RevealAnimation;
