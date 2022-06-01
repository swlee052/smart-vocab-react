export type DictionaryPage = {
    wordData : WordData[];
}

export type WordData = {
    definition: string[]
    pronunciation?: string
    functionalLabel: "n" | "v" | "adj" | "adv" | "prep" | "conj" | "pron" | "art" | "num" | "int" | "interj" | "part" | "vb" | "vbd" | "vbg" | "vbn" | "vbp" | "vbz"
    exampleSentences: string[]
}