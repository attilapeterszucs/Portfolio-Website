import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Code2, 
  Linkedin, 
  Mail, 
  Menu,
  Terminal,
  Layers,
  Settings,
  ArrowUp,
  Github,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';

const NAV_LINKS = [
  { name: 'Overview', href: '#overview' },
  { name: 'Experience', href: '#experience' },
  { name: 'Technical Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
];

const EXPERIENCE = [
  {
    title: 'Internship Cyber Defense Factory',
    company: 'Cyber3Lab, HOWEST Brugge',
    period: 'Recent',
    description: 'Military-founded research. Performed offensive and defensive security research on industrial equipment (PLC) and offensive security/penetration testing on websites.',
    tags: ['Offensive Security', 'PLC Security', 'Penetration Testing', 'OT Security'],
    icon: <ShieldCheck className="w-5 h-5" aria-hidden="true" />
  },
  {
    title: 'Electrical Technician',
    company: 'Semilab Zrt.',
    period: 'Jan 2022 - Jan 2023',
    description: 'Assembled high-precision semiconductor equipment, troubleshot and repaired products, and gained valuable experience in electronics and cutting-edge technology.',
    tags: ['Semiconductor', 'Electronics', 'Troubleshooting', 'Precision Assembly'],
    icon: <Settings className="w-5 h-5" aria-hidden="true" />
  },
  {
    title: 'Internship',
    company: 'Green Lab Kft.',
    period: 'June 2020 - July 2020',
    description: 'Gained extensive experience with electrical equipment and industrial systems in a professional environment.',
    tags: ['Electrical Equipment', 'Industrial Systems', 'Maintenance'],
    icon: <Zap className="w-5 h-5" aria-hidden="true" />
  }
];

const EDUCATION = [
  {
    degree: 'BSc in Applied Computer Science - Major Cyber Security',
    institution: 'University of Applied Sciences West Flanders (HOWEST)',
    period: 'Sept 2023 - Current',
    description: 'Relevant Coursework: Web & Network Penetration Testing, Digital Forensics, Security Risk Management, Secure Development, Cybercrime.',
    icon: <ShieldCheck className="w-5 h-5" aria-hidden="true" />
  },
  {
    degree: 'Automation Technician: Industrial Automation',
    institution: 'BGSZC Mechatronika Vocational High School',
    period: 'Jan 2017 - Jan 2022',
    description: 'Comprehensive training in industrial automation systems, electronics, and mechanical systems.',
    icon: <Settings className="w-5 h-5" aria-hidden="true" />
  },
  {
    degree: 'PLC Programmer: Automation Technology',
    institution: 'BGSZC Mechatronika Technikum',
    period: 'Jan 2020 - Jan 2021',
    description: 'Specialized certification in PLC programming and automation logic.',
    icon: <Cpu className="w-5 h-5" aria-hidden="true" />
  }
];

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

const LANGUAGES = [
  { name: 'English', level: 'Upper Intermediate (B2)' },
  { name: 'Hungarian', level: 'Native' },
  { name: 'Japanese', level: 'Beginner' },
  { name: 'Korean', level: 'Beginner' },
  { name: 'Arabic', level: 'Beginner (Actively Learning)' }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background selection:bg-accent selection:text-accent-foreground">
      {/* Industrial Grid Overlay */}
      <div className="fixed inset-0 industrial-grid opacity-[0.03] pointer-events-none z-0" />

      {/* Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-mono font-bold text-xs">AS</span>
            </div>
            <span className="font-mono font-bold tracking-tighter text-lg uppercase hidden sm:block">Attila Peter Szucs</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs font-mono font-medium uppercase tracking-widest hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden sm:flex font-mono text-[10px] uppercase tracking-widest border-2" render={
              <a href="https://www.linkedin.com/in/attilapeterszucs/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-3 h-3 mr-2" aria-hidden="true" />
                Connect
              </a>
            } />
            
            <Sheet>
              <SheetTrigger nativeButton={true} render={
                <Button variant="ghost" size="icon" aria-label="Open menu" className="md:hidden">
                  <Menu className="w-5 h-5" aria-hidden="true" />
                </Button>
              } />
              <SheetContent side="right" className="w-[300px] bg-background border-l-2 p-6 flex flex-col">
                <SheetHeader className="mb-6 mt-4">
                  <SheetTitle className="font-mono font-bold uppercase tracking-widest text-left text-sm text-muted-foreground">
                    Navigation
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4">
                  {NAV_LINKS.map((link) => (
                    <SheetClose key={link.name} asChild render={
                      <Button variant="ghost" className="justify-start font-mono text-lg font-bold uppercase tracking-tighter h-14 w-full" render={
                        <a href={link.href}>
                          {link.name}
                        </a>
                      } />
                    } />
                  ))}
                </div>
                <Separator className="my-4" />
                <div className="flex flex-col gap-4">
                  <p className="text-[10px] font-mono uppercase text-muted-foreground tracking-widest px-4">Contact</p>
                  <div className="flex flex-col gap-2">
                    <SheetClose asChild render={
                      <Button variant="ghost" className="justify-start font-mono text-xs w-full h-12 flex items-center gap-2" render={
                        <a href="mailto:attilaszucs2002@gmail.com">
                          <Mail className="w-4 h-4" aria-hidden="true" />
                          attilaszucs2002@gmail.com
                        </a>
                      } />
                    } />
                    <SheetClose asChild render={
                      <Button variant="ghost" className="justify-start font-mono text-xs w-full h-12 flex items-center gap-2" render={
                        <a href="https://github.com/attilapeterszucs" target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" aria-hidden="true" />
                          GitHub
                        </a>
                      } />
                    } />
                    <SheetClose asChild render={
                      <Button variant="ghost" className="justify-start font-mono text-xs w-full h-12 flex items-center gap-2" render={
                        <a href="https://be.linkedin.com/in/attilapeterszucs" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-4 h-4" aria-hidden="true" />
                          LinkedIn
                        </a>
                      } />
                    } />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="relative z-10">
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
                  System Status: Operational
                </Badge>
                <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 uppercase">
                  Cyber <span className="text-accent">Security</span> & <br className="hidden sm:block" />
                  Industrial <span className="blueprint-line">Automation</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-medium">
                  Cyber security student and former automation technician with hands-on experience in OT security, penetration testing, and industrial equipment maintenance. Focused on bridging the gap between physical electrical systems and digital security.
                </p>
                
                <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                  <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-accent transition-colors font-mono uppercase tracking-widest text-xs h-12 px-8 rounded-none" render={
                    <a href="#skills">
                      View Technical Specs
                    </a>
                  } />
                  <Button variant="outline" className="w-full sm:w-auto border-2 font-mono uppercase tracking-widest text-xs h-12 px-8 rounded-none" render={
                    <a href="https://www.linkedin.com/in/attilapeterszucs/" target="_blank" rel="noopener noreferrer">
                      LinkedIn Profile
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
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-2">Professional Path</p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">Work Experience</h2>
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
                      <div className="text-[10px] font-mono text-muted-foreground mb-2 uppercase tracking-widest">{exp.period}</div>
                      <CardTitle className="text-xl font-bold uppercase tracking-tight">{exp.title}</CardTitle>
                      <CardDescription className="font-mono text-xs font-bold text-primary">{exp.company}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map(tag => (
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
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-2">Technical Stack</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">Core Competencies</h2>
              <p className="text-muted-foreground">
                Combining a foundation in electrical and automation engineering with applied computer science. Focused on securing industrial control systems and enterprise networks.
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
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full industrial-grid" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row gap-16">
              <div className="md:w-1/3">
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-2">Academic Background</p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">Education</h2>
                <p className="text-primary-foreground/60 leading-relaxed">
                  Continuous learning is the core of my professional philosophy. From electrical foundations to advanced cyber security.
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
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-2">Global Communication</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">Languages</h2>
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

        {/* Footer / Contact */}
        <footer className="py-20 border-t">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold tracking-tighter uppercase mb-6">Let's Connect</h2>
              <p className="text-muted-foreground mb-8 max-w-md">
                Open for collaborations in Industrial Automation, Software Engineering, and Cyber Security projects.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <Button className="w-full sm:w-auto rounded-none font-mono uppercase tracking-widest text-xs h-12 px-8 flex items-center justify-center gap-2" render={
                  <a href="mailto:attilaszucs2002@gmail.com">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    Email Me
                  </a>
                } />
                <Button variant="outline" className="w-full sm:w-auto border-2 rounded-none font-mono uppercase tracking-widest text-xs h-12 px-8 flex items-center justify-center gap-2" render={
                  <a href="https://www.linkedin.com/in/attilapeterszucs/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" aria-hidden="true" />
                    LinkedIn
                  </a>
                } />
              </div>
            </div>
            
            <Separator className="my-16" />
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-mono font-bold text-[10px]">AS</span>
                </div>
                <span className="font-mono font-bold tracking-tighter text-sm uppercase">Attila Peter Szucs</span>
              </div>
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                © {new Date().getFullYear()} Built with React & Shadcn UI
              </p>
            </div>
          </div>
        </footer>
      </main>

      {/* Back to Top Button */}
      {isScrolled && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-50"
        >
                <Button
                  size="icon"
                  aria-label="Back to top"
                  className="rounded-none w-12 h-12 border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-lg"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <ArrowUp className="w-5 h-5" aria-hidden="true" />
                </Button>
        </motion.div>
      )}
    </div>
  );
}
