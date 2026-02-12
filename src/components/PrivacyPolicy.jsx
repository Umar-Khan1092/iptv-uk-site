import React, { useEffect } from 'react';
import SEO from './SEO';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="py-20 bg-white">
            <SEO
                title="Privacy Policy"
                url="https://iptvuk.sbs/privacy-policy"
            />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-10 text-left">
                    Privacy Policy for IPTVUK.SBS
                </h1>

                <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <p>
                        At IPTV UK, which is available at <a href="https://iptvuk.sbs" className="text-primary-orange">https://iptvuk.sbs</a>,
                        protecting user privacy is one of our main priorities. The kinds of information that IPTV UK gathers,
                        stores, and uses are detailed in this Privacy Policy document.
                        <br />
                        Do not hesitate to get in touch with us if you need more information about our privacy policy or if
                        you have any other questions.
                        <br />
                        This privacy statement is exclusively relevant to our online operations and applies to website
                        visitors' information shared and/or collected via IPTV subscriptions.
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Consent</h2>
                        <p>You accept the terms and conditions of our privacy policy by using our website.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Data that we collect</h2>
                        <p>We will provide an explanation for any requests for personal information.</p>
                        <p>
                            Your name, email address, phone number, the contents of any messages or attachments you send
                            us, and any other information you choose to provide to us may be among the extra details
                            we gather if you get in touch with us directly.
                        </p>
                        <p>
                            We could ask for your contact details when you register, including your name, business name,
                            address, phone number, and email address.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Utilise Your Data</h2>
                        <p>We make use of the data we gather in several ways, such as:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Our website is provided, operated, and maintained by us.</li>
                            <li>Enhance, customise, and grow our website.</li>
                            <li>Recognise and evaluate your usage of our website.</li>
                            <li>Develop new features, functionalities, services, and goods.</li>
                            <li>Communicate with you for marketing and promotional purposes, to give you updates and other information about the website, and either directly or through one of our partners, such as customer support.</li>
                            <li>Forward emails to you.</li>
                            <li>Recognise and stop fraud.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Log Records</h2>
                        <p>
                            IPTVUK. SBS uses log files in a standardised manner. These files record which websites are
                            visited by whom. This is a component of all hosting companies' hosting service metrics.
                            Browser type, Internet Service Provider (ISP), date and time stamp, referring/exit websites,
                            Internet Protocol (IP) addresses, and possibly the quantity of clicks are all recorded
                            in log files. There is no personally identifiable information in these. Trend analysis,
                            site administration, user movement tracking, and demographic data collection are all
                            done with the data.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Web beacons and cookies</h2>
                        <p>
                            Like all websites, IPTV IN UK makes use of "cookies." Visitors' preferences and the sites
                            they viewed or visited on the website are among the data stored in these cookies. By
                            customizing our web page content according to visitors' browser types and/or other
                            information, the data is utilised to enhance the user experience.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">DoubleClick DART Cookie by Google</h2>
                        <p>
                            On our website, Google is a third-party seller. Additionally, it uses cookies, namely
                            DART cookies, to show users ads on our website based on their past visits to other
                            websites, including www.website.com. By going to the Google Ad and Content Network
                            Privacy Policy at <a href="https://policies.google.com/technologies/ads" className="text-primary-orange">https://policies.google.com/technologies/ads</a>, users can opt out of DART cookies.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Advertising Partners</h2>
                        <p>
                            A list of our advertising partners is provided below. The privacy policies of each of our
                            advertising partners explain how they manage user information. Below are links to their
                            privacy policies for your convenience.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policies of Google Advertising Partners</h2>
                        <p>This list contains the privacy policies for each of IPTV Subscription UK's advertising partners.</p>
                        <p>
                            In their advertisements and links on UK IPTV, third-party ad servers or ad networks use
                            technologies like cookies, JavaScript, or Web Beacons that are sent straight to users'
                            browsers. They will automatically obtain your IP address when this happens. These
                            technologies are used to tailor the advertising content that shows up on websites you
                            visit and/or to evaluate the effectiveness of their advertising campaigns.
                        </p>
                        <p>Third-party advertisers' cookies are not under IPTV UK's control or access.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policies of Third Parties</h2>
                        <p>
                            Other websites or sponsors are not covered by the IPTVUK Privacy Policy. We suggest that you
                            read these third-party ad servers' privacy policies for more details. Their policies and
                            guidance on how to opt out of particular options might be included.
                        </p>
                        <p>
                            Through the settings of your browser, you may turn off cookies. The websites of each online
                            browser provide more details about how to manage cookies in that browser.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">CCPA Privacy Rights (Don't Sell My Personal Information)</h2>
                        <p>The CCPA grants Californian consumers the following rights:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Ask a business that gathers a customer's personal information to reveal the types and particular information it has collected about them.</li>
                            <li>Ask a business to delete any personal data it may have collected about a consumer.</li>
                            <li>Make a request that a business that sells customer information refrain from doing so.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Rights to Data Protection under the GDPR</h2>
                        <p>Your right to access—You are entitled to copies of your personal data. This service may come with a nominal price.</p>
                        <p>The right to rectification: If you think any information is inaccurate, you can ask us to fix it. If you think any information is missing, you have the right to ask us to fill it in.</p>
                        <p>The right to erasure—Under certain circumstances, you have the right to ask that your personal data be deleted.</p>
                        <p>Processing restriction: You have the right to ask that we only process your personal information under certain circumstances.</p>
                        <p>The right to object to processing—Under some circumstances, you have the right to object to how we process your personal data.</p>
                        <p>The right to data portability: Subject to certain limitations, you have the right to ask us to provide the data we've collected to another organization or to you directly.</p>
                        <p>We have a month to answer your inquiry. If you would like to exercise any of your rights, kindly contact us.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
