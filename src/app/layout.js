import "./globals.css";

// Metadata stays close to the app shell so the clone keeps a stable public identity.
export const metadata = {
  metadataBase: new URL("https://riseatseven.com"),
  title: {
    default: "Rise at Seven | Homepage Clone",
    template: "%s | Rise at Seven Clone",
  },
  description: "Phase-based Next.js clone of the Rise at Seven homepage.",
  applicationName: "Rise at Seven Clone",
  referrer: "no-referrer-when-downgrade",
  alternates: {
    canonical: "/",
  },
};

// Theme color moves into viewport metadata in Next.js so the browser chrome uses the reference palette.
export const viewport = {
  themeColor: "#efeeec",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
