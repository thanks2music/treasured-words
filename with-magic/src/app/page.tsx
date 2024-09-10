"use client";

import { useEffect, useState } from "react";
import { words } from "@/data/words";
import styles from "@/styles/modules/Home.module.sass";

const Home = () => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const switchWord = () => {
      setFadeIn(false);

      setTimeout(() => {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        setCurrentWord(randomWord);
        setFadeIn(true);
      }, 1000);
    };

    // 初回実行
    switchWord();
    // 6秒間隔で次の言葉に切り替える
    const interval = setInterval(switchWord, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className={styles.main}>
      <div
        className={`${styles.words} ${fadeIn ? styles.fadeIn : styles.fadeOut}`}
      >
        <p className={styles.word}>
          {currentWord.text.split("").map((char, index) => (
            <span
              className={styles.word}
              key={index}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {char}
            </span>
          ))}
        </p>
        <p className={styles.author}>— {currentWord.author}</p>
      </div>
    </main>
  );
};

export default Home;
