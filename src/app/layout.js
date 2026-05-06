import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://riseatseven.com"),
  title: {
    default: "Rise at Seven | Award Winning Search-First Content Marketing Agency",
    template: "%s | Rise at Seven",
  },
  description:
    "Rise at Seven is a search-first content marketing agency with offices in London, Sheffield, Manchester & New York that specialises in SEO, Digital PR, content marketing and Influencer.",
  applicationName: "Rise at Seven",
  referrer: "no-referrer-when-downgrade",
  alternates: { canonical: "/" },
};

export const viewport = {
  themeColor: "#efeeec",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Instrument Sans — closest open-source substitute for Saans */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome (for arrow-up-right, magnifying-glass etc.) */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
        />
        {/* Swiper CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
