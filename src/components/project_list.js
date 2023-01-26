// Import images here
import QR_Code from '../assets/static/QR_Code_Preview.jpg'
import PD_Image from '../assets/static/PD_Preview.png'
import WA_Image from '../assets/static/Weather_App_Preview.png'

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

]