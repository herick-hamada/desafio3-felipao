class Hero {
    constructor (name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        let skill;

        if (this.type === "mago") {
            skill = "magia";
        } else if (this.type === "guerreiro") {
            skill = "espada";
        } else if (this.type === "monge") {
            skill = "artes marciais";
        } else if (this.type === "ninja"){
            skill = "shuriken";
        }

        console.log(`O ${this.type} atacou usando ${skill}`)
    }    
}

let heroMage = new Hero ("Warlock", 99, "mago");
heroMage.attack();

let heroWar = new Hero ("Gladiator", 99, "guerreiro");
heroWar.attack();

let heroMonk = new Hero ("Priest", 99, "monge");
heroMonk.attack();

let heroNinja = new Hero ("Samurai", 99, "ninja");
heroNinja.attack();