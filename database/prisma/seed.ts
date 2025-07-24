import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Seed tech stacks
  const techStacks = [
    // Frontend
    { name: 'JavaScript', category: 'FRONTEND' },
    { name: 'TypeScript', category: 'FRONTEND' },
    { name: 'React', category: 'FRONTEND' },
    { name: 'Vue.js', category: 'FRONTEND' },
    { name: 'Angular', category: 'FRONTEND' },
    { name: 'Next.js', category: 'FRONTEND' },
    { name: 'Svelte', category: 'FRONTEND' },
    
    // Backend
    { name: 'Node.js', category: 'BACKEND' },
    { name: 'Python', category: 'BACKEND' },
    { name: 'Java', category: 'BACKEND' },
    { name: 'Go', category: 'BACKEND' },
    { name: 'Rust', category: 'BACKEND' },
    { name: 'C#', category: 'BACKEND' },
    { name: 'PHP', category: 'BACKEND' },
    
    // Mobile
    { name: 'React Native', category: 'MOBILE' },
    { name: 'Flutter', category: 'MOBILE' },
    { name: 'Swift', category: 'MOBILE' },
    { name: 'Kotlin', category: 'MOBILE' },
    
    // DevOps
    { name: 'Docker', category: 'DEVOPS' },
    { name: 'Kubernetes', category: 'DEVOPS' },
    { name: 'AWS', category: 'DEVOPS' },
    { name: 'Terraform', category: 'DEVOPS' },
    { name: 'Jenkins', category: 'DEVOPS' },
    
    // Data Science
    { name: 'TensorFlow', category: 'DATA_SCIENCE' },
    { name: 'PyTorch', category: 'DATA_SCIENCE' },
    { name: 'Pandas', category: 'DATA_SCIENCE' },
    { name: 'NumPy', category: 'DATA_SCIENCE' },
  ];

  await prisma.techStack.createMany({
    data: techStacks,
    skipDuplicates: true,
  });

  // Seed companies
  const companies = [
    // FAANG
    { name: 'Google', domain: 'google.com', tier: 'FAANG', industry: 'Technology' },
    { name: 'Meta', domain: 'meta.com', tier: 'FAANG', industry: 'Social Media' },
    { name: 'Amazon', domain: 'amazon.com', tier: 'FAANG', industry: 'E-commerce' },
    { name: 'Apple', domain: 'apple.com', tier: 'FAANG', industry: 'Technology' },
    { name: 'Netflix', domain: 'netflix.com', tier: 'FAANG', industry: 'Entertainment' },
    
    // Big Tech
    { name: 'Microsoft', domain: 'microsoft.com', tier: 'BIG_TECH', industry: 'Technology' },
    { name: 'Uber', domain: 'uber.com', tier: 'BIG_TECH', industry: 'Transportation' },
    { name: 'Airbnb', domain: 'airbnb.com', tier: 'BIG_TECH', industry: 'Travel' },
    { name: 'Stripe', domain: 'stripe.com', tier: 'BIG_TECH', industry: 'Fintech' },
    { name: 'Shopify', domain: 'shopify.com', tier: 'BIG_TECH', industry: 'E-commerce' },
    
    // Unicorns
    { name: 'OpenAI', domain: 'openai.com', tier: 'UNICORN', industry: 'AI' },
    { name: 'SpaceX', domain: 'spacex.com', tier: 'UNICORN', industry: 'Aerospace' },
    { name: 'Databricks', domain: 'databricks.com', tier: 'UNICORN', industry: 'Data' },
    { name: 'Figma', domain: 'figma.com', tier: 'UNICORN', industry: 'Design' },
    { name: 'Discord', domain: 'discord.com', tier: 'UNICORN', industry: 'Communication' },
  ];

  await prisma.company.createMany({
    data: companies,
    skipDuplicates: true,
  });

  console.log('✅ Database seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
