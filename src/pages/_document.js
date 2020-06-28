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
          <meta
            property="og:title"
            content="Felipe Urbanski - Fullstack Developer"
            key="title"
          />
          <meta
            property="og:description"
            content="Essa é a minha página web, aqui você vai encontrar dados para contato, skills, portifólio e redes sociais."
            key="description"
          />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,900&display=swap"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap"
            as="font"
            crossOrigin=""
          />
          <NavBar />
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
