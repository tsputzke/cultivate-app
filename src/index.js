import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App';
import ScrollToTop from './components/ScrollToTop'
import './index.css';

ReactDOM.render(<BrowserRouter><ScrollToTop><App /></ScrollToTop></BrowserRouter>, document.getElementById('root'));