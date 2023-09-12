import React from "react";
import { Game } from "../hooks/useGames";
import {
  Card,
  CardBody,
  HStack,
  Heading,
  Hide,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface props {
  game: Game;
}

const GameCard = ({ game }: props) => {
  return (
    <div>
      <Card width="275px" borderRadius={10} overflow="hidden">
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack justifyContent="space-between">
            <PlatformIcon
              platform={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIcon>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCard;
