export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  initials: string;
}

export interface CommodityProduct {
  id: string;
  name: string;
  category: 'grains' | 'pulses' | 'oilseeds' | 'spices';
  description: string;
  specifications: {
    moisture: string;
    purity: string;
    foreignMatter: string;
    damagedGrains?: string;
    admixture?: string;
  };
  features: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface CareerOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  requirements: string[];
}

export interface InquiryFormInput {
  name: string;
  email: string;
  phone: string;
  company: string;
  commodity: string;
  quantity: string;
  message: string;
}
