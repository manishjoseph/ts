import { OutputTarget } from "../Analyzer";

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
