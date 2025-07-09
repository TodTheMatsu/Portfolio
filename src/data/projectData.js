// Project data structure for the portfolio
import vid1 from '../assets/videos/whattodo/vid1.mp4';
import vid2 from '../assets/videos/whattodo/vid2.mp4';
import vid3 from '../assets/videos/whattodo/vid3.mp4';
import vid4 from '../assets/videos/whattodo/vid4.mp4';
import vid5 from '../assets/videos/whattodo/vid5.mp4';
import vid6 from '../assets/videos/whattodo/vid6.mp4';
import vid7 from '../assets/videos/whattodo/vid7.mp4';

import weatherVid1 from '../assets/videos/howistheweather/vid1.mp4';
import weatherVid2 from '../assets/videos/howistheweather/vid2.mp4';
import weatherVid3 from '../assets/videos/howistheweather/vid3.mp4';
import weatherVid4 from '../assets/videos/howistheweather/vid4.mp4';
import weatherVid5 from '../assets/videos/howistheweather/vid5.mp4';

import assistantVid1 from '../assets/videos/assistant/vid1.mp4';
import assistantVid2 from '../assets/videos/assistant/vid2.mp4';
import assistantVid3 from '../assets/videos/assistant/vid3.mp4';
import assistantVid4 from '../assets/videos/assistant/vid4.mp4';

import empirehoundVid1 from '../assets/videos/empirehound/vid1.mp4';
import projectrtsVid1 from '../assets/videos/projectrts/vid1.mp4';

export const projectsData = {
  whattodo: {
    title: "What to do?",
    subtitle: "A modern task management system with drag-and-drop functionality",
    description: "A dynamic and interactive task management system that allows users to manage tasks through boards. The app features drag-and-drop functionality to reorder boards and tasks, supports dark mode, and integrates with a backend for storing board data.",
    logo: {
      type: "text", // or "svg"
      content: "What to do?"
    },
    features: [
      {
        name: 'Tasks creation',
        description: 'Quickly add new tasks by typing a name and pressing Enter.',
        video: vid2,
      },
      {
        name: 'Boards creation',
        description: 'Create new boards by clicking the "Create Board" button.',
        video: vid3,
      },
      {
        name: 'Edit existing tasks',
        description: 'Click on any task to edit its details. A modal opens, allowing users to update the task name or description in real time.',
        video: vid4,
      },
      {
        name: 'Reordering tasks and boards',
        description: 'Easily reorder tasks and boards by dragging and dropping. Changes are instantly saved.',
        video: vid5,
      },
      {
        name: 'Toggle between light and dark mode',
        description: 'Switch effortlessly between light and dark themes to suit your preference. Preferences are saved across sessions for a consistent experience.',
        video: vid6,
      },
      {
        name: 'Persistent Data Storage',
        description: 'You can create an account and save your boards and tasks for future sessions.',
        video: vid7,
      },
    ],
    tech: {
      Frontend: ['React + Vite', 'Tailwind CSS'],
      Backend: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'JWT (JSON Web Tokens)',
        'Crypto',
        'CORS (Cross-Origin Resource Sharing)',
      ],
    },
    demoVideo: vid1,
    sourceCodeUrl: "https://github.com/TodTheMatsu/what-to-do",
    theme: {
      primaryColor: "white",
      bgStyle: "bg-white bg-opacity-20",
      headerStyle: "outline-dashed",
      dividerStyle: "border-dashed"
    }
  },

  howistheweather: {
    title: "How is the weather?",
    subtitle: "A modern weather application with dynamic backgrounds",
    description: "A modern, responsive weather application built with React. It provides real-time weather data for your location, displaying both current and forecasted weather conditions with beautiful animated backgrounds.",
    logo: {
      type: "text",
      content: "How is the weather?"
    },
    features: [
      {
        name: 'Daily weather forecast',
        description: 'Shows daily weather information, including temperature, precipitation, and conditions.',
        video: weatherVid1,
      },
      {
        name: 'Hourly temperature forecast',
        description: 'Provides hourly temperature predictions for the next 24 hours.',
        video: weatherVid2,
      },
      {
        name: 'Weather & News Data',
        description: 'Fetches detailed weather data from the Open-Meteo API and relevant news articles from the Newsdata.io API.',
        video: weatherVid3,
      },
      {
        name: 'Dynamic Backgrounds',
        description: 'Changes the background image based on the current time of the day.',
        video: weatherVid4,
      },
      {
        name: 'Modern Design',
        description: "Uses Tailwind CSS and Framer Motion for a modern and responsive design.",
        video: weatherVid5,
      },
    ],
    tech: {
      Frontend: ['React + Vite', 'Tailwind CSS'],
      Backend: [],
    },
    sourceCodeUrl: "https://github.com/TodTheMatsu/how-is-the-weather",
    theme: {
      primaryColor: "white",
      bgStyle: "bg-white bg-opacity-20",
      headerStyle: "outline",
      dividerStyle: ""
    }
  },

  assistant: {
    title: "Assistant",
    subtitle: "A modern AI chat application powered by Google's Gemini 1.5 Flash model",
    description: "This chat application allows users to interact with Google's Generative AI model. It features a modern UI, real-time AI responses, and the ability to save and revisit previous conversations.",
    logo: {
      type: "svg",
      content: `<svg stroke="white" xmlns="http://www.w3.org/2000/svg" className="stroke-white w-16 h-16 mr-4" viewBox="0 0 20 20">
        <path strokeWidth="1.5" d="M7.39804 12.8085c.17624.1243.38672.1909.60239.1905.2159.0002.42643-.0673.602-.193.1775-.1305.31221-.3108.387-.518l.447-1.373c.11443-.3443.30748-.6572.56387-.9139.2563-.25674.569-.45021.9131-.5651l1.391-.45101c.152-.05435.2892-.14315.4011-.25944s.1953-.2569.2437-.41082c.0485-.15393.0606-.31697.0355-.47637-.0251-.15939-.0868-.3108-.1803-.44236-.1341-.18593-.325-.32317-.544-.391l-1.375-.447c-.3445-.11423-.6576-.3072-.91453-.56359-.25691-.25638-.45052-.56913-.56544-.91341l-.452-1.388c-.0723-.20231-.20582-.37707-.382-.5-.13266-.09373-.28536-.15521-.44595-.17956-.16059-.02434-.32465-.01088-.47912.03931-.15448.0502-.29511.13575-.41072.24985-.1156.11409-.20299.25359-.25521.4074l-.457 1.4c-.11459.33482-.30376.63923-.55321.89025-.24946.25101-.55269.44207-.88679.55875l-1.391.448c-.15178.05439-.28891.14317-.40066.25938-.11176.11622-.19511.25672-.24353.4105-.04842.15379-.0606.31669-.03559.47597.02502.15928.08655.31061.17978.44215.12784.17945.30862.31442.517.386l1.374.44499c.44011.14649.82656.42083 1.11.78801.16242.2106.28787.4473.371.7l.452 1.391c.07203.2033.20536.3792.38161.5035Zm6.13726 4.0425c.136.0962.2984.1479.465.148.1651.0001.3261-.0509.461-.146.1395-.0985.2445-.2384.3-.4l.248-.762c.0532-.1584.1422-.3025.26-.421.1174-.1185.2614-.2073.42-.259l.772-.252c.1577-.0545.2944-.1569.391-.293.0734-.103.1213-.2219.1398-.347.0185-.1251.0071-.2528-.0333-.3727-.0404-.1198-.1087-.2283-.1991-.3167-.0905-.0884-.2006-.154-.3214-.1916l-.764-.249c-.1581-.0525-.3019-.1412-.4199-.2588-.118-.1177-.2071-.2612-.2601-.4192l-.252-.773c-.0537-.1578-.1563-.2944-.293-.39-.102-.0729-.2198-.1209-.3437-.1399-.124-.0191-.2507-.0087-.3699.0302-.1193.0389-.2277.1053-.3165.1939-.0888.0885-.1556.1967-.1949.3158l-.247.762c-.0523.1577-.1398.3013-.256.42-.1147.1165-.2546.2051-.409.259l-.773.252c-.159.0539-.2971.1565-.3946.2933-.0975.1367-.1495.3007-.1486.4686.0009.1679.0546.3313.1535.4671.099.1357.2381.2368.3977.289l.763.247c.1589.0534.3033.1427.422.261.1182.1183.2067.2629.258.422l.253.774c.0548.1565.1568.2921.292.388Z" />
      </svg>`
    },
    features: [
      {
        name: 'Dynamic AI Responses',
        description: "Utilizes Google's Gemini 1.5 Flash for natural, intelligent conversations with fast response times and long context tokens.",
        video: assistantVid1,
      },
      {
        name: 'Save and Revisit Previous Conversations',
        description: "Allows users to save and revisit previous conversations, titles of conversations are auto-generated by Gemini 1.5 Flash.",
        video: assistantVid2,
      },
      {
        name: 'Code Generations',
        description: "Allows users to generate code from natural language prompts and copy code snippets with the click of a button.",
        video: assistantVid3,
      },
      {
        name: 'Markdowns',
        description: "Text are properly formatted and rendered as markdown.",
        video: assistantVid4,
      },
    ],
    tech: {
      Frontend: ["React + Vite", "Tailwind CSS"],
      Backend: [],
    },
    sourceCodeUrl: "https://github.com/TodTheMatsu/Assistant",
    theme: {
      primaryColor: "white",
      bgStyle: "bg-black/30 backdrop-blur-xl border border-white/10",
      headerStyle: "",
      dividerStyle: "bg-gradient-to-r from-transparent via-white/20 to-transparent"
    }
  },

  empirehound: {
    title: "Empire's Hound",
    subtitle: "An ability-based action RPG with fast-paced combat",
    description: "Empire's Hound is an ability-based action RPG where you fight as a Hound, an elite mercenary serving the Empire of Verseria. Undertake perilous missions, battle relentless enemies, and amass wealth and power—all while following the mercenary creed: Profit before honor. Currently in development, Empire's Hound features fast-paced combat, deep ability-based mechanics.",
    logo: {
      type: "text",
      content: "Empire's Hound"
    },
    features: [
      {
        name: 'Gameplay',
        description: "In Empire's Hound, fast-paced, ability-driven combat pushes your skills to the limit. Use your hard-earned wealth to unlock powerful weapons and abilities, then fight through relentless waves of enemies to prove your worth.",
        video: empirehoundVid1,
      },
    ],
    tech: {
      Frontend: [],
      Backend: ['Powered by Luau', 'Roblox Studio'],
    },
    demoVideo: empirehoundVid1,
    sourceCodeUrl: null,
    theme: {
      primaryColor: "white",
      bgStyle: "bg-purple-900/20 backdrop-blur-xl border border-purple-500/20",
      headerStyle: "",
      dividerStyle: "bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
    }
  },

  projectrts: {
    title: "Project RTS",
    subtitle: "A real-time strategy game with tactical battles",
    description: "In RTS, players start with a small settlement and must gather resources like wood, stone, and food to expand their territory. Construct buildings to develop your economy, train armies, and unlock advanced technologies. Engage in tactical battles, command troops in real-time, and adapt to dynamic battle conditions. Whether forging alliances or waging war, every decision shapes the fate of your empire.",
    logo: {
      type: "text",
      content: "Project RTS"
    },
    features: [
      {
        name: 'Gameplay',
        description: "In Project RTS, players gather resources, build thriving cities, and lead powerful armies. Strategize your expansion, forge alliances, and wage war to dominate the battlefield.",
        video: projectrtsVid1,
      },
    ],
    tech: {
      Frontend: [],
      Backend: ['Powered by Luau', 'Roblox Studio'],
    },
    demoVideo: projectrtsVid1,
    sourceCodeUrl: null,
    theme: {
      primaryColor: "white",
      bgStyle: "bg-orange-900/20 backdrop-blur-xl border border-orange-500/20",
      headerStyle: "",
      dividerStyle: "bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"
    }
  }
};
