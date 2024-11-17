"use client";

import { useEffect, useState } from "react";
import { words } from "@/data/words";
import styles from "@/styles/modules/Home.module.sass";

const Home = () => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [fadeIn, setFadeIn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const switchWord = () => {
      setFadeIn(false);

      setTimeout(() => {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        setCurrentWord(randomWord);
        setFadeIn(true);
      }, 1000);
    };

    // 読み込み完了時の処理
    setIsLoaded(true);
    // 1秒後にswitchWordを実行
    const initialTimeout = setTimeout(() => {
      switchWord();

      // 最初のswitchWord実行後、8秒間隔で次の言葉に切り替える
      const interval = setInterval(switchWord, 8000);
      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(initialTimeout);
  }, []);

  // currentWordがnullの場合は何も表示しない
  if (!currentWord) return null;

  return (
    <main className={`${styles.main} ${isLoaded ? styles.isShow : ""}`}>
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
