import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="mx-auto px-4 py-12 sm:px-6 lg:px-16 bg-black text-white">
            <h1 className="text-4xl font-semibold text-center mb-8 mt-15">Privacy Policy</h1>
            <p className="text-center text-white">Last updated: 09/09/25</p>

            <div className="mt-8 space-y-6">
                <section>
                    <h2 className="text-2xl font-medium">1. Information We Collect</h2>
                    <p className="text-white">
                        When you complete a form on our website or contact us directly, we may collect:
                    </p>
                    <ul className="list-disc ml-6 text-white">
                        <li>Full name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Address (if relevant to the service)</li>
                        <li>Details of your enquiry or project</li>
                    </ul>
                    <p className="mt-2 text-white">
                        We may also collect limited technical data automatically when you visit our website, such as your IP address and browser type.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-medium">2. Lawful Basis for Processing</h2>
                    <p className="text-white">
                        We only process your personal data where we have a lawful basis to do so. This includes:
                    </p>
                    <ul className="list-disc ml-6 text-white">
                        <li>Contract – to provide a quote, arrange services, or fulfill an agreement with you</li>
                        <li>Consent – when you give us permission to contact you for specific purposes</li>
                        <li>Legitimate interests – to respond to inquiries and manage our business effectively</li>
                        <li>Legal obligation – where we must comply with the law</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-medium">3. How We Use Your Information</h2>
                    <p className="text-white">
                        We use your personal data to:
                    </p>
                    <ul className="list-disc ml-6 text-white">
                        <li>Respond to inquiries and provide quotes</li>
                        <li>Deliver scaffolding services</li>
                        <li>Communicate with you about your project</li>
                        <li>Maintain business records and comply with legal requirements</li>
                    </ul>
                    <p className="mt-2 text-white">
                        We do not sell or trade your personal details to third parties.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-medium">4. Sharing Your Information</h2>
                    <p className="text-white">
                        We may share your personal data only with:
                    </p>
                    <ul className="list-disc ml-6 text-white">
                        <li>Trusted service providers (such as IT and hosting providers) who help us operate our business</li>
                        <li>Professional advisers (such as accountants or insurers)</li>
                        <li>Regulatory bodies or law enforcement, if required by law</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-medium">5. Cookies & Website Tracking</h2>
                    <p className="text-white">
                        Our website may use cookies or similar technologies to improve user experience and monitor website performance. You can set your browser to refuse cookies if you prefer.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-medium">6. Data Security</h2>
                    <p className="text-white">
                        We take appropriate measures to keep your personal information secure and prevent unauthorized access, disclosure, alteration, or destruction.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-medium">7. How Long We Keep Your Information</h2>
                    <p className="text-white">
                        We keep your personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-medium">8. Your Rights</h2>
                    <p className="text-white">
                        Under UK GDPR, you have the right to:
                    </p>
                    <ul className="list-disc ml-6 text-white">
                        <li>Access the personal data we hold about you</li>
                        <li>Request correction of any inaccurate information</li>
                        <li>Request deletion of your data (where legally permissible)</li>
                        <li>Restrict or object to how we use your data</li>
                        <li>Withdraw consent (where consent is the basis for processing)</li>
                        <li>Data portability (to receive your data in a usable format)</li>
                    </ul>
                    <p className="mt-2 text-white">
                        To exercise your rights, please contact us using the details below.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-medium">9. Contact Us</h2>
                    <p className="text-white">
                        If you have any questions about this Privacy Policy or how we handle your personal data, please contact us:
                    </p>
                    <div className="text-white">
                        <p><strong>Smashed Burgers & Shakes</strong></p>
                        <p>Email: <a href="mailto:smashedashby@gmail.com" className="text-yellow-500 hover:underline">smashedashby@gmail.com</a></p>
                        <p>Phone: 01530 648 708</p>
                        <p>Address: 85a Market Street,Ashby LE65 1AH</p>
                    </div>
                    <p className="mt-2 text-white">
                        If you are not satisfied with our response, you have the right to lodge a complaint with the{' '}
                        <a
                            href="https://ico.org.uk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-500 hover:underline"
                        >
                            Information Commissioner’s Office (ICO)
                        </a>.
                    </p>

                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
