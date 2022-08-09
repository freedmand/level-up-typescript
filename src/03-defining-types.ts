// Interface is a way to give a name to record types
interface Human {
  name: string;
  doADance: () => void;
}

const dylan: Human = {
  name: "Dylan",
  doADance: () => {
    console.log(`♪┏(・o・)┛♪`);
  },
};

// Types give names to types
type NameType = string;

// Difference between type and interface
interface Human {
  // Uncomment the following line to extend the Human interface
  // age: number;
}

type HumanAsType = {
  name: string;
  doADance: () => void;
};
