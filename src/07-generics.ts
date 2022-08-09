// Generic functions
function logData<T>(data: T): void {
  console.log(data);
}

// Generic classes
export class Playlist<T> {
  public songs: T[] = [];

  add(item: T) {
    this.songs.push(item);
  }
  clear() {
    this.songs = [];
  }

  get(index: number): T {
    return this.songs[index];
  }
}

class Song {
  constructor(public title: string, public artist: string) {}
}

const playlist: Playlist<Song> = new Playlist();
playlist.add(new Song("Black Hole Sun", "Soundgarden"));
playlist.add(new Song("House of the Rising Sun", "The Animals"));

console.log(playlist.get(0));
