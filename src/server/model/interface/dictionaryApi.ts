import { WordData } from "../types/dictionary";

export interface DictionaryApi {
    getWordDataList(word: string): Promise<WordData[]>;
}