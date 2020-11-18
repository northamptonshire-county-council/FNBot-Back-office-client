import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <script src="/all.js"></script>
        </Head>
        <body className="js-enabled">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument