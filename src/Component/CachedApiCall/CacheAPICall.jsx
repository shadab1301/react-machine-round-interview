import React, { useState } from "react";

const CacheAPICall = () => {
  const [data, setData] = useState();
const [isFreshCall,setIsFreshCall]=useState("")

  const memoiseFn = (expiryTime) => {
    let cache = {};
    return async function (url,config={}) {
      const key = JSON.stringify(`${url}${config}`);
       
    //   console.log({cache});
    //     console.log({ expiry: cache["expiry"], now: Date.now() });
      if (cache[key] && cache["expiry"] < Date.now()) {
        // Return from cache
        console.log("Resturned from Cache");
        setData(cache);
      } else {
        // Fresh API call
        let res = await fetch(url, config);
        let response = await res.json();
        cache[key] = "response";
        // cache["expiry"] = Date.now() + expiryTime;
        console.log("Fresh API call");
        console.log({ expiry: Date.now() + expiryTime });

        setData(response);
      }
    };
  };
  const handleOnClick = memoiseFn(15000);
  return (
    <>
      <div>
        <p>{isFreshCall}</p>
        <p> {JSON.stringify(data)}</p>
      </div>
      <div>
        <button
          onClick={() =>
            handleOnClick("https://jsonplaceholder.typicode.com/todos/1")
          }
          style={{
            padding: "10px 20px",
            color: "green",
            border: "1px solid red",
          }}
        >
          Call Api
        </button>
      </div>
    </>
  );
};

export default CacheAPICall;
