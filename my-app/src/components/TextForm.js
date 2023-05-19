import React, { useState } from "react";

export default function TextForm(props) {
  const handleupclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handlelowclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleClear = ()=>{
    let newtext = ' ';
    setText(newtext);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here"); // isko toh rat he lo bhut kaam aata hain
  // text = "Wrong way to update the text"
  // setText("new Text"); // correct way to update the text
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupclick}>{" "}Convert to UpperCase{" "}</button>
        <button className="btn btn-primary mx-2" onClick={handlelowclick}>{" "}Convert to lowerCase{" "}</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>{" "}Clear text{" "}</button>

      </div>
      <div className="container my-3" >
        <h1>Your text summary here </h1>
        <p>Total words are {text.split(" ").length} and characters are {text.length} </p>
        <p>Average reading time {0.008 *text.split(" ").length}</p>
      </div>
    </>
  );
}
