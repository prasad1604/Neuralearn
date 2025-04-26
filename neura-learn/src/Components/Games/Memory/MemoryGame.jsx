import React, { useState, useEffect } from 'react';
import MemoryCard from './MemoryCard';
import MemoryHint from './MemoryHints';
import './MemoryGame.css';

const PAIRS = 6;

const MemoryGame = () => {
  const maxTime = 120;
  const [timeLeft, setTimeLeft] = useState(maxTime);
  const [flips, setFlips] = useState(0);
  const [matchedCard, setMatchedCard] = useState(0);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [disableDeck, setDisableDeck] = useState(false);

  // shuffle on mount
  useEffect(() => {
    shuffleCard();
  }, []);

  // timer
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsPlaying(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  // derived
  const gameOver = !isPlaying && (timeLeft === 0 || matchedCard === PAIRS);
  const didWin = matchedCard === PAIRS;

  function shuffleCard() {
    setFlips(0);
    setMatchedCard(0);
    setFlippedCards([]);
    setDisableDeck(false);
    setTimeLeft(maxTime);
    setIsPlaying(true);

    const deck = [1,2,3,4,5,6,1,2,3,4,5,6]
      .sort(() => Math.random() - 0.5)
      .map((n, i) => ({
        id: i,
        image: `/Images/img-${n}.png`,
        flipped: false,
        shake: false,
      }));
    setCards(deck);
  }

  function flipCard(id) {
    if (!isPlaying || disableDeck) return;

    // flip it
    let updated = cards.map(c =>
      c.id === id ? { ...c, flipped: true } : c
    );
    setFlips(f => f + 1);

    // first card?
    if (flippedCards.length === 0) {
      setCards(updated);
      setFlippedCards([ updated.find(c => c.id === id) ]);
      return;
    }

    // second card: compare
    const first = flippedCards[0];
    const second = updated.find(c => c.id === id);

    if (first.image === second.image) {
      // match
      setMatchedCard(m => {
        const next = m + 1;
        if (next === PAIRS) setIsPlaying(false);
        return next;
      });
      setCards(updated);
      setFlippedCards([]);
    } else {
      // mismatch: shake then reset
      setDisableDeck(true);
      updated = updated.map(c =>
        (c.id === first.id || c.id === second.id)
          ? { ...c, shake: true }
          : c
      );
      setCards(updated);

      setTimeout(() => {
        const reset = updated.map(c =>
          (c.id === first.id || c.id === second.id)
            ? { ...c, flipped: false, shake: false }
            : c
        );
        setCards(reset);
        setFlippedCards([]);
        setDisableDeck(false);
      }, 1200);
    }
  }

  return (<>
    <div className="memory-body" style= {{ background: 'linear-gradient(to bottom right, rgb(243, 96, 12), rgb(240, 138, 138))' }}>
      {gameOver && (
        <div className="overlay">
          <h2>{didWin ? "🎉 You Win!" : "⏰ Time's Up!"}</h2>
          <button onClick={shuffleCard}>Play Again</button>
        </div>
      )}
      <MemoryHint/>
      <div className="wrapper" style={{ filter: gameOver ? 'blur(2px)' : 'none' }}>
        <ul className="cards">
          {cards.map(card => (
            <MemoryCard
              key={card.id}
              image={card.image}
              onClick={() => flipCard(card.id)}
              flipped={card.flipped}
              shake={card.shake}
            />
          ))}
        </ul>
        <div className="details">
          <p className="time">
            Time: <span><b>{timeLeft}</b>s</span>
          </p>
          <p className="flips">
            Flips: <span><b>{flips}</b></span>
          </p>
          <button onClick={shuffleCard}>Refresh</button>
        </div>
      </div>
    </div></>
  );
};

export default MemoryGame;
