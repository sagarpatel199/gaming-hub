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
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack marginBottom={3} justifyContent="space-between">
            <PlatformIcon
              platform={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIcon>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCard;
