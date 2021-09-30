import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render (
    <SpeechProvider appId='873ef6a0-8bc3-4576-b3c7-070606abd8f9' language='en-US'>
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);