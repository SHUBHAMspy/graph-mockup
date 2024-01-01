export interface Graph {
  title: string;
  dateCreated: string;
  thumbnail: string
}

const savedGraphs: Graph[] = [
  {
    title: "The Graph of Document1",
    dateCreated: "2023-01-01",
    thumbnail: "https://picsum.photos/id/204/5000/3333.jpg",
  },
  {
    title: "The Graph of Document 2",
    dateCreated: "2023-02-15",
    thumbnail: "https://picsum.photos/id/201/5000/3333.jpg",
  },
  {
    title: "The Graph of Paper 3",
    dateCreated: "2023-03-10",
    thumbnail: "https://picsum.photos/id/206/5000/3333.jpg",
  },
  {
    title: "The Graph of Paper 4",
    dateCreated: "2023-03-10",
    thumbnail: "https://picsum.photos/id/203/5000/3333.jpg",
  },

];

export default savedGraphs