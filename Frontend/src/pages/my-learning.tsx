import {  mdiBook, mdiBookAccount, mdiRobot, mdiLibrary} from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement, useState } from 'react'
import Button from '../components/Button'
import CardBox from '../components/CardBox'
import LayoutAuthenticated from '../layouts/Authenticated'
import NotificationBar from '../components/NotificationBar'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import TableSampleCourses from '../components/Table/SampleCourses'
import TableSampleCompletedCourses from '../components/Table/SampleCompletedCourses'
import { getPageTitle } from '../config'
import { sampleChartData } from '../components/ChartLineSample/config'
import TableSampleNewCourses from '../components/Table/SampleNewCourses'

const MyLearningPage = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('My Learning')}</title>
      </Head>
      <SectionMain>

        <NotificationBar color="info" icon={mdiRobot}>
          <b>Not sure which course to take? Try out the "Suggest a course" feature from our chatbot!</b>
        </NotificationBar>

        <SectionTitleLineWithButton icon={mdiLibrary} title="My Courses" />

        <CardBox className="mb-6" hasTable>
          <TableSampleCourses />
        </CardBox>

        <SectionTitleLineWithButton icon={mdiBook} title="Enroll in Courses" />

        <CardBox className="mb-6" hasTable>
          <TableSampleNewCourses />
        </CardBox>

      </SectionMain>
    </>
  )
}

MyLearningPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default MyLearningPage
