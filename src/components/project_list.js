// Import images here
import QR_Code from '../assets/static/QR_Code_Preview.jpg'
import PD_Image from '../assets/static/PD_Preview.png'
import WA_Image from '../assets/static/Weather_App_Preview.png'
import AG_Image from '../assets/static/Advice_Generator_Preview.jpg'
import Blog_Img from '../assets/static/Logo_concept_2.jpg'
// import { Javascript } from '@mui/icons-material'

export const project_list = [
    {
        title: 'QR-Code-Comp',
        description: 'A QR code app provided by Frontend Mentor',
        image: QR_Code,
        tags: ['HTML', 'CSS'],
        source: 'https://github.com/jaywooski/QR-Code-Comp',
        liveVersion: 'https://jaywooski.github.io/QR-Code-Comp/',
        id: 1
    },
    
    {
        title: 'Programmer Dashboard',
        description: 'A dashboard utilizing third party APIs which keeps track of recent articles appealing to programmers like ourselves.',
        image: PD_Image,
        tags: ['JavaScript','HTML', 'CSS', 'API'],
        source: 'https://github.com/jaywooski/Programmer-Dashboard',
        liveVersion: 'https://joelkovalcson.github.io/Programmer-Dashboard/',
        id: 2
    },

    {
        title: 'Wooley Weather',
        description: 'A weather checking app dashboard using OpenWeatherMap API functionality',
        image: WA_Image,
        tags: ['JavaScript', 'HTML', 'CSS', 'API'],
        source: 'https://github.com/jaywooski/Wooley-Weather-Dashboard-Chal-6',
        liveVersion: 'https://jaywooski.github.io/Wooley-Weather-Dashboard-Chal-6/',
        id: 3
    },

    {
        title: 'Advice Generator',
        description: `Here's an app that generates some helpful advice to live by.
        Powered by the Advice Slip API Provider`,
        image: AG_Image,
        tags: ['JavaScript', 'HTML', 'CSS', 'API'],
        source: 'https://github.com/jaywooski/advice-generator-app-main',
        liveVersion: 'https://jaywooski.github.io/advice-generator-app-main/',
        id: 4
    },

    {
        title: 'Personal Blog',
        description: `I've created my own personal blog page, powered by Wordpress.com.
        Check it out!`,
        image: Blog_Img,
        tags: ['Wordpress'],
        source: null,
        liveVersion: 'https://jaywooski.com',
        id: 5
    }

]
