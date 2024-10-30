let hero = {
    name: 'Spider-man',
    health: 100,
    alias: 'Peter Parker',
    movementSpeed: 5,
    isAlive: true,
    attacks: [
        ['web shooters', 10],
        ['punch', 2],
        ['swing kick', 5],
    ],
    attack() {
        let rand = Math.floor(Math.random() * this.attacks.length);
        return this.attacks[rand];
    },
};

let villain = {
    name: 'Doctor Octopus',
    health: 100,
    alias: 'Otto Octavius',
    movementSpeed: 5,
    isAlive: true,
    attacks: [
        ['leg strike', 8],
        ['punch', 2],
        ['leg choke', 3],
    ],
    attack() {
        let rand = Math.floor(Math.random() * this.attacks.length);
        return this.attacks[rand];
    },
};

function fight(hero, villain) {
    while (hero.isAlive && villain.isAlive) {
        let heroAttackResult = hero.attack();
        console.log(`${hero.name} attacked with ${heroAttackResult[0]} for ${heroAttackResult[1]} damage!`);
        villain.health -= heroAttackResult[1];

        let villainAttackResult = villain.attack();
        console.log(`${villain.name} attacked with ${villainAttackResult[0]} for ${villainAttackResult[1]} damage!`);
        hero.health -= villainAttackResult[1];

        if (hero.health <= 0) {
            hero.isAlive = false;
            console.log(`${hero.name} has been defeated!`);
        }
        if (villain.health <= 0) {
            villain.isAlive = false;
            console.log(`${villain.name} has been defeated!`);
        }
    }
}

fight(hero, villain);
