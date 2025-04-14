export interface SearchItem {
  title: string;
  description: string;
  tags: string[];
}

const searchData: SearchItem[] = [
  {
    title: "Parking Record Management System",
    description: "Built with Node.js, Firebase, and Arduino-based QR scanning.",
    tags: ["Node.js", "Firebase", "Arduino", "QR Code"],
  },
  {
    title: "Job Platform Backend Automation",
    description:
      "Automated workflows, integrated HubSpot API, generated invoices.",
    tags: ["PHP", "CodeIgniter", "MySQL", "HubSpot"],
  },
];

export default searchData;
