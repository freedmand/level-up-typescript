class PhoneTS {
  readonly manufacturer: string;
  readonly year: number;
  readonly model: string;
  public poweredOn: boolean;

  constructor(manufacturer: string, year: number, model: string) {
    this.manufacturer = manufacturer;
    this.year = year;
    this.model = model;
    this.poweredOn = false;
  }
}

// More concise syntax, does the same as above
class Phone {
  public poweredOn: boolean = false;

  constructor(
    readonly manufacturer: string,
    readonly year: number,
    readonly model: string
  ) {}
}
