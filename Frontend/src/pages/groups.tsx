import { mdiGroup, mdiMonitorCellphone, mdiTableOff, mdiCheckCircle, mdiCloseCircle, mdiSleep, mdiVideo } from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import CardBox from '../components/CardBox'
import LayoutAuthenticated from '../layouts/Authenticated'
import NotificationBar from '../components/NotificationBar'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import TableSampleClients from '../components/Table/SampleClients'
import { getPageTitle } from '../config'

const GroupsPage = () => {
  // Sample group members with their status
  const groupMembers = [
    { name: 'Sally', status: 'online', activity: 'Online', icon: mdiSleep },
    { name: 'John', status: 'offline', activity: 'Offline', icon: mdiCloseCircle },
    { name: 'Wei Ming', status: 'Watching a course', activity: 'Watching a course', icon: mdiVideo },
    { name: 'Lily', status: 'offline', activity: 'Offline', icon: mdiCloseCircle },
    { name: 'Varshan', status: 'online', activity: 'Online', icon: mdiCloseCircle }
  ];

  const getCardBackgroundColor = (status: string) => {
    switch (status) {
      case 'online':
        return '#d4edda'; // Green for online
      case 'Watching a course':
        return '#f8d7da'; // Red for watching a course
      case 'idle':
        return '#d4edda'; // Green for online
      case 'offline':
      default:
        return '#f0f0f0'; // Grey for idle or offline
    }
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Groups')}</title>
      </Head>
      <SectionMain>

        {/* Notification */}
        <NotificationBar color="success" icon={mdiMonitorCellphone}>
          <b>Your group has earned 5 points today!</b>
        </NotificationBar>

        {/* Group Members Section */}
        <SectionTitleLineWithButton icon={mdiGroup} title="Group Members" />

        {/* Render each group member as a CardBox */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
          {groupMembers.map((member, index) => (
            <CardBox key={index}>
              <div style={{ backgroundColor: getCardBackgroundColor(member.status), padding: '20px', borderRadius: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {/* Replace the Icon component with something else or remove it */}
                  <div style={{ marginRight: '15px' }}>{/* Placeholder for icon */}</div>
                  <div>
                    <strong style={{ fontSize: '16px' }}>{member.name}</strong>
                    <p style={{ margin: 0 }}>{member.activity}</p>
                  </div>
                </div>
              </div>
            </CardBox>
          ))}
        </div>

        {/* View All Groups Section */}
        <SectionTitleLineWithButton icon={mdiTableOff} title="View All Groups" />

        <CardBox className="mb-6" hasTable>
          <TableSampleClients />
        </CardBox>

      </SectionMain>
    </>
  )
}

GroupsPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default GroupsPage
