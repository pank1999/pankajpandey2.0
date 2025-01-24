import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pankaj Pandey | Software Engineer",
  description:
    "Experienced Software Engineer specializing in full-stack development, cloud architecture, and scalable solutions. View my portfolio to see my projects and skills.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Cloud Architecture",
    "React",
    "Node.js",
    "TypeScript",
    "AWS",
    "Kubernetes",
  ],
  authors: [{ name: "Pankaj Pandey" }],
  creator: "Pankaj Pandey",
  publisher: "Pankaj Pandey",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pankajpandey.dev",
    title: "Pankaj Pandey | Software Engineer",
    description:
      "Experienced Software Engineer specializing in full-stack development, cloud architecture, and scalable solutions.",
    siteName: "Pankaj Pandey Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pankaj Pandey - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pankaj Pandey | Software Engineer",
    description:
      "Experienced Software Engineer specializing in full-stack development, cloud architecture, and scalable solutions.",
    images: ["/images/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code", // You'll need to add this later
  },
  alternates: {
    canonical: "https://pankajpandey.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} antialiased`}>{children}</body>
    </html>
  );
}
