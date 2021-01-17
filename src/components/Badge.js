import React from "react";

export default function Badge({ isComplet }) {
  return (
    <span className={`badge badge-${isComplet ? "success" : "danger"}`}>
      {isComplet ? "Complétés" : "Non complétée"}
    </span>
  );
}
