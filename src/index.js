import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientGoogleId = '78833519786-t82e449tkfukjsb529p3kvedfu3hn366.apps.googleusercontent.com'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <GoogleOAuthProvider clientId={clientGoogleId}>
            <App />
        </GoogleOAuthProvider>
    </Provider>
);
