import React, { useState } from 'react'
import { useSampleCoursesCompleted } from '../../hooks/sampleData'
import { CoursesCompleted } from '../../interfaces'
import Button from '../Button'
import Buttons from '../Buttons'
import CardBoxModal from '../CardBox/Modal'


const TableSampleCompletedCourses = () => {
  const { courses } = useSampleCoursesCompleted()

  const perPage = 5

  const [currentPage, setCurrentPage] = useState(0)

  const coursesPaginated = courses.slice(perPage * currentPage, perPage * (currentPage + 1))

  const numPages = courses.length / perPage

  const pagesList = []

  for (let i = 0; i < numPages; i++) {
    pagesList.push(i)
  }

  const [isModalInfoActive, setIsModalInfoActive] = useState(false)

  const handleModalAction = () => {
    setIsModalInfoActive(false)
  }

  return (
    <>
      <CardBoxModal
        title="Confirmation"
        buttonColor="info"
        buttonLabel="Proceed"
        isActive={isModalInfoActive}
        onConfirm={handleModalAction}
        onCancel={handleModalAction}
      >
        <p>
          <b>You will be directed to an external website.</b>
        </p>
      </CardBoxModal>

      <table>
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Category</th>
            <th>Platform</th>
            <th>Date Enrolled</th>
            <th>Date Completed</th>
            <th>Certificate</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {coursesPaginated.map((coursesCompleted: CoursesCompleted) => (
            <tr key={coursesCompleted.name}>
              <td className="border-b-0 lg:w-6 before:hidden">
              </td>
              <td data-label="Name">{coursesCompleted.name}</td>
              <td data-label="Category">{coursesCompleted.category}</td>
              <td data-label="Learning Platform">{coursesCompleted.platform}</td>
              <td data-label="Date Enrolled" className="lg:w-1 whitespace-nowrap">
                <small className="text-gray-500 dark:text-slate-400">{coursesCompleted.started_mm_dd_yyyy}</small>
              </td>
              <td data-label="Date Completed" className="lg:w-1 whitespace-nowrap">
                <small className="text-gray-500 dark:text-slate-400">{coursesCompleted.completed_mm_dd_yyyy}</small>
              </td>

              <td className="before:hidden lg:w-1 whitespace-nowrap">
                <Buttons type="justify-start lg:justify-end" noWrap>
                  <Button
                    color="info"
                    label="View Certificate"
                    outline={true}
                    onClick={() => setIsModalInfoActive(true)}
                    small
                  />
                </Buttons>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
        <div className="flex flex-col md:flex-row items-center justify-between py-3 md:py-0">
          <Buttons>
            {pagesList.map((page) => (
              <Button
                key={page}
                active={page === currentPage}
                label={page + 1}
                color={page === currentPage ? 'lightDark' : 'whiteDark'}
                small
                onClick={() => setCurrentPage(page)}
              />
            ))}
          </Buttons>
          <small className="mt-6 md:mt-0">
            Page {currentPage + 1} of {numPages}
          </small>
        </div>
      </div>
    </>
  )
}

export default TableSampleCompletedCourses
