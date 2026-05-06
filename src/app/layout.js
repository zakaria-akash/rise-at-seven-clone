import "./globals.css";

export const metadata = {
  title: "Rise At Seven",
  description: "Rise At Seven Homepage Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
