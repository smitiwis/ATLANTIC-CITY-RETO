import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useListPokemon } from "@/hooks/useListPokemons";

const Home = () => {
  const { loading, pokemons } = useListPokemon();

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4 dark:text-white">
        Listado de Pokemones
      </h1>
      <Table className="dark:bg-gray-800">
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>NOMBRE</TableHead>
            <TableHead className="text-right">Accion</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pokemons.map((pokemon, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{pokemon.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default Home;
