interface Department {
  id: number;
  name: string;
  subDepartments: string[];
}

const departmentData: Department[] = [
  {
    id: 1,
    name: 'Agriculture & Fishing',
    subDepartments: [
      'Crop Farming',
      'Livestock Farming',
      'Fishing',
      'Forestry',
      'Horticulture',
      'Poultry Farming',
      'Aquaculture',
      'Viticulture',
      'Beekeeping',
      'Sustainable Agriculture',
    ],
  },
  {
    id: 2,
    name: 'Business Services',
    subDepartments: [
      'Accounting & Bookkeeping',
      'Consulting Services',
      'Marketing & Advertising',
      'Human Resources',
      'Legal Services',
      'Information Technology',
      'Financial Services',
      'Business Coaching',
      'Virtual Assistant Services',
      'Market Research',
    ],
  },
  {
    id: 3,
    name: 'Industry',
    subDepartments: [
      'Manufacturing',
      'Construction',
      'Automotive Industry',
      'Electronics & Electrical',
      'Chemical Industry',
      'Textile Industry',
      'Aerospace Industry',
      'Pharmaceutical Industry',
      'Food Processing',
      'Steel & Metalworking',
    ],
  },
  {
    id: 4,
    name: 'Healthcare',
    subDepartments: [
      'General Medicine',
      'Dentistry',
      'Pediatrics',
      'Orthopedics',
      'Cardiology',
      'Obstetrics & Gynecology',
      'Neurology',
      'Psychiatry',
      'Ophthalmology',
      'Dermatology',
    ],
  },
];

export default departmentData;
