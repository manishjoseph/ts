"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
class CsvFileReader {
    constructor(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.fileName, {
            encoding: "utf-8", //To give string instead of buffer
        })
            .split("\n")
            .map((match) => match.split(","));
    }
}
exports.CsvFileReader = CsvFileReader;
