// Primitives
const amount: number = 23.56; // ints/floats are numbers
const text: string = "The cat and the hat";
const depthOfMySoul: null = null; // can only be null
const undefinedValue: undefined = undefined; // can only be undefined

// Arrays/records
const todos: string[] = ["walk the cat", "put on the hat"];
const human: {
  age: number;
  favoriteArtist: string;
} = { age: 12, favoriteArtist: "Muse" };

// Functions
const addOne: (x: number) => number = (x) => x + 1;
const speakToTheVoid: (message: string) => void = (message) => {
  console.log(message);
};

// Tuples
const pair: [string, number] = ["dog", 23]; // must be two elements

// Enum (I never use this)
enum Election {
  Primary,
  General,
}
const election: Election = Election.Primary;
