import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Loader from "./Loader";
import Gallery from "./Gallery";

const ContainerLG = ({ searchTerm }) => {
  const { images, loading, runSearch } = useContext(PhotoContext);

  useEffect(() => {
    runSearch(searchTerm);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm])

  return (
    <div className="photo-container">
      {loading ? <Loader/> : <Gallery data={images}/>}
    </div>
  );
};

export default ContainerLG;
