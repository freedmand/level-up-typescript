interface Animal {
  kind: string;
}

class Dog implements Animal {
  public kind = "dog";

  bark() {
    console.log("Woof!");
  }
}

class BaxterTheGreat extends Dog {
  bark() {
    console.log("*clears throat* bark, bark. bark, bark");
  }
}

const dog = new Dog();
console.log("Normal dog bark:");
dog.bark();

const baxter = new BaxterTheGreat();
console.log("\nBaxter is a", baxter.kind);
console.log("\nRoyal bark:");
baxter.bark();
