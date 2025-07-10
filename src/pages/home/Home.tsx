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

  if (loading) {
    return (
      <div className="absolute top-1/2 transform -translate-y-1/2 text-center text-gray-500">
        Cargando Pokemones...
      </div>
    );
  }

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
            <TableHead>IMAGEN</TableHead>
            <TableHead>ACCIÓN</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pokemons.map((pokemon, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{pokemon.name}</TableCell>
              <TableCell>
                <img
                  className="w-12 h-12"
                  src={pokemon.url}
                  alt={pokemon.name}
                />
              </TableCell>
              <TableCell>
                <button className="text-emerald-600 hover:underline cursor-pointer">
                  Ver Detalles
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default Home;
