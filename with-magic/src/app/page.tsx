"use client";

import { useEffect, useState } from "react";
import { words } from "@/data/words";
import styles from "@/styles/modules/Home.module.sass";

const Home = () => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        setCurrentWord(randomWord);
        setFadeIn(true);
      }, 1000); // フェードアウトに1秒かかると仮定
    }, 5000); // 5秒間隔で次の言葉に切り替える

    return () => clearInterval(interval);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.words}>
        <p
          className={`${styles.word} ${
            fadeIn ? styles.fadeIn : styles.fadeOut
          }`}
        >
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
