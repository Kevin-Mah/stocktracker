import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/search';
import StockRow from './components/StockRow.js';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="col-md-5 mt-5">
          <div className="card">
            <Search />
            <ul className="list-group list-group-flush">
              <StockRow ticker="aapl" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
