import { mdiMonitorCellphone, mdiTableBorder, mdiTableOff } from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import Button from '../components/Button'
import CardBox from '../components/CardBox'
import CardBoxComponentEmpty from '../components/CardBox/Component/Empty'
import LayoutAuthenticated from '../layouts/Authenticated'
import NotificationBar from '../components/NotificationBar'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import TableSampleClients from '../components/Table/SampleClients'
import { getPageTitle } from '../config'

const GroupsPage = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Groups')}</title>
      </Head>
      <SectionMain>

        <NotificationBar color="success" icon={mdiMonitorCellphone}>
          <b>Your group has earned 3 points this week!</b>
        </NotificationBar>

        <SectionTitleLineWithButton icon={mdiTableOff} title="View All Groups" />

        <CardBox className="mb-6" hasTable>
          <TableSampleClients />
        </CardBox>

        <SectionTitleLineWithButton icon={mdiTableOff} title="Empty variation" />

        <CardBox>
          <CardBoxComponentEmpty />
        </CardBox>
      </SectionMain>
    </>
  )
}

GroupsPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default GroupsPage
