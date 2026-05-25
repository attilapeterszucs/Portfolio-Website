import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import hack1 from '@/assets/images/blogs/htf/hack1.png';
import hug1 from '@/assets/images/blogs/huggingface/hug1.png';
import internshipEvent from '@/assets/images/blogs/internship-event/internship-event.png';
import tnm1 from '@/assets/images/blogs/first-tech-and-meet/firsttnm1.png';
import ddos1 from '@/assets/images/blogs/national-anti-ddos/national-anti-ddos1.png';
import flutter1 from '@/assets/images/blogs/flutter/flutter1.png';
import nato1 from '@/assets/images/blogs/nato-cyber-defense/nato-cyber-defense1.png';
import era1 from '@/assets/images/blogs/new-era-in-technology/new-era1.png';
import home1 from '@/assets/images/blogs/home-away-from-home/home1.png';

const BLOG_POSTS = [
  {
    slug: 'htf-2025',
    image: hack1,
    titleKey: 'blog_htf_title',
    date: '2025-05',
    tags: ['Hackathon', 'Linux', 'DevOps'],
  },
  {
    slug: 'huggingface-local-llms',
    image: hug1,
    titleKey: 'blog_hf_title',
    date: '2025-11',
    tags: ['AI', 'Local LLM', 'Hugging Face'],
  },
  {
    slug: 'internship-market-2025',
    image: internshipEvent,
    titleKey: 'blog_ie_title',
    date: '2025-10',
    tags: ['HOWEST', 'Internship', 'Networking'],
  },
  {
    slug: 'first-tech-and-meet-2025',
    image: tnm1,
    titleKey: 'blog_tnm_title',
    date: '2025-10',
    tags: ['Cyber Security', 'OT/IT', 'NIS2'],
  },
  {
    slug: 'threat-intelligence-ccb',
    image: ddos1,
    titleKey: 'blog_ti_title',
    date: '2025-10',
    tags: ['Threat Intelligence', 'CCB', 'Cyber Security'],
  },
  {
    slug: 'flutter-cross-platform',
    image: flutter1,
    titleKey: 'blog_fl_title',
    date: '2025-11',
    tags: ['Flutter', 'Dart', 'Cross-Platform'],
  },
  {
    slug: 'nato-cyber-defense',
    image: nato1,
    titleKey: 'blog_nato_title',
    date: '2025-12',
    tags: ['NATO', 'Cyber Defense', 'Zero Trust'],
  },
  {
    slug: 'new-era-ai-llms',
    image: era1,
    titleKey: 'blog_ai_title',
    date: '2025-12',
    tags: ['AI', 'LLMs', 'DeepSeek'],
  },
  {
    slug: 'flanders-international-talent',
    image: home1,
    titleKey: 'blog_home_title',
    date: '2025-12',
    tags: ['Flanders', 'Career Growth', 'Innovation'],
  },
];

export default function BlogPage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] border-accent text-accent px-3 py-1">
                {t('blog_label')}
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8 uppercase">
                {t('blog_title')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium">
                {t('blog_desc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, index) => (
              <motion.a
                key={post.slug}
                href={`/blog/${post.slug}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group block border-2 border-transparent hover:border-accent transition-all bg-background overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={t(post.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[10px] font-mono text-muted-foreground mb-2 uppercase tracking-widest">
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  <h2 className="text-lg font-bold uppercase tracking-tight group-hover:text-accent transition-colors">
                    {t(post.titleKey)}
                  </h2>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="rounded-none text-[9px] uppercase font-mono py-0 px-2">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
