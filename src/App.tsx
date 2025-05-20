import React from 'react';
import './App.css';
import WordCloud from './components/WordCloud';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>뉴스 키워드 분석</h1>
      </header>
      <main>
        <WordCloud />
      </main>
    </div>
  );
}

export default App; 