import { useState } from "react";
import NavigationButtons from "../../LearningModules/NavigationButtons";
const MemoryHints = () => {
  const [showRules, setShowRules] = useState(false);

  return (
    <div className="container p-2 text-white border rounded shadow-lg mt-5" style={{ maxWidth: "600px", backgroundColor: "#8bf8af"}}>
      <h1 className="text-center"><strong>Memory Game</strong></h1>
      <h2 className="text-center mb-3"><strong>🎉 Memory Game Rules! 🎉</strong></h2>
      <div className="text-center">
        <NavigationButtons
          buttons={[{ name: showRules ? "Hide Rules" : "Show Rules", action: () => setShowRules(!showRules) }]}
          includeModules={false}
        />
      </div>
      {showRules && (
        <div className="p-3 bg-light border rounded text-dark">
          <ul className="list-unstyled">
            <li><strong>Find Pairs:</strong> 👫 Try to match two cards that look the same.</li>
            <li><strong>Remember Cards:</strong> 🧠 When you see a card, remember where it is.</li>
            <li><strong>Look Closely:</strong> 👀 Pay attention to the pictures on the cards.</li>
            <li><strong>Flip Nearby Cards:</strong> 🔄 Flip cards that are close to each other first.</li>
            <li><strong>Take Your Time:</strong> ⏳ Don’t rush! Think before you flip a card.</li>
            <li><strong>Practice Makes You Better:</strong> 🎮 The more you play, the better you’ll get!</li>
            <li><strong>Count Your Flips:</strong> 🔢 Try to flip fewer cards to win faster.</li>
            <li><strong>Stay Calm:</strong> 😌 If you feel upset, take a deep breath and relax.</li>
            <li><strong>Use Refresh Wisely:</strong> 🔄 If you want to start over, use the refresh button.</li>
            <li><strong>Have Fun:</strong> 🎉 Remember, it’s just a game! Enjoy playing!</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MemoryHints;