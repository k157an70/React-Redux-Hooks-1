import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux';
import TodoList from './src/components/TodoList';

export default () => {
  return (
    <Provider store={store}>
        <TodoList/>
    </Provider>
  );
};

