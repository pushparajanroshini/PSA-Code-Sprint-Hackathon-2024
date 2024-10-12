import { mdiRobotHappy} from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement, useState } from 'react'
import Button from '../components/Button'
import CardBox from '../components/CardBox'
import LayoutAuthenticated from '../layouts/Authenticated'
import NotificationBar from '../components/NotificationBar'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import { getPageTitle } from '../config'

const ChatbotPage = () => {

  return (
    <>
      <Head>
        <title>{getPageTitle('Chatbot')}</title>
      </Head>

      <SectionMain>

        <SectionTitleLineWithButton icon={mdiRobotHappy} title="Chatbot" >
        <Button color="contrast" label={`New Chat`} />
        </SectionTitleLineWithButton>


      </SectionMain>
    </>
  )
}

ChatbotPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default ChatbotPage
