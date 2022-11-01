import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

App = express()
App.use(express.static('code-assets/frontend/csun-dash/build'));
App.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'code-assets/frontend/csun-dash', 'build', 'index.html')));
