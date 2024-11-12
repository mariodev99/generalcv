import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="title_container">
        <h1 className="title">Luciano Mariotti</h1>
        <p>Sviluppatore di software</p>
      </div>
      <a
        href="/files/Luciano_Mariotti_CV_IT.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="button_cv">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            className=""
          >
            <path
              d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19M14 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V8M14 3L19 8M12 11V17M12 17L9 14M12 17L15 14"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <div>CV Luciano Mariotti</div>
        </button>
      </a>
      <div className="portfolio_link_container">
        <a
          href="https://mariodev99.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio_link"
        >
          Portfolio web
        </a>
      </div>
    </div>
  );
}

export default App;
