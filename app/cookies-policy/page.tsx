"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            SYNCSFER CORP.
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            COOKIES POLICY
          </h2>
          <p className="text-gray-600">
            Effective Date: January 6, 2026 | Last Updated: January 6, 2026
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. INTRODUCTION</h2>
              <p className="leading-relaxed mb-4">
                This Cookies Policy explains how Syncsfer Corp. ("Syncsfer," "we," "us," or "our") uses cookies, web beacons, pixel tags, local storage, and similar tracking technologies (collectively, "Cookies") on our platform, website, mobile applications, and related services (the "Platform"). This policy should be read in conjunction with our Privacy Policy and Terms of Service.
              </p>
              <p className="leading-relaxed">
                By continuing to use the Platform, you consent to our use of Cookies as described in this policy. If you do not agree to our use of Cookies, you should adjust your browser settings or discontinue use of the Platform, though some features may not function properly without Cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. WHAT ARE COOKIES?</h2>
              <p className="leading-relaxed mb-4">
                Cookies are small text files stored on your device (computer, smartphone, tablet) when you visit websites or use applications. Cookies enable websites to remember your actions, preferences, and browsing activity, providing a more personalized and efficient user experience. Cookies may be set by the website you are visiting ("first-party cookies") or by third-party services integrated into the website ("third-party cookies").
              </p>
              <p className="leading-relaxed mb-3">
                In addition to traditional cookies, we use similar technologies including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Web Beacons (Pixel Tags):</strong> Small transparent images embedded in web pages or emails that track user interactions;</li>
                <li><strong>Local Storage:</strong> HTML5 local storage that allows websites to store data locally in your browser;</li>
                <li><strong>Software Development Kits (SDKs):</strong> Code libraries embedded in mobile applications that collect usage data and enable functionality;</li>
                <li><strong>Device Fingerprinting:</strong> Techniques that collect device configuration information to create a unique identifier.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. WHY WE USE COOKIES</h2>
              <p className="leading-relaxed mb-3">
                We use Cookies for various purposes to enhance your experience, improve our services, and support our business operations:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential Functionality:</strong> Enable core Platform features, authenticate users, maintain sessions, and provide security;</li>
                <li><strong>Preferences and Settings:</strong> Remember your language preferences, display settings, and personalized configurations;</li>
                <li><strong>Performance and Analytics:</strong> Analyze Platform usage, measure performance, identify errors, and understand user behavior;</li>
                <li><strong>Personalization:</strong> Customize content, recommendations, and matching algorithms based on your activity;</li>
                <li><strong>Advertising and Marketing:</strong> Deliver targeted advertisements, track campaign effectiveness, and measure conversions;</li>
                <li><strong>Security and Fraud Prevention:</strong> Detect suspicious activity, prevent fraud, and protect against security threats.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. TYPES OF COOKIES WE USE</h2>
              <p className="leading-relaxed mb-4">
                We categorize Cookies based on their function and duration. Below is a detailed description of each category:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.1 Strictly Necessary Cookies</h3>
              <p className="leading-relaxed mb-4">
                These Cookies are essential for the Platform to function and cannot be disabled without severely impairing usability. They enable core functionality such as account authentication, session management, security features, and access to secure areas. Without these Cookies, services you have requested cannot be provided. Examples include authentication cookies, session cookies, security tokens, and load balancing cookies.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.2 Functional Cookies</h3>
              <p className="leading-relaxed mb-4">
                These Cookies enable enhanced functionality and personalization. They remember your preferences, settings, and choices to provide a more customized experience. While not strictly necessary, disabling these Cookies may reduce Platform functionality. Examples include language and region preferences, display settings, notification preferences, saved searches, and video player settings.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.3 Performance and Analytics Cookies</h3>
              <p className="leading-relaxed mb-4">
                These Cookies collect information about how users interact with the Platform, including pages visited, features used, time spent, and navigation patterns. This data is typically aggregated and anonymized, helping us understand Platform usage, identify areas for improvement, and optimize performance. We use analytics services such as Google Analytics, Mixpanel, and internal analytics tools. Examples include page view tracking, click tracking, error reporting, feature usage analytics, and traffic source analysis.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.4 Advertising and Marketing Cookies</h3>
              <p className="leading-relaxed mb-4">
                These Cookies are used to deliver relevant advertisements to you based on your interests and browsing behavior. They track your activity across websites and applications to build a profile of your interests, enabling us and our advertising partners to show you targeted ads. They also measure advertising campaign effectiveness and prevent ads from being shown repeatedly. Examples include retargeting pixels, conversion tracking, interest-based advertising, and social media advertising pixels.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.5 Social Media Cookies</h3>
              <p className="leading-relaxed">
                These Cookies are set by social media platforms (Facebook, Twitter, LinkedIn, Instagram) when you interact with social sharing buttons, embedded content, or social login features. They enable you to share Platform content on social networks and may be used by social media companies to track your activity across websites for advertising purposes. Examples include social sharing buttons, social login authentication, and embedded social media content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. COOKIE DURATION</h2>
              <p className="leading-relaxed">
                Cookies are classified by duration into two types: (a) <strong>Session Cookies</strong> are temporary cookies that expire when you close your browser and are used for essential functions like maintaining your login session; and (b) <strong>Persistent Cookies</strong> remain on your device for a specified period or until manually deleted, remembering preferences, login information, and tracking behavior across multiple visits. Persistent cookies typically expire after periods ranging from 30 days to 2 years, depending on their purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. DETAILED COOKIE TABLE</h2>
              <p className="leading-relaxed mb-4">
                Below is a table listing specific cookies used on the Platform, their purposes, categories, and durations:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Cookie Name</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Purpose</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Category</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">_syncsfer_session</td>
                      <td className="border border-gray-300 px-4 py-3">Maintains active user session</td>
                      <td className="border border-gray-300 px-4 py-3">Strictly Necessary</td>
                      <td className="border border-gray-300 px-4 py-3">Session</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">_syncsfer_auth</td>
                      <td className="border border-gray-300 px-4 py-3">User authentication token</td>
                      <td className="border border-gray-300 px-4 py-3">Strictly Necessary</td>
                      <td className="border border-gray-300 px-4 py-3">30 days</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">_syncsfer_csrf</td>
                      <td className="border border-gray-300 px-4 py-3">Security token for CSRF protection</td>
                      <td className="border border-gray-300 px-4 py-3">Strictly Necessary</td>
                      <td className="border border-gray-300 px-4 py-3">Session</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">user_preferences</td>
                      <td className="border border-gray-300 px-4 py-3">Stores language and display settings</td>
                      <td className="border border-gray-300 px-4 py-3">Functional</td>
                      <td className="border border-gray-300 px-4 py-3">1 year</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">_ga</td>
                      <td className="border border-gray-300 px-4 py-3">Google Analytics tracking</td>
                      <td className="border border-gray-300 px-4 py-3">Performance</td>
                      <td className="border border-gray-300 px-4 py-3">2 years</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">_gid</td>
                      <td className="border border-gray-300 px-4 py-3">Google Analytics session tracking</td>
                      <td className="border border-gray-300 px-4 py-3">Performance</td>
                      <td className="border border-gray-300 px-4 py-3">24 hours</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">_fbp</td>
                      <td className="border border-gray-300 px-4 py-3">Facebook Pixel tracking</td>
                      <td className="border border-gray-300 px-4 py-3">Advertising</td>
                      <td className="border border-gray-300 px-4 py-3">3 months</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">_gcl_au</td>
                      <td className="border border-gray-300 px-4 py-3">Google Ads conversion tracking</td>
                      <td className="border border-gray-300 px-4 py-3">Advertising</td>
                      <td className="border border-gray-300 px-4 py-3">3 months</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">li_at</td>
                      <td className="border border-gray-300 px-4 py-3">LinkedIn authentication</td>
                      <td className="border border-gray-300 px-4 py-3">Social Media</td>
                      <td className="border border-gray-300 px-4 py-3">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="leading-relaxed mt-4 text-sm italic">
                Note: This table provides examples of commonly used cookies. The actual cookies on the Platform may vary and be updated periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. THIRD-PARTY COOKIES</h2>
              <p className="leading-relaxed mb-3">
                The Platform uses services provided by third parties, which may set their own cookies on your device. We do not control these third-party cookies and recommend reviewing the privacy policies of third-party service providers:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">https://policies.google.com/privacy</a></li>
                <li><strong>Facebook/Meta:</strong> <a href="https://www.facebook.com/policy/cookies" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">https://www.facebook.com/policy/cookies</a></li>
                <li><strong>Google Ads:</strong> <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">https://policies.google.com/technologies/ads</a></li>
                <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/legal/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">https://www.linkedin.com/legal/cookie-policy</a></li>
                <li><strong>Mixpanel:</strong> <a href="https://mixpanel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">https://mixpanel.com/legal/privacy-policy</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. HOW TO MANAGE AND CONTROL COOKIES</h2>
              <p className="leading-relaxed mb-4">
                You have several options to manage, restrict, or delete cookies:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">8.1 Cookie Consent Manager</h3>
              <p className="leading-relaxed mb-4">
                Upon your first visit to the Platform, you will see a cookie consent banner allowing you to accept or customize your cookie preferences. You can revisit these preferences at any time by accessing the Cookie Settings link in the footer of our website or through your account settings.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">8.2 Browser Settings</h3>
              <p className="leading-relaxed mb-3">
                Most web browsers allow you to manage cookie preferences through browser settings. You can:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Block all cookies;</li>
                <li>Accept only first-party cookies;</li>
                <li>Delete existing cookies;</li>
                <li>Set your browser to notify you when cookies are being set.</li>
              </ul>
              <p className="leading-relaxed mb-3">
                Instructions for popular browsers:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Google Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies and other site data</li>
                <li><strong>Mozilla Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
                <li><strong>Microsoft Edge:</strong> Settings &gt; Privacy, search, and services &gt; Cookies and site permissions</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">8.3 Mobile Device Settings</h3>
              <p className="leading-relaxed mb-4">
                For mobile applications, you can manage tracking preferences through your device settings:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>iOS:</strong> Settings &gt; Privacy &gt; Tracking &gt; Allow Apps to Request to Track</li>
                <li><strong>Android:</strong> Settings &gt; Google &gt; Ads &gt; Opt out of Ads Personalization</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">8.4 Opt-Out of Interest-Based Advertising</h3>
              <p className="leading-relaxed mb-3">
                To opt out of interest-based advertising from participating companies:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Digital Advertising Alliance (DAA):</strong> <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">https://optout.aboutads.info</a></li>
                <li><strong>Network Advertising Initiative (NAI):</strong> <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">https://optout.networkadvertising.org</a></li>
                <li><strong>European Interactive Digital Advertising Alliance (EDAA):</strong> <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">https://www.youronlinechoices.eu</a></li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">8.5 Do Not Track Signals</h3>
              <p className="leading-relaxed mb-4">
                Some browsers support "Do Not Track" (DNT) signals. However, there is no universal standard for how websites should respond to DNT signals. At this time, the Platform does not respond to DNT signals. If a universally accepted standard is established, we will reassess our approach.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">8.6 Impact of Disabling Cookies</h3>
              <p className="leading-relaxed mb-3">
                Please note that blocking or deleting cookies may impact your experience on the Platform. Specifically:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You may not be able to access certain features or services;</li>
                <li>You may need to re-enter login credentials repeatedly;</li>
                <li>Your preferences and settings may not be saved;</li>
                <li>Platform functionality may be limited or degraded.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. CALIFORNIA-SPECIFIC COOKIE DISCLOSURES</h2>
              <p className="leading-relaxed mb-4">
                Under California law, including the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA), California residents have specific rights regarding cookies and tracking technologies.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">9.1 Right to Opt-Out of Sale/Sharing</h3>
              <p className="leading-relaxed mb-4">
                California residents have the right to opt out of the "sale" or "sharing" of personal information as defined by the CCPA/CPRA. While we do not sell personal information for money, certain cookies used for advertising purposes may constitute "sharing" under California law. California residents can opt out by:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Adjusting cookie preferences in our Cookie Consent Manager;</li>
                <li>Clicking the "Do Not Sell or Share My Personal Information" link in our website footer;</li>
                <li>Contacting us at privacy@syncsfer.com.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">9.2 Global Privacy Control (GPC)</h3>
              <p className="leading-relaxed mb-4">
                We recognize and process Global Privacy Control (GPC) signals from browsers or extensions that support this standard. When we detect a GPC signal, we will treat it as a request to opt out of the sale/sharing of personal information for that particular browser or device.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">9.3 Shine the Light Law</h3>
              <p className="leading-relaxed">
                California's "Shine the Light" law (Civil Code Section 1798.83) permits California residents to request information about disclosures of personal information to third parties for direct marketing purposes. We do not disclose personal information to third parties for their direct marketing purposes without your consent. If you have questions, contact privacy@syncsfer.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. UPDATES TO THIS COOKIES POLICY</h2>
              <p className="leading-relaxed">
                We may update this Cookies Policy from time to time to reflect changes in our practices, technologies, legal requirements, or operational needs. We will notify you of material changes by posting the updated policy on the Platform with a revised "Last Updated" date. We encourage you to review this policy periodically. Your continued use of the Platform following updates constitutes acceptance of the revised policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. CONTACT INFORMATION</h2>
              <p className="leading-relaxed mb-4">
                If you have questions, concerns, or requests regarding this Cookies Policy or our use of cookies, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="mb-2">
                  <strong>Privacy Team</strong><br />
                  Syncsfer Corp.<br />
                  <strong>Email:</strong> privacy@syncsfer.com<br />
                  <strong>Website:</strong> https://www.syncsfer.com
                </p>
              </div>
              <p className="leading-relaxed mt-6 font-semibold">
                BY CONTINUING TO USE THE SYNCSFER PLATFORM, YOU CONSENT TO OUR USE OF COOKIES AS DESCRIBED IN THIS POLICY.
              </p>
              <p className="text-sm text-gray-600 mt-4">
                © 2026 Syncsfer Corp. All Rights Reserved.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
