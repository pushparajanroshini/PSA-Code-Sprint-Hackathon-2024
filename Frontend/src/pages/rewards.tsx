import { mdiCash, mdiRobotHappy} from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement, useState } from 'react'
import Button from '../components/Button'
import CardBox from '../components/CardBox'
import CardBoxComponentEmpty from '../components/CardBox/Component/Empty'
import LayoutAuthenticated from '../layouts/Authenticated'
import NotificationBar from '../components/NotificationBar'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import { getPageTitle } from '../config'

const RewardsPage = () => {

  return (
    <>
      <Head>
        <title>{getPageTitle('Rewards')}</title>
      </Head>

      <SectionMain>

        <SectionTitleLineWithButton icon={mdiCash} title="Rewards" >
        <Button color="contrast" label={`Refresh`} />
        </SectionTitleLineWithButton>


      </SectionMain>
    </>
  )
}

RewardsPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default RewardsPage
