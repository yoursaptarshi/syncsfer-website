"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
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
            PRIVACY POLICY
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. INTRODUCTION AND SCOPE</h2>
              <p className="leading-relaxed mb-4">
                Syncsfer Corp. ("Syncsfer," "we," "us," or "our") is committed to protecting your privacy and ensuring transparency regarding how we collect, use, disclose, and safeguard your personal information. This Privacy Policy describes our practices concerning information collected through our platform, website, mobile applications, and related services (collectively, the "Platform" or "Services").
              </p>
              <p className="leading-relaxed mb-4">
                This Privacy Policy applies to all users of the Platform, including those who browse, register accounts, exchange services, or interact with the Platform in any capacity. By accessing or using the Platform, you acknowledge that you have read, understood, and consent to the practices described in this Privacy Policy.
              </p>
              <p className="leading-relaxed">
                <strong>CALIFORNIA RESIDENTS:</strong> This Privacy Policy includes specific disclosures required by the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA). California residents have additional rights described in Section 12 below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. INFORMATION WE COLLECT</h2>
              <p className="leading-relaxed mb-4">
                We collect information that you provide directly, information collected automatically through your use of the Platform, and information from third-party sources.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.1 Personal Information You Provide</h3>
              <p className="leading-relaxed mb-3">
                Information you voluntarily submit when creating an account, using services, or communicating with us:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Account Registration Information:</strong> Full name, email address, phone number, date of birth, username, password, and account credentials;</li>
                <li><strong>Profile Information:</strong> Profile photograph, biographical information, skills and expertise descriptions, professional background, education, certifications, work history, and service offerings;</li>
                <li><strong>Identity Verification Information:</strong> Government-issued identification documents, social security number (if required), or other verification credentials;</li>
                <li><strong>Payment Information:</strong> Credit card details, billing addresses, and payment transaction history for Boost Credit purchases (processed securely through third-party payment processors);</li>
                <li><strong>Communications:</strong> Messages, correspondence, feedback, reviews, ratings, dispute reports, support inquiries, and any other content you submit through the Platform;</li>
                <li><strong>Transaction Records:</strong> Time Credit history, service exchange details, transaction logs, booking information, and related metadata.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.2 Information Collected Automatically</h3>
              <p className="leading-relaxed mb-3">
                Information automatically collected when you access or use the Platform:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Device Information:</strong> Device type, operating system, browser type and version, device identifiers (UDID, IDFA, Android ID), hardware model, and device settings;</li>
                <li><strong>Log Data:</strong> IP address, access times, pages viewed, clickstream data, referring/exit pages, search queries, and interaction with Platform features;</li>
                <li><strong>Location Information:</strong> Precise geolocation data (if you enable location services), approximate location based on IP address, and location preferences;</li>
                <li><strong>Usage Analytics:</strong> Feature usage patterns, session duration, frequency of visits, user interactions, engagement metrics, and behavioral analytics;</li>
                <li><strong>Cookies and Tracking Technologies:</strong> Data collected through cookies, web beacons, pixel tags, local storage, and similar technologies (see our Cookies Policy for details).</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.3 Information from Third-Party Sources</h3>
              <p className="leading-relaxed mb-3">
                Information obtained from external sources:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Social Media Platforms:</strong> If you connect your account through social media services (Facebook, Google, LinkedIn), we receive information authorized by your privacy settings;</li>
                <li><strong>Identity Verification Services:</strong> Background check results, identity verification reports, and related authentication data from third-party verification providers;</li>
                <li><strong>Public Sources:</strong> Publicly available information, professional directories, and data aggregators to supplement profile information.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. HOW WE USE YOUR INFORMATION</h2>
              <p className="leading-relaxed mb-4">
                We use collected information for legitimate business purposes, including but not limited to:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.1 Core Platform Operations</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Creating, maintaining, and managing user accounts;</li>
                <li>Facilitating service exchanges, matching users, and coordinating Time Credit transactions;</li>
                <li>Processing Boost Credit purchases and managing payment transactions;</li>
                <li>Enabling communication between users regarding service exchanges;</li>
                <li>Providing customer support, responding to inquiries, and resolving disputes.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.2 Platform Improvement and Personalization</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Analyzing usage patterns to improve functionality, design, and user experience;</li>
                <li>Personalizing content, recommendations, and matching algorithms;</li>
                <li>Conducting research, analytics, and product development;</li>
                <li>Testing new features and evaluating platform performance.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.3 Communications and Marketing</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Sending transactional emails, notifications, and service-related communications;</li>
                <li>Delivering promotional materials, newsletters, and marketing communications (with your consent);</li>
                <li>Conducting surveys and requesting feedback;</li>
                <li>Providing updates on Platform changes, policy modifications, and new features.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.4 Security, Fraud Prevention, and Compliance</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Verifying user identities and authenticating accounts;</li>
                <li>Detecting, preventing, and investigating fraudulent activities, security threats, and policy violations;</li>
                <li>Enforcing Terms of Service and other legal agreements;</li>
                <li>Complying with legal obligations, responding to legal requests, and cooperating with law enforcement;</li>
                <li>Protecting rights, property, and safety of Syncsfer, users, and the public.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. HOW WE SHARE YOUR INFORMATION</h2>
              <p className="leading-relaxed mb-4">
                We do not sell your personal information to third parties. However, we may share information in the following circumstances:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.1 With Other Users</h3>
              <p className="leading-relaxed mb-4">
                Your profile information, including name, photograph, skills, ratings, and service descriptions, is visible to other Platform users to facilitate service matching and exchanges. Transaction history and communications related to service exchanges may be visible to involved parties.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.2 Service Providers and Business Partners</h3>
              <p className="leading-relaxed mb-3">
                We share information with trusted third-party service providers who perform services on our behalf, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Payment processors for secure transaction handling;</li>
                <li>Cloud hosting and infrastructure providers;</li>
                <li>Analytics and data processing services;</li>
                <li>Identity verification and background check services;</li>
                <li>Customer support and communication platforms;</li>
                <li>Marketing and advertising services.</li>
              </ul>
              <p className="leading-relaxed mt-4">
                These service providers are contractually obligated to protect your information and use it only for authorized purposes.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.3 Legal Requirements and Protection of Rights</h3>
              <p className="leading-relaxed">
                We may disclose information when we believe disclosure is necessary or appropriate to: (a) comply with applicable laws, regulations, court orders, subpoenas, or legal processes; (b) respond to requests from government authorities or law enforcement agencies; (c) enforce our Terms of Service or other agreements; (d) protect the rights, property, safety, or security of Syncsfer, our users, or the public; or (e) detect, prevent, or address fraud, security issues, or technical problems.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.4 Business Transfers</h3>
              <p className="leading-relaxed">
                In the event of a merger, acquisition, reorganization, bankruptcy, sale of assets, or similar corporate transaction, your information may be transferred to the successor entity. We will provide notice before your information becomes subject to different privacy practices.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.5 Aggregate and De-Identified Information</h3>
              <p className="leading-relaxed">
                We may share aggregated, anonymized, or de-identified information that cannot reasonably be used to identify you for research, analytics, marketing, or other business purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. COOKIES AND TRACKING TECHNOLOGIES</h2>
              <p className="leading-relaxed">
                We and our third-party partners use cookies, web beacons, pixel tags, local storage, and similar tracking technologies to collect information about your interactions with the Platform. These technologies help us authenticate users, remember preferences, analyze usage patterns, deliver targeted advertising, and improve services. For detailed information about the types of cookies we use, their purposes, and how to manage cookie preferences, please review our separate Cookies Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. DATA RETENTION</h2>
              <p className="leading-relaxed mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, enforce agreements, and maintain business records. Specific retention periods vary based on data type and applicable legal requirements:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Account Information:</strong> Retained while your account remains active and for a reasonable period thereafter to comply with legal obligations;</li>
                <li><strong>Transaction Records:</strong> Retained for up to seven (7) years to comply with financial recordkeeping requirements;</li>
                <li><strong>Communications:</strong> Retained for reasonable periods to resolve disputes and provide customer support;</li>
                <li><strong>Backup Data:</strong> May persist in backup systems for thirty (30) to ninety (90) days following account deletion;</li>
                <li><strong>Aggregated Data:</strong> De-identified and aggregated data may be retained indefinitely for analytics and research.</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Upon account termination or deletion, we will delete or de-identify your personal information within a reasonable timeframe unless retention is required for legal, regulatory, or legitimate business purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. DATA SECURITY</h2>
              <p className="leading-relaxed mb-4">
                We implement reasonable administrative, technical, and physical safeguards designed to protect your personal information from unauthorized access, disclosure, alteration, and destruction. Our security measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Encryption:</strong> End-to-end encryption for sensitive data transmissions and storage using industry-standard protocols (TLS/SSL);</li>
                <li><strong>Access Controls:</strong> Role-based access restrictions, multi-factor authentication, and principle of least privilege;</li>
                <li><strong>Network Security:</strong> Firewalls, intrusion detection systems, and regular security audits;</li>
                <li><strong>Secure Development:</strong> Security testing, vulnerability assessments, and adherence to secure coding practices;</li>
                <li><strong>Employee Training:</strong> Regular privacy and security training for employees with access to personal information;</li>
                <li><strong>Incident Response:</strong> Established procedures for detecting, responding to, and mitigating security incidents.</li>
              </ul>
              <p className="leading-relaxed mt-4">
                However, no security system is impenetrable. While we strive to protect your information, we cannot guarantee absolute security. You are responsible for maintaining the confidentiality of your account credentials and should notify us immediately of any unauthorized account activity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. CHILDREN'S PRIVACY</h2>
              <p className="leading-relaxed">
                The Platform is not intended for children under the age of thirteen (13), and we do not knowingly collect personal information from children under 13. Users must be at least 18 years old or the age of majority in their jurisdiction to create accounts and use the Services. If we become aware that we have inadvertently collected personal information from a child under 13, we will take steps to delete such information promptly. Parents or guardians who believe we may have collected information from a child under 13 should contact us immediately at privacy@syncsfer.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. INTERNATIONAL DATA TRANSFERS</h2>
              <p className="leading-relaxed">
                Syncsfer is based in California, United States. Your information may be transferred to, processed, and stored in the United States or other countries where our service providers operate. These countries may have data protection laws different from those in your jurisdiction. By using the Platform, you consent to the transfer of your information to the United States and other countries as necessary to provide the Services. For users in the European Economic Area (EEA), United Kingdom, or Switzerland, we implement appropriate safeguards such as Standard Contractual Clauses to protect your information when transferred internationally.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. THIRD-PARTY LINKS AND SERVICES</h2>
              <p className="leading-relaxed">
                The Platform may contain links to third-party websites, services, or applications not owned or controlled by Syncsfer. This Privacy Policy does not apply to third-party sites or services. We are not responsible for the privacy practices, content, or activities of third parties. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. YOUR PRIVACY RIGHTS AND CHOICES</h2>
              <p className="leading-relaxed mb-4">
                Subject to applicable law, you have the following rights regarding your personal information:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">11.1 Access and Portability</h3>
              <p className="leading-relaxed mb-4">
                You have the right to request access to the personal information we hold about you and, in certain circumstances, receive a copy in a portable, machine-readable format.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">11.2 Correction and Update</h3>
              <p className="leading-relaxed mb-4">
                You may update, correct, or modify your account information at any time through your account settings or by contacting us at privacy@syncsfer.com.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">11.3 Deletion</h3>
              <p className="leading-relaxed mb-4">
                You may request deletion of your account and associated personal information, subject to certain exceptions for legal compliance, dispute resolution, and fraud prevention. To request deletion, contact privacy@syncsfer.com.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">11.4 Objection and Restriction</h3>
              <p className="leading-relaxed mb-4">
                You may object to certain processing activities or request restriction of processing under applicable law.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">11.5 Marketing Communications</h3>
              <p className="leading-relaxed mb-4">
                You may opt out of promotional emails by clicking unsubscribe links in emails or adjusting communication preferences in your account settings. Note that you cannot opt out of transactional or service-related communications.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">11.6 Cookie Preferences</h3>
              <p className="leading-relaxed">
                You may manage cookie preferences through your browser settings or our Cookie Consent Manager. However, disabling certain cookies may limit Platform functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. CALIFORNIA RESIDENTS – CCPA/CPRA PRIVACY RIGHTS</h2>
              <p className="leading-relaxed mb-4">
                The California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA), provides California residents with specific privacy rights.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">12.1 Categories of Personal Information Collected</h3>
              <p className="leading-relaxed mb-3">
                In the preceding twelve (12) months, we have collected the following categories of personal information from California residents:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Identifiers:</strong> Name, email address, phone number, postal address, IP address, device identifiers, and account credentials;</li>
                <li><strong>Commercial Information:</strong> Transaction history, Time Credit records, Boost Credit purchases, and service exchange details;</li>
                <li><strong>Internet/Network Activity:</strong> Browsing history, search history, clickstream data, and interaction with Platform features;</li>
                <li><strong>Geolocation Data:</strong> Precise or approximate location information;</li>
                <li><strong>Professional Information:</strong> Skills, work history, education, and professional credentials;</li>
                <li><strong>User-Generated Content:</strong> Profile information, photographs, reviews, ratings, and communications;</li>
                <li><strong>Inferences:</strong> Preferences, characteristics, behaviors, and tendencies derived from collected information.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">12.2 Business Purposes and Sources</h3>
              <p className="leading-relaxed">
                We collect personal information from: (a) directly from you when you provide it; (b) automatically through your use of the Platform; (c) third-party service providers; (d) social media platforms; (e) identity verification services; and (f) public sources. We collect and use personal information for the business purposes described in Section 3 above.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">12.3 Third-Party Sharing</h3>
              <p className="leading-relaxed">
                We may share personal information with the categories of third parties described in Section 4 above, including other Platform users, service providers and vendors, payment processors, identity verification services, analytics providers, government authorities, and potential business transaction parties.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">12.4 Sale and Sharing of Personal Information</h3>
              <p className="leading-relaxed mb-4">
                <strong>WE DO NOT SELL YOUR PERSONAL INFORMATION.</strong> Under the CCPA, "sale" includes disclosing personal information to third parties for monetary or other valuable consideration. We have not sold personal information in the preceding twelve (12) months and do not engage in such practices. However, we may "share" personal information for cross-context behavioral advertising purposes (such as through advertising cookies and pixels). California residents can opt out of such sharing by adjusting cookie preferences or contacting us.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">12.5 Your California Privacy Rights</h3>
              <p className="leading-relaxed mb-3">
                California residents have the following rights under the CCPA/CPRA:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Right to Know:</strong> Request disclosure of categories and specific pieces of personal information collected, sources, purposes, and third parties with whom information is shared (up to twice per 12-month period);</li>
                <li><strong>Right to Delete:</strong> Request deletion of personal information collected, subject to certain exceptions;</li>
                <li><strong>Right to Correct:</strong> Request correction of inaccurate personal information;</li>
                <li><strong>Right to Opt-Out:</strong> Opt out of the sale or sharing of personal information;</li>
                <li><strong>Right to Limit Use of Sensitive Personal Information:</strong> Limit use of sensitive personal information to purposes necessary for service provision;</li>
                <li><strong>Right to Non-Discrimination:</strong> Not receive discriminatory treatment for exercising privacy rights.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">12.6 Exercising Your California Privacy Rights</h3>
              <p className="leading-relaxed">
                To exercise your rights, submit a verifiable consumer request by emailing privacy@syncsfer.com, calling [Insert Toll-Free Number], or using our online form at [Insert Privacy Request Form URL]. Your request must provide sufficient information to verify your identity and specify which right you wish to exercise. We will respond within forty-five (45) days, with a possible extension of forty-five (45) additional days if necessary. You may designate an authorized agent to submit requests on your behalf by providing proof of authorization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. CHANGES TO THIS PRIVACY POLICY</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. We will notify you of material changes by posting the updated Privacy Policy on the Platform with a revised "Last Updated" date and, where appropriate, by sending notification to your registered email address. Your continued use of the Platform following the posting of changes constitutes your acceptance of such changes. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. CONTACT INFORMATION</h2>
              <p className="leading-relaxed mb-4">
                If you have questions, concerns, or complaints regarding this Privacy Policy, our privacy practices, or wish to exercise your privacy rights, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="mb-2">
                  <strong>Privacy Team</strong><br />
                  Syncsfer Corp.<br />
                  <strong>Email:</strong> privacy@syncsfer.com
                </p>
              </div>
              <p className="leading-relaxed mt-4">
                We will respond to your inquiry within a reasonable timeframe. If you are not satisfied with our response, California residents may contact the California Attorney General's Office or file a complaint with the appropriate regulatory authority.
              </p>
              <p className="leading-relaxed mt-6 font-semibold">
                BY USING THE SYNCSFER PLATFORM, YOU ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTOOD THIS PRIVACY POLICY.
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
