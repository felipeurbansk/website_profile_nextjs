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
