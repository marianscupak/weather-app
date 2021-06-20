import React, { useState } from "react";
import { CityData } from "../../common/types";

const Header = ({
  cityUpdater,
}: {
  cityUpdater: React.Dispatch<React.SetStateAction<CityData>>;
}) => {
  const [city, setCity] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    cityUpdater({ city, shouldUpdate: true });
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
