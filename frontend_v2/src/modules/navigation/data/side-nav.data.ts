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
      'projects'
    ],
  },
];

export const sideNavItems: SideNavItems = {

  'explore': {
    icon: 'grip',
    text: 'Explore',
    link: '/explore'
  },
  'analytics': {
    icon: 'gauge-high',
    text: 'Analytics',
    link: '/explore'
  },
  'projects': {
    icon: 'diagram-project',
    text: 'Projects',
    link: undefined,
    submenu: [
      {
        text: 'Create Project',
        link: '/projects/create-project'
      },
      {
        text: 'View Projects',
        link: '/projects/view-projects',
      },
      
    ],
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
