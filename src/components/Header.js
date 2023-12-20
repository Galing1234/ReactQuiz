import React from 'react' ;

export default function Header() {
  return (
    <header className="header">
      <img src="./images/react-logo-white.png" alt="" className="header--logo" />
      <h1>ReactQuiz</h1>

      <div className="header--links">
        <h3>Home</h3>
        <h3>About us</h3>
      </div>
    </header>
  ) ;
}