import { WordData } from "../../model/types/dictionary";
import { DictionaryApi } from "../../model/interface/dictionaryApi";
import { MERRIAM_WEBSTER_API_KEY } from "./mw.config";
import fetch from "node-fetch";

export class MwDictionaryApi implements DictionaryApi {   
    private getUrl (word: string): string {
        return `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${MERRIAM_WEBSTER_API_KEY}`
    }

    public async fetchJson(word: string): Promise<any>{
        const url: string = this.getUrl(word)
        const response = await fetch(url)
        if (!response.ok){
            throw new Error(`Status: ${response.status}. Fetch was unsuccessful.`)
        }
        const json = response.json()

        return json
    }
    
    public async getWordDataList(word: string): Promise<WordData[]> {
        const json: Array<any> = await this.fetchJson(word)
        const wordDataList: WordData[] = []

        for (let i = 0; i < json.length; i++){
            if (json[i].hasOwnProperty('hom')){
                const wordData: WordData = {
                    definition: json[i].shortdef,
                    functionalLabel: json[i].fl,
                    exampleSentences: json[i].hwi.prs
                }
                wordDataList.push(wordData)
                continue
            }
            break
        }
        console.log(wordDataList)
        return wordDataList
    }
}