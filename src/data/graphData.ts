import { title } from "process";

interface Paper {
  id: string;
  title: string;
}

export interface Graph {
  id: string;
  title: string;
  dateCreated: string;
  description: string;
  thumbnail: string;
  papers?: Paper[]
}

const savedGraphs: Graph[] = [
  { 
    id: '1',
    title: "The Graph of Document1",
    dateCreated: "2023-01-01",
    description: "Cloud technology revolutionizes the way we store, access, and manage data and applications. By leveraging a network of remote servers, connected through the internet, cloud computing provides scalable and on-demand resources to users. This transformative technology enables individuals and businesses to store and process information securely in virtual environments, fostering flexibility and accessibility. From hosting websites and running applications to storing vast amounts of data, cloud technology empowers seamless collaboration, improves efficiency, and promotes innovation by removing the constraints of physical infrastructure. Embracing the cloud allows users to focus on their core activities while benefiting from the agility, cost-effectiveness, and scalability offered by this modern computing paradigm.",
    thumbnail: "https://picsum.photos/id/204/5000/3333.jpg",
    papers: [
      {
        id: "1",
        title: "Paper related commerce"
      },
      {
        id: "2",
        title: "Paper related wealth management"
      },
    ]
  },
  { 
    id: '2',
    title: "The Graph of Document 2",
    dateCreated: "2023-02-15",
    description: "Cloud technology revolutionizes the way we store, access, and manage data and applications. By leveraging a network of remote servers, connected through the internet, cloud computing provides scalable and on-demand resources to users. This transformative technology enables individuals and businesses to store and process information securely in virtual environments, fostering flexibility and accessibility. From hosting websites and running applications to storing vast amounts of data, cloud technology empowers seamless collaboration, improves efficiency, and promotes innovation by removing the constraints of physical infrastructure. Embracing the cloud allows users to focus on their core activities while benefiting from the agility, cost-effectiveness, and scalability offered by this modern computing paradigm.",
    thumbnail: "https://picsum.photos/id/201/5000/3333.jpg",
    papers: [
      {
        id: "1",
        title: "Paper related finance"
      },
      {
        id: "2",
        title: "Paper related Payments automation"
      },
      
    ]
  },
  { 
    id: '3',
    title: "The Graph of Paper 3",
    dateCreated: "2023-03-10",
    description: "Cloud technology revolutionizes the way we store, access, and manage data and applications. By leveraging a network of remote servers, connected through the internet, cloud computing provides scalable and on-demand resources to users. This transformative technology enables individuals and businesses to store and process information securely in virtual environments, fostering flexibility and accessibility. From hosting websites and running applications to storing vast amounts of data, cloud technology empowers seamless collaboration, improves efficiency, and promotes innovation by removing the constraints of physical infrastructure. Embracing the cloud allows users to focus on their core activities while benefiting from the agility, cost-effectiveness, and scalability offered by this modern computing paradigm.",
    thumbnail: "https://picsum.photos/id/206/5000/3333.jpg",
    papers: [
      {
        id: "1",
        title: "Paper related cloud tech"
      },
      {
        id: "2",
        title: "Paper related Cloud Security"
      },
      {
        id: "3",
        title: "Paper related Cloud Mitigation"
      },
      
    ]
  },
  { 
    id: '4',
    title: "The Graph of Paper 4",
    dateCreated: "2023-03-10",
    description: "Cloud technology revolutionizes the way we store, access, and manage data and applications. By leveraging a network of remote servers, connected through the internet, cloud computing provides scalable and on-demand resources to users. This transformative technology enables individuals and businesses to store and process information securely in virtual environments, fostering flexibility and accessibility. From hosting websites and running applications to storing vast amounts of data, cloud technology empowers seamless collaboration, improves efficiency, and promotes innovation by removing the constraints of physical infrastructure. Embracing the cloud allows users to focus on their core activities while benefiting from the agility, cost-effectiveness, and scalability offered by this modern computing paradigm.",
    thumbnail: "https://picsum.photos/id/203/5000/3333.jpg",
    papers: [
      {
        id: "1",
        title: "Paper related cloud game"
      },
      {
        id: "2",
        title: "Paper related Gamificaion & Security"
      },
    ]
  },

];

export default savedGraphs