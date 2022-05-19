import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='ja'>
      <Head>
        <meta
          name='Keywords'
          content="女性起業支援のWomen's Future Center(ウィメンズフューチャーセンター)"
        />
        <meta
          name='Description'
          content="女性の起業支援を行うWomen's Future Center。400名以上の女性ネットワーク会員が自主企画講座を開催! 在宅ワーカー支援事業も行っております｡"
        />
        <meta
          name='Description'
          content="女性起業支援のWomen's Future Center(ウィメンズフューチャーセンター)
          女性の起業支援を行うWomen's Future Center。400名以上の女性ネットワーク会員が自主企画講座を開催!
          在宅ワーカー支援事業も行っております｡"
        />
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
