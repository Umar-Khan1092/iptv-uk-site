import React, { useEffect } from 'react';
import SEO from './SEO';

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="py-20 bg-white">
            <SEO
                title="Terms of Service"
                url="https://iptvuk.sbs/terms-of-service"
            />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-10 text-left">
                    Terms of Service
                </h1>

                <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Terms Accepted</h2>
                        <p>
                            You accept these Terms of Service ("Terms") by using or accessing iptvuk.sbs IPTV ("Service").
                            If you don't agree with any of the terms, you can't use the service. iptvuk. SBS IPTV can be
                            accessed through the domain iptvuk.sbs. Please go over our Privacy Policy as well, which
                            outlines how your personal data is gathered and used.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
                        <p>
                            Users of IPTV can access a variety of television channels and on-demand entertainment via the
                            internet (iptvuk.sbs). It is solely meant for personal, non-commercial use. See our
                            permissible Use Policy for further information on permissible usage.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. The Duties of Users</h2>
                        <p>
                            All services and equipment required for access to and usage of the Service must be purchased
                            and maintained by you. Additionally, it is your responsibility to make sure that the Service
                            is used in accordance with all relevant local, national, and international laws and regulations.
                            You promise not to use the service for any unauthorised or unlawful purposes. The content you
                            access is your responsibility, and you must make sure you are legally permitted to see it in
                            your jurisdiction. For additional copyright information, see sources such as the UK Government's
                            Copyright Guidance.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment and Subscription</h2>
                        <p>
                            Unless otherwise specified in our Refund Policy, subscription fees are not refundable.
                            We have the right to modify subscription costs at any moment and to provide you with
                            advance notice. Our Pricing Page has information about our current programs.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Copyright and Content</h2>
                        <p>
                            IPTV does not host, provide, archive, store, or disseminate any type of media. All content
                            offered through the Service is the property of its respective owners. We provide a directory
                            or index of online material that other enthusiasts have contributed. Users are in charge of
                            making sure they are authorised to view any content that is streamed via the service.
                            We anticipate that our users will respect intellectual property rights. Regarding allegations
                            of copyright infringement, please consult our DMCA Policy.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Prohibited Applications</h2>
                        <p>
                            You are not permitted to use the service in any way that disrupts, damages, or impairs it,
                            or for any illegal reason. Sharing your account credentials, re-streaming or redistributing
                            content, attempting to obtain unauthorised access to our systems, or using VPNs or proxies
                            to get around geographical restrictions imposed by content providers or the law are all
                            prohibited activities. Our Acceptable Use Policy contains a comprehensive list of actions
                            that are prohibited.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Termination</h2>
                        <p>
                            For any reason, including without limitation if you violate the Terms, we have the right to
                            immediately suspend or terminate your access to the Service without giving you any prior
                            notice or incurring any liability. Your right to use the Service shall end immediately
                            upon termination.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimer of Warranties</h2>
                        <p>
                            IPTV makes no guarantees, either explicit or implied, and hereby disclaims and negates
                            all other warranties, including but not limited to implied warranties or conditions
                            of merchantability.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Liability Restrictions</h2>
                        <p>
                            Even if IPTVUK.sbs IPTV or an authorised representative has been informed verbally or in
                            writing of the possibility of such damage, IPTVuk, IPTV, or its suppliers will never be
                            held charged with any damages (including, but not limited to, losses for loss of data or
                            profit, or business interruption) caused by the use or inability to use the materials
                            on IPTVuk.SBS IPTV's website.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Law Governing</h2>
                        <p>
                            The laws of the United Kingdom, except its conflict of law provisions, shall govern and
                            be construed in line with these Terms. You can visit the Citizens Advice Bureau to learn
                            more about your rights as a consumer in the UK.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Modifications to the Terms</h2>
                        <p>
                            We reserve the right, in our sole discretion, to alter or amend these Terms at any time.
                            If a revision is significant, we will try to provide at least 30 days' notice before
                            any new terms become effective. We alone will determine what constitutes a material change.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Get in Touch</h2>
                        <p>
                            Please use the contact information on our website to get in touch with us if you have any
                            issues concerning these terms.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TermsOfService;
