import { useEffect, useState } from "react"

export default function Exam() {
    
    QuestionSets = [
        {
            Question: `The following text is from the 1913 story “The King's Coin” 
                        by Emily Pauline Johnson, a Kanienkahagen (Mohawk) writer 
                        also known as Tekahionwake. Fox-Foot, a young Ojibwe man, 
                        is guiding a group of fur traders who are traveling by canoe 
                        and suspects that they are being followed. At supper time, 
                        Fox-Foot would allow no fire to
                        be built, no landing to be made, no trace of their
                        passing to be left. They ate canned meat and
                        marmalade, drank again of the stream and
                        pushed on, until just at dusk they reached the
                        edge of a long, still lake, with shores of granite
                        and dense fir forest. 

                        As used in the text, what does the word “trace” most nearly mean?
                        `,
            Options: [
                {
                    Option: "Evidence",
                    Correct: true
                },
                {
                    Option: "Blemish",
                    Correct: false
                },
                {
                    Option: "Amount",
                    Correct: false
                },
                {
                    Option: "Sketch",
                    Correct: false
                }
            ]
        },
        {
            Question: `Many ancient sculptures of people’s heads are
                        missing their noses. This is because the nose is the
                        most _______ part of a sculpture of a person’s head.
                        It is delicate and sticks out from the rest of the
                        sculpture, making it especially easy to break.
                        Which choice completes the text with the most
                        logical and precise word or phrase? 
                        `,
            Options: [
                {
                    Option: "recognizable",
                    Correct: false
                },
                {
                    Option: "fragile",
                    Correct: true
                },
                {
                    Option: "common",
                    Correct: false
                },
                {
                    Option: "sophisticated",
                    Correct: false
                }
            ]
        },
    ]

    function Evaluate() {


        return(
            <>
            </>
        )
    }

    return(
        <>
            <div class="">
                <div class="">

                </div>
            </div>
        </>
    )
}