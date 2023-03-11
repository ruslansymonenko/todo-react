import React, {useState} from "react";


import './AppHeader.css';

function AppHeader({onAddTasks}) {
  const [inputText, setInputText] = useState('');

  function handleTasks() {
    if(inputText) {
      onAddTasks({id: Date.now(), text: inputText});
      setInputText('');
    }
  }

  function onInputChange(event) {
    setInputText(event.target.value);
  }

  return (
    <div className="app-header">
      <h1 className="app-header__title">To do list</h1>
      <div className="app-header__input-field">
        <input 
          className="input-filed__input" 
          type="text"
          value={inputText} 
          onChange={onInputChange}
          />
        <button 
          className="input-field__btn"
          onClick={() => handleTasks()}
          >Add
        </button>
      </div>
    </div>
  );
}

export { AppHeader };