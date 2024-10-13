import { mdiAccount } from '@mdi/js'
import { Field, Form, Formik } from 'formik'
import Head from 'next/head'
import { ReactElement, useState } from 'react'
import Button from '../components/Button'
import Buttons from '../components/Buttons'
import Divider from '../components/Divider'
import CardBox from '../components/CardBox'
import FormField from '../components/Form/Field'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import { getPageTitle } from '../config'

const DiscussionPage = () => {
  // State to manage the list of discussion threads
  const [threads, setThreads] = useState([
    {
      id: 1,
      author: 'Alyssa',
      content:
        'What are the differences between SQL joins: INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN? When would you use each?',
      replies: [],
    },
    {
      id: 2,
      author: 'Bee Ling',
      content:
        'How does the concept of cognitive dissonance influence decision-making, and what strategies do people typically use to reduce cognitive dissonance?',
      replies: [],
    },
    {
      id: 3,
      author: 'Charlie',
      content:
        'In JavaScript, how does event delegation work, and why is it beneficial for optimising event handling in large web applications?',
      replies: [],
    },
    {
      id: 4,
      author: 'Deepika',
      content:
        'How do central banks use interest rates to control inflation, and what are the potential risks of raising or lowering interest rates too quickly?',
      replies: [],
    },
  ]);

  const [replyingTo, setReplyingTo] = useState<number | null>(null);

  const handleAddReply = (threadId: number, replyContent: string) => {
    setThreads((prevThreads) =>
      prevThreads.map((thread) =>
        thread.id === threadId
          ? { ...thread, replies: [...thread.replies, replyContent] }
          : thread
      )
    );
    setReplyingTo(null); 
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Discussion')}</title>
      </Head>

      <SectionMain>
        <CardBox>
          <div style={{ marginBottom: '20px' }}>
            <header style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>
              Discussion Threads
            </header>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {threads.map((thread) => (
                <div
                  key={thread.id}
                  style={{
                    border: '1px solid #e0e0e0',
                    borderRadius: '10px',
                    padding: '15px',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#f9f9f9',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '10px',
                    }}
                  >
                    <strong style={{ fontSize: '16px' }}>{thread.author}</strong>
                    <span style={{ fontSize: '12px', color: '#999' }}>
                      {new Date().toLocaleDateString()}
                    </span>
                  </div>

                  <p style={{ fontSize: '14px', color: '#333', lineHeight: '1.6' }}>
                    {thread.content}
                  </p>

                  {/* Display Replies */}
                  {thread.replies.length > 0 && (
                    <div style={{ marginTop: '10px', paddingLeft: '20px' }}>
                      <strong>Replies:</strong>
                      <ul>
                        {thread.replies.map((reply, index) => (
                          <li key={index} style={{ marginTop: '5px' }}>
                            {reply}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Reply Button */}
                  <Button
                    type="button"
                    color="info"
                    outline
                    label="Reply"
                    onClick={() => setReplyingTo(thread.id)}
                  />

                  {/* Reply Form */}
                  {replyingTo === thread.id && (
                    <Formik
                      initialValues={{ reply: '' }}
                      onSubmit={(values) => {
                        handleAddReply(thread.id, values.reply);
                      }}
                    >
                      <Form>
                        <FormField hasTextareaHeight>
                          <Field
                            name="reply"
                            as="textarea"
                            placeholder="Your reply here"
                          />
                        </FormField>

                        <Buttons>
                          <Button type="submit" color="info" outline label="Submit Reply" />
                          <Button
                            type="button"
                            color="info"
                            outline
                            label="Cancel"
                            onClick={() => setReplyingTo(null)}
                          />
                        </Buttons>
                      </Form>
                    </Formik>
                  )}
                </div>
              ))}
            </div>
          </div>

          <Divider />

          {/* New Discussion Thread Form */}
          <Formik
            initialValues={{
              fullname: 'John Doe',
              email: 'john.doe@example.com',
              textarea: '',
            }}
            onSubmit={(values) => {
              // Add a new thread to the list when the form is submitted
              const newThread = {
                id: threads.length + 1,
                author: values.fullname,
                content: values.textarea,
                replies: [],
              };
              setThreads([...threads, newThread]);
            }}
          >
            <Form>
              <FormField label="New Discussion" icons={[mdiAccount]}>
                <Field name="fullname" placeholder="Full name" />
              </FormField>

              <FormField hasTextareaHeight>
                <Field name="textarea" as="textarea" placeholder="Description" />
              </FormField>

              <Buttons>
                <Button type="submit" color="info" outline label="Submit" />
                <Button type="reset" color="info" outline label="Reset" />
              </Buttons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

DiscussionPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default DiscussionPage;
