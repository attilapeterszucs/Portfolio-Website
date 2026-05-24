import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import hack1 from '@/assets/images/blogs/htf/hack1.png';
import hack2 from '@/assets/images/blogs/htf/hack2.png';

function HtfPost() {
  const { t } = useTranslation();

  return (
    <>
      <section className="pt-32 pb-10 md:pt-48 md:pb-16 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-[10px] font-mono text-muted-foreground mb-4 uppercase tracking-widest">
                <time dateTime="2025-05-20">2025-05-20</time>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[0.95] mb-6 uppercase">
                {t('blog_htf_title')}
              </h1>
              <div className="flex flex-wrap gap-2">
                {['Hackathon', 'Linux', 'DevOps', 'Ansible', 'Podman', 'SELinux', 'IaC'].map(tag => (
                  <Badge key={tag} variant="secondary" className="rounded-none text-[9px] uppercase font-mono py-0 px-2">
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img src={hack1} alt="Hack The Future 2025 event" className="w-full aspect-video object-cover border-2" />
              <img src={hack2} alt="Hack The Future 2025 team working" className="w-full aspect-video object-cover border-2" />
            </div>

            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <p>{t('blog_htf_intro')}</p>
              <p>{t('blog_htf_goal')}</p>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-accent mb-4">{t('blog_htf_stack_label')}</p>
              <ul className="space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="text-accent font-bold mt-0.5">&mdash;</span>
                    <span>{t(`blog_htf_bullet${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">{t('blog_htf_thanks')}</p>
          </div>
        </div>
      </section>
    </>
  );
}

const POSTS: Record<string, () => React.JSX.Element> = {
  'htf-2025': HtfPost,
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const PostComponent = slug ? POSTS[slug] : undefined;

  if (!PostComponent) {
    return <Navigate to="/blog" replace />;
  }

  return <PostComponent />;
}
