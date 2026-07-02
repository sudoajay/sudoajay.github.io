import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Terms and Conditions - deScroll",
  description: "Terms and Conditions for the deScroll Android app.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="page-shell max-w-4xl">
        <Card className="surface-card gap-0 py-0">
          <CardContent className="legal-copy max-w-none p-6 sm:p-10 md:p-14">
            <p className="section-kicker !mb-4 !mt-0">deScroll legal</p>
            <h1 className="mb-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Terms and Conditions</h1>
            <p className="!mb-9 !mt-0 text-base text-white/50 sm:text-lg">The rules and conditions that apply when you access or use deScroll, including subscriptions and acceptable use.</p>
            
            <p><strong>Effective and last updated:</strong> June 21, 2026</p>

            <h2>Acceptance of Terms</h2>
            <p>By downloading, accessing, or using deScroll, you agree to these Terms and Conditions. If you do not agree, do not use the service.</p>

            <h2>Use of the Service</h2>
            <p>deScroll provides launcher, focus, app-management, usage-tracking, AI Helper, support, and subscription features. You may use deScroll only in compliance with applicable laws, platform rules, and these terms.</p>
            <p>You are responsible for your device, account, permissions, settings, and activity through your use of the app.</p>
            <ul>
              <li>Do not misuse, disrupt, reverse engineer, or attempt unauthorized access to the service.</li>
              <li>Do not use deScroll in a way that violates the rights of others or applicable law.</li>
              <li>Use device permissions responsibly and only on devices, apps, or accounts you are authorized to manage.</li>
              <li>Do not attempt to bypass billing, entitlement checks, rate limits, moderation, account restrictions, or security controls.</li>
            </ul>

            <h2>Permission-Specific Terms</h2>
            <p>Some deScroll features require elevated Android permissions so the app can perform the device-management tasks you request.</p>
            <ul>
              <li>Accessibility Service access is used for features such as Focus Enhancer, App Shield, Usage Guardian, and usage tracking flows that need to detect foreground apps, show warning screens, or enforce selected rules on device.</li>
              <li>Foreground service special-use access is used for the floating timer, countdown overlay, persistent focus controls, and related visible overlay interactions while those features are active.</li>
              <li>Notification listener access is used for selected notification-control features and notification history.</li>
              <li>Usage access is used to show app usage summaries and support usage-based wellness features.</li>
              <li>Query all packages access is used to discover installed apps, render launcher and settings app lists, support app-blocking setup, label usage and notification entries, and resolve icon packs or launch targets.</li>
              <li>Approximate location is used only for weather when you enable weather features and grant location permission.</li>
            </ul>
            <p>If you revoke these permissions, related features may stop working, display incomplete data, or become unavailable until access is restored.</p>

            <h2>Accounts and Access</h2>
            <p>Some features may require anonymous device authentication, premium access, network access, or specific Android permissions. You are responsible for safeguarding your device and access to connected services.</p>
            <p>We may suspend or restrict account-linked features if we believe there is abuse, fraud, security risk, payment failure, policy violation, or unlawful activity.</p>

            <h2>AI Helper and Support</h2>
            <p>AI Helper is provided for general digital wellness, focus, habit, and app guidance. It may be inaccurate, incomplete, delayed, or unavailable, and it should not be treated as professional medical, legal, financial, emergency, or safety advice.</p>
            <p>Support tickets are provided to help with product issues. Do not submit unlawful, abusive, confidential third-party, or highly sensitive information unless it is necessary for support.</p>

            <h2>Subscriptions and Billing</h2>
            <p>Certain features may require a paid subscription. Pricing, trial eligibility, renewal terms, and cancellation options are shown in the app and through the checkout flow provided by Google Play.</p>
            <p>Subscriptions renew automatically unless canceled before the renewal date. You can manage or cancel subscriptions through your Google Play account. Refunds, if any, are subject to Google Play policies and applicable law.</p>

            <h2>Intellectual Property</h2>
            <p>deScroll, including its software, design, branding, content, and related materials, is protected by intellectual property laws. Except as expressly permitted, you may not copy, modify, distribute, sell, or create derivative works from the service.</p>

            <h2>Availability and Changes</h2>
            <p>We may modify, suspend, limit, or discontinue features at any time. We do not guarantee that deScroll, cloud features, AI responses, support, subscriptions, or third-party platform services will always be available, uninterrupted, or error free.</p>

            <h2>Disclaimers</h2>
            <p>deScroll is provided on an "as available" and "as is" basis to the maximum extent permitted by law. We do not guarantee specific outcomes, uninterrupted access, or compatibility with every device, configuration, or third-party service.</p>

            <h2>Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, we are not liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of data, revenue, profits, or business opportunities arising from your use of deScroll.</p>

            <h2>Indemnity</h2>
            <p>To the extent permitted by law, you agree to be responsible for claims, losses, and reasonable costs arising from your unlawful misuse of deScroll, violation of these terms, or infringement of another person's rights.</p>

            <h2>Termination</h2>
            <p>We may suspend or terminate access to the service if we believe you have violated these terms, created risk for the service or other users, or where required for legal, security, or operational reasons.</p>

            <h2>Changes to These Terms</h2>
            <p>We may revise these Terms and Conditions from time to time. When we do, we will post the updated version here and update the last updated date. Your continued use of deScroll after changes take effect means you accept the revised terms.</p>

            <h2>Governing Law</h2>
            <p>These terms are governed by the laws of India, without limiting any mandatory consumer rights that apply in your country or region. Courts with jurisdiction in India will handle disputes unless applicable law requires otherwise.</p>

            <h2>Contact</h2>
            <p>
              Questions about these terms can be sent to Ajay Singh / sudoajay at <a href="mailto:sudoajay@gmail.com">sudoajay@gmail.com</a>.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
