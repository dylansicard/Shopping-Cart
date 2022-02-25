import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const val = [
  {
    name: 'Yoda',
    age: 2341,
  },
];

// wrap app with context store
ReactDOM.render(<App />, document.querySelector('#root'));
