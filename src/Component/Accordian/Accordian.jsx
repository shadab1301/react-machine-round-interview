import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import React, { useState } from 'react'

const Accordian = () => {
   
    const data = [
      { title: "Title 1", desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, hic!" },
      { title: "Title 2", desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, hic!" },
      { title: "Title 3", desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, hic!" },
      { title: "Title 4", desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, hic!" },
    ];
  return (
    <>
      <div
        className="accordian-container"
        style={{ width: "200px", height: "auto", border: "1px solid green" }}
      >
        {data.map((val, index) => (
          <AccordianComponent title={val.title} desc={val.desc} key={index} />
        ))}
      </div>
    </>
  );
}
const AccordianComponent=({title,desc})=>{
     const [isOpen, setIsOpen] = useState(false);
     const handleOnClick = () => {
       setIsOpen(!isOpen);
     };
    return (
      <>
        <div
          className=""
          style={{
            width: "100%",
            height: "auto",
            border: "1px solid green",
            // ...(isOpen
            //   ? {
            //       borderTop: "1px solid grey",
            //       borderRight: "1px solid grey",
            //       borderBottom: "none",
            //       borderLeft: "1px solid grey",
            //     }
            //   : {
            //       borderTop: "1px solid grey",
            //       borderRight: "1px solid grey",
            //       borderBottom: "1px solid grey",
            //       borderLeft: "1px solid grey",
            //     }),

            alignItems: "center",
            padding: "0px 10px",
          }}
          onClick={handleOnClick}
        >
          <div
            className="title"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center !important",
            }}
          >
            <p> {title}</p>
            <p> {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}</p>
          </div>
          <div
            className="content"
            style={{
              display: isOpen ? "block" : "none",
              //   borderBottom: "1px solid grey",
              //   borderRight: "1px solid grey",
              //   borderLeft: "1px solid grey",
            }}
          >
            {desc}
          </div>
        </div>
      </>
    );
}
export default Accordian