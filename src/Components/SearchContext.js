import React, { useContext, useState } from 'react'

const SearchContext = React.createContext()
const SearchUpdateContext = React.createContext()

export function useSearch(){
    return useContext(SearchContext)
}

export function useUpdateSearch(){
    return useContext(SearchUpdateContext)
}

export function SearchProvider({children}) {
    const [search, setSearch] = useState("")


    return (
        <SearchUpdateContext.Provider value={setSearch}>
            <SearchContext.Provider value={search}>
                {children}
            </SearchContext.Provider>
        </SearchUpdateContext.Provider>
    )
}

