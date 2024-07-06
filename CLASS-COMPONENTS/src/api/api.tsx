export async function fetchPokemonData() {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
