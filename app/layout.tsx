'use client';

import { Inter } from 'next/font/google';
import './globals.css';

const nameDomain = "https://www.cddystz.com";

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

function rank() {
    return {
      __html: `{
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "https://www.cddystz.com",
    "operatingSystem": "ANDROID",
    "applicationCategory": "GameApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "7143729"
    },
	"review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
	"author": {
            "@type": "Person",
            "name": "Pubgtoto : Slot RTP Paling Tinggi Dan RTP Mahjong Ways 2 Tertinggi Hari Ini",
            "reviewBody": "Pubgtoto : Slot RTP Paling Tinggi Dan RTP Mahjong Ways 2 Tertinggi Hari Ini, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!"
          }
        },
    "offers": {
      "@type": "Offer",
      "price": "10000",
      "priceCurrency": "IDR"
    }
  }
  `,
    };
  }

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-browser="chrome">
      <head>
        <meta charSet="utf-8" />
        <title>Pubgtoto : Slot RTP Paling Tinggi Dan RTP Mahjong Ways 2 Tertinggi Hari Ini</title>
        <meta name="description" content="Pubgtoto terus menjadi pilihan utama para penggemar judi online berkat koleksi game slot dengan RTP Return to Player yang tinggi. Slot dengan RTP tertinggi menawarkan peluang kemenangan yang lebih besar, sehingga memberikan pengalaman bermain yang lebih menguntungkan bagi pemain. Di antara berbagai pilihan permainan slot" />
        <meta name="keywords" content="Pubgtoto, Slot RTP Paling Tinggi, Mahjong Ways 2, Slot Deposit 10000 Via Dana, Slot Terpercaya Via Dana, Deposit Dana 5RB, Cara Deposit Slot Via Gopay, Slot Rekening Dana, Slot Depo 10K Gopay, Slot Saldo Dana 5000" />
        <meta name="google-site-verification" content="NsAsIgvpMWNxCGsscRX9QmpTU0hqvJj1fxxTpXzkNzw" />
        <meta name="application-name" content="pubgtoto" />
        <link rel="author" href={nameDomain} />
        <link rel="canonical" href={nameDomain} />
        <meta name="author" content="pubgtoto" />
        <meta name="publisher" content="pubgtoto" />
        <meta name="copyright" content="pubgtoto" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="category" content="slot" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Indonesia" />
        <meta name="language" content="id-ID" />
        <meta name="rating" content="general" />
        <meta name="geo.country" content="ID" />
        <meta name="page-locale" content="id,en" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="distribution" content="global" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta property="og:title" content="Pubgtoto : Slot RTP Paling Tinggi Dan RTP Mahjong Ways 2 Tertinggi Hari Ini" />
        <meta property="og:description" content="Pubgtoto : Slot RTP Paling Tinggi Dan RTP Mahjong Ways 2 Tertinggi Hari Ini, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!" />
        <meta property="og:url" content={nameDomain} />
        <meta property="og:site_name" content="pubgtoto" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:image" content={nameDomain} />
        <meta property="og:image:width" content="840" />
        <meta property="og:image:height" content="480" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="pubgtoto" />
        <meta name="twitter:title" content="Pubgtoto : Slot RTP Paling Tinggi Dan RTP Mahjong Ways 2 Tertinggi Hari Ini" />
        <meta name="twitter:description" content="Pubgtoto : Slot RTP Paling Tinggi Dan RTP Mahjong Ways 2 Tertinggi Hari Ini, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!" />
        <meta name="twitter:image" content={nameDomain} />
        <link rel="icon" href="/favicon.ico?favicon.088e6c96.ico" sizes="256x256" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="next-size-adjust" content="" />
        <script type="application/ld+json" dangerouslySetInnerHTML={rank()} key="product-jsonld" />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
