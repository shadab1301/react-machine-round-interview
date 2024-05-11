import React, { useState } from 'react'
import { ModalView } from '../../Component';
const ModalBody = (
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quam iste
    facere assumenda dolorum, repellat alias officia inventore in quos! Quam
    tempora aliquam iure aliquid ea laborum suscipit a, enim eum facere? Quos
    laudantium obcaecati itaque iste velit hic molestias sapiente ipsa officiis!
    Officia, inventore dicta adipisci explicabo natus error?
  </p>
);
const Modal = () => {
     const[isModalOpen,setIsmodalOpen]=useState(false)
   const closeModal=()=>{
    setIsmodalOpen(false)
   }
  return (
    <div className="conatiner">
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsmodalOpen(true);
        }}
      >
        Open Modal
      </button>
      {isModalOpen && (
        <>
          <ModalView
            closeModal={closeModal}
            title="Modal title"
            body={ModalBody}
            isModalOpen={isModalOpen}
          />
        </>
      )}
    </div>
  );
}

export default Modal