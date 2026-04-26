import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import PopularCourses from './components/PopularCourses';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <PopularCourses />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

