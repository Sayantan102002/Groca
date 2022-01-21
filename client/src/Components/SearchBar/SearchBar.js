import React from 'react'
import './SearchBar.css'
const SearchBar = () => {
    return (
        <div>
            <div className="searchBar">
                <form>
                    {/* All-Categories to be added */}
                    <div className="searchInput">
                        <input className="search" type="text" placeholder="Search for any item" />
                    </div>
                    <div className="searchBtn">
                        <button type="submit">Search</button>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default SearchBar
