export interface Graph {
  title: string;
  dateCreated: string;
  thumbnail: string
}

const savedGraphs = [
  {
    title: "Graph 1",
    dateCreated: "2023-01-01",
    thumbnail: "https://example.com/thumbnail1.jpg",
  },
  {
    title: "Graph 2",
    dateCreated: "2023-02-15",
    thumbnail: "https://example.com/thumbnail2.jpg",
  },
  {
    title: "Graph 3",
    dateCreated: "2023-03-10",
    thumbnail: "https://example.com/thumbnail3.jpg",
  },

];

export default savedGraphs