import { NextPage } from 'next'
import Head from 'next/head'

import CardNoImage from '../components/molecules/CardNoImage'
import PageTemplate from '../components/templates/PageTemplate'

const Terms: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          利用規約 | 株式会社Women&apos;s Future Center | 在宅ワーク支援 システム開発
          ブランディングデザイン
        </title>
      </Head>
      <PageTemplate>
        <Body />
      </PageTemplate>
    </>
  )
}

export default Terms

const Body = () => {
  return (
    <>
      <div className='lg:p-10 p-4 flex flex-col justify-center items-center'>
        <div className='mb-8'>
          <h1 className='xl:text-6xl sm:text-4xl text-2xl font-semibold text-center text-center'>
            利用規約
          </h1>
        </div>
        <CardNoImage>
          <div className='flex flex-col'>
            <div className='xl:p-4 p-2'>
              <p className='xl:text-2xl sm:text-lg text-base font-normal'>
                本利用規約（以下「本規約」といいます。）には、株式会社Women&apos;s Future
                Center提供サービス（以下「当サービス」といいます。）の利用条件及び当社とユーザーの皆様との間の権利義務関係が定められています。
              </p>
              <p className='xl:text-2xl sm:text-lg text-base font-normal'>
                当サービスの利用に際しては、本規約の全文をお読みいただいたうえで、本規約に同意いただく必要があります。
              </p>
            </div>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              第1条（適用）
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              本規約は、当サービスの利用条件及び当サービスの利用に関する当社とユーザーとの間の権利義務関係を定めることを目的とし、ユーザーと当社との間の当サービスの利用に関わる一切の関係に適用されます。本規約の内容と、本規約外における当サービスの説明等とが異なる場合は、当サービスの説明等が優先して適用されるものとします。
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              第2条（定義）
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              本規約において使用する以下の用語は、各々以下に定める意味を有するものとします。①「サービス利用契約」とは、本規約及び当社とユーザーの間で締結する、当サービスの利用契約を意味します。②「知的財産権」とは、著作権、特許権、実用新案権、意匠権、商標権その他の知的財産権（それらの権利を取得し、又はそれらの権利につき登録等を出願する権利を含みます。）を意味します。③「投稿データ」とは、ユーザーが当サービスを利用して投稿その他送信するコンテンツ（文章、画像、動画その他のデータを含みますがこれらに限りません。）を意味します。④「当社」とは、株式会社Women
              &apos;s Future
              Centerを意味します。⑤「当社ウェブサイト」とは、そのドメインが「wfc-wa.com」及び「wfc-bloom.com」である、当社が運営するウェブサイト（理由の如何を問わず、当社のウェブサイトのドメイン又は内容が変更された場合は、当該変更後のウェブサイトを含みます。）、を意味します。⑥「当サービス」とは、株式会社Women
              &apos;s Future Centerが運営する請負型
              及びそれに関連するサービスの総称を意味します。⑦「ユーザー」とは、第3条に基づいて当サービスの利用者としての登録がなされた個人を意味します。⑧「利用企業」とは、当社に対して案件と人材のマッチングを委託した企業をいいます。⑨「利用者」とは、当サービスを利用する全ての方を意味します。
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              第3条（登録）
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              当サービスの利用を希望する者（以下「登録希望者」といいます。）は、本規約を遵守することに同意し、かつ当社の定める一定の情報（以下「登録事項」といいます。）を当社の定める方法で当社に提供することにより、当社に対し、当サービスの利用の登録を申請することができます。当社は、当社の基準に従って、前項に基づいて登録申請を行った登録希望者（以下「登録申請者」といいます。）の登録の可否を判断し、当社が登録を認める場合にはその旨を登録申請者に通知します。登録申請者のユーザーとしての登録は、当社が本項の通知を行ったことをもって完了したものとします。前項に定める登録の完了時に、サービス利用契約がユーザーと当社の間に成立し、ユーザーは当サービスを本規約に従い利用することができるようになります。当社は、登録申請者が、以下の各号のいずれかの事由に該当する場合は、登録及び再登録を拒否することがあり、またその理由について一切開示義務を負いません。①当社に提供した登録事項の全部又は一部につき虚偽、誤記又は記載漏れがあった場合②未成年者、成年被後見人、被保佐人又は被補助人のいずれかであり、法定代理人、後見人、保佐人又は補助人の同意等を得ていなかった場合③反社会的勢力等（暴力団、暴力団員、右翼団体、反社会的勢力、その他これに準ずる者を意味します。以下同じ。）である、又は資金提供その他を通じて反社会的勢力等の維持、運営若しくは経営に協力若しくは関与する等反社会的勢力等との何らかの交流若しくは関与を行っていると当社が判断した場合④登録希望者が過去当社との契約に違反した者又はその関係者であると当社が判断した場合⑤第10条に定める措置を受けたことがある場合⑥その他、当社が登録を適当でないと判断した場合
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              第4条（登録事項の正確性）
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              ユーザーは、当社及び利用企業に対し、個人情報を不備・齟齬のないよう正確に提供するものとします。ユーザーが提供した個人情報が正確でなかったこと、及び、その内容の不備・齟齬などに起因して利用企業、その他の第三者から何らかの異議、請求若しくは要求などがなされた場合には、自己の費用負担と責任で対処するものとし、当社に一切の迷惑をかけないことを保証するものとします。ユーザーは、登録事項に変更があった場合、当社の定める方法により当該変更事項を遅滞なく当社に通知するものとします。ユーザーは、当社が求めた場合には、以下の書類を速やかに提出するものとします。①氏名・住所等、ユーザーであることを特定・確認するための本人確認書類②在留資格を確認するための在留カード又は就労資格証明書等③その他利用企業が提出を求める証明書類
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              第5条（パスワード及びユーザーIDの管理）
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              ユーザーは、当社が当サービスに関連してパスワード又はユーザーIDを発行した場合は、当該パスワード及びユーザーIDを自らの責任において使用・管理し、いかなる場合も第三者に使用させ、又は譲渡してはならないものとします。
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              第6条（サービスの提供）
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              当社は、以下のサービスの中からユーザーに適切なサービスを当社の判断で提供するものとします。①ユーザーから受領したお申込み内容と利用企業から受領する求人条件との照合、並びに照合結果に基づく求人情報の提供②利用企業から受領する求人条件に適合度が高いと当社が判断する利用者に対する求人応募勧誘③電話や面談によるマッチング相談の実施⑤その他利用者に有益と当社が判断する一切のサービス
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              第7条（禁止事項）
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              ユーザーは、当サービスの利用にあたり、以下の各号のいずれかに該当する行為又は該当すると当社が判断する行為をしてはなりません。①法令に違反する行為又は犯罪行為に関連する行為②当社、当サービスの他の利用者又はその他の第三者に対する詐欺又は脅迫行為③公序良俗に反する行為④当社、当サービスの他の利用者又はその他の第三者の知的財産権、肖像権、プライバシーの権利、名誉、その他の権利又は利益を侵害する行為⑤当サービスを通じ、以下に該当し、又は該当すると当社が判断する情報を当社又は当サービスの他の利用者に送信する行為過度に暴力的又は残虐な表現を含む情報コンピューター・ウィルスその他の有害なコンピューター・プログラムを含む情報当社、当サービスの他の利用者又はその他の第三者の名誉又は信用を毀損する表現を含む情報過度にわいせつな表現を含む情報差別を助長する表現を含む情報自殺、自傷行為を助長する表現を含む情報薬物の不適切な利用を助長する表現を含む情報反社会的な表現を含む情報チェーンメール等の第三者への情報の拡散を求める情報他人に不快感を与える表現を含む情報⑥当サービスのネットワーク又はシステム等に過度な負荷をかける行為⑦当サービスの運営を妨害するおそれのある行為⑧当社のネットワーク又はシステム等に不正にアクセスし、又は不正なアクセスを試みる行為⑨第三者に成りすます行為⑩当サービスの他の利用者のID又はパスワードを利用する行為⑪当社が事前に許諾しない当サービス上での宣伝、広告、勧誘、又は営業行為⑫当サービスの他の利用者の情報の収集を目的とした行為⑬当社、当サービスの他の利用者又はその他の第三者に不利益、損害、不快感を与える行為⑭反社会的勢力等への利益供与⑮前各号の行為を直接又は間接に惹起し、又は容易にする行為⑯利用企業又は利用企業であった企業と、当サービスを利用せずに、直接に雇用契約を締結する行為及びその勧誘をする行為⑰当社の承諾を得ずに、当サービスと同様のサービスを提供する行為⑱その他、当社が不適切と判断する行為
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              第8条（当サービスの停止等）
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              当社は、以下のいずれかに該当する場合には、ユーザーに事前に通知することなく、当サービスの全部又は一部の提供を停止又は中断することができるものとします。①当サービスに係るコンピューター・システムの点検又は保守作業を緊急に行う場合②クラウドベンダー・その他社外サーバー管理者による保守､
              点検又は更新を行う場合③コンピューター、通信回線等が事故により停止した場合④地震、落雷、火災、風水害、停電、天災地変などの不可抗力により当サービスの運営ができなくなった場合⑤その他、当社が停止又は中断を必要と判断した場合当社は、本条に基づき当社が行った措置に基づきユーザーに生じた損害について一切の責任を負いません。
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              第9条（権利帰属）
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              当社ウェブサイト及び当サービスに関する知的財産権関係は全てベースとなるソフトウェア等のライセンスを継承します。ユーザーは、投稿データについて、自らが投稿その他送信することについての適法な権利を有していること、及び投稿データが第三者の権利を侵害していないことについて、当社に対し表明し、保証するものとします。ユーザーは、当社及び当社から権利を継承し又は許諾された者に対して著作者人格権を行使しないことに同意するものとします。
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              第10条（登録抹消等）
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              当社は、ユーザーが、以下の各号のいずれかの事由に該当する場合は、事前に通知又は催告することなく、投稿データを削除し若しくは当該ユーザーについて当サービスの利用を一時的に停止し、又はユーザーとしての登録を抹消、若しくはサービス利用契約を解除することができます。①本規約のいずれかの条項に違反した場合②登録事項に虚偽の事実があることが判明した場合③支払停止若しくは支払不能となり、又は破産手続開始、民事再生手続開始、会社更生手続開始、特別清算開始若しくはこれらに類する手続の開始の申立てがあった場合④第3条第4項各号に該当し、又は第7条各号に該当する行為をした場合⑤その他、当社が当サービスの利用、ユーザーとしての登録、又はサービス利用契約の継続を適当でないと判断した場合前項各号のいずれかの事由に該当した場合、ユーザーは、当社に対して負っている債務の一切について当然に期限の利益を失い、直ちに当社に対して全ての債務の支払を行わなければなりません。当社は、本条に基づき当社が行った行為によりユーザーに生じた損害について一切の責任を負いません。
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              第11条（退会）
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              ユーザーは、当社所定の方法で当社に通知することにより、当サービスから退会し、自己のユーザーとしての登録を抹消することができます。退会にあたり、当社に対して負っている債務が有る場合は、ユーザーは、当社に対して負っている債務の一切について当然に期限の利益を失い、直ちに当社に対して全ての債務の支払を行わなければなりません。退会後の個人情報の取り扱いについては、第17条の規定に従うものとします。
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              第12条（当サービスの内容の変更、終了）
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              当社は、当社の都合により、当サービスの内容を変更し、又は提供を終了することができます。当社が当サービスの提供を終了する場合、当社はユーザーに事前に通知するものとします。当社は、本条に基づき当社が行った措置に基づきユーザーに生じた損害について一切の責任を負いません。
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              第13条（保証の否認）
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              当社は、当サービスがユーザーの特定の目的に適合すること、期待する機能・商品的価値・正確性・有用性を有すること、ユーザーによる当サービスの利用がユーザーに適用のある法令又は業界団体の内部規則等に適合すること、及び不具合が生じないことについて、何ら保証するものではありません。当社は、ユーザーから受領したお申込み内容と利用企業が希望する求人条件とを照合しますが、検討基準や判断理由などをお伝えすることはできません。また、ユーザーから求人への応募依頼を受け付けた場合であっても、利用企業より示された選考基準などを参考にして当該求人への適合度合いを判断した結果、当社から当該求人への推薦を行わない場合や、利用企業に代わり求人条件に適合しない旨のご連絡をする場合があります。当社は、利用企業の労働条件その他契約内容の確認においては、ユーザーの希望に応じ連絡を取次ぎますが、ユーザーは、ユーザーの責任において、利用企業に労働条件その他契約内容を直接確認した後に契約を結ぶものとし、当社がユーザーに通知した労働条件が、当該契約の詳細を最終的に保証するものではないことを承諾します。
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              第14条（反社会的勢力の排除）
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              ユーザーは、反社会的勢力（暴力団、暴力団員、暴力団員でなくなった時から5年を経過しない者、暴力団準構成員、暴力団関係企業、総会屋等、社会運動等標ぼうゴロ又は特殊知能暴力集団等、その他これらに準ずる者をいいます。）に該当しないこと、また暴力的行為、詐術・脅迫行為、業務妨害行為等違法行為を行わないことを、将来にわたっても表明するものとします。かかる表明に違反した場合には、異議なく当サービスの提供の終了を受け入れるものとします。
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              第15条（免責）
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              当社は、当社による当サービスの提供の中断、停止、終了、利用不能又は変更、ユーザーが当サービスに送信したメッセージ又は情報の削除又は消失、ユーザーの登録の抹消、当サービスの利用による登録データの消失又は機器の故障若しくは損傷、その他当サービスに関してユーザーが被った損害（以下「ユーザー損害」といいます。）につき、賠償する責任を一切負わないものとします。何らかの理由により当社が責任を負う場合であっても、当社は、ユーザー損害につき、過去12ヶ月間にユーザーが当社に支払った対価の金額を超えて賠償する責任を負わないものとし、また、付随的損害、間接損害、特別損害、将来の損害及び逸失利益にかかる損害については、賠償する責任を負わないものとします。当サービス又は当社ウェブサイトに関連してユーザーと他のユーザー又は第三者との間において生じた取引、連絡、紛争等については、当社は一切責任を負いません。
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              第16条（機密保持）
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              ユーザーは、当サービスに関連して当社がユーザーに対して秘密に取り扱うことを求めて開示した非公知の情報について、当社の事前の書面による承諾がある場合を除き、秘密に取り扱うものとします。
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              第17条（個人情報の取り扱い）
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              当社によるユーザーの個人情報の取り扱いについては、「個人情報の取り扱い」の定めによるものとし、ユーザーはこの「個人情報の取り扱い」に従って当社がユーザーの利用者情報を取り扱うことについて同意するものとします。
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              第18条（損害賠償責任）
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              利用者が本規約の各事項に違反して、当社、関係者又は第三者に損害を与えた場合は、利用者はその損害を賠償するものとします。
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              第19条（本規約等の変更）
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              当社は、本規約を変更できるものとします。当社は、本規約を変更した場合には、ユーザーに当該変更内容を通知するものとし、当該変更内容の通知後、ユーザーが当サービスを利用した場合又は当社の定める期間内に登録抹消の手続をとらなかった場合には、ユーザーは、本規約の変更に同意したものとみなします。
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              第20条（連絡又は通知）
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              当サービスに関する問い合わせその他ユーザーから当社に対する連絡又は通知、及び本規約の変更に関する通知その他当社からユーザーに対する連絡又は通知は、当社の定める方法で行うものとします。
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              第21条（サービス利用契約上の地位の譲渡等）
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              ユーザーは、当社の書面による事前の承諾なく、サービス利用契約上の地位又は本規約に基づく権利若しくは義務につき、第三者に対し、譲渡、移転、担保設定、その他の処分をすることはできません。当社は当サービスにかかる事業を他社に譲渡した場合には、当該事業譲渡に伴いサービス利用契約上の地位、本規約に基づく権利及び義務並びにユーザーの登録事項その他の顧客情報を当該事業譲渡の譲受人に譲渡することができるものとし、ユーザーは、かかる譲渡につき本項において予め同意したものとします。なお、本項に定める事業譲渡には、通常の事業譲渡のみならず、会社分割その他事業が移転するあらゆる場合を含むものとします。
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              第22条（分離可能性）
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              本規約のいずれかの条項又はその一部が、消費者契約法その他の法令等により無効又は執行不能と判断された場合であっても、本規約の残りの規定及び一部が無効又は執行不能と判断された規定の残りの部分は、継続して完全に効力を有するものとします。
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              第23条（準拠法及び管轄裁判所）
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              本規約及びサービス利用契約の準拠法は日本法とします。なお、当サービスにおいて物品の売買が発生する場合であっても、国際物品売買契約に関する国際連合条約の適用を排除することに合意します。本規約又はサービス利用契約に起因し、又は関連する一切の紛争については、奈良県地方裁判所又は奈良県簡易裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </div>
        </CardNoImage>
      </div>
    </>
  )
}
