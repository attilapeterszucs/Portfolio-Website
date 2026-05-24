import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Cpu, Zap, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function AboutPage() {
  const { t } = useTranslation();

  const VALUES = [
    {
      icon: <ShieldCheck className="w-6 h-6" aria-hidden="true" />,
      title: t('about_value1_title'),
      description: t('about_value1_desc'),
    },
    {
      icon: <Cpu className="w-6 h-6" aria-hidden="true" />,
      title: t('about_value2_title'),
      description: t('about_value2_desc'),
    },
    {
      icon: <Zap className="w-6 h-6" aria-hidden="true" />,
      title: t('about_value3_title'),
      description: t('about_value3_desc'),
    },
    {
      icon: <Target className="w-6 h-6" aria-hidden="true" />,
      title: t('about_value4_title'),
      description: t('about_value4_desc'),
    },
  ];

  const TIMELINE = [
    { year: '2026', event: t('about_tl5') },
    { year: '2023', event: t('about_tl4') },
    { year: '2022', event: t('about_tl3') },
    { year: '2020', event: t('about_tl2') },
    { year: '2017', event: t('about_tl1') },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] border-accent text-accent px-3 py-1">
                {t('about_label')}
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8 uppercase">
                {t('about_title')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium">
                {t('about_intro')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-secondary/30 border-y">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-2">{t('about_story_label')}</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">{t('about_story_title')}</h2>
            </div>
            <div className="md:w-2/3 space-y-6">
              <p className="text-muted-foreground leading-relaxed">{t('about_story_p1')}</p>
              <p className="text-muted-foreground leading-relaxed">{t('about_story_p2')}</p>
              <p className="text-muted-foreground leading-relaxed">{t('about_story_p3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-2">{t('about_values_label')}</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">{t('about_values_title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full rounded-none border-2 bg-background hover:border-accent transition-colors group">
                  <CardHeader>
                    <div className="text-accent mb-2 opacity-60 group-hover:opacity-100 transition-opacity">{value.icon}</div>
                    <CardTitle className="text-xl font-bold uppercase tracking-tight">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full industrial-grid" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-2">{t('about_tl_label')}</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">{t('about_tl_title')}</h2>
          </div>

          <div className="space-y-12 max-w-2xl">
            {TIMELINE.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 relative"
              >
                {index !== TIMELINE.length - 1 && (
                  <div className="absolute left-3 top-10 bottom-[-48px] w-[2px] bg-primary-foreground/20" />
                )}
                <div className="w-6 h-6 rounded-full bg-accent flex-shrink-0 mt-1 z-10" />
                <div>
                  <div className="text-[10px] font-mono text-primary-foreground/50 mb-1 uppercase tracking-widest">{item.year}</div>
                  <p className="text-primary-foreground/80 leading-relaxed">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
