import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

/**
 * @description SEO를 위해 본인의 정보로 수정해주세요.
 */
const DEFAULT_SEO = {
  title: "유승권 | Embedded Dev",
  description: "안녕하세요, 임베디드 개발자 홍길동입니다.",
  canonical: "https://blackgetter.github.io/resume/",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://blackgetter.github.io/resume/",
    title: "유승권 | Embedded Dev",
    site_name: "유승권 | Embedded Dev",
    images: [
      {
        url: "/share.png",
        width: 285,
        height: 167,
        alt: "유승권 | Embedded Dev",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  additionalMetaTags: [
    {
      name: "application-name",
      content: "유승권 | Embedded Dev",
    },
    {
      name: "msapplication-tooltip",
      content: "유승권 | Embedded Dev",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
