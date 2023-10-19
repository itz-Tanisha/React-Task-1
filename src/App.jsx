import React, { useState } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const countWords = () => {
    const words = text.split(/\s/).filter(word => word !== '');
    return words.length;
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={handleTextChange}
        placeholder="Type something..."
      />
      <p>Word Count: {countWords()}</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Responsive Word Counter</h1>
      <WordCounter />
    </div>
  );
}

export default App;
