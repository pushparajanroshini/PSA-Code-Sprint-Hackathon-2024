import {
  mdiMonitor,
  mdiRobotExcitedOutline,
  mdiAccountMultiple,
  mdiLightbulb,
  mdiCash,
  mdiFrequentlyAskedQuestions,
} from '@mdi/js'
import { MenuAsideItem } from './interfaces'

const menuAside: MenuAsideItem[] = [
  {
    href: '/dashboard',
    icon: mdiMonitor,
    label: 'Dashboard',
  },
  {
    href: '/my-learning',
    icon: mdiLightbulb,
    label: 'My Learning',
  },
  {
    href: '/chatbot',
    icon: mdiRobotExcitedOutline,
    label: 'Chatbot',
  },
  {
    href: '/groups',
    label: 'Groups',
    icon: mdiAccountMultiple,
  },
  {
    href: '/discussion',
    label: 'Discussion',
    icon: mdiFrequentlyAskedQuestions,
  },
  {
    href: '/rewards',
    label: 'Rewards',
    icon: mdiCash,
  },
]

export default menuAside
