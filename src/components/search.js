const Search = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Stock Ticker</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="aapl, goog, ..."
            name="s" 
        />
        <button type="submit" >Search</button>
    </form>
);

export default Search;