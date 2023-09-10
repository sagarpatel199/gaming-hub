import React from "react";
import { Game } from "../hooks/useGames";
import {
  Card,
  CardBody,
  Heading,
  Hide,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";

interface props {
  game: Game;
}

const GameCard = ({ game }: props) => {
  return (
    <div>
      <Card borderRadius={10} overflow="hidden">
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <PlatformIcon
            platform={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIcon>
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCard;
