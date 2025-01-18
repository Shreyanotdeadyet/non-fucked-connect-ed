export interface Blog {
  id: string;
  title: string;
  intro: string;
  author: string;
  readTime: string;
  image: string;
  category: 'Careers' | 'Essay Tips' | 'College Readiness';
  content?: string;
}

export const BLOGS: Blog[] = [
  {
    id: '1',
    title: '4 Reasons Why ChatGPT Wont Replace College Guidance Counselors',
    intro: 'While AI technology is advancing rapidly, there are fundamental aspects of college guidance that require human expertise and emotional intelligence.',
    author: 'Girija Kele',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000',
    category: 'College Readiness'
  },
  {
    id: '2',
    title: 'The Connect-Ed Essay Series: Tips for Effective Brainstorming',
    intro: 'Learn effective techniques to generate and organize your ideas for compelling college application essays.',
    author: 'Girija Kele',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?auto=format&fit=crop&q=80&w=1000',
    category: 'Essay Tips'
  },
  {
    id: '3',
    title: 'Why Seek Careers Guidance in High School?: A Must-Read for Students and Parents',
    intro: 'Understanding the importance of early career guidance and its impact on future success.',
    author: 'Girija Kele',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000',
    category: 'Careers'
  },
  {
    id: '4',
    title: "THE DO'S AND DON'TS OF CAREER GUIDANCE",
    intro: 'Essential guidelines for making the most of your career guidance sessions and avoiding common pitfalls.',
    author: 'Girija Kele',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
    category: 'Careers'
  },
  {
    id: '5',
    title: 'Still struggling with your Common App Essay? Here are 5 tips to help you nail it down!',
    intro: 'Practical strategies to overcome writers block and create a compelling Common Application essay.',
    author: 'Girija Kele',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1000',
    category: 'Essay Tips'
  },
  {
    id: '6',
    title: '4 Tips on How to Present your Extracurricular Activities for a Winning Impression',
    intro: 'Learn how to effectively showcase your extracurricular activities in college applications.',
    author: 'Girija Kele',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000',
    category: 'College Readiness'
  },
  {
    id: '7',
    title: 'Overwhelmed? Learn the Art of Prioritization',
    intro: 'Strategies for managing time and tasks effectively during the college preparation process.',
    author: 'Girija Kele',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000',
    category: 'College Readiness'
  },
  {
    id: '8',
    title: 'How to Learn Better',
    intro: 'Discover effective learning techniques and study strategies for academic success.',
    author: 'Girija Kele',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1000',
    category: 'College Readiness'
  },
  {
    id: '9',
    title: "5 Lessons I've Learned as an Educational Counselor",
    intro: 'Insights and experiences from years of helping students navigate their educational journey.',
    author: 'Girija Kele',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&q=80&w=1000',
    category: 'Careers'
  },
  {
    id: '10',
    title: 'Parents can facilitate College-Readiness for their College-bound Teens. Heres how.',
    intro: 'A guide for parents on supporting their teenagers through the college preparation process.',
    author: 'Girija Kele',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1491308056676-205b7c9a7dc1?auto=format&fit=crop&q=80&w=1000',
    category: 'College Readiness'
  },
  {
    id: '11',
    title: 'THE POWER OF PRAISE',
    intro: 'Understanding the impact of positive reinforcement in career development and academic success.',
    author: 'Girija Kele',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1000',
    category: 'Careers'
  },
  {
    id: '12',
    title: 'The Art of Conversation: Exploring Careers for Those Who Love to Talk',
    intro: 'Career opportunities for individuals with strong communication and interpersonal skills.',
    author: 'Girija Kele',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1000',
    category: 'Careers'
  },
  {
    id: '13',
    title: 'Unveiling the Hidden Gems: Lesser-Known Engineering Majors',
    intro: 'Exploring unique and promising engineering specializations that students might overlook.',
    author: 'Girija Kele',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1000',
    category: 'Careers'
  },
  {
    id: '14',
    title: 'Navigating the Mathematical Niche: Unique Careers in Math',
    intro: 'Discovering diverse career opportunities for mathematics enthusiasts beyond traditional paths.',
    author: 'Girija Kele',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=1000',
    category: 'Careers'
  },
  {
    id: '15',
    title: "Connect-Ed's Educator Meet: Practical Insights Into Transforming Career Mentorship For Our Students",
    intro: 'Key takeaways from our educator meeting on improving career guidance for students.',
    author: 'Girija Kele',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000',
    category: 'Careers'
  },
  {
    id: '16',
    title: "A Parent's Guide to Asking The Right Questions During a School Visit",
    intro: 'Essential questions and considerations for parents when visiting potential schools.',
    author: 'Girija Kele',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1000',
    category: 'College Readiness'
  }
];