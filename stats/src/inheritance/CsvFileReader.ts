import fs from "fs";

export abstract class CsvFileReader<T> {
  data: T[] = [];
  constructor(public fileName: string) {}
  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: "utf-8", //To give string instead of buffer
      })
      .split("\n")
      .map((match: string): string[] => match.split(","))
      .map(this.mapRow);
  }
  abstract mapRow(row: string[]): T;
}
