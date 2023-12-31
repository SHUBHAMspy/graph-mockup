export interface Graph {
  title: string;
  dateCreated: string;
  thumbnail: string
}

const savedGraphs: Graph[] = [
  {
    title: "Graph 1",
    dateCreated: "2023-01-01",
    thumbnail: "https://picsum.photos/id/204/5000/3333.jpg",
  },
  {
    title: "Graph 2",
    dateCreated: "2023-02-15",
    thumbnail: "https://picsum.photos/id/201/5000/3333.jpg",
  },
  {
    title: "Graph 3",
    dateCreated: "2023-03-10",
    thumbnail: "https://picsum.photos/id/206/5000/3333.jpg",
  },

];

export default savedGraphs