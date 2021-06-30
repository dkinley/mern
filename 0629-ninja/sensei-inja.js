class Sensei {
    const (name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log("Sensei called: " + this.name);
    }
    
    showStats(){
        console.log(this.name);
        console.log(this.health);
        console.log(this.speed);
        console.log(this.strength);
    }
    
    drinkSake(){
        this.health += 10;
        console.log(this.name + " health updated to " + this.health);
    }
    }
    
    class SenseiMaster extends Sensei {
    const(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }
    
    speakWisdom() {
        console.log("Sensei speaks wise words...");
        this.drinkSake();
        console.log("One bug is better than two, unless the one is a fatal error and the two are easy fixes")
    }
    }
    
    const senseiOne = new Sensei("Sir Sensei One", 100);
        senseiOne.sayName();
        senseiOne.showStats();
        senseiOne.drinkSake();

    const senseiTwo = new Sensei("Sir Sensei One", 100);
        senseiTwo.sayName();
        senseiTwo.showStats();
        senseiTwo.drinkSake();

    const senseiTwo = new Sensei("Sensei Two");
        senseiTwo.showStats();
        senseiTwo.speakWisdom();