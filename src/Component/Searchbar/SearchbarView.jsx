import React, { useEffect, useRef, useState } from "react";
const style = {
  width: "400px",
  height: "auto",
  border: "1px dashed red",
  textAlign: "center",
  margin: "10px auto",
};
const SearchbarView = () => {
  const [key, setKey] = useState("");
  const [data, setData] = useState([]);

  const ref=useRef(null)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://dummyjson.com/users?limit=30")
      .then((res) => res.json())
      .then((result) => {
        return setData(
          result.users.map((val) => {
            return {
              id: val.id,
              fullName:
                val.firstName + " " + val.maidenName + " " + val.lastName,
              firstName: val.firstName,
              lastName: val.lastName,
              maidenName: val.maidenName,
            };
          })
        );
      });
  };
  const handleOnchange = (e) => {

    if (ref.current){
      clearInterval(ref.current);
    } 
    
  ref.current=  setTimeout(()=>{
        setKey(e.target.value);
    },300)
    
  };
  return (
    <div style={style}>
      <h3>SearchbarView</h3>
      <h6>
        <input
          type="text"
          style={{ width: "90%" }}
          onChange={handleOnchange}
          // value={key}
          name="key"
        />
      </h6>
      <div>
        {data.map(
          (val, i) =>
            val.fullName
              .toLocaleLowerCase()
              .includes(key.toLocaleLowerCase()) && (
              <p key={val.id}>
                {val.fullName} 
              </p>
            )
        )}
      </div>
    </div>
  );
};

export default SearchbarView;
