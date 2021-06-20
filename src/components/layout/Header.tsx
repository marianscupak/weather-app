import React, { useState } from "react";

const Header = ({
  cityUpdater,
}: {
  cityUpdater: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [city, setCity] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    cityUpdater(city);
    setCity("");
  };

  return (
    <header className="header">
      <form className="cityForm">
        <label htmlFor="city">City:</label>
        <input type="text" name="city" onChange={handleChange} value={city} />
        <button onClick={handleSubmit}>Search</button>
      </form>
    </header>
  );
};

export default Header;
