// app/page.tsx
import Hero from './(marketing)/Hero';
import About from './(marketing)/About';
import Courses from './(marketing)/Courses';
import Testimonials from './components/Testimonials';
import Benefits from './components/Benefits';
import CallToAction from './components/CallToAction';
import ButtonExamples from '@/components/ui/UI-example';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <Testimonials />
      <Benefits />
      <CallToAction />
      <ButtonExamples />{' '}
    </>
  );
}
