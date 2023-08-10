import React from 'react'

const Card = ({quote, getData}) => {

    if(!quote||quote.length===0)
    {
        return <h4 className="text-center my-5">Loading...</h4>
    }

  return (
    <>
    <div className="container mt-5">
  <h1 className="text-center">Quote App</h1>
  
  <div className="card mt-4">
    <div className="card-body">
      <blockquote className="blockquote mb-0">
        <p id="quoteText">{quote.content}</p>
        <footer id="authorName" className="blockquote-footer">{quote.author}</footer>
      </blockquote>
    </div>
  </div>

  <div className="text-center mt-4">
    <button id="getQuoteButton" className="btn btn-primary" onClick={()=>getData()}>Get More</button>
  </div>
</div>
    </>
  )
}

export default Card