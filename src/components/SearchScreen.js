import React from 'react'
import SearchHeader from './searchComponents/SearchHeader'
import SearchSubHeader from './searchComponents/SearchSubHeader'

function SearchScreen({SearchTerm, searchData,setData,setSearch}) {
    

    return (

        <div>
        <SearchHeader setSearch={setSearch} SearchTerm={SearchTerm} setData ={setData}/> 

        {searchData.length !== 0?(<SearchSubHeader  SearchTerm = {SearchTerm}  searchData={searchData} setData ={setData}/>):(console.log("halted"))
        
        } 
        {searchData.length !== 0?null:(<h1 style={{justifyContent:"center",alignItems:"center", margin:"0 auto" ,color:"grey"}}>loading data</h1>)
        
    } 
        {/* <SearchSubHeader  SearchTerm = {SearchTerm}  searchData={searchData} setData ={setData}/> */}
        
                                                                        
       {console.log(searchData)}
            
        </div>
    )
}

export default SearchScreen
