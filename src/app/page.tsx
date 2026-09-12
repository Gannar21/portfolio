import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Languages from '@/components/Languages';
import CaseStudy from '@/components/CaseStudy';
import GitHubSection from '@/components/GitHubSection';
import Contact from '@/components/Contact';
import RecruiterCTA from '@/components/RecruiterCTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        {/* Certifications and Languages sit below Education, same surface background */}
        <div className="bg-surface pb-20 lg:pb-28 space-y-10">
          <Certifications />
          <Languages />
        </div>
        <CaseStudy />
        <GitHubSection />
        <Contact />
        <RecruiterCTA />
      </main>
      <Footer />
    </>
  );
}
