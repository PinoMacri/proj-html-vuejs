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
    ],
    productionImages: [
        "work1.png", "work2.png", "work3.png", "work4.png"
    ],
    productions: [
        {
            image: "process1.png",
            number: "1",
            title: "Pre-Production",
            text: "We'Il take your idea and create a technical script which consist of action notes and animation descriptions"
        },
        {
            image: "process2.png",
            number: "2",
            title: "Scripting",
            text: "We'Il take your idea and create a technical script which consist of action notes and animation descriptions"
        },
        {
            image: "smart2.png",
            number: "3",
            title: "Preparation",
            text: "We'Il take your idea and create a technical script which consist of action notes and animation descriptions"
        },
        {
            image: "smart3.png",
            number: "4",
            title: "Working",
            text: "We'Il take your idea and create a technical script which consist of action notes and animation descriptions"
        },
    ], members: [
        {
            image: "team1.png",
            name: "Robert Coleman",
            role: "Owner & Creative Director",

        },
        {
            image: "team2.png",
            name: "Don Woods",
            role: "Administrator",

        },
        {
            image: "team4.png",
            name: "Tomas Nash",
            role: "2d Animator & Compositor",

        },
        {
            image: "team2.png",
            name: "Nyck De Vries",
            role: "Content Creator",

        },
    ], socials: [
        "<i class='fa-brands fa-facebook'></i>",
        "<i class='fa-brands fa-square-twitter'></i>",
        "<i class='fa-brands fa-instagram'></i> ",
    ], circles: [
        '<i class="fa-solid fa-circle"></i>',
        '<i class="fa-solid fa-circle"></i>',
        '<i class="fa-solid fa-circle"></i>',
        '<i class="fa-solid fa-circle"></i>',
    ],
    sponsors: [
        "sponsor1.png",
        "sponsor2.png",
        "sponsor3.png",
        "sponsor4.png",
        "sponsor5.png",
    ]

})