import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

export default function TextForm(props) {
  const handleonchange =(event)=>{
    setText(event.target.value);
  }

  const ConvertToUpper =()=>{
    let TempText=text.toUpperCase();
    setText(TempText);

  }
  const ConvertToLower =()=>{
    let TempText=text.toLowerCase();
    setText(TempText);

  }

   const ClearText =()=>{
    setText("");

  }
  
  const [text, setText] = useState("Enter text here");

  return (
    <>
    <div>
                                  

        <div className="mb-3">
 

<div className="mb-3">
<h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="7"></textarea>
</div>
      <button type="button" className="btn btn-primary mx-2" onClick={ConvertToUpper}>Convert to UpperCase</button>
      <button type="button" className="btn btn-primary mx-2" onClick={ConvertToLower}>Convert to LowerCase</button>
      <button type="button" className="btn btn-danger mx-2" onClick={ClearText}>Clear Text</button>
    </div>
    </div>

    <div className="container my-3">
      <h2>Text Summmary:</h2>
      <p>{text.split(" ").length} words AND {text.length} characters</p>

    </div>

    </>
  )
}
