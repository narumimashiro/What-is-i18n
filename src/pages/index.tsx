import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'

import styles from '@/styles/components/Home.module.sass'

// MaterialUI
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'

const Home = () => {

  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(true)
  const router = useRouter()
  const locale = router.query.locale || 'ja'

  useEffect(() => {
    if (locale && typeof (locale) === 'string') {
      i18n.changeLanguage(locale)
    }
  }, [locale, i18n])

  const handlerClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Head>
        <title>B.T.W | {t('top.FISRTLY')}</title>
        <meta name="description" content="about i18n" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Modal
          open={open}
          onClose={handlerClose}
        >
          <Box
            className={styles.modal}
          >
            <Typography
              sx={{'fontWeight': 'bold', 'margin': '10px 0'}}
              variant='h4'
            >
              {t('top.FISRTLY')}
            </Typography>
            <Typography
              variant='h6'
            >
              {t('top.FISRTLY')}
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  )
}
export default Home