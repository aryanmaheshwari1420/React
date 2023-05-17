import React , {useState} from 'react'


export default function TextForm(props) {
    const handleupclick  = () =>{
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleOnChange  = (event) =>{
        setText(event.target.value)
    }
    const [text,setText]  = useState('Enter text here'); // isko toh rat he lo bhut kaam aata hain 
    // text = "Wrong way to update the text" 
    // setText("new Text"); // correct way to update the text 
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control"  value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary"  onClick={handleupclick} > Convert to UpperCase </button>
    </div>
  )
}
