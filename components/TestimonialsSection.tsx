"use client";

import { motion } from 'framer-motion';
import { Star, Rocket } from 'lucide-react';
import CurvedCarousel from './CurvedCarousel';

const testimonials = [
  {
    name: 'Robert L.',
    role: 'Computer Science',
    content: 'The skill matching is incredible. Found perfect partners for every skill I wanted to learn. The AI recommendations are spot-on and saved me countless hours of searching.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'George V.',
    role: 'Veteran Professional',
    content: 'Been teaching 22 years. Wish I\'d had this platform from day one. Game changer for skill exchange. The quality of matches is exceptional and the community is supportive.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Kevin O.',
    role: 'Middle School Science',
    content: 'From skeptic to evangelist in one semester. Telling everyone about Syncsfer. The platform transformed how I approach professional development and skill building.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=33',
  },
  {
    name: 'Sarah C.',
    role: 'UX Designer',
    content: 'The AI matching capabilities are outstanding. Perfect skill exchanges every time. I\'ve learned so much from talented professionals I never would have met otherwise.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=47',
  },
  {
    name: 'Amanda P.',
    role: 'University Lecturer',
    content: 'I teach 200 students. This platform saved my sanity during skill exchange season. The automated matching and scheduling features are a lifesaver for busy professionals.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=45',
  },
  {
    name: 'Charles W.',
    role: '6th Grade Teacher',
    content: 'Parents noticed the detailed feedback from exchanges. They\'re thrilled with the quality. The platform provides comprehensive insights that help improve teaching methods.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=13',
  },
  {
    name: 'Jessica I.',
    role: 'New Teacher',
    content: 'Setup took 10 minutes. Started exchanging skills same day. That simple. The intuitive interface makes it easy for anyone to get started, regardless of tech experience.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=68',
  },
  {
    name: 'Michael T.',
    role: 'High School Teacher',
    content: 'No more weekend skill hunting. Life-changing platform, seriously. The time I save on finding the right skill exchange partners is invaluable for my work-life balance.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=27',
  },
  {
    name: 'Lisa H.',
    role: 'Freelance Designer',
    content: 'The skill recognition is incredible. Even complex skills get matched perfectly. I\'ve expanded my expertise in ways I never thought possible through this platform.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=32',
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative py-32 overflow-visible bg-transparent">
      <div className="container mx-auto px-6 relative z-10">
        {/* Join the Revolution Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <motion.button
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-gray-900 text-sm font-medium"
            style={{
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              boxShadow: '0 0 20px rgba(139, 92, 246, 0.2)',
            }}
            whileHover={{
              background: 'rgba(139, 92, 246, 0.15)',
              borderColor: 'rgba(139, 92, 246, 0.4)',
              boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)',
            }}
          >
            <Rocket className="w-4 h-4" />
            Join the Revolution
          </motion.button>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            Trusted by <span className="text-purple-600">100,000+</span> Users
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
            From professionals to students, users are transforming how they learn and share skills with Syncsfer.
          </p>
        </motion.div>
      </div>

      {/* Curved Carousel - 2 Rows - Full Width */}
      <div className="w-full space-y-8 py-4" style={{ paddingLeft: '325px', paddingRight: '325px' }}>
          {/* First Row - Left to Right */}
          <CurvedCarousel reverse={false} autoScroll={true} speed={1.2}>
            {testimonials.slice(0, Math.ceil(testimonials.length / 2)).map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-xl p-8 relative overflow-hidden w-[650px]"
                style={{
                  backdropFilter: 'blur(30px) saturate(200%)',
                  WebkitBackdropFilter: 'blur(30px) saturate(200%)',
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.3)',
                }}
                whileHover={{
                  background: 'rgba(255, 255, 255, 0.25)',
                  borderColor: 'rgba(255, 255, 255, 0.4)',
                  scale: 1.05,
                  boxShadow: '0 12px 40px 0 rgba(0, 0, 0, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.4)',
                }}
              >
                {/* Subtle gradient overlay for depth */}
                <div 
                  className="absolute inset-0 rounded-xl pointer-events-none opacity-30"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, transparent 50%)',
                  }}
                />
                {/* Quote */}
                <p className="text-gray-900 leading-relaxed mb-5 text-base relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-5 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-base">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </CurvedCarousel>

          {/* Second Row - Right to Left */}
          <CurvedCarousel reverse={true} autoScroll={true} speed={1.2}>
            {testimonials.slice(Math.ceil(testimonials.length / 2)).map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-xl p-8 relative overflow-hidden w-[650px]"
                style={{
                  backdropFilter: 'blur(30px) saturate(200%)',
                  WebkitBackdropFilter: 'blur(30px) saturate(200%)',
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.3)',
                }}
                whileHover={{
                  background: 'rgba(255, 255, 255, 0.25)',
                  borderColor: 'rgba(255, 255, 255, 0.4)',
                  scale: 1.05,
                  boxShadow: '0 12px 40px 0 rgba(0, 0, 0, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.4)',
                }}
              >
                {/* Subtle gradient overlay for depth */}
                <div 
                  className="absolute inset-0 rounded-xl pointer-events-none opacity-30"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, transparent 50%)',
                  }}
                />
                {/* Quote */}
                <p className="text-gray-900 leading-relaxed mb-5 text-base relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-5 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-base">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </CurvedCarousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
