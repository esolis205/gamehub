import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardConatiner from "./GameCardConatiner";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardConatiner key={skeleton}>
              <GameCardSkeleton />
            </GameCardConatiner>
          ))}
        {data.map((game) => (
          <GameCardConatiner key={game.id}>
            <GameCard game={game} />
          </GameCardConatiner>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
