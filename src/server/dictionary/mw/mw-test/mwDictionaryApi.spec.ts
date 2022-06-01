import { expect } from "chai"
import { MwDictionaryApi } from "../mwDictionaryApi"

describe(`testing mwDictionaryApi.ts`, () => {
    it(`fetchJson()`, async function () {
        const dictionary = new MwDictionaryApi()
        const json: Object = await dictionary.fetchJson("test")
        console.log(json)
        
        expect(json).to.be.not.undefined
    })

    it(`getWordDataList()`, async function () {
        const dictionary = new MwDictionaryApi()
        const wordDataList: Object = await dictionary.getWordDataList("test")
        console.log(wordDataList)
        
        expect(wordDataList).to.be.not.undefined
    })
})
