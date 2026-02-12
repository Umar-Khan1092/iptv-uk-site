import React, { useEffect } from 'react';
import SEO from './SEO';

const RefundPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="py-20 bg-white">
            <SEO
                title="Refund Policy"
                url="https://iptvuk.sbs/refund-policy"
            />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-10 text-left">
                    Refund Policy
                </h1>

                <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <p>
                        IPTV UK SBS guarantees high-quality IPTV services and strives for complete client satisfaction.
                        We provide a 7-day money-back guarantee for all new subscribers.
                        <br />
                        Please read the policy carefully to understand how refunds are handled.
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Free Trial</h2>
                        <p>
                            We advise all potential members to use our free trial period (if available) to evaluate the
                            service and ensure it fits their needs before committing to a paid subscription. The trial
                            allows you to check channel availability, quality, and compatibility with your device.
                            To learn more about trials, please visit our main site or contact support.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Request Refunds</h2>
                        <p>
                            To obtain a refund, please contact our customer support staff using the contact information
                            provided on our website within 7 days of the purchase or the occurrence of the issue.
                            Kindly supply the following information:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Your registered email and username.</li>
                            <li>Date of purchase and subscription plan.</li>
                            <li>Please include any relevant screenshots or evidence to support your claim.</li>
                        </ul>
                        <p className="mt-4">
                            We will analyse your request and respond within 5-7 business days. All refund requests
                            are handled on a case by case basis.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation</h2>
                        <p>
                            If you want to cancel your membership but are not eligible for a refund, go into your
                            account and go through the cancellation process. Your subscription will be terminated
                            at the end of your current payment period.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Processing</h2>
                        <p>
                            Once we receive and approve your request, we will handle the refund within 3 to 7
                            business days. The refund will be delivered in the original form of payment.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact us</h2>
                        <p>
                            If you have any questions or issues about this refund policy, please contact us at the
                            above-mentioned email or telephone number.
                            <br />
                            Thank you for picking the best IPTV subscription.
                            <br />
                            Sincerely,
                            <br />
                            IPTV UK SBS Team
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RefundPolicy;
