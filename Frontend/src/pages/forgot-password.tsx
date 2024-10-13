import { mdiEmail } from '@mdi/js'
import { Field, Form, Formik } from 'formik'
import Head from 'next/head'
import { ReactElement } from 'react'
import Button from '../components/Button'
import Buttons from '../components/Buttons'
import Divider from '../components/Divider'
import CardBox from '../components/CardBox'
import FormField from '../components/Form/Field'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import { getPageTitle } from '../config'

const ForgotPasswordPage = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Forgot Password')}</title>
      </Head>

      <SectionMain>

        <CardBox>
          <Formik
            initialValues={{
              fullname: 'John Doe',
              email: 'john.doe@example.com',
              phone: '',
              color: 'green',
              textarea: 'Hello',
            }}
            onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
          >
            <Form>
              <FormField label="Change Password" icons={[mdiEmail]}>
                <Field type="email" name="email" placeholder="Email" />
              </FormField>

              <FormField>
                <Field name="password" placeholder="Password" id="password" />
              </FormField>

              <FormField>
                <Field name="confirm password" placeholder="Confirm Password" id="confirm password" />
              </FormField>

              <Divider />

              <Buttons>
                <Button type="submit" color="info" label="Submit" href="/login"/>
                <Button type="reset" color="info" outline label="Reset" href="/login"/>
              </Buttons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  )
}

ForgotPasswordPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default ForgotPasswordPage
