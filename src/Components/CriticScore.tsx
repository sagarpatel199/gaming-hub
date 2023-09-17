import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 50 ? "yellow" : "red";
  return (
    <Badge fontSize={18} marginY={1} borderRadius="5px" background={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
