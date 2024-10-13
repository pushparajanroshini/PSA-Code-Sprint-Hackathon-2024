import React, { useState } from 'react'
import { useSampleNewCourses } from '../../hooks/sampleData'
import { NewCourses } from '../../interfaces'
import Button from '../Button'
import Buttons from '../Buttons'
import CardBoxModal from '../CardBox/Modal'


const TableSampleNewCourses = () => {
  const { courses } = useSampleNewCourses()

  const perPage = 10

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
            <th>Enroll</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {coursesPaginated.map((newCourses: NewCourses) => (
            <tr key={newCourses.name}>
              <td className="border-b-0 lg:w-6 before:hidden">
              </td>
              <td data-label="Name">{newCourses.name}</td>
              <td data-label="Category">{newCourses.category}</td>
              <td data-label="Learning Platform">{newCourses.platform}</td>

              <td className="before:hidden lg:w-1 whitespace-nowrap">
                <Buttons type="justify-start lg:justify-end" noWrap>
                  <Button
                    color="info"
                    label="Enroll"
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

export default TableSampleNewCourses
