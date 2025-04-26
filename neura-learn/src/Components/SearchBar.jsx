import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const availableRoutes = {
  "Games": "/games",
  "Memory Game": "/games/memory-card",
  "Wordle Game": "/games/wordle",
  "Guess Number Game": "/games/guess-number",
  "Learning Modules": "/learning-modules",
  "Maths Module": "/learning-modules/maths",
  "Alphabets Module": "/learning-modules/alphabets",
  "Colors Module": "/learning-modules/colors",
  "Shapes Module": "/learning-modules/shapes",
  "Speech Training": "/learning-modules/Voice/SpeechTraining",
  "Conversation Training": "/learning-modules/Voice/ConversationTraining",
  "Voice Training": "/learning-modules/VoiceRecognition",
  "Emotions Training": "/learning-modules/social-emotions",
  "Printable Activities": "/printables",
  "Home": "/home",
  "Contact": "/contact",
  "About": "/about",
  "Profile": "/profile",
  "Login": "/login",
  "Sign up": "/signup",
  "Landing Page": "/",
  "First Page": "/",
  "Main Page": "/"
};

const SearchBar = ({ isLoggedIn }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim()) {
      const filtered = Object.keys(availableRoutes)
        .filter(name => name.toLowerCase().includes(query.toLowerCase()));
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLoggedIn) return;

    const match = Object.keys(availableRoutes)
      .find(name => name.toLowerCase() === searchQuery.trim().toLowerCase());
    if (match) {
      navigate(availableRoutes[match]);
      setSuggestions([]);
    } else {
      alert("No such page found!");
    }
  };

  const handleSuggestionClick = (name) => {
    setSearchQuery(name);
    setSuggestions([]);
    navigate(availableRoutes[name]);
  };

  return (
    <div
      ref={wrapperRef}
      style={{ position: 'relative', overflow: 'visible', zIndex: 1050 }}
    >
      <form className="d-flex ms-3 kids-search" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="🔍 Find Fun Stuff!"
          value={searchQuery}
          onChange={handleChange}
          autoComplete="off"
        />
        <button className="btn kids-search-btn" type="submit">
          Go!
        </button>
      </form>

      {suggestions.length > 0 && (
        <ul
          className="suggestions-list"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            margin: 0,
            padding: '5px',
            listStyle: 'none',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            overflow: 'visible',
            zIndex: 2000
          }}
        >
          {suggestions.map((name, index) => (
            <li
              key={name}
              onClick={() => handleSuggestionClick(name)}
              onMouseDown={e => e.preventDefault()} 
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                padding: '8px',
                cursor: 'pointer',
                backgroundColor: hoveredIndex === index ? '#f0f0f0' : 'transparent',
                transition: 'background-color 0.15s ease'
              }}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
