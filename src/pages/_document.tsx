import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='ja'>
      <Head>
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script async src='https://www.googletagmanager.com/gtag/js?id=UA-58518839-1' />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '[Tracking ID]');
        `,
          }}
        />
        <meta name='Keywords' content="Women's Future Center" />
        <meta name='Keywords' content='ウィメンズフューチャーセンター' />
        <meta name='Keywords' content="株式会社Women's Future Center" />
        <meta name='Keywords' content='株式会社ウィメンズフューチャーセンター' />
        <meta name='Keywords' content="女性起業支援のWomen's Future Center" />
        <meta name='Keywords' content='女性起業支援のウィメンズフューチャーセンター' />
        <meta name='Keywords' content="起業支援 Women's Future Center" />
        <meta name='Keywords' content='起業支援 ウィメンズフューチャーセンター' />
        <meta
          name='Keywords'
          content='日本 関西 近畿 奈良 奈良県 奈良市 システム開発 DX支援 デジタルトランスフォーメーション デザイン 在宅ワーカー 副業 起業支援 女性起業支援 中小企業支援 フリーランス'
        />
        <meta
          name='Description'
          content="女性の起業支援を行うWomen's Future Center。400名以上の女性ネットワーク会員が自主企画講座を開催! 在宅ワーカー支援事業も行っております｡"
        />
        <meta
          name='Description'
          content="株式会社Women's Future Centerは、奈良県でシステム開発、ブランディングデザインによる在宅ワークの仕事を創出し、誰もが働きやすい社会を実現します。"
        />
        <meta
          name='Description'
          content="女性起業支援のWomen's Future Center(ウィメンズフューチャーセンター)
          女性の起業支援を行うWomen's Future Center。400名以上の女性ネットワーク会員が自主企画講座を開催!
          在宅ワーカー支援事業も行っております｡"
        />
        <meta charSet='UTF-8' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
