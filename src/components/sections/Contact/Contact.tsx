import { useState } from "react";
//import emailjs from "emailjs-com";
import { RevealOnScroll } from "../../RevealOnScroll";

export const Contact: React.FC = () => {
  const AWS_EMAIL_ENDPOINT =
    "https://cirveoz7eg.execute-api.eu-north-1.amazonaws.com/prod/sendmail";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messageSendingInProgress, setMessageSendingInProgress] =
    useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessageSendingInProgress(true);

    /*
    emailjs
      .sendForm(
        process.env.VITE_SERVICE_ID as string,
        process.env.VITE_TEMPLATE_ID as string,
        e.currentTarget,
        process.env.VITE_PUBLIC_KEY as string
      )
      .then(() => {
        alert("message sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong... Please try again!"))
      .finally(() => setMessageSendingInProgress(false));
      */

    fetch(
      `${AWS_EMAIL_ENDPOINT}?name=${formData.name}&message=${formData.message}&email=${formData.email}`
    )
      .then(() => {
        alert("message sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong... Please try again!"))
      .finally(() => setMessageSendingInProgress(false));
  }
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition
                           focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition
                           focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@email.com"
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={6}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition
                           focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition
                         relative overflow-hidden hover:not-disabled:-translate-y-0.5 hover:not-disabled:shadow-[0_0_15px_rgba(59,130, 246,0.4)] disabled:bg-gray-400 disabled:text-gray-800"
              disabled={
                !formData.name ||
                !formData.email ||
                !formData.message ||
                messageSendingInProgress
              }
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
