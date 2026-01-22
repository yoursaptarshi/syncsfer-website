"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsAndConditions() {
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
            TERMS OF SERVICE
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. ACCEPTANCE OF TERMS</h2>
              <p className="leading-relaxed mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and Syncsfer Corp. ("Syncsfer," "we," "us," or "our"), a California corporation, governing your access to and use of the Syncsfer platform, website, mobile applications, and all related services (collectively, the "Platform" or "Services"). By accessing, browsing, or using the Platform in any manner, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy, which is incorporated herein by reference.
              </p>
              <p className="leading-relaxed font-semibold">
                IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT ACCESS OR USE THE PLATFORM. Your continued use of the Platform following the posting of changes to these Terms will constitute your acceptance of such changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. ELIGIBILITY AND ACCOUNT REGISTRATION</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.1 Age and Capacity Requirements</h3>
              <p className="leading-relaxed mb-4">
                To use the Platform, you must: (a) be at least 18 years of age or the age of majority in your jurisdiction, whichever is greater; (b) possess the legal capacity to enter into a binding contract; and (c) not be prohibited from using the Services under applicable laws. We reserve the right to refuse service, terminate accounts, or remove content at our sole discretion if we believe you do not meet these requirements.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.2 Account Registration and Security</h3>
              <p className="leading-relaxed mb-3">
                You must create an account to access the Services. You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate, current, and complete information during registration and promptly update such information to maintain its accuracy;</li>
                <li>Maintain the confidentiality of your account credentials and accept responsibility for all activities occurring under your account;</li>
                <li>Immediately notify us of any unauthorized access or security breach;</li>
                <li>Not create an account using false information or impersonate another person or entity;</li>
                <li>Not transfer, sell, or share your account with any other person without our express written consent.</li>
              </ul>
              <p className="leading-relaxed mt-4">
                You acknowledge that you are solely responsible for all activities conducted through your account, whether authorized or unauthorized. We are not liable for any loss or damage arising from unauthorized account use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. PLATFORM DESCRIPTION AND TIME CREDIT SYSTEM</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.1 Service Overview</h3>
              <p className="leading-relaxed mb-4">
                Syncsfer operates a peer-to-peer skill exchange platform that facilitates non-monetary exchanges of services between users through a virtual credit system. The Platform connects individuals seeking services with those offering services, enabling direct exchanges without traditional monetary compensation.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.2 Time Credits System</h3>
              <p className="leading-relaxed mb-3">
                The Platform operates using "Time Credits" as follows:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Standard Exchange Rate:</strong> By default, one (1) hour of service equals one (1) Time Credit, unless otherwise mutually agreed upon by the exchanging users;</li>
                <li><strong>Earning Credits:</strong> Users earn Time Credits by successfully completing services for other users;</li>
                <li><strong>Spending Credits:</strong> Users spend Time Credits by receiving services from other users;</li>
                <li><strong>No Monetary Value:</strong> Time Credits have no cash value, cannot be redeemed for money, and may not be sold, transferred outside the Platform, or exchanged for legal tender;</li>
                <li><strong>Non-Transferable:</strong> Time Credits are non-transferable between user accounts except through authorized Platform exchanges;</li>
                <li><strong>Expiration and Forfeiture:</strong> Time Credits may expire or be forfeited according to policies established by Syncsfer, including but not limited to account inactivity exceeding twelve (12) months.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.3 Boost Credits (Optional Premium Features)</h3>
              <p className="leading-relaxed">
                Users may optionally purchase "Boost Credits" using real currency to access premium features including enhanced visibility, priority matching, and promotional advantages. Boost Credits are subject to separate pricing, terms, and conditions disclosed at the time of purchase. All purchases of Boost Credits are final and non-refundable except as required by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. USER CONDUCT AND PROHIBITED ACTIVITIES</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.1 General Conduct Standards</h3>
              <p className="leading-relaxed mb-3">
                You agree to use the Platform responsibly and in compliance with all applicable laws. You further agree NOT to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Violate any local, state, federal, or international law or regulation;</li>
                <li>Misrepresent your identity, skills, qualifications, credentials, or experience;</li>
                <li>Engage in harassment, threats, intimidation, discrimination, or abusive behavior toward other users;</li>
                <li>Commit fraud, engage in deceptive practices, or attempt to defraud other users or Syncsfer;</li>
                <li>Exploit, manipulate, or abuse the Time Credit system or engage in credit farming, wash trading, or similar manipulative practices;</li>
                <li>Use the Platform for unauthorized commercial purposes or monetary transactions outside the permitted Boost Credit structure;</li>
                <li>Offer or request services that are illegal, dangerous, involve controlled substances, violate professional licensing requirements, or contravene public policy;</li>
                <li>Post, transmit, or distribute content that is defamatory, obscene, pornographic, hateful, or otherwise objectionable;</li>
                <li>Infringe upon intellectual property rights, including copyrights, trademarks, patents, or trade secrets;</li>
                <li>Attempt to gain unauthorized access to the Platform, other user accounts, or our systems through hacking, password mining, or any other means;</li>
                <li>Transmit viruses, malware, or any code designed to damage, interfere with, or limit the functionality of the Platform;</li>
                <li>Use automated systems, bots, scrapers, or similar data mining tools to access the Platform;</li>
                <li>Interfere with or disrupt the Platform's operation or servers, or violate network security;</li>
                <li>Create multiple accounts for fraudulent purposes or to circumvent restrictions.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.2 Professional Conduct in Service Exchanges</h3>
              <p className="leading-relaxed">
                All service exchanges must be conducted professionally, ethically, and in good faith. Users must honor commitments, deliver services as described, and treat other users with respect. Failure to fulfill agreed-upon services may result in negative ratings, credit adjustment, or account termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. PLATFORM AS INTERMEDIARY – NO GUARANTEE OF SERVICES</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.1 Intermediary Status</h3>
              <p className="leading-relaxed mb-4">
                Syncsfer operates solely as an intermediary platform connecting users for peer-to-peer service exchanges. We do not provide services directly, employ service providers, or act as an agent for any user. All service contracts and exchanges occur directly between users. Syncsfer is not a party to any transaction, agreement, or dispute between users.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.2 No Guarantees or Warranties</h3>
              <p className="leading-relaxed mb-4 font-semibold">
                WE DO NOT GUARANTEE, WARRANT, OR REPRESENT THAT: (a) you will be matched with suitable service providers or recipients; (b) services will be provided or received in a timely, professional, or satisfactory manner; (c) users possess the skills, qualifications, licenses, or credentials they claim; (d) exchanges will be completed as agreed; or (e) the Platform will be available, uninterrupted, secure, or error-free. Use of the Platform is entirely at your own risk.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.3 User Responsibility</h3>
              <p className="leading-relaxed">
                You are solely responsible for: (a) evaluating the suitability, credentials, and reputation of other users before engaging in exchanges; (b) ensuring compliance with all applicable laws, licensing requirements, and professional standards; (c) verifying insurance coverage where appropriate; (d) negotiating terms and conditions of service exchanges; and (e) resolving disputes arising from exchanges. Users should exercise due diligence and caution in all Platform interactions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. DISPUTES BETWEEN USERS</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.1 User-to-User Disputes</h3>
              <p className="leading-relaxed mb-4">
                Disputes arising from service exchanges are between the users involved. Syncsfer is not a party to such disputes and has no obligation to intervene, mediate, or resolve conflicts. However, we may, at our sole and absolute discretion, offer voluntary mediation assistance or provide dispute resolution tools. Any such assistance does not create an obligation, partnership, agency, or liability on our part.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.2 Rating and Feedback System</h3>
              <p className="leading-relaxed mb-4">
                To promote accountability and transparency, users may provide ratings and feedback following service exchanges. Ratings and reviews must be honest, factual, and based on actual experiences. Users may not manipulate ratings, post false reviews, or engage in review fraud. We reserve the right to remove reviews that violate these Terms or applicable laws.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.3 Reporting Violations</h3>
              <p className="leading-relaxed">
                If you encounter violations of these Terms, fraudulent activity, or inappropriate conduct, please report such incidents immediately to support@syncsfer.com. We will investigate reported violations and may take appropriate action, including account suspension or termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. INTELLECTUAL PROPERTY RIGHTS</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">7.1 Syncsfer's Intellectual Property</h3>
              <p className="leading-relaxed mb-4">
                All content, software, technology, designs, trademarks, service marks, logos, branding, functionality, and other intellectual property on the Platform ("Syncsfer IP") are owned exclusively by Syncsfer or our licensors and are protected by United States and international copyright, trademark, patent, and other intellectual property laws. You may not copy, modify, reproduce, distribute, transmit, display, perform, publish, license, create derivative works from, transfer, or sell any Syncsfer IP without our express prior written permission.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">7.2 Limited License to Users</h3>
              <p className="leading-relaxed mb-3">
                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Platform solely for personal, non-commercial purposes in accordance with these Terms. This license does not include any right to: (a) resell or make commercial use of the Platform; (b) collect or use product listings, descriptions, or prices; (c) make derivative uses of the Platform; or (d) download or copy account information.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">7.3 User-Generated Content</h3>
              <p className="leading-relaxed mb-3">
                You retain ownership of content you submit, post, or display on the Platform ("User Content"), including profiles, service descriptions, photos, reviews, and communications. However, by submitting User Content, you grant Syncsfer a worldwide, perpetual, irrevocable, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content in connection with operating, promoting, and improving the Platform.
              </p>
              <p className="leading-relaxed">
                You represent and warrant that: (a) you own or have necessary rights to all User Content; (b) User Content does not infringe upon any third-party rights; and (c) User Content complies with these Terms and applicable laws. We reserve the right to remove any User Content that violates these Terms or is otherwise objectionable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. DMCA COPYRIGHT POLICY</h2>
              <p className="leading-relaxed">
                Syncsfer respects intellectual property rights and complies with the Digital Millennium Copyright Act ("DMCA"). If you believe content on the Platform infringes your copyright, please submit a DMCA notice to our designated agent at legal@syncsfer.com containing: (a) physical or electronic signature; (b) identification of copyrighted work; (c) identification of infringing material; (d) your contact information; (e) a statement of good faith belief; and (f) a statement of accuracy and authority. We may terminate accounts of repeat infringers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. DISCLAIMERS AND WARRANTIES</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">9.1 "AS IS" and "AS AVAILABLE" Basis</h3>
              <p className="leading-relaxed mb-4 font-semibold">
                THE PLATFORM AND ALL SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. TO THE FULLEST EXTENT PERMITTED BY LAW, SYNCSFER DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE OF TRADE.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">9.2 No Warranty Regarding User Conduct</h3>
              <p className="leading-relaxed mb-4 font-semibold">
                WE DO NOT WARRANT OR GUARANTEE: (a) the accuracy, completeness, reliability, or timeliness of any user-provided content or services; (b) that users possess claimed skills, credentials, or qualifications; (c) that the Platform will meet your requirements or be uninterrupted, secure, or error-free; (d) the quality, safety, legality, or suitability of services exchanged between users; or (e) that defects will be corrected.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">9.3 Third-Party Content and Services</h3>
              <p className="leading-relaxed">
                The Platform may contain links to third-party websites, services, or content not owned or controlled by Syncsfer. We do not endorse, monitor, or assume responsibility for any third-party content, services, or websites. Your interactions with third parties are solely between you and such third parties, and we disclaim all liability arising from such interactions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. LIMITATION OF LIABILITY</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">10.1 Exclusion of Damages</h3>
              <p className="leading-relaxed mb-4 font-semibold">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL SYNCSFER, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, PARTNERS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES ARISING OUT OF OR RELATED TO: (a) your use or inability to use the Platform; (b) unauthorized access to or alteration of your data; (c) statements or conduct of third parties on the Platform; (d) service exchanges between users; (e) disputes between users; or (f) any other matter related to the Platform, EVEN IF SYNCSFER HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">10.2 Limitation of Liability Cap</h3>
              <p className="leading-relaxed mb-4 font-semibold">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SYNCSFER'S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR YOUR USE OF THE PLATFORM SHALL NOT EXCEED THE GREATER OF: (a) ONE HUNDRED DOLLARS ($100.00), OR (b) THE TOTAL AMOUNT YOU PAID TO SYNCSFER FOR BOOST CREDITS IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM. THIS LIMITATION APPLIES TO ALL CAUSES OF ACTION IN THE AGGREGATE, INCLUDING BUT NOT LIMITED TO BREACH OF CONTRACT, BREACH OF WARRANTY, NEGLIGENCE, STRICT LIABILITY, MISREPRESENTATION, AND OTHER TORTS.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">10.3 Basis of the Bargain</h3>
              <p className="leading-relaxed mb-4">
                You acknowledge that the disclaimers and limitations of liability set forth in these Terms reflect a reasonable allocation of risk between you and Syncsfer and represent an essential basis of the bargain between the parties. Syncsfer would not provide the Platform without these limitations.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">10.4 California Law Considerations</h3>
              <p className="leading-relaxed">
                Some jurisdictions, including California, do not allow the exclusion or limitation of incidental or consequential damages. If such limitations are prohibited in your jurisdiction, some of the above limitations may not apply to you, and you may have additional rights. In such cases, Syncsfer's liability is limited to the fullest extent permitted by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. INDEMNIFICATION</h2>
              <p className="leading-relaxed">
                You agree to indemnify, defend, and hold harmless Syncsfer, its affiliates, and their respective officers, directors, employees, agents, partners, and licensors from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or related to: (a) your use or misuse of the Platform; (b) your violation of these Terms; (c) your violation of any rights of another party; (d) your User Content; (e) service exchanges between you and other users; (f) your violation of applicable laws or regulations; or (g) any dispute you have with another user. We reserve the right to assume exclusive defense and control of any matter subject to indemnification, in which case you agree to cooperate with our defense of such claims.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. TERMINATION AND SUSPENSION</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">12.1 Termination by Syncsfer</h3>
              <p className="leading-relaxed mb-4">
                We reserve the right, in our sole discretion, to suspend, restrict, or terminate your account and access to the Platform at any time, with or without notice, for any reason or no reason, including but not limited to: (a) violation of these Terms; (b) fraudulent, abusive, or illegal activity; (c) requests by law enforcement or government agencies; (d) unexpected technical issues; (e) extended periods of inactivity; or (f) engagement in conduct that we deem harmful to the Platform, other users, or Syncsfer's interests.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">12.2 Termination by User</h3>
              <p className="leading-relaxed mb-4">
                You may terminate your account at any time by contacting support@syncsfer.com. Upon termination, your access to the Platform will cease, and you will lose all accumulated Time Credits and account privileges.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">12.3 Effect of Termination</h3>
              <p className="leading-relaxed mb-4">
                Upon termination of your account: (a) your right to use the Platform immediately ceases; (b) all Time Credits in your account will be forfeited without compensation; (c) Boost Credits, if any, are non-refundable; (d) we may delete or retain your User Content at our discretion; and (e) provisions of these Terms that by their nature should survive termination shall survive, including but not limited to intellectual property provisions, disclaimers, limitations of liability, indemnification, and dispute resolution provisions.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">12.4 Inactive Accounts</h3>
              <p className="leading-relaxed">
                Accounts inactive for twelve (12) consecutive months may be subject to automatic termination, and all unused Time Credits may be reclaimed or deleted. We will provide reasonable notice before permanently deleting inactive accounts where feasible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. DISPUTE RESOLUTION AND ARBITRATION</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">13.1 Mandatory Arbitration Agreement</h3>
              <p className="leading-relaxed mb-4 font-semibold">
                PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT.
              </p>
              <p className="leading-relaxed mb-4">
                Except as expressly provided below, you and Syncsfer agree that any dispute, claim, or controversy arising out of or relating to these Terms, the Platform, or your relationship with Syncsfer (collectively, "Disputes") shall be resolved exclusively through binding individual arbitration administered by JAMS (Judicial Arbitration and Mediation Services) in accordance with its Comprehensive Arbitration Rules and Procedures, or another arbitration provider mutually agreed upon by the parties.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">13.2 Exceptions to Arbitration</h3>
              <p className="leading-relaxed mb-4">
                Either party may seek relief in small claims court for disputes within that court's jurisdiction. Additionally, either party may seek equitable relief in court for matters involving intellectual property rights, confidentiality obligations, or injunctive relief to prevent irreparable harm.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">13.3 Arbitration Procedures</h3>
              <p className="leading-relaxed mb-4">
                Arbitration shall be conducted by a single neutral arbitrator selected in accordance with JAMS rules. The arbitration shall take place in Los Angeles County, California, or another mutually agreed location, and may be conducted telephonically or via videoconference if appropriate. The arbitrator's decision shall be final and binding, and judgment may be entered in any court of competent jurisdiction. Each party shall bear its own costs and attorneys' fees unless the arbitrator awards such costs and fees to the prevailing party as permitted by law.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">13.4 Class Action Waiver</h3>
              <p className="leading-relaxed mb-4 font-semibold">
                YOU AND SYNCSFER AGREE THAT EACH PARTY MAY BRING CLAIMS AGAINST THE OTHER ONLY IN AN INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, CONSOLIDATED, OR REPRESENTATIVE PROCEEDING. Unless both parties agree otherwise, the arbitrator may not consolidate claims of more than one person and may not preside over any form of class, consolidated, or representative proceeding. If this class action waiver is found to be unenforceable, the entire arbitration agreement shall be void.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">13.5 Opt-Out Right</h3>
              <p className="leading-relaxed">
                You may opt out of this arbitration agreement by sending written notice to legal@syncsfer.com within thirty (30) days of first accepting these Terms. The notice must include your name, address, email, and a clear statement that you wish to opt out of the arbitration agreement. If you opt out, all other terms of these Terms remain in effect, but disputes will be resolved in court as described below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. GOVERNING LAW AND JURISDICTION</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">14.1 Governing Law</h3>
              <p className="leading-relaxed mb-4">
                These Terms and any disputes arising out of or related to the Platform shall be governed by and construed in accordance with the laws of the State of California and the United States, without regard to conflict of law principles. The United Nations Convention on Contracts for the International Sale of Goods shall not apply.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">14.2 Exclusive Venue</h3>
              <p className="leading-relaxed">
                For any disputes not subject to arbitration (including small claims actions and requests for equitable relief), you and Syncsfer agree to submit to the exclusive personal jurisdiction and venue of the state and federal courts located in Los Angeles County, California. You waive any objection to jurisdiction or venue in such courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. MODIFICATIONS TO TERMS</h2>
              <p className="leading-relaxed">
                We reserve the right to modify, amend, or update these Terms at any time at our sole discretion. We will provide notice of material changes by posting the updated Terms on the Platform with a revised "Last Updated" date and, where appropriate, by sending notification to your registered email address. Your continued use of the Platform following the posting of changes constitutes your acceptance of such changes. If you do not agree to the modified Terms, you must discontinue use of the Platform and terminate your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. GENERAL PROVISIONS</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">16.1 Entire Agreement</h3>
              <p className="leading-relaxed mb-4">
                These Terms, together with our Privacy Policy and any additional terms applicable to specific features or services, constitute the entire agreement between you and Syncsfer regarding the Platform and supersede all prior or contemporaneous communications, agreements, and understandings, whether oral or written.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">16.2 Severability</h3>
              <p className="leading-relaxed mb-4">
                If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it enforceable while preserving its intent, or if modification is not possible, such provision shall be severed from these Terms. The remaining provisions shall remain in full force and effect.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">16.3 Waiver</h3>
              <p className="leading-relaxed mb-4">
                No waiver of any provision of these Terms shall be deemed a further or continuing waiver of such provision or any other provision. Our failure to enforce any right or provision shall not constitute a waiver of that right or provision.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">16.4 Assignment</h3>
              <p className="leading-relaxed mb-4">
                You may not assign, transfer, or delegate these Terms or your rights and obligations hereunder without our prior written consent. We may freely assign or transfer these Terms and our rights and obligations without restriction, including in connection with a merger, acquisition, reorganization, or sale of assets.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">16.5 No Third-Party Beneficiaries</h3>
              <p className="leading-relaxed mb-4">
                These Terms do not create any third-party beneficiary rights. No third party may rely upon or enforce any provision of these Terms.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">16.6 Force Majeure</h3>
              <p className="leading-relaxed mb-4">
                Syncsfer shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, war, terrorism, civil unrest, labor disputes, governmental actions, natural disasters, internet service failures, or other force majeure events.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">16.7 Interpretation</h3>
              <p className="leading-relaxed">
                Section headings are for convenience only and shall not affect the interpretation of these Terms. The words "including," "includes," and "such as" are illustrative and not limiting. The terms "herein," "hereof," and "hereunder" refer to these Terms as a whole.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">17. CALIFORNIA-SPECIFIC DISCLOSURES</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">17.1 California Consumer Rights</h3>
              <p className="leading-relaxed mb-4">
                Under California Civil Code Section 1789.3, California users are entitled to the following specific consumer rights notice: If you have a complaint regarding the Platform or wish to request further information, you may contact Syncsfer at legal@syncsfer.com. You may also contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834, or by telephone at (916) 445-1254 or (800) 952-5210.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">17.2 California Proposition 65</h3>
              <p className="leading-relaxed">
                The Platform does not involve the sale, distribution, or exposure to chemicals known to the State of California to cause cancer, birth defects, or reproductive harm. No Proposition 65 warning is required for use of the Platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">18. CONTACT INFORMATION</h2>
              <p className="leading-relaxed mb-4">
                For questions, concerns, or notices regarding these Terms, please contact Syncsfer Corp. at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="mb-2">
                  <strong>Legal Department</strong><br />
                  Syncsfer Corp.<br />
                  <strong>Email:</strong> legal@syncsfer.com<br />
                  <strong>Support:</strong> support@syncsfer.com<br />
                  <strong>Website:</strong> https://www.syncsfer.com
                </p>
              </div>
              <p className="leading-relaxed mt-6 font-semibold">
                BY USING THE SYNCSFER PLATFORM, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.
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
