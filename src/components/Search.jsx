import React from 'react'
import { useGlobalContext } from './Context'

const Search = () => {
  const {query,setQuery,isError} = useGlobalContext();
  return (
    <>
      <section className='search-section mt-3'>
      <h5 className=' d-flex justify-content-center'>Search Your Favriout Movies</h5>
      <form className=' d-flex justify-content-center' action="#" onClick={(e)=>e.preventDefault()}>
      <div className='mt-3'>
        <input className=' form-control ' style={{borderRadius:"30px"}} type="text" placeholder='Search Here' name="" id="" 
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        />
      </div>
      </form>
      <div className="card-error d-flex justify-content-center mt-3 text-danger">
        <p>{isError.show && isError.msg}</p>
      </div>
      </section>
    </>
  )
}

export default Search
