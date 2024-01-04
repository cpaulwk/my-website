"use client"
import { useEffect, useState } from 'react'
import { IconType } from 'react-icons';

interface NavNavigationProps {
  navNavigation: {
    projects: string[];
    icons: {
      name: string;
      icon: IconType;
    }[];
  }
}

interface NavigationProps {
  navigation: {
    page: string,
  }
}

const useNavBarSettings = ({ navNavigation, navigation }: NavNavigationProps & NavigationProps) => {
  const [nextProject, setNextProject] = useState<null | String>();
  const [previousProject, setPreviousProject] = useState<null | String>();
  const [currentProject, setCurrentProject] = useState<String>();

  const getPreviousProject = () => {
    const previousProjectIndex = navNavigation.projects.indexOf(navigation.page) - 1;
    if (previousProjectIndex < 0) {
      setPreviousProject(null);
    } else {
      setPreviousProject(navNavigation.projects[previousProjectIndex]);
    }

  }

  const getNextProject = () => {
    const nextProjectIndex = navNavigation.projects.indexOf(navigation.page) + 1;
    if (nextProjectIndex >= navNavigation.projects.length) {
      setNextProject(null);
    } else {
      setNextProject(navNavigation.projects[nextProjectIndex]);
    }
  }

  useEffect(() => {
    setCurrentProject(navigation.page)
    getPreviousProject();
    getNextProject();
  }, [currentProject])

  return {
    nextProject, previousProject,
  }
}

export default useNavBarSettings;
