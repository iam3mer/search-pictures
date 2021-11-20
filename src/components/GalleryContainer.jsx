import React from "react";
import ContainerLG from "./ContainerLG";

const GalleryContainer = ({ searchTerm }) => {
  return (
    <div>
      <h2>
        Imagenes de {searchTerm}
      </h2>
      <ContainerLG searchTerm={searchTerm}/>
    </div>
  );
};

export default GalleryContainer;
