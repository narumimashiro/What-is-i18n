import Head from 'next/head'
import { useTranslation } from 'next-i18next'

const Home = () => {

  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>B.T.W | {t('top.FISRTLY')}</title>
        <meta name="description" content="about i18n" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Hello, NextJs!!!</h1>
      </div>
    </>
  )
}
export default Home