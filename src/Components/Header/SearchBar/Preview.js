import React from "react";
import ItemInPreview from "./ItemInPreview";

export default function Preview({ previewItems }) {
  return(
    <div className="preview">
      {previewItems.map(item => <ItemInPreview itemInfo={item} key={item.id} />)}
    </div>
  )
}