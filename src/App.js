
import { Provider } from 'react-redux';
import './App.css';
import Counter from './Counter';
import store from './redux/store';


function App() {
  
  return (
    <Provider store={store}>
    <div className="App">
      <Counter/>
    </div>
    </Provider>
  );
}

export default App;
