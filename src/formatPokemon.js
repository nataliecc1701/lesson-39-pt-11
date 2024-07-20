function formatPokemon(pokeData) {
    const stats = pokeData.stats.map(stat => ({
        value: stat.base_stat,
        name: stat.stat.name
      }))
    
    return {
        front : pokeData.sprites.front_default,
        back  : pokeData.sprites.back_default,
        name  : pokeData.name,
        stats
    }
}

export default formatPokemon;