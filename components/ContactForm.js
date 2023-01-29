import React from 'react';
import { useForm } from 'react-hook-form';

// Use these to handle email/send error
import { toast } from 'react-toastify';
import { useState } from 'react';




export default function ContactForm() {
    const [buttonText, setButtonText] = useState("Send");
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ email, subject, message }) => {

    setButtonText("Loading")
        const res = await fetch("/api/sendgrid", {
            body: JSON.stringify({
              email: email,
              subject: subject,
              message: message,
            }),
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          });
    
          const { error } = await res.json();
          if (error) {
            toast.error(error.error);
            setButtonText("Send");
            return;
          }
        reset()
        setButtonText("Send");
        toast.success("Successfully Sent")
  }
  

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Have a question? Need details about our tutoring services? Let us
            know.
          </p>
          <form
            action="#"
            className="space-y-8 mx-auto max-w-screen-md"
            onSubmit={handleSubmit(submitHandler)}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                {...register('email', {
                  required: 'Please enter email',
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                    message: 'Please enter a valid email address',
                  },
                })}
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Email"
                required
              />
               {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                {...register('subject', {
                  required: 'Please enter a Subject',
                })}
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
               {errors.subject && (
            <div className="text-red-500">{errors.subject.message}</div>
          )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                {...register('message', {
                    required: 'Please enter your message',
                  })}
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
              {errors.message && (
            <div className="text-red-500">{errors.message.message}</div>
          )}
            </div>
            <button
              type="submit"
              className='mt-2 primary-button'
            >
              {buttonText}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
