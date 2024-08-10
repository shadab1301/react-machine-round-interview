import { Flex, List, ListIcon, ListItem } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { CiFolderOn } from "react-icons/ci";
import { IoIosArrowDropright } from "react-icons/io";
import { CiFileOn } from "react-icons/ci";

import React, { useState } from "react";
const folders = [
  {
    name: "This PC",
    folders: [
      {
        name: "Desktop",
        folders: [
          { name: "Algoscale", folders: [] },
          { name: "Vwd.ai", folders: [{ name: "Vwd-prod", folders: [] }] },
        ],
      },

      {
        name: "Music",
        folders: [
          { name: "Music-2010", folders: [] },
          { name: "Music-2020", folders: [] },
        ],
      },
      {
        name: "Picture",
        folders: [
          { name: "Picture-2010", folders: [] },
          { name: "Picture-2020", folders: [] },
        ],
      },
      {
        name: "Vedio",
        folders: [
          { name: "Vedio-2010", folders: [] },
          { name: "Vedio-2020", folders: [] },
        ],
      },
      {
        name: "Novel",
        folders: [
          { name: "Fiction", folders: [] },
          { name: "Horror", folders: [{name:"Horror-1.txt"}] },
        ],
      },
    ],
  },
];

const FolderExplorer = () => {
  return (
    <>
      <List spacing={3}>
        <ListItem>
          {/* <Flex>
            <IoIosArrowDropright /> <ListIcon as={CiFolderOn} />
            This PC
          </Flex> */}
          <List spacing={3}>
            {folders?.map((folder) => (
              <>
                <Folder folder={folder} />
              </>
            ))}
          </List>
        </ListItem>
      </List>
    </>
  );
};
const Folder = ({ folder }) => {
  const [open,setOpen]=useState(false)
  return (
    <>
      <ListItem key={folder.name}>
        <Flex>
          {folder?.folders && folder?.folders?.length > 0 && (
            <IoIosArrowDropright
              onClick={() => setOpen(!open)}
              style={{ rotate: `${open ? "90deg" : "0deg"}` }}
            />
          )}{" "}
          <ListIcon as={folder?.folders ? CiFolderOn : CiFileOn} />
          {/* CiFileOn */}
          {folder.name}
        </Flex>
        {open && (
          <>
            <List spacing={3}>
              {folder?.folders &&
                folder.folders.map((val) => <Folder folder={val} />)}
            </List>
          </>
        )}
      </ListItem>
    </>
  );
};

export default FolderExplorer;
