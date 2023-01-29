import React,{useState} from 'react'

export default function TextForm(props) {
    
    //text="i am the best" Wrong way to set the text
    //setText("i am the best");
    const handleUpClick=()=>{
      //console.log("uppercase was clicked")
      let newtext=text.toUpperCase()
      setText(newtext)
       props.showalert("String has been converted to Uppercase","success")
      
    }
    const handleDownClick=()=>{
      //console.log("uppercase was clicked")
      let newtext=text.toLowerCase()
      setText(newtext)
       props.showalert("String has been converted to Lowercase","success")
      
    }
    const handleOnChange=(event)=>{
      //console.log("on change")
      setText(event.target.value)

    }
    const handleReverseClick=(event)=>{
      let newtxt="";
      for(let i=text.length-1;i>=0;i--)
      {
          newtxt+=text[i];
      }
      setText(newtxt);
      props.showalert("String has been reversed","success")
    }
    const [text, setText] = useState("");
   return (
    <>
    
    <div className="container">
    <div className="mb-3 ">
      <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.mode==='light'?'dark':'light'}  `}><b>{props.heading}</b></label>
        <textarea className="form-control" value={text} id="exampleFormControlTextarea1" onChange={handleOnChange} rows="8"></textarea>
    </div>
    
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>CHANGE TO UPPERCASE</button>
    <button className="btn btn-primary mx-2" onClick={handleDownClick}>CHANGE TO LOWERCASE</button>
    <button className="btn btn-primary mx-2" onClick={handleReverseClick}>REVERSE</button>
    </div>
    <div className={`container my-3 text-${props.mode==='light'?'dark':'light'} `}>
    <h2>Your text summary:</h2>
    <p>{text.split(' ').filter(word => word !== '').length} words {text.length} characters</p>
    <p>{0.008* text.split(" ").length} Minuetes read</p>
    <h3>PREVIEW:</h3>
    <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
    </div>
    </>
  )
}
