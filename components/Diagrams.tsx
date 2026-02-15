/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, Award, Truck, ShieldCheck, Phone, Mail, MapPin, Send } from 'lucide-react';

// --- PRODUCTS SECTION ---

interface ProductCardProps {
    title: string;
    description: string;
    image: string;
    delay: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ title, description, image, delay }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100"
        >
            <div className="h-80 overflow-hidden relative">
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors z-10"></div>
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
            </div>
            <div className="p-8">
                <h3 className="font-serif text-2xl text-stone-900 mb-3">{title}</h3>
                <div className="w-12 h-0.5 bg-textile-gold mb-4"></div>
                <p className="text-stone-600 mb-6 leading-relaxed">{description}</p>
                <button className="flex items-center gap-2 text-sm font-bold tracking-widest text-textile-gold uppercase hover:text-stone-900 transition-colors">
                    Inquire Now <ArrowRight size={16} />
                </button>
            </div>
        </motion.div>
    );
};

// --- WHY CHOOSE US SECTION ---

export const FeaturesGrid: React.FC = () => {
    const features = [
        { icon: <Award size={24} />, title: "Premium Quality", desc: "Finest raw materials sourced for superior fabric longevity." },
        { icon: <ShieldCheck size={24} />, title: "Trusted Supplier", desc: "Over a decade of reliability in the textile industry." },
        { icon: <Clock size={24} />, title: "Timely Delivery", desc: "Efficient logistics network ensuring on-time bulk shipments." },
        { icon: <Truck size={24} />, title: "Wholesale Pricing", desc: "Competitive rates for bulk orders and retailers." },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 bg-white rounded-lg border border-stone-100 shadow-sm hover:border-textile-gold/30 hover:shadow-md transition-all text-center md:text-left"
                >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-textile-gold/10 text-textile-gold rounded-full mb-4">
                        {f.icon}
                    </div>
                    <h4 className="font-serif text-lg font-bold text-stone-900 mb-2">{f.title}</h4>
                    <p className="text-sm text-stone-600 leading-relaxed">{f.desc}</p>
                </motion.div>
            ))}
        </div>
    );
};

// --- CONTACT FORM ---

export const ContactForm: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

    return (
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border-t-4 border-textile-gold">
            <h3 className="font-serif text-2xl text-stone-900 mb-6">Send an Inquiry</h3>
            
            {status === 'success' ? (
                <div className="flex flex-col items-center justify-center h-64 text-center animate-fade-in-up">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-stone-800 mb-2">Message Sent!</h4>
                    <p className="text-stone-500">Thank you for contacting Ramkrishna Textile. We will get back to you shortly.</p>
                    <button onClick={() => setStatus('idle')} className="mt-6 text-sm text-textile-gold underline">Send another message</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Full Name</label>
                            <input required type="text" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-textile-gold/20 focus:border-textile-gold transition-all" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Email Address</label>
                            <input required type="email" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-textile-gold/20 focus:border-textile-gold transition-all" placeholder="john@company.com" />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Phone Number</label>
                            <input type="tel" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-textile-gold/20 focus:border-textile-gold transition-all" placeholder="+91 98765 43210" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Product Interest</label>
                            <select className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-textile-gold/20 focus:border-textile-gold transition-all">
                                <option>Wholesale Sarees</option>
                                <option>Cotton Fabrics</option>
                                <option>General Inquiry</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Message</label>
                        <textarea required rows={4} className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-textile-gold/20 focus:border-textile-gold transition-all" placeholder="Tell us about your requirements..."></textarea>
                    </div>

                    <button 
                        type="submit" 
                        disabled={status === 'submitting'}
                        className="w-full py-4 bg-stone-900 text-white rounded-lg font-bold tracking-widest uppercase hover:bg-stone-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                        {!status && <Send size={18} />}
                    </button>
                </form>
            )}
        </div>
    );
};

// --- EMPTY EXPORTS TO SATISFY IMPORTS IF NEEDED ---
export const SurfaceCodeDiagram = () => null;
export const TransformerDecoderDiagram = () => null;
export const PerformanceMetricDiagram = () => null;