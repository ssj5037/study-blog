
import './style/App.css';

function App() {
  return (
    <div>
      <header className='header'>
        <div><b>🤍 Sujin&apos;s Study Blog</b></div>
        <div><input></input><button>검색</button></div>
      </header>
      <main className='main'>
        <nav className='nav_bar'>
          <div className='nav_bar_sub'>
            <h3>사이드 목록</h3>
            <li>목록1</li>
            <li>목록2</li>
            <li>목록3</li>
            <li>목록4</li>
            <li>목록5</li>
          </div>
        </nav>
        <section className='page'>
          본문
        </section>
      </main>
      <footer className='footer'>
        Copyright © SuJin-Shin. All Rights Reserved.<br/>
        {/* E-mail. shinsj5037@gmail.com<br/>
        github. https://github.com/ssj5037 */}
      </footer>
    </div>
  );
}

export default App;
