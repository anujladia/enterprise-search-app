import { createContext } from 'react';

export const MainStateContext = createContext();
export const MainDispatchContext = createContext();

export const mainInitialState = {
  user: {
    email: "",
    name: 'Jon Doe',
    profile_pic: ""
  },
  searchKeyword: '',
  searchingQuery: false,
  searchFieldFocus: false,
  apps: {
    gmail: {
      name: "Gmail",
      image: "https://cdn.cdnlogo.com/logos/g/24/gmail-icon.svg",
      appDescription: "Search through all the emails"
    },
    "calendar": {
      name: "Google Calendar",
      image: "https://cdn.cdnlogo.com/logos/g/96/google-calendar.svg",
      appDescription: "Search through the events"
    },
    "drive": {
      name: "Google Drive",
      image: "https://cdn.cdnlogo.com/logos/g/44/google-drive.svg",
      appDescription: "Search through the file and folder names"
    },
    "notion": {
      name: "Notion",
      image: "https://cdn.cdnlogo.com/logos/n/50/notion.svg",
      appDescription: "Search through all the pages in notion"
    }
  }
};
