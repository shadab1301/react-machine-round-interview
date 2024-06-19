import React, { useEffect, useState } from "react";
import Pagination from './Pagination';
import { Box, Flex, Select, Spacer } from "@chakra-ui/react";
const style = {
  width: "400px",
  height: "600px",
  border: "1px dashed red",
  textAlign: "center",
  margin: "10px auto",
  padding:"20px 0px"
};
 const SearchbarView = () => {
   const [key, setKey] = useState("");
   const [data, setData] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [perPage,setPerPage]=useState(5)

   useEffect(() => {
     fetchData();
   }, []);

   const fetchData = () => {
     fetch("https://dummyjson.com/users")
       .then((res) => res.json())
       .then((result) => {
         return setData(
           result.users.map((val, i) => {
             return {
               id: val.id,
               fullName: getFullName(
                 val.firstName,
                 val.maidenName,
                 val.lastName
               ),
               firstName: val.firstName,
               lastName: val.lastName,
               maidenName: val.maidenName,
             };
           })
         );
       });
   };
   const handleOnchange = (e) => {
     setKey(e.target.value);
   };
   const filteredData = data
     .slice(perPage * (currentPage - 1), perPage * (currentPage - 1)+  +perPage)
     .filter((val, i) =>
       val.fullName.toLowerCase().includes(key.toLowerCase())
     );
  
   const getFullName = (fName, mName, lName) => {
     if (mName) {
       return fName.trim() + " " + mName.trim() + " " + lName.trim();
     } else {
       return fName.trim() + " " + lName.trim();
     }
   };
 
   return (
     <>
       <div style={style}>
         <Flex justifyContent={"space-between"}>
           <Box p="4">
             <h3>SearchbarView</h3>
           </Box>
           <Spacer />
           <Box p="4">
             <Select
               placeholder="Per page"
               onChange={(e) => {
               e.target.value && setPerPage(e.target.value)
                setCurrentPage(1)
                console.log(e.target.value);
              }}
              value={perPage}
             >
               <option value="5">5</option>
               <option value="10">10</option>
               <option value="15">15</option>
             </Select>
           </Box>
         </Flex>
         <input
           type="text"
           style={{
             width: "90%",
             border: "2px solid green",
             borderRadius: "10px",
             padding: "5px 10px",
           }}
           onChange={handleOnchange}
           value={key}
           name="key"
         />
         <div>
           {filteredData.map((val, i) => (
             <p key={val.id}>{val.fullName}</p>
           ))}
         </div>
         <Pagination
           perPage={perPage}
           currentPage={currentPage}
           setCurrentPage={setCurrentPage}
           data={data}
         />
       </div>
     </>
   );
 };

export default SearchbarView;
