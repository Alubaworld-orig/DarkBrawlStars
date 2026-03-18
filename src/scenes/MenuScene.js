'use strict';

class MenuScene {
    constructor() {
        this.backgroundColor = 'black';
        this.title = 'Welcome to Dark Brawl Stars';
        this.options = ['Play', 'Settings', 'Exit'];
        this.textColor = 'red';
    }

    create() {
        console.log(`\n\n\n\n\n\n\n${this.title}\n`);
        console.log(this.options.join('\n'));
        console.log(`Choose your destiny...`);
    }
}

module.exports = MenuScene;
