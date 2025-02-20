
const DashboardCover = "../assets/Dashboard-Project/cover.png";
const TrafficSimulatorCover = "../assets/TrafficSimulator-Project/cover.png";
const SpotifyAPICover = "../assets/SpotifyAPI-Project/cover.png";
const project1 = "/AdminDashboard-Project";

export const projectsData = [
  {
    name: "Traffic Simulator",
    date: "2024",
    description: `
      An AI-powered traffic simulator that uses the A* algorithm to determine the shortest path from the spawn point to the destination.
      Using the Mesa library, we implemented a state-based system to control car behavior, allowing vehicles to avoid collisions, respect traffic lights, and follow road directions.
      The 3D graphics were developed with WebGL, and 3D models were created using Blender.
    `,
    img: TrafficSimulatorCover,
    technologies: [
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python" },
      { name: "HTML", icon: "https://cdn.simpleicons.org/html5" },
      { name: "CSS", icon: "https://cdn.simpleicons.org/css3" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "WebGL", icon: "https://cdn.simpleicons.org/webgl" },
      { name: "Blender", icon: "https://cdn.simpleicons.org/blender" },
    ],
    page: project1,
  },
  {
    name: "Admin Dashboard",
    date: "2024",
    description: `
      A web-based administrative dashboard built with React Admin to manage users, donations, and employee data.
      The system includes role-based access control, allowing administrators to manage the information, while general users can submit donations.
      It features a user-friendly interface with real-time data visualization, CRUD operations, and authentication using JSON Web Tokens (JWT).
      For the backend was used Node.js and Express, with a MongoDB database data storage.
    `,
    img: DashboardCover,
    technologies: [
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
      { name: "Express", icon: "https://cdn.simpleicons.org/express" },
      { name: "JWT", icon: "https://cdn.simpleicons.org/jsonwebtokens" },
    ],
    page: project1,

  },
  {
    name: "Spotify API",
    date: "2024",
    description: `
     Use of the Spotify API to create a web application that allows users to search for songs, albums, and artists.
    `,
    img: SpotifyAPICover,
    technologies: [
      { name: "Python", icon: "https://cdn.simpleicons.org/python" },
      { name: "HTML", icon: "https://cdn.simpleicons.org/html5" },
      { name: "CSS", icon: "https://cdn.simpleicons.org/css3" },
    ],
    page: project1,

  },
];
