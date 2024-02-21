import React from 'react';
import './Header.css';

export const Header = () => (
  <header>
    <h1>Website Title</h1>
    <a href="#">Link</a>
  </header>
);


// MainPage.jsx
import React from 'react';
import './MainPage.css';

export const MainPage = () => (
  <main>
    <h2>Main Page Title</h2>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <img src="image.jpg" alt="Description" />
    <ul>
      <li>List Item 1</li>
      <li>List Item 2</li>
    </ul>
  </main>
);

// Footer.jsx
import React from 'react';
import './Footer.css';

export const Footer = () => (
  <footer>
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </footer>
);

// App.jsx
import React from 'react';
import { Header } from './Header';
import { MainPage } from './MainPage';
import { Footer } from './Footer';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <MainPage />
    <Footer />
  </div>
);

export default App;




// App.css

.App {
    text-align: center;
    }

// Header.css

header {
    background-color: #282c34;
    min-height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    }

// MainPage.css

main {
    background-color: #282c34;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    }

// Footer.css

footer {
    background-color: #282c34;
    min-height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    }

// Item.jsx
import React from 'react';

export const Item = ({ content }) => <li>{content}</li>;

// MainPage.jsx

import Item  from './Item';

export const MainPage = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  return (
    <main>
      {/* other elements */}
      <ul>
        {items.map((item, index) => (
          <Item key={index} content={item} />
        ))}
      </ul>
    </main>
  );
};