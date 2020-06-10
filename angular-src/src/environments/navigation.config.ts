export const adminRoutes = [
  { title: 'Contacts', path: 'contacts', roles: ['admin'] },
  { title: 'Terminal Companies', path: 'terminal-companies', roles: ['admin'] },
  { title: 'Tanks', path: 'tanks', roles: ['admin'] },
];

export const schedulerRoutes = [
  { title: 'Bunker Desk', path: 'bunker-desk', roles: ['scheduler'] },
  {
    title: 'Terminal Tanks & Barges',
    path: 'terminal-tanks-barges',
    roles: ['scheduler'],
  },

  {
    title: 'Forecast Availability',
    path: 'forecast-availability',
    roles: ['scheduler'],
  },
  {
    title: 'Current & Historical Specs',
    path: 'current-and-historical-specs',
    roles: ['scheduler'],
  },
];

export const marketerRoutes = [
  { title: 'Quick Search', path: 'quick-search', roles: ['marketer'] },
];

export const navigation = [
  ...adminRoutes,
  ...schedulerRoutes,
  ...marketerRoutes,
];
