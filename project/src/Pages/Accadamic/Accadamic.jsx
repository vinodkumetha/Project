import React from 'react'
import Accadamicmca from '../our-process-mca/Accadamicmca'
import Accadamic1 from './Accapdamic1/Accadamic1'
import Opening from './Projectopenig/Opening'
import AcademicProjects from './academicProjects/AcademicProjects'
import Domains from './domains/Domains'

import Overviewac from './Overviewac/Overviewac-main/Overviewac'
import { CoursesDisplay } from './Projectsdispaly/ProjectsDisplay'




const Accadamic = () => {
  return (
    <div className='mt-5'>
    

    <Overviewac />
    <Accadamicmca />

    <Accadamic1 />
    <Opening />

    <AcademicProjects />
    <Domains />

    <CoursesDisplay />

    </div>
  )
}

export default Accadamic
