// import { AppPrivilege } from '@common/enums';
import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
  {
    text: 'CORE',
    items: [
      // 'apps menu',
      // 'dashboard',
      // 'users',
      // 'user groups',
      // 'activity logs'
      'explore',
      'analytics',
      'projects',
      'payments',
      'settings'
    ],
  },
];

export const sideNavItems: SideNavItems = {

  'explore': {
    icon: 'globe',
    text: 'Explore',
    link: '/explore'
  },
  'analytics': {
    icon: 'bar-chart',
    text: 'Analytics',
    link: '/dashboard'
  },
  'projects': {
    icon: 'folder-open',
    text: 'Projects',
    link: undefined,
    submenu: [
      {
        icon: 'plus',
        text: 'Create Project',
        link: '/projects/create'
      },
      {
        icon: 'eye',
        text: 'View Projects',
        link: '/projects',
      },
      
    ],
  },
  'payments': {
    icon: 'credit-card',
    text: 'Payments',
    link: '/payments',
  },
  'settings': {
    icon: 'cog',
    text: 'Settings',
    link: '/settings',
  },
  'users': {
    icon: 'user-group',
    text: 'Users',
    link: undefined,
    submenu: [
      {
        text: 'Manage Users',
        link: '/users',
      },
      {
        text: 'Track Requests',
        link: '/users/requests'
      },
    ],
    
  },
  'user groups': {
    icon: 'users-rectangle',
    text: 'User Groups',
    link: undefined,
    submenu: [
      {
        text: 'Manage User Groups',
        link: '/user-groups',
      },
      {
        text: 'Track Requests',
        link: '/user-groups/requests'
      },
    ],
   
  },
  'activity logs': {
    icon: 'clock-rotate-left',
    text: 'Activity Logs',
    link: '/activity-logs',
    
  },
  'user activity tracking': {
    icon: 'user-lock',
    text: 'User Activity Tracking',
    link: '/user-activity-tracking',
  },
  'system audit log': {
    icon: 'file-archive',
    text: 'System Audit',
    link: '/system-audit-log',
    redirectOnDeny: true,
  }
};
