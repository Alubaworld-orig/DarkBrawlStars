// ArenaManager.js

class ArenaManager {
    constructor() {
        this.arenas = [];
    }

    createArena(name, description, levelOfTerror) {
        const arena = {
            name: name,
            description: description,
            levelOfTerror: levelOfTerror
        };
        this.arenas.push(arena);
        console.log(`Arena ${name} created with terror level ${levelOfTerror}`);
    }

    getArenas() {
        return this.arenas;
    }

    getTerrifyingDesigns() {
        return this.arenas.map(arena => {
            return `Arena: ${arena.name}, Description: ${arena.description}, Terror Level: ${arena.levelOfTerror}`;
        });
    }
}

// Example usage:
const arenaManager = new ArenaManager();
arenaManager.createArena('Dark Castle', 'A menacing castle shrouded in shadows.', 10);
arenaManager.createArena('Cursed Forest', 'Whispers of the dead echo among the trees.', 9);
arenaManager.createArena('Haunted Graveyard', 'A chilling graveyard where spirits lurk.', 8);

console.log(arenaManager.getTerrifyingDesigns());