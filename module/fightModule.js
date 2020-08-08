//IIFE
//Module Pattern
//Promotes Encapsulation
var fightModule = (function () {
    var harry = 'potter'
    var lucky = 'Lucky'

    function fight(char1, char2) {
        var attach1 = Math.floor(Math.random() * char1.length);
        var attach2 = Math.floor(Math.random() * char1.length);
        return attach1 > attach2 ? `${char1} wins` : `${char2} wins`
    }

    return {
        fight: fight
    }
})()