import React from "react";
import Chip from "@mui/material/Chip";
import { getColorForPokemonTag } from "../Functions/defineTypes";

function TypeDisplay({ types }) {
  console.log(types);
  return types.map((pType) => (
    <Chip
      label={pType.type.name[0].toUpperCase() + pType.type.name.substring(1)}
      sx={{
        marginRight: "5px",
        color: "white",
        fontWeight: "bolder",
        fontSize: "1.1rem",
        backgroundColor: getColorForPokemonTag(pType.type.name),
        boxShadow:
          "rgba(0, 0, 0, 0.3) 0px 5px 100px, rgba(0, 0, 0, 0.22) 0px 3px 5px",
        // boxShadow:
        //   "rgba(0, 0, 0, 0.17) 0px 21px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px 15px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 0px 8px, rgba(0, 0, 0, 0.09) 0px 3px 16px",
      }}
    ></Chip>
  ));
}

export default TypeDisplay;
