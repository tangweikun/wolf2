import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({})),
      window.devToolsExtension ? window.devToolsExtension() : f => f),
    );

  return store;
}
