export interface RecentActivity {
  timestamp: string;
  user: string;
  activityType: string;
  activityDetails: ActivityDetail
}

interface ActivityDetail {
  activityName: string;
  description: string;
  link: string;
}

const recentActivityData:RecentActivity[] = [
  {
    timestamp: "2024-01-01T08:00:00Z",
    user: "Alice Johnson",
    activityType: "Graph",
    activityDetails: {
      activityName: "Sales Performance",
      description: "Analyzing sales trends for Q4 2023",
      link: "/graphs/sales-performance"
    }
  },
  {
    timestamp: "2024-01-02T10:30:00Z",
    user: "Alice Johnson",
    activityType: "Collection",
    activityDetails: {
      activityName: "Customer Segmentation",
      description: "New customer data for segmentation analysis",
      link: "/collections/customer-segmentation"
    }
  },
  {
    timestamp: "2024-01-03T14:15:00Z",
    user: "Alice Johnson",
    activityType: "Query",
    activityDetails: {
      activityName: "Top Products",
      description: "Identifying top-selling products",
      link: "/queries/top-products"
    }
  },
  // {
  //   timestamp: "2024-01-04T16:45:00Z",
  //   user: "Alice Johnson",
  //   activityType: "Graph",
  //   activityDetails: {
  //     activityName: "Website Traffic",
  //     description: "Monitoring website traffic in real-time",
  //     link: "/graphs/website-traffic"
  //   }
  // }
]
export default recentActivityData