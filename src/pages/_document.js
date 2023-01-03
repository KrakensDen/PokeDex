import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
import {
  getColorModeInitScriptElement,
  ServerStyleSheet,
} from '@xstyled/styled-components'

export default class MyDocument extends Document {
  /**
   * https://styled-components.com/docs/advanced#nextjs
   */
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  /**
   * https://xstyled.dev/docs/dark-mode/#next
   */
  render() {
    return (
      <Html>
        <Head />
        <body>
          {getColorModeInitScriptElement()}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}