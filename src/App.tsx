import { Button, ButtonGroup, GridItem } from "@chakra-ui/react";
import { Grid, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  // return <Button colorScheme="blue">Button</Button>;
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          ></GenreList>
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
