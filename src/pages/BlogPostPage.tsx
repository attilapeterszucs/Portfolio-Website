import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import hack1 from '@/assets/images/blogs/htf/hack1.png';
import hack2 from '@/assets/images/blogs/htf/hack2.png';
import hug1 from '@/assets/images/blogs/huggingface/hug1.png';
import hug2 from '@/assets/images/blogs/huggingface/hug2.png';
import internshipEvent from '@/assets/images/blogs/internship-event/internship-event.png';
import tnm1 from '@/assets/images/blogs/first-tech-and-meet/firsttnm1.png';
import tnm2 from '@/assets/images/blogs/first-tech-and-meet/firsttnm2.png';
import tnm3 from '@/assets/images/blogs/first-tech-and-meet/firsttnm3.png';
import ddos1 from '@/assets/images/blogs/national-anti-ddos/national-anti-ddos1.png';
import ddos2 from '@/assets/images/blogs/national-anti-ddos/national-anti-ddos2.png';
import ddos3 from '@/assets/images/blogs/national-anti-ddos/national-anti-ddos3.png';
import ddos4 from '@/assets/images/blogs/national-anti-ddos/national-anti-ddos4.png';
import flutter1 from '@/assets/images/blogs/flutter/flutter1.png';
import flutter2 from '@/assets/images/blogs/flutter/flutter2.png';
import flutter3 from '@/assets/images/blogs/flutter/flutter3.png';
import nato1 from '@/assets/images/blogs/nato-cyber-defense/nato-cyber-defense1.png';
import nato2 from '@/assets/images/blogs/nato-cyber-defense/nato-cyber-defense2.png';
import nato3 from '@/assets/images/blogs/nato-cyber-defense/nato-cyber-defense3.png';
import era1 from '@/assets/images/blogs/new-era-in-technology/new-era1.png';
import era2 from '@/assets/images/blogs/new-era-in-technology/new-era2.png';
import era3 from '@/assets/images/blogs/new-era-in-technology/new-era3.png';
import home1 from '@/assets/images/blogs/home-away-from-home/home1.png';
import home2 from '@/assets/images/blogs/home-away-from-home/home2.png';
import home3 from '@/assets/images/blogs/home-away-from-home/home3.png';

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
                <time dateTime="2025-05">2025-05</time>
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

function HuggingFacePost() {
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
                <time dateTime="2025-11">November 2025</time>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[0.95] mb-6 uppercase">
                {t('blog_hf_title')}
              </h1>
              <div className="flex flex-wrap gap-2">
                {['AI', 'Local LLM', 'Hugging Face', 'Open Source', 'Machine Learning'].map(tag => (
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
              <img src={hug1} alt="Hugging Face talk at HOWEST" className="w-full aspect-video object-cover border-2" />
              <img src={hug2} alt="Open-Source LLM presentation" className="w-full aspect-video object-cover border-2" />
            </div>

            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <p>{t('blog_hf_p1')}</p>
              <p>{t('blog_hf_p2')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InternshipEventPost() {
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
                <time dateTime="2025-10">October 2025</time>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[0.95] mb-6 uppercase">
                {t('blog_ie_title')}
              </h1>
              <div className="flex flex-wrap gap-2">
                {['HOWEST', 'Internship', 'Networking', 'IT'].map(tag => (
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
            <img src={internshipEvent} alt="HOWEST Internship Market" className="w-full aspect-video object-cover border-2" />

            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <p>{t('blog_ie_p1')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TechAndMeetPost() {
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
                <time dateTime="2025-10">October 2025</time>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[0.95] mb-6 uppercase">
                {t('blog_tnm_title')}
              </h1>
              <div className="flex flex-wrap gap-2">
                {['Cyber Security', 'OT/IT', 'NIS2', 'IEC 62443', 'Tech&Meet'].map(tag => (
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <img src={tnm1} alt="Tech&Meet OT/IT security talk" className="w-full aspect-video object-cover border-2" />
              <img src={tnm2} alt="Dieter Sarrazyn presenting" className="w-full aspect-video object-cover border-2" />
              <img src={tnm3} alt="Tech&Meet audience" className="w-full aspect-video object-cover border-2" />
            </div>

            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <p>{t('blog_tnm_p1')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ThreatIntelPost() {
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
                <time dateTime="2025-10">October 2025</time>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[0.95] mb-6 uppercase">
                {t('blog_ti_title')}
              </h1>
              <div className="flex flex-wrap gap-2">
                {['Cyber Security', 'Threat Intelligence', 'CCB', 'Tech&Meet', 'Networking'].map(tag => (
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
            <div className="grid grid-cols-2 gap-4">
              <img src={ddos1} alt="Threat Intelligence Tech&Meet" className="w-full aspect-video object-cover border-2" />
              <img src={ddos2} alt="CCB presentation on threat tactics" className="w-full aspect-video object-cover border-2" />
              <img src={ddos3} alt="Tech&Meet session attendees" className="w-full aspect-video object-cover border-2" />
              <img src={ddos4} alt="Threat Intelligence discussion" className="w-full aspect-video object-cover border-2" />
            </div>

            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <p>{t('blog_ti_p1')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FlutterPost() {
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
                <time dateTime="2025-11">November 2025</time>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[0.95] mb-6 uppercase">
                {t('blog_fl_title')}
              </h1>
              <div className="flex flex-wrap gap-2">
                {['Flutter', 'Dart', 'Cross-Platform', 'Google', 'Mobile Dev'].map(tag => (
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <img src={flutter1} alt="Flutter meetup at HOWEST" className="w-full aspect-video object-cover border-2" />
              <img src={flutter2} alt="Flutter demo session" className="w-full aspect-video object-cover border-2" />
              <img src={flutter3} alt="Flutter cross-platform presentation" className="w-full aspect-video object-cover border-2" />
            </div>

            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <p>{t('blog_fl_p1')}</p>
              <p>{t('blog_fl_p2')}</p>
              <p>{t('blog_fl_p3')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function NatoCyberPost() {
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
                <time dateTime="2025-12">December 2025</time>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[0.95] mb-6 uppercase">
                {t('blog_nato_title')}
              </h1>
              <div className="flex flex-wrap gap-2">
                {['NATO', 'Cyber Defense', 'Zero Trust', 'Resilience', 'Tech&Meet'].map(tag => (
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <img src={nato1} alt="NATO cyber defense presentation" className="w-full aspect-video object-cover border-2" />
              <img src={nato2} alt="Martin de Pauw presenting" className="w-full aspect-video object-cover border-2" />
              <img src={nato3} alt="NATO Tech&Meet session" className="w-full aspect-video object-cover border-2" />
            </div>

            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <p>{t('blog_nato_p1')}</p>
              <p>{t('blog_nato_p2')}</p>
              <p>{t('blog_nato_p3')}</p>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-accent mb-4">{t('blog_nato_principles_label')}</p>
              <ul className="space-y-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="text-accent font-bold mt-0.5">&mdash;</span>
                    <span>{t(`blog_nato_bullet${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">{t('blog_nato_closing')}</p>
          </div>
        </div>
      </section>
    </>
  );
}

function NewEraAIPost() {
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
                <time dateTime="2025-12">December 2025</time>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[0.95] mb-6 uppercase">
                {t('blog_ai_title')}
              </h1>
              <div className="flex flex-wrap gap-2">
                {['AI', 'LLMs', 'DeepSeek', 'Global AI', 'AI Strategy'].map(tag => (
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <img src={era1} alt="AI and LLM presentation" className="w-full aspect-video object-cover border-2" />
              <img src={era2} alt="LLM timeline overview" className="w-full aspect-video object-cover border-2" />
              <img src={era3} alt="Global AI landscape" className="w-full aspect-video object-cover border-2" />
            </div>

            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <p>{t('blog_ai_p1')}</p>
              <p>{t('blog_ai_p2')}</p>
              <p>{t('blog_ai_p3')}</p>
              <p>{t('blog_ai_p4')}</p>
              <p>{t('blog_ai_p5')}</p>
              <p>{t('blog_ai_p6')}</p>
              <p>{t('blog_ai_p7')}</p>
              <p>{t('blog_ai_p8')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function HomeAwayPost() {
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
                <time dateTime="2025-12">December 2025</time>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[0.95] mb-6 uppercase">
                {t('blog_home_title')}
              </h1>
              <div className="flex flex-wrap gap-2">
                {['Flanders', 'International Talent', 'Career Growth', 'Innovation', 'Expat Life'].map(tag => (
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <img src={home1} alt="International House West Flanders workshop" className="w-full aspect-video object-cover border-2" />
              <img src={home2} alt="Flanders as a business hub" className="w-full aspect-video object-cover border-2" />
              <img src={home3} alt="International talent session" className="w-full aspect-video object-cover border-2" />
            </div>

            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <p>{t('blog_home_p1')}</p>
              <p>{t('blog_home_p2')}</p>
              <p>{t('blog_home_p3')}</p>
              <p>{t('blog_home_p4')}</p>
              <p>{t('blog_home_p5')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const POSTS: Record<string, () => React.JSX.Element> = {
  'htf-2025': HtfPost,
  'huggingface-local-llms': HuggingFacePost,
  'internship-market-2025': InternshipEventPost,
  'first-tech-and-meet-2025': TechAndMeetPost,
  'threat-intelligence-ccb': ThreatIntelPost,
  'flutter-cross-platform': FlutterPost,
  'nato-cyber-defense': NatoCyberPost,
  'new-era-ai-llms': NewEraAIPost,
  'flanders-international-talent': HomeAwayPost,
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const PostComponent = slug ? POSTS[slug] : undefined;

  if (!PostComponent) {
    return <Navigate to="/blog" replace />;
  }

  return <PostComponent />;
}
