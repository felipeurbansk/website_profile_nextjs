import Document, { Html, Head, Main, NextScript } from "next/document";

import NavBar from "./components/NavBar";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <title>Felipe Urbanski - Fullstack Developer</title>
          <meta
            property="og:title"
            content="Felipe Urbanski - Fullstack Developer"
            key="title"
          />
          <meta
            property="og:description"
            content="Página web pessoal, aqui você encontra dados para contato, skills, portifólio e redes sociais."
            key="description"
          />
          <meta name="robots" content="index, follow" />
          <meta charset="UTF-8" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-171601637-1"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());
            
              gtag('config', 'UA-171601637-1');
              `,
            }}
          ></script>
          {/* <NavBar /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
