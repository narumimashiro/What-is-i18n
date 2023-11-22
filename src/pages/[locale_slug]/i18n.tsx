import Head from 'next/head'
import { useTranslation } from 'next-i18next'

import styles from '@/styles/components/i18n.module.sass'

const I18n = () => {

  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>B.T.W | {t('i18n.PAGE_TITLE')}</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <p className={styles['text-title']}>{t('i18n.PAGE_TITLE')}</p>
        <section className={styles['page-section']}>
          <p className={`double-underline ${styles['text-section-title']}`}>{t('i18n.sec_i18n')}</p>
          <p className={styles['text-section-context']}>{t('i18n.sec_i18n_context')}</p>
        </section>
        <section className={styles['page-section']}>
          <p className={`double-underline ${styles['text-section-title']}`}>{t('i18n.sec_l10n')}</p>
          <p className={styles['text-section-context']}>{t('i18n.sec_l10n_context')}</p>
        </section>
        <section className={styles['page-section']}>
          <p className={`double-underline ${styles['text-section-title']}`}>{t('i18n.sec_message')}</p>
          <p className={styles['text-section-context']}>{t('i18n.sec_message_context')}</p>
        </section>
        <section className={styles['page-section']}>
          <p className={`double-underline ${styles['text-section-title']}`}>{t('i18n.sec_multilang')}</p>
          <p className={styles['text-section-context']}>{t('i18n.sec_multilang_context')}</p>
        </section>
        <section className={styles['page-section']}>
          <p className={`double-underline ${styles['text-section-title']}`}>{t('i18n.sec_langcode')}</p>
          <p className={styles['text-section-context']}>{t('i18n.sec_langcode_context')}</p>
        </section>
        <section className={styles['page-section']}>
          <p className={`double-underline ${styles['text-section-title']}`}>{t('i18n.sec_wordcode')}</p>
          <p className={styles['text-section-context']}>{t('i18n.sec_wordcode_context')}</p>
        </section>
      </div>
    </>
  )
}

export default I18n