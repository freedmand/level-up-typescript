import { Playlist } from "./07-generics";

const a = 2;

function soManyArguments(
  name: string,
  favoriteCereal: string,
  favoriteSkyColor: string,
  favoriteTreeKind: string,
  favoriteNonSkyColor: string,
  favoriteQuestionWord: string
) {
  throw new Error("TODO: implement this method");
}

// Cmd+shift+space while the cursor is on one of the
// arguments in VSCode to show its origin
soManyArguments(
  "Bob",
  "Honey Nut Os",
  "periwinkle",
  "deciduous",
  "chartreuse",
  "why"
);

// Cmd+click identifiers to go to their definition
const b = a + 2;

// Uncomment the next line
const playlist = new Playlist<string>();

// View the problems pane in VSCode (next to Terminal)
// Ctrl-` expands it

// Now ctrl-space the unimported indentifier to import it
