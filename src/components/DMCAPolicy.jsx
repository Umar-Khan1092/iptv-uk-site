import React, { useEffect } from 'react';
import SEO from './SEO';

const DMCAPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="py-20 bg-white">
            <SEO
                title="DMCA Policy"
                url="https://iptvuk.sbs/dmca-policy"
            />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-10 text-left leading-tight">
                    The Digital Millennium Copyright Act, or DMCA Policy
                </h1>

                <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Overview</h2>
                        <p>
                            IPTV (" iptvuk.it.com", "we", "us", "our") respects other people's intellectual property
                            rights and anticipates that its users will. We will promptly address any claims of
                            copyright infringement involving the iptvuk.it.com IPTV service and/or the iptvuk.it.com
                            IPTV website (the "Site") if they are reported to our Designated Copyright Agent listed
                            below. This is in compliance with the Digital Millennium Copyright Act of 1998 (DMCA),
                            the text of which is available on the U.S. Copyright Office website at
                            <a href="https://www.copyright.gov/legislation/dmca.pdf" className="text-primary-orange"> www.copyright.gov/legislation/dmca.pdf</a>.
                            Our Terms of Service also describe our general copyright policy.
                            <br />
                            IPTV does not host, supply, archive, store, or disseminate any type of media. We provide as
                            a directory or index for media that other people upload online, which is entirely outside
                            our control. We are dedicated to resolving infringement allegations and upholding the
                            rights of copyright holders.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Notification of Violations of Copyright</h2>
                        <p>
                            Please report alleged copyright infringements occurring on or through the Site or Service by
                            filling out the following DMCA Notice of Alleged Infringement and delivering it to our
                            Designated Copyright Agent if you are a copyright owner, authorised to act on behalf of one,
                            or authorised to act under any exclusive right under copyright.

                            <br />

                            We will, at our sole discretion, take whatever appropriate action in response to a
                            DMCA Notice, which may include removing the challenged content from the Service
                            listings or blocking access to it.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. DMCA Alleged Infringement Notice ("Notice")</h2>
                        <p>Please submit a notification with the following information in order to file a notice of infringing material on iptvuk.it.com IPTV:</p>
                        <ul className="list-decimal pl-6 space-y-4 mt-4">
                            <li>
                                Indicate the copyrighted work you believe has been violated, or if this Notice applies
                                to several copyrighted works, you may submit a representative list of the copyrighted
                                works you believe have been violated. The UK Intellectual Property Office and the
                                U.S. Copyright Office have information on copyright registration.
                            </li>
                            <li>
                                Indicate which content or link you believe to be infringing (or the target of infringing
                                conduct) and to which access should be blocked. If applicable, at least include the URL
                                of the link displayed on the website or the precise location where the content may be
                                accessed. (Note: Often, just giving a channel name is not enough. Please give us
                                specific information that will help us find the content, such as the URL of the stream,
                                the M3U playlist, or the EPG data, if that is the infringing portion.
                            </li>
                            <li>Give your mailing address, phone number, email address, and, if accessible, your firm affiliation (if applicable).</li>
                            <li>
                                The Notice's body should contain both of the following statements:
                                <br />"I so declare that I firmly believe the contested use of the copyrighted content is not permitted by the law, the copyright owner, or its agent (for example, as a fair use)."
                                <br />"Under penalty of perjury, I hereby attest that the information in this notice is true and that I am the owner of the copyright or an exclusive right under the copyright that is allegedly infringed, or that I have been given permission to act on behalf of the owner."
                            </li>
                            <li>Give your complete legal name and your signature, either in person or electronically.</li>
                        </ul>
                        <p className="mt-6 font-bold">Deliver this notice, filled out, to IPTV's iptvuk.it.com address. Appointed Copyright Representative:</p>

                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-4">
                            <p className="font-bold text-gray-900">Appointed Copyright Representative:</p>
                            <p>Legal Division: Copyright Allegations</p>
                            <p>IPTV at iptvuk.it.com</p>
                            <p>IPTV Headquarters, London, UK, SW1A 1AA, 123 Streaming Avenue (Example Address)</p>
                            <p>Email: <a href="mailto:Dmca.iptvuk.it.com@example.com" className="text-primary-orange">Dmca.iptvuk.it.com@example.com</a></p>
                        </div>
                        <p className="mt-4 text-sm text-gray-500 italic">
                            (Please be aware that notices sent to other contacts or via other channels, including our
                            general contact form, might not be handled. DMCA notices must be made to the designated agent.)
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Procedures for Counter-Notification</h2>
                        <p>
                            You may file a counter-notification with us (a "Counter-Notice") by sending written notice
                            to our copyright agent (named above) if you think that content you placed on the site was
                            deleted or access to it was disabled due to error or misidentification. The following must
                            be significantly included in the Counter-Notice in accordance with the DMCA:
                        </p>
                        <ul className="list-disc pl-6 space-y-3 mt-4">
                            <li>Your signature, either digital or tangible.</li>
                            <li>A description of the content that has been deleted or access to it disabled, together with the place where the content was present prior to removal or access being disabled.</li>
                            <li>Declaring under penalty of perjury that you believe, in good faith, that the material was removed or disabled because it was misidentified or mistakenly removed.</li>
                            <li>Your name, address, phone number, and, if available, email address, along with a declaration that you agree to be served by the person who gave notice under subsection (c)(1)(C) or an agent of that person, and that you consent to the jurisdiction of the Federal Court for the judicial district in which your address is located, or for any judicial district in which iptvuk.it.com IPTV may be found if your address is outside of the United States.</li>
                        </ul>
                        <p className="mt-4 italic">Please be aware that the complaining party may receive a copy of your counter-notification.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Recurring Violations</h2>
                        <p>According to our Acceptable Use Policy, we have the right to disable and/or delete the accounts of repeat infringers when the situation calls for it.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Disclaimer</h2>
                        <p>Please be advised that Section 512(f) of the DMCA may subject you to damages (including expenses and legal fees) if you intentionally and substantially misrepresent that any content or activity on the Site violates your copyright.
                            <br />
                            Legal advice is not provided by this DMCA policy. Please speak with an attorney if you have
                            any issues concerning your rights or responsibilities under the DMCA or other relevant
                            copyright laws. The World Intellectual Property Organization (WIPO) is a good source for
                            general copyright information.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DMCAPolicy;
