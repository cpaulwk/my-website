"use client"
import { useEffect, useState } from 'react'

const useNavBarSettings = ({ navNavigation, navigation }) => {
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
