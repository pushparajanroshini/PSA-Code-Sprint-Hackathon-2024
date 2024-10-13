import { mdiRobotHappy } from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement, useState } from 'react'
import Button from '../components/Button'
import CardBox from '../components/CardBox'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import { getPageTitle } from '../config'
import { Field, Form, Formik } from 'formik'
import Buttons from '../components/Buttons'
import FormField from '../components/Form/Field'

const ChatbotPage = () => {
  const [chatHistory, setChatHistory] = useState<{ user: string; bot: string }[]>([])

  // Function to handle sending a reply
  const handleSendReply = (values: { reply: string }, { resetForm }: any) => {
    const userMessage = values.reply.trim();

    if (userMessage) {
      let botReply = '...';

      // Check if the user is asking for course recommendations
      if (userMessage.toLowerCase() === 'i am interested in data analytics and i want to work in quant, which course should i take?') {
        botReply =
          "Here are three essential courses for a career in quantitative risk management: FRM Certification (GARP) – Focused on financial risk management, it's a key certification for risk professionals.Python for Finance and Algorithmic Trading (Udemy) – Teaches Python programming with a focus on financial applications and trading. Probability and Statistics for Finance (Coursera) – Covers the mathematical foundation needed for risk modeling and quantitative analysis. You can explore these courses and more on our homepage. Dive in and start enhancing your skills today!";
      }

      if (userMessage.toLowerCase() === 'what course should i take  to get a consulting job?') {
        botReply =
          "To get a consulting job in this sector, focus on developing strong analytical, communication, and problem-solving skills. Here are three courses that will help you on your journey: 1. Consulting Foundations (LinkedIn Learning) – This course covers essential principles and practices of consulting, giving you a solid grounding in the field. 2. Data Analytics for Business (Coursera by University of Pennsylvania) – Understanding data is crucial, and this course emphasizes data-driven decision-making.";
      }

      if (userMessage.toLowerCase() === 'recommend a course') {
        botReply =
          "Based on the courses you have taken, you seem to have an interest in payment systems, web development, and databases, I’d recommend looking into courses that can help you deepen your skills in these areas such as distributed systems and databases.";
      }

      if (userMessage.toLowerCase() === 'what is a database?') {
        botReply =
          "A database is an organized collection of data that can be easily accessed, managed, and updated. Databases store information in a structured way, which allows for efficient retrieval, insertion, modification, and deletion of data. They are used in a wide range of applications, from simple spreadsheets to complex web applications.";
      }

      if (userMessage.toLowerCase() === 'who am i') {
        botReply =
          "You are John Doe";
      }

      if (userMessage.toLowerCase() === 'hello'|| userMessage.toLowerCase() === 'hi' || userMessage.toLowerCase() === 'hey') {
        botReply =
          "Hey! How’s it going? How can I assist you today?";
      }

      if (userMessage.toLowerCase() === 'thank you') {
        botReply =
          "You're welcome! If you ever need anything, feel free to reach out. Have a great day!";
      }

      if (userMessage.toLowerCase() === 'tell me a joke') {
        botReply =
          "Why do programmers prefer dark mode? Because light attracts bugs!";
      }


      // Add the user's message and bot's reply to chat history
      setChatHistory([...chatHistory, { user: userMessage, bot: botReply }]);
      resetForm(); // Reset the form after submission
    }
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Chatbot')}</title>
      </Head>

      <SectionMain>
        <SectionTitleLineWithButton icon={mdiRobotHappy} title="Chatbot">
          <Button color="contrast" label={`New Chat`} onClick={() => setChatHistory([])} />
        </SectionTitleLineWithButton>

        <CardBox>
          {/* Display Chat History */}
          <div style={{ marginBottom: '20px', height: '800px', overflowY: 'auto' }}>
            {chatHistory.length > 0 ? (
              chatHistory.map((chat, index) => (
                <div
                  key={index}
                  style={{
                    padding: '10px',
                    marginBottom: '10px',
                    borderRadius: '10px',
                    backgroundColor: '#f4f4f4',
                  }}
                >
                  <strong>User:</strong>
                  <p>{chat.user}</p>
                  <strong>Bot:</strong>
                  <p>{chat.bot}</p>
                </div>
              ))
            ) : (
              <p>No messages yet. Start a conversation!</p>
            )}
          </div>

          <Formik
            initialValues={{ reply: '' }} 
            onSubmit={handleSendReply}
          >
            {({ handleSubmit }) => (
              <Form>
                <FormField hasTextareaHeight>
                  <Field
                    name="reply"
                    as="textarea"
                    placeholder="Your reply here"
                    style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
                  />
                </FormField>

                <Buttons>
                  <Button type="submit" color="info" outline label="Reply" onClick={handleSubmit} />
                  <Button
                    type="button"
                    color="info"
                    outline
                    label="Cancel"
                    onClick={() => setChatHistory([])} // Clear chat history on cancel
                  />
                </Buttons>
              </Form>
            )}
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

ChatbotPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default ChatbotPage;
