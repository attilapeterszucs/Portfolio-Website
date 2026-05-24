import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import {
  Cpu,
  Zap,
  ShieldCheck,
  Linkedin,
  Mail,
  Settings,
  Github,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const SKILLS = {
  'Cyber Security': [
    'Penetration Testing', 'Offensive Security', 'DFIR', 'SOC Monitoring',
    'ISO 27001 / NIST', 'GRC', 'Threat Detection', 'Network Security',
    'Cloud Security', 'OT/ICS Security'
  ],
  'Industrial': [
    'PLC Programming', 'Robot Programming', 'Pneumatics', 'Hydraulics',
    'Electro-Pneumatics', 'Eplan P8', 'Electrical Design', 'SCADA/HMI'
  ],
  'Computer Science': [
    'TypeScript/React', 'Node.js', 'Python', 'Scripting', 'Systems Admin',
    'Network Admin', 'Git/CI/CD', 'Docker', 'SQL/NoSQL'
  ]
};

export default function HomePage() {
  const { t } = useTranslation();

  const EXPERIENCE = [
    {
      title: t('exp1_title'),
      company: t('exp1_comp'),
      period: t('exp1_period'),
      dateStart: '2023-01-01',
      dateEnd: 'Present',
      description: t('exp1_desc'),
      technologies: ['Offensive Security', 'PLC Security', 'Penetration Testing', 'OT Security'],
      icon: <ShieldCheck className="w-5 h-5" aria-hidden="true" />
    },
    {
      title: t('exp2_title'),
      company: t('exp2_comp'),
      period: t('exp2_period'),
      dateStart: '2022-01-01',
      dateEnd: '2023-01-01',
      description: t('exp2_desc'),
      technologies: ['Semiconductor', 'Electronics', 'Troubleshooting', 'Precision Assembly'],
      icon: <Settings className="w-5 h-5" aria-hidden="true" />
    },
    {
      title: t('exp3_title'),
      company: t('exp3_comp'),
      period: t('exp3_period'),
      dateStart: '2020-06-01',
      dateEnd: '2020-07-01',
      description: t('exp3_desc'),
      technologies: ['Electrical Equipment', 'Industrial Systems', 'Maintenance'],
      icon: <Zap className="w-5 h-5" aria-hidden="true" />
    }
  ];

  const PROJECTS = [
    {
      title: 'Aqua-Topia',
      description: t('proj1_desc'),
      tags: ['Shell', 'Automation', 'Infrastructure'],
      link: 'https://github.com/attilapeterszucs/Aqua-Topia'
    },
    {
      title: 'Haltless',
      description: t('proj2_desc'),
      tags: ['Python', 'React', 'PostgreSQL', 'Industrial IoT'],
      live: 'https://www.haltless.io'
    },
    {
      title: 'Secure-LogiX',
      description: t('proj3_desc'),
      tags: ['TypeScript', 'Electron.js', 'Security'],
      link: 'https://github.com/attilapeterszucs/Secure-LogiX'
    },
    {
      title: 'TraceFlow',
      description: t('proj4_desc'),
      tags: ['Rust', 'TUI', 'Networking', 'Security Audit'],
      link: 'https://github.com/attilapeterszucs/TraceFlow'
    }
  ];

  const EDUCATION = [
    {
      degree: t('edu1_deg'),
      institution: t('edu1_inst'),
      period: t('edu1_period'),
      dateStart: '2023-09-01',
      dateEnd: 'Present',
      description: t('edu1_desc'),
      icon: <ShieldCheck className="w-5 h-5" aria-hidden="true" />
    },
    {
      degree: t('edu2_deg'),
      institution: t('edu2_inst'),
      period: t('edu2_period'),
      dateStart: '2021-09-01',
      dateEnd: '2023-06-01',
      description: t('edu2_desc'),
      icon: <Settings className="w-5 h-5" aria-hidden="true" />
    },
    {
      degree: t('edu3_deg'),
      institution: t('edu3_inst'),
      period: t('edu3_period'),
      dateStart: '2016-09-01',
      dateEnd: '2020-06-01',
      description: t('edu3_desc'),
      icon: <Cpu className="w-5 h-5" aria-hidden="true" />
    }
  ];

  const LANGUAGES = [
    { name: t('lang_en'), level: t('lang1_level') },
    { name: t('lang_hu'), level: t('lang2_level') },
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="overview" className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] border-accent text-accent px-3 py-1">
                {t('hero_status')}
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 uppercase">
                {t('hero_title1')} <span className="text-accent">{t('hero_title2')}</span> {t('hero_title3')} <br className="hidden sm:block" />
                {t('hero_title4')} <span className="blueprint-line">{t('hero_title5')}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-medium">
                {t('hero_desc')}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-accent transition-colors font-mono uppercase tracking-widest text-xs h-12 px-8 rounded-none" render={
                  <a href="#skills" aria-label="View Skills">
                    {t('hero_btn_specs')}
                  </a>
                } />
                <Button variant="outline" className="w-full sm:w-auto border-2 font-mono uppercase tracking-widest text-xs h-12 px-8 rounded-none" render={
                  <a href="https://www.linkedin.com/in/attilapeterszucs/" target="_blank" rel="noopener noreferrer" aria-label="Connect with Attila on LinkedIn">
                    {t('hero_btn_linkedin')}
                  </a>
                } />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-secondary/30 border-y">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-2">{t('exp_label')}</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">{t('exp_title')}</h2>
            </div>
            <div className="font-mono text-[10px] text-muted-foreground text-right hidden md:block">
              LOG_LEVEL: VERBOSE<br />
              TIMESTAMP: {new Date().toISOString()}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full rounded-none border-2 bg-background hover:border-accent transition-colors group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity text-accent">
                    {exp.icon}
                  </div>
                  <CardHeader>
                    <div className="text-[10px] font-mono text-muted-foreground mb-2 uppercase tracking-widest">
                      <time dateTime={exp.dateStart}>{exp.dateStart.slice(0, 7)}</time>
                      {' - '}
                      {exp.dateEnd !== 'Present' ? <time dateTime={exp.dateEnd}>{exp.dateEnd.slice(0, 7)}</time> : <span>{exp.dateEnd}</span>}
                      <span className="ml-2 text-primary/50">({exp.period})</span>
                    </div>
                    <CardTitle className="text-xl font-bold uppercase tracking-tight">{exp.title}</CardTitle>
                    <CardDescription className="font-mono text-xs font-bold text-primary">{exp.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2" aria-label="Technologies used">
                      {exp.technologies.map(tech => (
                        <Badge key={tech} variant="secondary" data-technology={tech} className="rounded-none text-[9px] uppercase font-mono py-0 px-2">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-2">{t('proj_label')}</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">{t('proj_title')}</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className="h-full rounded-none border-2 bg-background hover:border-accent transition-colors group relative flex flex-col cursor-pointer"
                  onClick={() => {
                    const url = project.live || project.link;
                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                  }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl font-bold uppercase tracking-tight flex items-center justify-between">
                      {project.title}
                      <div className="flex items-center gap-1">
                        {project.live && (
                          <Button variant="ghost" size="icon" className="w-8 h-8 rounded-none hover:bg-accent hover:text-accent-foreground transition-colors z-10 relative" render={
                            <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`View live site for ${project.title}`} onClick={(e) => e.stopPropagation()}>
                              <ExternalLink className="w-4 h-4" aria-hidden="true" />
                            </a>
                          } />
                        )}
                        {project.link && (
                          <Button variant="ghost" size="icon" className="w-8 h-8 rounded-none hover:bg-accent hover:text-accent-foreground transition-colors z-10 relative" render={
                            <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`} onClick={(e) => e.stopPropagation()}>
                              <Github className="w-4 h-4" aria-hidden="true" />
                            </a>
                          } />
                        )}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="rounded-none text-[9px] uppercase font-mono py-0 px-2">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="border-2 font-mono uppercase tracking-widest text-xs h-12 px-8 rounded-none group" render={
              <a href="https://github.com/attilapeterszucs" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2 group-hover:animate-pulse" aria-hidden="true" />
                {t('proj_btn_all')}
              </a>
            } />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-2">{t('skills_label')}</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">{t('skills_title')}</h2>
            <p className="text-muted-foreground">
              {t('skills_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(SKILLS).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full rounded-none border-2 bg-background hover:border-accent transition-colors">
                  <CardHeader className="border-b-2 bg-secondary/30 pb-4">
                    <CardTitle className="text-xl font-bold uppercase tracking-tight">{category}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="rounded-none text-[10px] sm:text-xs font-mono py-1 px-3 border-accent/50 hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full industrial-grid" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-2">{t('edu_label')}</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">{t('edu_title')}</h2>
              <p className="text-primary-foreground/60 leading-relaxed">
                {t('edu_desc')}
              </p>
            </div>

            <div className="md:w-2/3 space-y-12">
              {EDUCATION.map((edu, index) => (
                <div key={edu.degree} className="flex gap-6 relative">
                  {index !== EDUCATION.length - 1 && (
                    <div className="absolute left-3 top-10 bottom-[-48px] w-[2px] bg-primary-foreground/20" />
                  )}
                  <div className="w-6 h-6 rounded-full bg-accent flex-shrink-0 mt-1 z-10" />
                  <div>
                    <div className="text-[10px] font-mono text-primary-foreground/50 mb-1 uppercase tracking-widest">{edu.period}</div>
                    <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{edu.degree}</h3>
                    <p className="font-mono text-xs text-accent mb-4 font-bold">{edu.institution}</p>
                    <p className="text-primary-foreground/70 text-sm max-w-xl leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-24 border-t">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-2">{t('lang_label')}</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">{t('lang_title')}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {LANGUAGES.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-secondary/20 border-2 border-transparent hover:border-accent transition-all"
              >
                <div className="text-sm font-bold uppercase tracking-tight mb-1">{lang.name}</div>
                <div className="text-[10px] font-mono text-muted-foreground uppercase">{lang.level}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Colophon Section */}
      <section className="py-24 bg-secondary/30 border-y">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-2">{t('colophon_label')}</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">{t('colophon_title')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('colophon_desc')}
              </p>
            </div>

            <div className="md:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: t('colophon_type_label'), value: t('colophon_type') },
                  { label: t('colophon_framework_label'), value: t('colophon_framework') },
                  { label: t('colophon_ui_label'), value: t('colophon_ui') },
                  { label: t('colophon_hosting_label'), value: t('colophon_hosting') },
                  { label: t('colophon_domain_label'), value: t('colophon_domain') },
                  { label: t('colophon_source_label'), value: t('colophon_source'), href: 'https://github.com/attilapeterszucs/Portfolio-Website' },
                ].map((item, index) => {
                  const content = (
                    <>
                      <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-2">{item.label}</div>
                      <div className="text-sm font-bold uppercase tracking-tight flex items-center gap-2">
                        {item.value}
                        {item.href && <ExternalLink className="w-3 h-3 text-accent" aria-hidden="true" />}
                      </div>
                    </>
                  );
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="border-2 border-transparent hover:border-accent bg-background transition-all"
                    >
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="block p-6">
                          {content}
                        </a>
                      ) : (
                        <div className="p-6">{content}</div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
