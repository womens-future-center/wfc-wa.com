import { NextPage } from 'next'
import Head from 'next/head'

import CardNoImage from '../components/molecules/CardNoImage'
import PageTemplate from '../components/templates/PageTemplate'

const Privacy: NextPage = () => {
  return (
    <>
      <Head>
        <title>個人情報保護方針 | 株式会社Women&apos;s Future Center</title>
      </Head>
      <PageTemplate>
        <Body />
      </PageTemplate>
    </>
  )
}

export default Privacy

const Body = () => {
  return (
    <>
      <div className='lg:p-10 p-4 flex flex-col justify-center items-center'>
        <div className='mb-8'>
          <h1 className='xl:text-6xl sm:text-4xl text-2xl font-semibold text-center text-center'>
            個人情報保護方針
          </h1>
        </div>
        <CardNoImage>
          <div className='flex flex-col'>
            <div className='xl:p-4 p-2'>
              <p className='xl:text-2xl sm:text-lg text-base font-normal'>制定日:2014年5月15日</p>
              <p className='xl:text-2xl sm:text-lg text-base font-normal'>
                最終改訂日:2022年5月8日
              </p>
              <p className='xl:text-2xl sm:text-lg text-base font-normal'>代表者名:栗本 恭子</p>
            </div>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>はじめに</h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              Women&apos;s Future
              Center（以下「WFC（略称）」）は、各種法的サービスのご提供にあたり、お客様の個人情報をお預かりしております。
            </p>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              WFCは、法律を取り扱う国家資格者の事務所として個人情報を保護し、お客様に更なる信頼性と安心感をご提供できるように努めて参ります。
            </p>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              WFCは、個人情報に関する法令を遵守し、個人情報の適切な取り扱いを実現致します。
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              個人情報の取得について
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              WFCは、偽りその他不正の手段によらず適正に個人情報を取得致します。
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              個人情報の利用について
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              WFCは、個人情報を以下の利用目的の達成に必要な範囲内で、利用致します。
            </p>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              以下に定めのない目的で個人情報を利用する場合、あらかじめご本人の同意を得た上で行ないます。
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              お見積のご依頼・ご相談に対する回答及び資料送付、ご注文いただいた商品の発送、
              セミナー情報、各種商品・サービスに関する情報提供 個人情報の安全管理について
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              WFCは、取り扱う個人情報の漏洩、滅失またはき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              個人情報の委託について
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              WFCは、個人情報の取り扱いの全部または一部を第三者に委託する場合は、当該第三者について厳正な調査を行い、取り扱いを委託された個人情報の安全管理が図られるよう、当該第三者に対する必要かつ適切な監督を行います。
            </p>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              また、コンサルティング、プライバシーマーク申請、ISMS申請業務におきまして第三者と共同して業務を遂行する場合に、個人情報の取り扱いを委託する場合があります。
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              個人情報の第三者提供について
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              WFCは、個人情報保護法等の法令に定めのある場合を除き、個人情報をあらかじめご本人の同意を得ることなく、第三者に提供致しません。
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>組織・体制</h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              WFCは、栗本恭子
              を個人情報管理責任者とし、個人情報の適正な管理及び継続的な改善を実施致します。
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              本方針の変更
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              本方針の内容は変更されることがあります。
            </p>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              変更後の本方針については、WFCが別途定める場合を除いて、当サイトに掲載した時から効力を生じるものとします。
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>
              個人情報の開示・訂正等について
            </h1>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              WFCは、ご本人から自己の個人情報についての開示の請求がある場合、速やかに開示を致します。
            </p>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              その際、ご本人であることが確認できない場合には、開示に応じません。
            </p>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              個人情報の内容に誤りがあり、ご本人から訂正・追加・削除の請求がある場合、調査の上、速やかにこれらの請求に対応致します。
            </p>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              その際、ご本人であることが確認できない場合には、これらの請求に応じません。
            </p>
            <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal'>
              WFCの個人情報の取り扱いにつきまして、上記の請求・お問い合わせ等ございましたら、下記までご連絡くださいますようお願い申し上げます。
            </p>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold'>連絡先</h1>
            <div className='border-t border-gray-200'>
              <dl>
                <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='flex justify-center items-center'>
                    <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                      法人名
                    </p>
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                      株式会社Women&apos;s Future Center
                    </p>
                  </dd>
                </div>
                <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='flex justify-center items-center'>
                    <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                      E-mail
                    </p>
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                      info@wfc-wa.com
                    </p>
                  </dd>
                </div>
                <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='flex justify-center items-center'>
                    <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                      TEL
                    </p>
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                      0742-26-5152
                    </p>
                  </dd>
                </div>
                <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='flex justify-center items-center'>
                    <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                      営業時間
                    </p>
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                      月〜金9:00am～5:00pm ※5:00pm以降、土日祝は、予約の場合のみ可
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </CardNoImage>
      </div>
    </>
  )
}
