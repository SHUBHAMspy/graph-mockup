import { title } from "process";

interface Paper {
  id: string;
  title: string;
}

export interface Graph {
  id: string;
  title: string;
  dateCreated: string;
  thumbnail: string;
  papers?: Paper[]
}

const savedGraphs: Graph[] = [
  { 
    id: '1',
    title: "The Graph of Document1",
    dateCreated: "2023-01-01",
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
    thumbnail: "https://picsum.photos/id/201/5000/3333.jpg",
    papers: [
      {
        id: "1",
        title: "Paper related finance"
      },
      {
        id: "2",
        title: "Paper related Payements automation"
      },
      
    ]
  },
  { 
    id: '3',
    title: "The Graph of Paper 3",
    dateCreated: "2023-03-10",
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