import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './store/store';
import { fetchQuote,resetQuote  } from './store/quoteSlice';

function App() {
  const quote = useSelector((state: RootState) => state.quote.quote);
  const author = useSelector((state: RootState) => state.quote.author);
  const status = useSelector((state: RootState) => state.quote.status);
  
  // Usa `AppDispatch` en lugar de `Dispatch`
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Breaking Bad Quotes</h1>
        {status === 'loading' ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>"{quote}"</p>
            <p><strong>- {author}</strong></p>
            <button onClick={() => dispatch(fetchQuote())} disabled={status === 'loading'}>
              {status === 'loading' ? 'Loading...' : 'Get New Quote'}
            </button>
            <button onClick={() => dispatch(resetQuote())}>
              Reset
            </button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
