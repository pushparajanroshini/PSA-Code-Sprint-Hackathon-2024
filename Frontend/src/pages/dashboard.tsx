import {
  mdiAccountMultiple,
  mdiChartLine,
  mdiLibrary,
  mdiLightbulb,
  mdiStar,
} from '@mdi/js'
import Head from 'next/head'
import React, { useState } from 'react'
import type { ReactElement } from 'react'
import Button from '../components/Button'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import CardBoxWidget from '../components/CardBox/Widget'
import CardBox from '../components/CardBox'
import { sampleChartData } from '../components/ChartLineSample/config'
import ChartLineSample from '../components/ChartLineSample'
import NotificationBar from '../components/NotificationBar'
import TableSampleCourses from '../components/Table/SampleCourses'
import { getPageTitle } from '../config'

const DashboardPage = () => {
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
        <title>{getPageTitle('Dashboard')}</title>
      </Head>
      <SectionMain>

      <NotificationBar color="info" icon={mdiLightbulb}>
          <b>Start learning today from 1000+ available courses!</b>
        </NotificationBar>


        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
          <CardBoxWidget
            trendLabel="12%"
            trendType="up"
            trendColor="success"
            icon={mdiAccountMultiple}
            iconColor="success"
            number={26480}
            label="Total Learners"
          />
          <CardBoxWidget
            trendLabel="16%"
            trendType="down"
            trendColor="danger"
            icon={mdiLibrary}
            iconColor="info"
            number={5770}
            label="Learners Online"
          />
          <CardBoxWidget
            trendLabel="Top 10%"
            trendType="warning"
            trendColor="warning"
            icon={mdiStar}
            iconColor="danger"
            number={256}
            label="Your Points"
          />
        </div>

        <SectionTitleLineWithButton icon={mdiChartLine} title="Course Completion" >
        <Button
      color="contrast"
      onClick={fillChartData}
      label={`${years[currentYearIndex]}`} 
    />
        </SectionTitleLineWithButton>

        <CardBox className="mb-6">{chartData && <ChartLineSample data={chartData} />}</CardBox>

      <div className="flex space-x-4 text-lg font-semibold">
        <p className="text-green-500">Green: Your progress</p>
        <p className="text-black-500">   |   </p>
        <p className="text-blue-500">Blue: Your group's progress</p>
        <p className="text-black-500">   |   </p>
        <p className="text-red-500">Red: Average user's progress</p>
      </div>

        <SectionTitleLineWithButton icon={mdiAccountMultiple} title="My Courses" />

        <CardBox hasTable>
          <TableSampleCourses />
        </CardBox>
      </SectionMain>
    </>
  )
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default DashboardPage
