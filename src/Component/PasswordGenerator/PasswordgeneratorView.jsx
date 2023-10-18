import React, { useRef, useState } from 'react'
const styleP = { display: "flex", justifyContent: "space-around" };
const PasswordgeneratorView = () => {
  let [isUppercase,setIsUppercase]=useState(true)
  let [isLowercase,setIsLowercase]=useState(true)
  let [isNumber,setIsNumber]=useState(true)
  let [isSpecialChar, setIsSpecialChar] = useState(true);
  let [length, setLength] = useState(10);
  let [password, setPassword] = useState("");
  let [copied, setCopied] = useState(null);

  const copyRef=useRef(null)
const handleOnChange =(e)=>{
  if (e.target.name === "uppercase") {
    setIsUppercase(e.target.checked)
  } else if (e.target.name === "lowercase") {
    setIsLowercase(e.target.checked);
  } else if (e.target.name === "number") {
    setIsNumber(e.target.checked);
  } else if (e.target.name === "specialChar") {
    setIsSpecialChar(e.target.checked);
  } else if (e.target.name === "length") {
    setLength(e.target.value);
  }
}
const generatePassword=()=>{
  let options=""
  if(isUppercase){
    options+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if(isLowercase){
     options += "abcdefghijklmnopqrstuvwzyz";
  }
  if (isNumber) {
    options += "0123456789";
  }
  if (isSpecialChar) {
    options += "!@#$%^&*()";
  }
  let strongPassword=""
  for(let i=0;i<length;i++){
    strongPassword += options.charAt(
      Math.floor(Math.random() * options.length)
    );
  }
  setPassword(strongPassword);
}
const copyToClipborad=(e)=>{
  copyRef.current.select();
  document.execCommand("copy")
  e.target.focus()
  setCopied("copied")
  setTimeout(()=>setCopied(null),10000)
}
  return (
    <>
      <div
        style={{
          width: "500px",
          height: "400px",
          border: "1px dashed red",
          textAlign: "center",
        }}
      >
        <h4>Strong Passwordgenerator</h4>
        <div className="container">
          <input
            ref={copyRef}
            type="text"
            name="passwoord"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />{" "}
          <button onClick={generatePassword}>Generate</button>{" "}
          {password ? (
            <>
              <button onClick={copyToClipborad}>Copy</button>{" "}
              <span style={{ color: "green" }}>{copied}</span>
            </>
          ) : (
            ""
          )}
          <div>
            <p style={styleP}>
              {" "}
              <span>Include Alpha Upper (A-Z):</span>{" "}
              <span>
                <input
                  type="checkbox"
                  name="uppercase"
                  checked={isUppercase}
                  onChange={handleOnChange}
                />
              </span>
            </p>
            <p style={styleP}>
              <span>Include Alpha Lower (a-z):</span>{" "}
              <span>
                <input
                  type="checkbox"
                  name="lowercase"
                  checked={isLowercase}
                  onChange={handleOnChange}
                />
              </span>
            </p>
            <p style={styleP}>
              {" "}
              <span>Include Number (0-9):</span>{" "}
              <span>
                {" "}
                <input
                  type="checkbox"
                  name="number"
                  checked={isNumber}
                  onChange={handleOnChange}
                />
              </span>
            </p>
            <p style={styleP}>
              {" "}
              <span>Include Symbol:</span>{" "}
              <span>
                <input
                  type="checkbox"
                  name="specialChar"
                  checked={isSpecialChar}
                  onChange={handleOnChange}
                />
              </span>
            </p>
            <p style={styleP}>
              {" "}
              <span>Length:</span>{" "}
              <span>
                <input
                  type="number"
                  name="length"
                  value={length}
                  onChange={handleOnChange}
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordgeneratorView