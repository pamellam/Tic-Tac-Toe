import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName
 }) {
  // two way binding
  const [playerName, setPlayerName] = useState(initialName)
  
  const [isEditing, setIsEditing] = useState(false);
  
  function handleEditClick() {
    // switch the value that is passed to the "edit" button 
    setIsEditing((editing) => !editing);
   
     if (isEditing) {
    onChangeName(symbol, playerName);
  }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let edtiablePlayerName =
    <span className="player-name">{playerName}</span>;
  let btnCaption = 'Edit';
  
  if (isEditing) {
    edtiablePlayerName = (<input type="text" required value={playerName}
      onChange={handleChange} />) 
    btnCaption = 'Save';
  }
  
  return (
    <li className={ isActive ? 'active' : undefined}>
      <span className="player">
        {edtiablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
      {/* <button onClick={handleEditClick}>{ isEditing ? 'Save' : 'Edit' }</button> */}
    </li>
  );
}