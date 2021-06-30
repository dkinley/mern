//this is creating a Ninja class

class ninja {
    const (name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.speed = speed;
        
    }
    sayName(){
        console.log("Ninjas name is: " + this.name);
    }
    showStats(){
        console.log("Stats for: " + this.name);
        console.log("Health: " + this.health);
        console.log("Strength: " + this.strength);
        console.log("Speed: " + this.speed);
        
    }
    drinkSake(){
        this.health += 10;
    }
}

    const ninjaOne = new ninja("First One");
    ninjaOne.sayName();
    ninjaOne.showStats();
    ninjaOne.drinkSake();


    console.log("Ninja Dos");
    const ninjaTwo = new ninja("Second One");
    ninjaTwo.sayName();
    ninjaTwo.showStats();
    ninjaTwo.drinkSake();
 