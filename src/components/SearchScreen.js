import React from 'react'
import SearchHeader from './searchComponents/SearchHeader'
import SearchSubHeader from './searchComponents/SearchSubHeader'

function SearchScreen({SearchTerm, searchData,setData,setSearch}) {
    

    return (

        <div>
        <SearchHeader setSearch={setSearch} SearchTerm={SearchTerm} setData ={setData}/>  
        <SearchSubHeader  SearchTerm = {SearchTerm}  searchData={searchData} setData ={setData}/>
                                                                        
       {console.log(searchData)}
            
        </div>
    )
}

export default SearchScreen
