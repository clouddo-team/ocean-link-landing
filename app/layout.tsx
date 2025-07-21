import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OceanLink - Maritime CRM Platform",
  description:
    "Comprehensive CRM platform for maritime talent acquisition and management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3DQB0GW8X8"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3DQB0GW8X8');
              // Custom helper for form submission tracking
              window.trackFormSubmit = function() {
                if (typeof window.gtag === 'function') {
                  window.gtag('event', 'form_submit', {
                    event_category: 'Contact',
                    event_label: 'Contact Form',
                  });
                }
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
