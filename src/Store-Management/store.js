import { reactive } from "vue";
export const store = reactive({
    animationCards: [
        {
            image: "smart1.png",
            title: "3D modeling",
            paragraph: "We constantly ask questions. It help us shape your story and deliver the results you crave. Yep, we'Il drill deep to deliver above and beyond your expectations.",
            color: "#FFF9F5"
        },
        {
            image: "smart2.png",
            title: "Collaboration",
            paragraph: "We constantly ask questions. It help us shape your story and deliver the results you crave. Yep, we'Il drill deep to deliver above and beyond your expectations.",
            color: "#4D36DC"
        },
        {
            image: "smart3.png",
            title: "Creativity",
            paragraph: "We constantly ask questions. It help us shape your story and deliver the results you crave. Yep, we'Il drill deep to deliver above and beyond your expectations.",
            color: "#FFDFED"
        }
    ],
    facts: [
        { work: "Projects done", number: "700+" },
        { work: "Happy Clients", number: "250+" },
        { work: "Team Members", number: "25+" },
        { work: "Years on the market", number: "12+" },
    ]

})