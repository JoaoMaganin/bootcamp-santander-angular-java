// Classes -> Forma reaproveitável

/*
    data modifiers
    public
    private
    protected
*/


class Character {
    protected name?: string; //? -> indica que é opcional
    readonly strength: number;
    skill: number;

    constructor(strength: number, skill: number) {
        this.strength = strength;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.strength} points`);
    }
}


// Subclasses
class Magician extends Character {
    magicPoints: number;

    constructor(name: string, strength: number, skill: number, magicPoints: number) {
        super(strength, skill);
        this.magicPoints = magicPoints;
    }

    attack(): void {
        console.log(`Attack with magic power ${this.magicPoints} points`);
    }
}

const p2 = new Magician("Bololo", 12, 2, 100);
p2.attack()