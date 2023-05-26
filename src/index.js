import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import montantReducer from './store/reducer/montant'
import mensualiteReducer from './store/reducer/mensualite'
import { combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// ----------------------------------------------------------------------
const rootReducer = combineReducers({
    montant:montantReducer,
    mensualite:mensualiteReducer
    
   })
const store = configureStore({reducer:rootReducer}, (compose(applyMiddleware(thunk))))
const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);


// If you want to enable client cache, register instead.
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
