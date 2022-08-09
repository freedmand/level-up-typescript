/**
 * A sneak preview of advanced TypeScript features
 */

interface WaterGlass {
  milliliters: number;
  shape: "round" | "square"; // must be one of two strings
  material: "glass"; // must be the exact string "glass"
}

const waterAmount: WaterGlass["milliliters"] = 250;

// Utility types
// See https://www.typescriptlang.org/docs/handbook/utility-types.html
type GenericContainer = Omit<WaterGlass, "material" | "shape">;
type OptionalWaterGlass = Partial<WaterGlass>;

// Template literal types
type ElectionDate = `${number}-${number}-${number}`;
type StateCode = "AL" | "AK" | "AZ"; // ...
type ElectionType = "P" | "G"; // primary or general
type ElectionId = `${ElectionDate}-${StateCode}-${ElectionType}`;
// Now we can define Alaska primary
const alaskaPrimaryId: ElectionId = "2022-08-13-AL-P";

// Discriminated unions
// See https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html
type APIResponse = SuccessResponse | ErrorResponse;

interface SuccessResponse {
  type: "Success";
  status: "ok";
}

interface ErrorResponse {
  type: "Error";
  code: number;
  message: string;
}

function printResponse(response: APIResponse): void {
  // Inspect the autocompletes on `response` within the
  // conditional branches
  // (more on narrowing: https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
  if (response.type === "Success") {
    console.log(`Success: ${response.status}`);
  } else {
    console.error(`Fail [${response.code}]: ${response.message}`);
  }
}

// More advanced generics
type Data = { value: string };
type Channel<T extends Data> = { data: T };
const channels: Channel<{ value: string; type: string }>[] = [
  { data: { value: "dog", type: "animal" } },
  { data: { value: "cat", type: "animal" } },
];
function extractData<DataType extends Data>(
  channels: Channel<DataType>[]
): DataType[] {
  return channels.map((channel) => channel.data);
}

// Mapped types
// See https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
type WaterFlags = OptionsFlags<WaterGlass>;

// Any essentially turns TypeScript off.
// It's not recommended to use any but it can be useful to debug
// or in some rare instances with advanced types.
// If you have lint issues, you can usually right-click them and
// VSCode will suggest a lint-ignore for that particular line
const x: any = 34;
x.doWhatever.like.this(34);
