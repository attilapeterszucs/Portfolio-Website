import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const BLOG_POSTS = [
  {
    slug: 'securing-industrial-plcs',
    date: '2025-05-10',
    tags: ['OT Security', 'PLC', 'ICS'],
    titleKey: 'blog_post1_title',
    excerptKey: 'blog_post1_excerpt',
  },
  {
    slug: 'from-electrician-to-pentester',
    date: '2025-04-22',
    tags: ['Career', 'Cyber Security'],
    titleKey: 'blog_post2_title',
    excerptKey: 'blog_post2_excerpt',
  },
  {
    slug: 'building-a-network-traffic-tui',
    date: '2025-03-15',
    tags: ['Rust', 'Networking', 'TUI'],
    titleKey: 'blog_post3_title',
    excerptKey: 'blog_post3_excerpt',
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

      {/* Posts */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="space-y-8 max-w-3xl">
            {BLOG_POSTS.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="rounded-none border-2 bg-background hover:border-accent transition-colors group">
                  <CardHeader>
                    <div className="text-[10px] font-mono text-muted-foreground mb-2 uppercase tracking-widest">
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                    <CardTitle className="text-2xl font-bold uppercase tracking-tight group-hover:text-accent transition-colors">
                      {t(post.titleKey)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {t(post.excerptKey)}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="rounded-none text-[9px] uppercase font-mono py-0 px-2">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-accent flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {t('blog_coming_soon')}
                        <ArrowRight className="w-3 h-3" aria-hidden="true" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
