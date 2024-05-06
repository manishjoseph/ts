"use strict";
// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    sort() {
        //Length destructuring wow
        const { length } = this;
        //Bubble sort. Compare adjacent and swap
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // Without this line typescript assumes collection can be string or number array.
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;