// HorrorEffects.js

class HorrorEffects {
    constructor() {
        this.scaryVisuals = [];
        this.scaryAudio = [];
    }

    addVisual(effect) {
        this.scaryVisuals.push(effect);
    }

    addAudio(audio) {
        this.scaryAudio.push(audio);
    }

    playEffects() {
        this.scaryVisuals.forEach(effect => {
            effect.display();  // Assuming display method is defined in visual effects
        });
        this.scaryAudio.forEach(audio => {
            audio.play();  // Assuming play method for audio
        });
    }
}

// Example usage:
const horror = new HorrorEffects();

// Add some scary visuals
horror.addVisual({
    name: 'Dark Shadows',
    display: function() {
        console.log('Shadows creeping in...');
    }
});

// Add some scary audio
horror.addAudio({
    name: 'Eerie Whisper',
    play: function() {
        console.log('Playing eerie whisper sound...');
    }
});  

horror.playEffects();

export default HorrorEffects;