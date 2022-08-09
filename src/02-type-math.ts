// Union types
const numOrString: number | string = "2";
const maybeUndefined: number | undefined = 34;

// Partial types
const partialHuman: {
  age?: number;
  name?: string;
} = {
  age: 17,
  // Name is not filled out, and that's ok
};

// Intersection types
const partialAnimal: {
  age?: number;
  name?: string;
} & { age: number } = {
  age: 22,
  // Must have age property
  // Cannot have name property
};
