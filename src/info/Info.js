import self from "../img/self.png"

export let colors = ["#15DB95", "rgb(166,104,255)"];

export const info = {
    firstName: "Fletcher",
    lastName: "Marsh",
    initials: "FM",
    position: "a software engineer driving progress in the autonomous vehicle industry",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '📫',
            display: 'fletcher.r.marsh@gmail.com',
            text: 'mailto:fletcher.r.marsh@gmail.com'
        },
        {
            emoji: '☎️',
            display: '(646) 326-7205',
            text: 'tel:(646) 326-7205'
        },
        {
            emoji: '🧑🏼‍💻',
            display: 'github.com/fletcher-marsh/',
            text: 'https://github.com/fletcher-marsh/'
        },
        {
            emoji: '👥',
            display: 'linkedin.com/in/fletcher-marsh-151120/',
            text: 'https://www.linkedin.com/in/fletcher-marsh-151120/'
        }
    ],
    socials: [
        {
            link: "https://github.com/fletcher-marsh/",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/fletcher-marsh-151120/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
    ],
    bio: "sometin",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'postgresql', 'nodejs', 'express', 'html/css', 'heroku'],
            exposedTo: ['nodejs', 'python', 'react native', 'restful api']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'hiking',
            emoji: '🥾'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'dogs',
            emoji: '🐕'
        },
        {
            label: 'target practice',
            emoji: '🎯'
        }
    ],
    portfolio: [
        
    ]
}