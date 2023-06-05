import React from 'react'
import styles from './index.module.scss'

import MainSwiper from '@/components/home/MainSwiper'
import News from '@/components/home/News'
import ConnectAccountBanner from '@/components/home/ConnectAccountBanner'
import Softwares from '@/components/home/Softwares'
import OnlineStore from '@/components/home/OnlineStore'

export default function Home() {
  return (
    <div className={styles.container}>
      <MainSwiper />
      <News />
      <ConnectAccountBanner />
      <Softwares />
      <OnlineStore />
    </div>
  )
}
