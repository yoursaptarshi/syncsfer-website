"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  Sparkles, 
  BookOpen, 
  FileText, 
  Users, 
  HelpCircle, 
  Building,
  GraduationCap
} from 'lucide-react';

const footerLinks = {
  product: [
    { label: 'Features', href: '#features', icon: Sparkles },
    { label: 'How It Works', href: '#how-it-works', icon: BookOpen },
  ],
  resources: [
    { label: 'Blog', href: '#', icon: BookOpen },
    { label: 'Contact Us', href: '#', icon: Mail },
    { label: 'About Us', href: '#', icon: Building },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy', icon: FileText },
    { label: 'Terms of Service', href: '/terms-and-conditions', icon: FileText },
    { label: 'Cookies Policy', href: '/cookies-policy', icon: FileText },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
];

const Footer = () => {
  const [logoError, setLogoError] = useState(false);
  const [logoSrc, setLogoSrc] = useState('/logo.png');

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <motion.a
              href="#"
              className="flex items-center mb-6"
              whileHover={{ scale: 1.02 }}
            >
              {!logoError ? (
                <Image 
                  src={logoSrc} 
                  alt="Syncsfer Logo" 
                  width={200}
                  height={64}
                  className="h-16 w-auto object-contain"
                  priority
                  onError={() => {
                    // Try alternative formats
                    if (logoSrc.includes('/logo.png')) {
                      setLogoSrc('/logo.svg');
                    } else if (logoSrc.includes('/logo.svg')) {
                      setLogoSrc('/logo.jpg');
                    } else if (logoSrc.includes('/logo.jpg')) {
                      setLogoSrc('/logo.webp');
                    } else {
                      setLogoError(true);
                    }
                  }}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">Syncsfer</span>
                </div>
              )}
            </motion.a>
            <p className="text-gray-600 mb-6 max-w-sm text-sm">
              Revolutionizing AI-powered skill exchange and learning.
            </p>
            <a
              href="mailto:support@syncsfer.com"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Mail className="w-4 h-4 text-purple-400" />
              <span className="text-sm">support@syncsfer.com</span>
            </a>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-bold mb-4 text-gray-900">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    <link.icon className="w-4 h-4 text-purple-400" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-bold mb-4 text-gray-900">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    <link.icon className="w-4 h-4 text-purple-400" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-bold mb-4 text-gray-900">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    <link.icon className="w-4 h-4 text-purple-400" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected Column */}
          <div>
            <h3 className="font-bold mb-4 text-gray-900">Stay Connected</h3>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm text-center">
            © {new Date().getFullYear()} Syncsfer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
