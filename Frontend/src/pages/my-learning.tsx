import { mdiTableOff, mdiChartPie, mdiReload, mdiChartLine, mdiBook, mdiLightbulb, mdiAbTesting, mdiBookAccount, mdiRobot, mdiRobotHappy} from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement, useState } from 'react'
import Button from '../components/Button'
import CardBox from '../components/CardBox'
import CardBoxComponentEmpty from '../components/CardBox/Component/Empty'
import LayoutAuthenticated from '../layouts/Authenticated'
import NotificationBar from '../components/NotificationBar'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import TableSampleCourses from '../components/Table/SampleCourses'
import { getPageTitle } from '../config'
import { sampleChartData } from '../components/ChartLineSample/config'
import ChartLineSample from '../components/ChartLineSample'


const MyLearningPage = () => {

    const [chartData, setChartData] = useState(sampleChartData())

    const [currentYearIndex, setCurrentYearIndex] = useState(0);

    const years = [2022, 2023, 2024];

    const fillChartData = (e: React.MouseEvent) => {
        e.preventDefault()

        setChartData(sampleChartData())
        setCurrentYearIndex((prevIndex) => (prevIndex + 1) % years.length);
    }

  return (
    <>
      <Head>
        <title>{getPageTitle('My Learning')}</title>
      </Head>
      <SectionMain>

        <NotificationBar color="info" icon={mdiRobot}>
          <b>Not sure which course to take? Try out the "Suggest a course" feature from our chatbot!</b>
        </NotificationBar>

        <SectionTitleLineWithButton icon={mdiBookAccount} title="My Courses" />

        <CardBox className="mb-6" hasTable>
          <TableSampleCourses />
        </CardBox>

        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 mb-2">

        </div>

        <SectionTitleLineWithButton icon={mdiRobotHappy} title="Chatbot" >
        <Button
      color="contrast"
    //   onClick={fillChartData}
      label={`New Chat`} 
    />
        </SectionTitleLineWithButton>


      </SectionMain>
    </>
  )
}

MyLearningPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default MyLearningPage
