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
import Button from '@mui/material/Button'

const Home = () => {

  const { t } = useTranslation()
  const [open, setOpen] = useState(true)
  const router = useRouter()
  const firstPage = `${router.pathname}/ja-jp/i18n`

  useEffect(() => {
    router.prefetch(firstPage)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const contextStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '25px'
  }

  const handlerModal = () => {
    setOpen(false)
    router.push(firstPage)
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
          onClose={handlerModal}
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
              sx={{...contextStyle}}
              variant='h6'
            >
              <span className={styles.context}>
                {t('top.DESCRIPTION')}
              </span>
            </Typography>
            <Button
              variant='text'
              onClick={handlerModal}
            >
              {t('common.OK')}
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  )
}
export default Home