import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import {
  Linkedin,
  Mail,
  Menu,
  ArrowUp,
  Github,
  Globe,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import BlogPage from '@/pages/BlogPage';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const isHome = location.pathname === '/';

  const HOME_NAV_LINKS = [
    { name: t('nav_overview'), href: '#overview' },
    { name: t('nav_experience'), href: '#experience' },
    { name: t('nav_projects'), href: '#projects' },
    { name: t('nav_skills'), href: '#skills' },
    { name: t('nav_education'), href: '#education' },
  ];

  const PAGE_NAV_LINKS = [
    { name: t('nav_about'), to: '/about' },
    { name: t('nav_blog'), to: '/blog' },
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-accent selection:text-accent-foreground">
      {/* Industrial Grid Overlay */}
      <div className="fixed inset-0 industrial-grid opacity-[0.03] pointer-events-none z-0" />

      {/* Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-mono font-bold tracking-tighter text-lg uppercase">Attila Peter Szucs</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {isHome && HOME_NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono font-medium uppercase tracking-widest hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            {!isHome && (
              <Link
                to="/"
                className="text-xs font-mono font-medium uppercase tracking-widest hover:text-accent transition-colors"
              >
                {t('nav_home')}
              </Link>
            )}
            {PAGE_NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`text-xs font-mono font-medium uppercase tracking-widest hover:text-accent transition-colors ${location.pathname === link.to ? 'text-accent' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative group hidden sm:flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="hidden sm:flex font-mono text-[10px] uppercase tracking-widest gap-2 rounded-none px-2 border-b-2 border-transparent hover:border-accent hover:bg-transparent">
                    <Globe className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
                    {i18n.language.toUpperCase()}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="rounded-none border-2 bg-background font-mono text-xs tracking-widest uppercase">
                  <DropdownMenuItem onClick={() => changeLanguage('en')} className="cursor-pointer rounded-none focus:bg-accent focus:text-accent-foreground">EN</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLanguage('hu')} className="cursor-pointer rounded-none focus:bg-accent focus:text-accent-foreground">HU</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLanguage('ja')} className="cursor-pointer rounded-none focus:bg-accent focus:text-accent-foreground">JA</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLanguage('ko')} className="cursor-pointer rounded-none focus:bg-accent focus:text-accent-foreground">KO</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLanguage('ar')} className="cursor-pointer rounded-none focus:bg-accent focus:text-accent-foreground">AR</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <Button variant="outline" size="sm" className="hidden sm:flex font-mono text-[10px] uppercase tracking-widest border-2" render={
              <a href="https://www.linkedin.com/in/attilapeterszucs/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-3 h-3 mr-2" aria-hidden="true" />
                {t('nav_connect')}
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
                    {t('nav_navigation')}
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4">
                  {!isHome && (
                    <SheetClose asChild render={
                      <Button variant="ghost" className="justify-start font-mono text-lg font-bold uppercase tracking-tighter h-14 w-full" render={
                        <Link to="/">{t('nav_home')}</Link>
                      } />
                    } />
                  )}
                  {isHome && HOME_NAV_LINKS.map((link) => (
                    <SheetClose key={link.name} asChild render={
                      <Button variant="ghost" className="justify-start font-mono text-lg font-bold uppercase tracking-tighter h-14 w-full" render={
                        <a href={link.href}>
                          {link.name}
                        </a>
                      } />
                    } />
                  ))}
                  <Separator className="my-1" />
                  {PAGE_NAV_LINKS.map((link) => (
                    <SheetClose key={link.name} asChild render={
                      <Button variant="ghost" className="justify-start font-mono text-lg font-bold uppercase tracking-tighter h-14 w-full" render={
                        <Link to={link.to}>{link.name}</Link>
                      } />
                    } />
                  ))}
                  <Separator className="my-2" />
                  <div className="flex flex-col gap-2 px-2">
                    <p className="text-[10px] font-mono uppercase text-muted-foreground tracking-widest px-2 mb-2">Language</p>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant={i18n.language === 'en' ? 'secondary' : 'ghost'} size="sm" aria-label="Switch to English" className="justify-start font-mono text-xs uppercase rounded-none" onClick={() => changeLanguage('en')}>EN</Button>
                      <Button variant={i18n.language === 'hu' ? 'secondary' : 'ghost'} size="sm" aria-label="Switch to Hungarian" className="justify-start font-mono text-xs uppercase rounded-none" onClick={() => changeLanguage('hu')}>HU</Button>
                      <Button variant={i18n.language === 'ja' ? 'secondary' : 'ghost'} size="sm" aria-label="Switch to Japanese" className="justify-start font-mono text-xs uppercase rounded-none" onClick={() => changeLanguage('ja')}>JA</Button>
                      <Button variant={i18n.language === 'ko' ? 'secondary' : 'ghost'} size="sm" aria-label="Switch to Korean" className="justify-start font-mono text-xs uppercase rounded-none" onClick={() => changeLanguage('ko')}>KO</Button>
                      <Button variant={i18n.language === 'ar' ? 'secondary' : 'ghost'} size="sm" aria-label="Switch to Arabic" className="justify-start font-mono text-xs uppercase rounded-none" onClick={() => changeLanguage('ar')}>AR</Button>
                    </div>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="flex flex-col gap-4">
                  <p className="text-[10px] font-mono uppercase text-muted-foreground tracking-widest px-4">{t('nav_contact')}</p>
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tighter uppercase mb-6">{t('footer_title')}</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              {t('footer_desc')}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Button className="w-full sm:w-auto rounded-none font-mono uppercase tracking-widest text-xs h-12 px-8 flex items-center justify-center gap-2" render={
                <a href="mailto:attilaszucs2002@gmail.com">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  {t('footer_email')}
                </a>
              } />
              <Button variant="outline" className="w-full sm:w-auto border-2 rounded-none font-mono uppercase tracking-widest text-xs h-12 px-8 flex items-center justify-center gap-2" render={
                <a href="https://github.com/attilapeterszucs" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" aria-hidden="true" />
                  {t('footer_github')}
                </a>
              } />
              <Button variant="outline" className="w-full sm:w-auto border-2 rounded-none font-mono uppercase tracking-widest text-xs h-12 px-8 flex items-center justify-center gap-2" render={
                <a href="https://www.linkedin.com/in/attilapeterszucs/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
                  {t('footer_linkedin')}
                </a>
              } />
            </div>
          </div>

          <Separator className="my-16" />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-2">
              <Link to="/" className="font-mono font-bold tracking-tighter text-sm uppercase">Attila Peter Szucs</Link>
            </div>
            <nav className="flex items-center gap-6">
              <Link to="/about" className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors">
                {t('nav_about')}
              </Link>
              <Link to="/blog" className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors">
                {t('nav_blog')}
              </Link>
            </nav>
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              &copy; {new Date().getFullYear()} {t('footer_copy')}
            </p>
          </div>
        </div>
      </footer>

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
