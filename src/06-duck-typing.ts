interface Duck {
  walk(): void;
  talk(squabble: string): void;
}

class RobotDuck {
  public bladesOfGrassDestroyed = 0;

  walk() {
    this.bladesOfGrassDestroyed++;
  }

  talk(robotOverlordMessage: string) {
    console.warn(`BE WARNED: ${robotOverlordMessage}`);
  }
}

function makeDuckTalk(duck: Duck, message: string) {
  duck.talk(message);
}

makeDuckTalk(new RobotDuck(), "I AM A ROBOT");
