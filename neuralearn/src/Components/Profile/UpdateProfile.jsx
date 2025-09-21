import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UpdateProfile.css";

const Profile = () => {
  const [userData, setUserData] = useState({
    username: "",
    gender: "",
    age: "",
    favoriteColor: "",
    favoriteFood: "",
    favoriteAnimal: "",
    favoriteCartoon: ""
  });
  const [saveMessage, setSaveMessage] = useState("");
  const navigate = useNavigate()
  console.log(userData);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:8000/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
          }
        });
        if (!response.ok) throw new Error("Failed to fetch profile");
        const data = await response.json();
        setUserData({
          username: data.username || "",
          gender: data.gender || "",
          age: data.age || "",
          favoriteColor: data.favoriteColor || "",
          favoriteFood: data.favoriteFood || "",
          favoriteAnimal: data.favoriteAnimal || "",
          favoriteCartoon: data.favoriteCartoon || "",
        });
      } catch (err) {
        console.error("Profile fetch error:", err);
      }
    };
    fetchProfile();
  
  }, []);

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setUserData(prev => ({ ...prev, [name]: value }));
};

const handleSave = async (e) => {
  e.preventDefault();

  const cleanedUserData = {
    username: userData.username === "" ? null : userData.username,
    gender: userData.gender === "" ? null : userData.gender,
    age: userData.age === "" ? null : userData.age,
    favoriteColor: userData.favoriteColor === "" ? null : userData.favoriteColor,
    favoriteFood: userData.favoriteFood === "" ? null : userData.favoriteFood,
    favoriteAnimal: userData.favoriteAnimal === "" ? null : userData.favoriteAnimal,
    favoriteCartoon: userData.favoriteCartoon === "" ? null : userData.favoriteCartoon
  };

  try {
    const response = await fetch("http://localhost:8000/profile", {
      method: "PUT",
      headers: {

        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cleanedUserData)
      
      
    });

    if (!response.ok) throw new Error("Save failed");

    window.scrollTo({ top: 0, behavior: "smooth" });
    setSaveMessage("🎉 Yay! Profile Saved!");
    navigate("/profile")
    setTimeout(() => setSaveMessage(""), 3000);
    

  } catch (err) {
    setSaveMessage("😟 Oops! Save Failed");
    console.error("Save error:", err);
  }
};

return (
  <div className="profile-container">
    <div className="profile-card">
      <div className="character-container">
        <img src="/Images/dolphin.jpg" alt="Friendly Dolphin" className="welcome-character" />
        <div className="speech-bubble">Let's Customize! 🌟</div>
      </div>

      <h2 className="profile-title">Your Special Profile 🦄</h2>

      {saveMessage && <div className="save-message">{saveMessage}</div>}

      <form className="profile-form" onSubmit={handleSave}>
        <div className="form-group">
          <label className="profile-label">
            🧸 Your Name
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              className="profile-input name-input"
            />
          </label>
        </div>

        <div className="gender-age-grid">
          <div className="form-group">
            <label className="profile-label">
              ♀️♂️ Gender
              <select
                name="gender"
                value={userData.gender}
                onChange={handleInputChange}
                className="profile-input"
              >
                <option value="" disabled>Select Gender</option>
                <option value="Boy">Boy</option>
                <option value="Girl">Girl</option>
              </select>
            </label>
          </div>

          <div className="form-group">
            <label className="profile-label">
              🎂 Age
              <input
                type="number"
                name="age"
                value={userData.age}
                onChange={handleInputChange}
                className="profile-input"
                min="3"
                max="18"
              />
            </label>
          </div>
        </div>

        <h3 className="section-title">Favourites 🌟</h3>

        <div className="favourites-grid">
          <div className="favorite-item color-item">
            <span>🌈 Favorite Color</span>
            <div className="color-input-container">
              <input
                type="text"
                name="favoriteColor"
                value={userData.favoriteColor}
                onChange={handleInputChange}
                className="color-text-input"
                placeholder="Enter color name"
              />
              <div
                className="color-preview"
                style={{ backgroundColor: userData.favoriteColor }}
              ></div>
            </div>
          </div>

          <div className="favorite-item food-item">
            <span>🍎 Favorite Food</span>
            <input
              type="text"
              name="favoriteFood"
              value={userData.favoriteFood}
              onChange={handleInputChange}
              className="emoji-input"
              placeholder="🍕"
            />
          </div>

          <div className="favorite-item cartoon-item">
            <span>📺 Favorite Cartoon</span>
            <input
              type="text"
              name="favoriteCartoon"
              value={userData.favoriteCartoon}
              onChange={handleInputChange}
              className="emoji-input"
              placeholder="🦁"
            />
          </div>

          <div className="favorite-item animal-item">
            <span>🐾 Favorite Animal</span>
            <input
              type="text"
              name="favoriteAnimal"
              value={userData.favoriteAnimal}
              onChange={handleInputChange}
              className="emoji-input"
              placeholder="🐼"
            />
          </div>
        </div>

        <button type="submit" className="save-button">
          💾 Save Changes
        </button>

      </form>
      <Link to="/home" style={{ textDecoration: 'none' }}> <button className="save-button"> 🔄 Update Later </button></Link>

      <div className="decorations">
        <div className="star star-1">⭐</div>
        <div className="star star-2">🌟</div>
        <div className="cloud cloud-1">☁️</div>
      </div>
    </div>
  </div>
);
};

export default Profile;