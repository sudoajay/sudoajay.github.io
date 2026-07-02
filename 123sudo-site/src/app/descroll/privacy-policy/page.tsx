import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Privacy Policy - deScroll",
  description: "Privacy Policy for the deScroll Android app.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="page-shell max-w-4xl">
        <Card className="surface-card gap-0 py-0">
          <CardContent className="legal-copy max-w-none p-6 sm:p-10 md:p-14">
            <p className="section-kicker !mb-4 !mt-0">deScroll legal</p>
            <h1 className="mb-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Privacy Policy</h1>
            <p className="!mb-9 !mt-0 text-base text-white/50 sm:text-lg">How deScroll handles device activity, permissions, accounts, support, subscriptions, and optional cloud features.</p>
            
            <p><strong>Effective and last updated:</strong> June 21, 2026</p>

            <h2>Overview</h2>
            <p>
              deScroll is built to help you reduce distractions, manage app use, and stay focused. Core blocking, usage tracking, scroll counters, launcher preferences, and focus settings are designed to run on your device.
            </p>
            <p>
              Some optional features require data to leave your device, such as sign-in, AI Helper, support tickets, subscription verification, crash reporting, analytics, and weather. This policy explains what is processed, why it is used, and the choices available to you.
            </p>

            <h2>Information We Process</h2>
            <p>The information deScroll processes depends on the features you enable, permissions you grant, and whether you use optional cloud-backed features.</p>
            <ul>
              <li>Local app settings, launcher preferences, selected apps, block lists, warning messages, cooldown settings, focus configurations, hidden or renamed apps, and other product customizations.</li>
              <li>Local usage data, app usage summaries, notification history, short-video scroll counts, overlay state, and chat history stored in the app database when related features are enabled.</li>
              <li>An anonymous device identifier (Firebase UID) when you use AI Helper, support, or subscription features. We do not collect names, email addresses, or Google accounts.</li>
              <li>AI Helper messages, selected chat history, app version, feature configuration, and requested usage analytics context when you ask the AI Helper to answer using your deScroll data.</li>
              <li>Support ticket content, replies, ticket status, priority, app version, and related metadata when you contact support in the app.</li>
              <li>Subscription and purchase information needed to verify or manage premium access, such as product ID, base plan ID, purchase token, order ID, purchase state, billing response, and subscription status.</li>
              <li>Crash logs, diagnostics, app performance data, and analytics events from Firebase services where enabled to monitor reliability and improve the app.</li>
              <li>Approximate location coordinates used for weather when you enable weather and grant coarse location access.</li>
            </ul>

            <h2>Accessibility Service Permission</h2>
            <p>
              deScroll requests Android Accessibility Service access only for user-facing features that need on-device detection of foreground app activity, supported short-video screens, scroll events, and selected window changes.
            </p>
            <p>
              This permission powers features such as App Shield, Usage Guardian, Focus Enhancer, Advanced Insights, and short-video scroll counting. It is used to detect selected apps, enforce rules you configure, show warning screens, return you to the launcher during focus sessions, and count supported usage events.
            </p>
            <p>
              Accessibility-derived activity is not sold and is not sent to advertising services. It stays on your device for core protection and tracking features, except when you explicitly use AI Helper requests that include selected usage analytics context.
            </p>
            <p>
              You can disable Accessibility access at any time in Android settings. Related protection, blocking, or tracking features may stop working until access is restored.
            </p>

            <h2>Notification Listener and Usage Access</h2>
            <p>
              Notification Control uses Android notification listener access to detect notifications from apps you select, apply your configured notification rules, and show notification history inside deScroll.
            </p>
            <p>
              Usage Access is used for app usage summaries and device wellness features that need Android usage statistics. This data is processed for features you enable and is stored locally unless you choose to include relevant summaries in an AI Helper request.
            </p>

            <h2>Overlay and Foreground Service</h2>
            <p>
              deScroll uses overlay and special-use foreground service permissions for visible floating timers, countdown overlays, focus controls, quick pause or resume actions, and ongoing notifications while those experiences are active.
            </p>
            <p>
              These permissions are used so Android can keep the visible overlay and related controls running reliably. They are not used to collect unrelated background activity.
            </p>

            <h2>Query All Packages Permission</h2>
            <p>
              deScroll requests package visibility access so it can identify installed apps where that is necessary for launcher, app selection, blocking, usage labeling, hidden-app management, renamed apps, icon-pack support, notification history labeling, and quick access features.
            </p>
            <p>
              Installed app inventory is used for deScroll's core launcher and device-management functionality. It is not sold and is not shared for advertising or analytics monetization.
            </p>

            <h2>Location and Weather</h2>
            <p>
              If you enable weather and grant approximate location access, deScroll stores your coarse latitude and longitude locally so it can refresh weather on the home screen.
            </p>
            <p>
              To fetch weather, deScroll sends latitude and longitude to Open-Meteo. The returned temperature is stored locally. Location is not used for advertising.
            </p>

            <h2>Accounts, AI Helper, Support, and Subscriptions</h2>
            <p>
              Anonymous device authentication is automatically handled in the background for AI Helper, support tickets, and premium access. We do not require you to create an account with an email address or password.
            </p>
            <p>
              When you use AI Helper, your message and selected context needed to answer your request may be sent to The War Room backend and AI service providers. If you ask about your usage data, deScroll may include a limited analytics summary, such as app names, package names, usage duration, scroll counts, dates, and configured focus or blocking settings relevant to your question.
            </p>
            <p>
              Support tickets send the message and metadata you provide so the support team can reply. Subscription features send purchase and status data needed to verify premium access through Google Play and maintain entitlement records.
            </p>

            <h2>How We Use Information</h2>
            <p>We use information to operate, secure, improve, and support deScroll.</p>
            <ul>
              <li>Provide core app functionality and premium features.</li>
              <li>Maintain subscriptions, restore purchases, and prevent abuse or fraud.</li>
              <li>Respond to support requests and service inquiries.</li>
              <li>Answer AI Helper requests and maintain account-linked chat history when you use that feature.</li>
              <li>Fetch weather when you enable weather and grant location permission.</li>
              <li>Analyze reliability, crashes, performance, and high-level feature usage trends.</li>
              <li>Comply with legal obligations and enforce our terms.</li>
            </ul>

            <h2>Sharing and Third Parties</h2>
            <p>We do not sell personal data. We may rely on service providers and platform partners that process data on our behalf or provide services you choose to use.</p>
            <ul>
              <li>Google/Firebase services for authentication, analytics, crash reporting, and infrastructure.</li>
              <li>Google Play Billing for subscription purchase and entitlement handling.</li>
              <li>The War Room backend and cloud providers used to operate AI Helper, support tickets, subscriptions, and admin tools.</li>
              <li>AI service providers used to generate AI Helper responses when you use the AI feature.</li>
              <li>Open-Meteo for weather requests when weather is enabled.</li>
              <li>Authorities or other parties where disclosure is required by law, legal process, or to protect rights, safety, and security.</li>
            </ul>

            <h2>Local Storage, Backup, and Retention</h2>
            <p>
              Local deScroll data, including preferences, selected apps, usage records, notification history, and chat history, remains on your device unless you use features that send selected data off-device as described above.
            </p>
            <p>
              Android backup or device transfer may include app data depending on your device and Google backup settings. You can manage backup behavior in Android system settings.
            </p>
            <p>
              Cloud-backed data is retained only as long as needed to provide the service, maintain account and subscription records, respond to support requests, troubleshoot reliability issues, prevent abuse, comply with law, and enforce our terms.
            </p>

            <h2>Your Choices</h2>
            <p>You can control some data practices directly through your device settings, Google Play account, and the permissions or product settings you choose inside the app.</p>
            <ul>
              <li>Review or revoke device permissions in Android settings.</li>
              <li>Manage or cancel subscriptions in Google Play Subscriptions.</li>
              <li>Limit or stop use of optional features by disabling them in the app.</li>
              <li>Delete local app data through Android app storage settings if you want to remove data stored on your device.</li>
              <li>Contact support through in-app Support Tickets or official product channels to ask privacy questions or request deletion of account-linked cloud data, subject to legal, security, billing, and abuse-prevention retention needs.</li>
            </ul>

            <h2>Security</h2>
            <p>
              We use reasonable technical and organizational safeguards intended to protect information processed by deScroll. No storage or transmission method is completely secure, so we cannot guarantee absolute security.
            </p>

            <h2>International Processing</h2>
            <p>
              Service providers used for authentication, billing, cloud infrastructure, support, weather, analytics, crash reporting, or AI features may process information in countries other than your own. Where required, we rely on appropriate legal mechanisms and provider safeguards for those transfers.
            </p>

            <h2>Account Data and Deletion Requests</h2>
            <p>
              To request access to or deletion of account-linked cloud data, email <a href="mailto:sudoajay@gmail.com">sudoajay@gmail.com</a> and provide your anonymous device ID (available in the app settings) so we can identify your records. We do not collect emails, so we cannot look up your data by email address. Some billing, fraud-prevention, security, support, or legal records may be retained where permitted or required.
            </p>

            <h2>Children</h2>
            <p>deScroll is not intended for children under the age required by applicable law to provide valid consent, unless a parent or guardian has authorized use where permitted.</p>

            <h2>Policy Changes</h2>
            <p>We may update this Privacy Policy from time to time. When we do, we will revise the last updated date on this page. Continued use of the service after an update means the revised policy applies going forward.</p>

            <h2>Contact</h2>
            <p>
              For privacy questions or requests, contact Ajay Singh / sudoajay at <a href="mailto:sudoajay@gmail.com">sudoajay@gmail.com</a>.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
