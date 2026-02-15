/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene } from './components/QuantumScene'; // Now repurposed as Textile Scene
import { ProductCard, FeaturesGrid, ContactForm } from './components/Diagrams'; // Repurposed business components
import { Menu, X, ArrowRight, MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

// Add type declaration for custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-id'?: string;
      };
    }
  }
}

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-stone-800 font-sans selection:bg-textile-gold selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-textile-gold rounded-sm flex items-center justify-center text-white font-serif font-bold text-2xl shadow-sm">R</div>
            <div className="flex flex-col">
                <span className={`font-serif font-bold text-lg tracking-wide leading-none transition-colors ${scrolled ? 'text-stone-900' : 'text-stone-900'}`}>
                RAMKRISHNA
                </span>
                <span className="text-[10px] tracking-[0.2em] text-textile-gold font-bold uppercase">Textile</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest text-stone-600">
            <a href="#about" onClick={scrollToSection('about')} className="hover:text-textile-gold transition-colors uppercase">About</a>
            <a href="#products" onClick={scrollToSection('products')} className="hover:text-textile-gold transition-colors uppercase">Products</a>
            <a href="#why-us" onClick={scrollToSection('why-us')} className="hover:text-textile-gold transition-colors uppercase">Why Us</a>
            <a 
              href="#contact" 
              onClick={scrollToSection('contact')} 
              className="px-6 py-2.5 bg-stone-900 text-white rounded-sm hover:bg-textile-gold transition-colors shadow-sm uppercase text-xs font-bold tracking-widest"
            >
              Contact Us
            </a>
          </div>

          <button className="md:hidden text-stone-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F9F8F4] flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in">
            <a href="#about" onClick={scrollToSection('about')} className="hover:text-textile-gold transition-colors">About Us</a>
            <a href="#products" onClick={scrollToSection('products')} className="hover:text-textile-gold transition-colors">Our Collection</a>
            <a href="#why-us" onClick={scrollToSection('why-us')} className="hover:text-textile-gold transition-colors">Why Choose Us</a>
            <a href="#contact" onClick={scrollToSection('contact')} className="text-textile-gold font-bold">Contact</a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <HeroScene />
        
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#F9F8F4]/20 to-[#F9F8F4]" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 border border-textile-gold/50 text-stone-600 text-xs tracking-[0.25em] uppercase font-bold rounded-full bg-white/40 backdrop-blur-sm">
            Est. 2014 • Surat, India
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-8 text-stone-900 drop-shadow-sm">
            Crafting Tradition <br />
            <span className="italic font-normal text-textile-gold block mt-2">Into Modern Elegance</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-600 font-light leading-relaxed mb-10">
            Premium quality textiles crafted with a blend of traditional weaving techniques and modern innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href="#products" onClick={scrollToSection('products')} className="px-8 py-4 bg-stone-900 text-white rounded-sm hover:bg-stone-800 transition-all shadow-lg text-sm font-bold tracking-widest uppercase">
                View Collections
             </a>
             <a href="#contact" onClick={scrollToSection('contact')} className="px-8 py-4 bg-transparent border border-stone-400 text-stone-900 rounded-sm hover:border-textile-gold hover:text-textile-gold transition-all text-sm font-bold tracking-widest uppercase">
                Wholesale Inquiry
             </a>
          </div>
        </div>
      </header>

      <main>
        {/* About Section */}
        <section id="about" className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-textile-gold/10 rounded-full blur-3xl"></div>
                <img 
                    src="https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?q=80&w=800&auto=format&fit=crop" 
                    alt="Textile Loom" 
                    className="rounded-xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl rounded-lg max-w-xs border-l-4 border-textile-gold z-20 hidden md:block">
                    <p className="font-serif italic text-stone-800 text-lg">"Quality is not an act, it is a habit."</p>
                </div>
             </div>
             <div>
                <div className="inline-block mb-4 text-xs font-bold tracking-widest text-textile-gold uppercase">Our Story</div>
                <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">A Legacy of Quality</h2>
                <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                    Founded in 2014, <strong className="text-stone-900">Ramkrishna Textile</strong> started as a family-owned vision to bring superior quality fabrics to the Indian market. Located in the textile heart of India, Surat, we have grown into a trusted manufacturer and supplier.
                </p>
                <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                    Our mission is simple: To deliver premium textile fabrics with superior quality and craftsmanship. We bridge the gap between age-old weaving traditions and contemporary fashion needs.
                </p>
                <div className="flex gap-12 border-t border-stone-100 pt-8">
                    <div>
                        <div className="text-3xl font-serif text-textile-gold font-bold mb-1">10+</div>
                        <div className="text-xs uppercase tracking-wider text-stone-500">Years Experience</div>
                    </div>
                    <div>
                        <div className="text-3xl font-serif text-textile-gold font-bold mb-1">100%</div>
                        <div className="text-xs uppercase tracking-wider text-stone-500">Quality Cotton</div>
                    </div>
                </div>
             </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-24 bg-[#F5F4F0]">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-textile-gold uppercase">Our Collections</div>
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">Exquisite Fabrics</h2>
                    <div className="w-24 h-1 bg-textile-gold mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <ProductCard 
                        title="Traditional Sarees"
                        description="Our premium collection of traditional sarees features intricate designs and superior craftsmanship. Perfect for weddings, festivals, and retail collections."
                        image="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop"
                        delay={0.1}
                    />
                    <ProductCard 
                        title="Pure Cotton Fabrics"
                        description="Experience the comfort of 100% pure cotton. Breathable, durable, and soft – our cotton textiles are ideal for garments, home textiles, and manufacturing."
                        image="https://images.unsplash.com/photo-1596566799434-60be850f2496?q=80&w=1000&auto=format&fit=crop"
                        delay={0.3}
                    />
                </div>
            </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-us" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl text-stone-900 mb-4">Why Choose Ramkrishna?</h2>
                    <p className="text-stone-500 max-w-xl mx-auto">We are committed to excellence in every yard of fabric we produce.</p>
                 </div>
                 <FeaturesGrid />
            </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-stone-900 text-stone-300 relative">
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/fabric-of-squares.png')]"></div>
           
           <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <div className="inline-block mb-4 px-3 py-1 border border-textile-gold text-textile-gold text-xs tracking-widest uppercase font-bold rounded-full">
                            Get In Touch
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">Let's Weave a Partnership</h2>
                        <p className="text-lg text-stone-400 mb-10 leading-relaxed">
                            Whether you are looking for bulk orders, wholesale partnerships, or custom textile solutions, our team is here to assist you.
                        </p>
                        
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-stone-800 rounded-lg text-textile-gold">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-1">Visit Us</h4>
                                    <p className="text-stone-400">D-45/6, Road No. 19,<br/>Sachin Apparel Park SEZ,<br/>Surat, Gujarat, India</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-stone-800 rounded-lg text-textile-gold">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-1">Call Us</h4>
                                    <p className="text-stone-400">+91 98765 43210</p>
                                    <p className="text-xs text-stone-500 mt-1">Mon-Sat, 9am - 7pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-stone-800 rounded-lg text-textile-gold">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-1">Email Us</h4>
                                    <p className="text-stone-400">info@ramkrishnatextile.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-12">
                             <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-textile-gold hover:text-white transition-colors"><Instagram size={20} /></a>
                             <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-textile-gold hover:text-white transition-colors"><Facebook size={20} /></a>
                             <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-textile-gold hover:text-white transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div className="relative">
                        <ContactForm />
                    </div>
                </div>
           </div>
        </section>

      </main>

      <footer className="bg-stone-950 text-stone-500 py-12 border-t border-stone-900">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <div className="text-white font-serif font-bold text-2xl mb-2 tracking-wide">RAMKRISHNA</div>
                    <p className="text-xs uppercase tracking-widest opacity-60">Textile Manufacturing & Supply</p>
                </div>
                
                <div className="flex gap-8 text-sm">
                    <a href="#about" className="hover:text-white transition-colors">About</a>
                    <a href="#products" className="hover:text-white transition-colors">Products</a>
                    <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                </div>
            </div>
            <div className="text-center md:text-left mt-8 text-xs opacity-40">
                &copy; {new Date().getFullYear()} Ramkrishna Textile. All rights reserved.
            </div>
        </div>
      </footer>
      {/* ElevenLabs Conversational AI Widget */}
      <elevenlabs-convai agent-id="agent_9301khfngr77ewrrm0p6mr607trd"></elevenlabs-convai>
    </div>
  );
};

export default App;