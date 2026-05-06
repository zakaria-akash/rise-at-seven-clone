// images.js
// Centralized image URLs extracted from the reference homepage.
// All images are served from rise-atseven.transforms.svdcdn.com with responsive srcsets.
// This data file allows components to remain decoupled from hardcoded image paths.

export const heroImage = {
  src: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.14.49.png?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=a51fa90e59f4de7a51395aaed8e58428",
  alt: "Rise at Seven Agency Team",
};

// Client logos - featured brands and partners
// Used in the Clients section to showcase trusted businesses
export const clientLogos = [
  {
    src: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.14.49.png?w=400&h=400&q=80&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626",
    alt: "Client Logo 1",
    name: "Client 1",
  },
  {
    src: "https://rise-atseven.transforms.svdcdn.com/production/images/WhatsApp-Image-2025-06-03-at-08.34.50.jpeg?w=400&h=400&q=80&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1766399268",
    alt: "Client Logo 2",
    name: "Client 2",
  },
  {
    src: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A6875.jpg?w=400&h=400&q=80&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1774455015",
    alt: "Client Logo 3",
    name: "Client 3",
  },
  {
    src: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.14.49.png?w=400&h=400&q=80&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626",
    alt: "Client Logo 4",
    name: "Client 4",
  },
];

// Featured work / case studies - responsive image URLs
// Displayed in the FeaturedWork section to showcase recent client successes
export const featuredWork = [
  {
    id: "work-1",
    title: "Digital PR Strategy & Execution",
    slug: "digital-pr-case-study",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A6875.jpg?w=800&h=800&q=80&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1774455015",
    category: "Digital PR",
  },
  {
    id: "work-2",
    title: "SEO-First Content Marketing",
    slug: "seo-content-case-study",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.14.49.png?w=800&h=800&q=80&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626",
    category: "SEO",
  },
  {
    id: "work-3",
    title: "Social Media Growth Campaign",
    slug: "social-growth-case-study",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/WhatsApp-Image-2025-06-03-at-08.34.50.jpeg?w=800&h=800&q=80&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1766399268",
    category: "Social Media",
  },
  {
    id: "work-4",
    title: "Enterprise Analytics & Insights",
    slug: "analytics-case-study",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A6875.jpg?w=800&h=800&q=80&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1774455015",
    category: "Analytics",
  },
  {
    id: "work-5",
    title: "International Expansion PR",
    slug: "international-pr-case-study",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.14.49.png?w=800&h=800&q=80&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626",
    category: "PR",
  },
  {
    id: "work-6",
    title: "B2B Marketing Transformation",
    slug: "b2b-transformation-case-study",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/WhatsApp-Image-2025-06-03-at-08.34.50.jpeg?w=800&h=800&q=80&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1766399268",
    category: "Strategy",
  },
];
