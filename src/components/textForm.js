import React, { useState } from "react";

export default function TextForm(props) {
  const handleupclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("converted to uppercase !","success")
  };
  const handleloclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("converted to lowercase !", "success");
  };
  const cleartext = () => {
    let newtext = "";
    setText(newtext);
    props.showalert("cleared text !", "success");
  };
  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const seperateSentence = () => {
    let sentences = text.split(".");
    const arr = Array.from(sentences);
    let combined = arr.join("\n");
    setText(combined);
    if(text.length>0)
    props.showalert("sentences seperated !", "success");
    else
    props.showalert("write something to seperate!", "warning");  
  };
  
  const handleFind = () => {
    if (!findWord) return;
    const words = text.split(" ");
    console.log(text);
    const matches = words.filter((w) => w === findWord).length;

    alert(matches > 0 ? `Found ${matches} occurrence(s)` : "No match found");
  };
  const handleReplace = () => {
    if (!findWord) return;
    const words = text.split(" ");
    const newText = words
      .map((w) => (w === findWord ? replaceWord : w))
      .join(" ");
    setText(newText);
  };
  const handleCopy = ()=>{
   let text = document.getElementById("mybox")
   text.select();
   navigator.clipboard.writeText(text.value);
   props.showalert("copied to clipboard!", "success");
  };
  const [findWord, setFindWord] = useState("");
  const [replaceWord, setReplaceWord] = useState("");
  const [text, setText] = useState("");
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control bg-dark text-white"
          value={text}
          onChange={handleOnchange}
          id="mybox"
          rows="10"
        ></textarea>
        <button className="btn btn-primary mx-2 my-3" onClick={handleupclick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-2" onClick={handleloclick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={cleartext}>
          clear text
        </button>
        <button className="btn btn-secondary mx-2" onClick={seperateSentence}>
          find the number of sent.
        </button>
        <button className="btn btn-danger mx-2" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div className="container" id="textcolor">
        <h1>your text summary</h1>
        <p>
          {
            text
              .trim()
              .split(" ")
              .filter((word) => word !== "").length
          }{" "}
          words, {text.length} characters
        </p>
        <h2>text preview</h2>
        <p>{text}</p>
      </div>

      <input
        type="text"
        value={findWord}
        onChange={(e) => setFindWord(e.target.value)}
        placeholder="Find word"
        className="p-2 border rounded mr-2"
      />
      <input
        type="text"
        value={replaceWord}
        onChange={(e) => setReplaceWord(e.target.value)}
        placeholder="Replace with"
        className="p-2 border rounded mr-2 mx-4"
      />

      <div className="mt-3">
        <button
          onClick={handleFind}
          className="bg-blue-500 text-black px-4 py-2 rounded mr-2"
        >
          Find
        </button>
        <button
          onClick={handleReplace}
          className="bg-green-500 text-black px-8 py-2 rounded"
        >
          Replace All
        </button>
      </div>
      {/* more task to add: 1 add a undo button for replace */}
    </>
  );
}
