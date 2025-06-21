import { useRef, useState } from "react";
import ContactCards from "../components/ContactCards/ContactCards";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.current?.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        toast.error("Failed to send message. Try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <section className="min-h-screen text-white px-6 pt-36 pb-20">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Whether you have a question, a project idea, or just want to say hi
            — I&apos;d love to hear from you.
          </p>
        </div>

        <ContactCards />

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="bg-white/10 px-4 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              required
              placeholder="Your Email"
              name="email"
              className="bg-white/10 px-4 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <textarea
            rows={6}
            name="message"
            required
            placeholder="Your Message"
            className="w-full bg-white/10 resize-none px-4 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>

          <div className="flex justify-end">
            <button
              disabled={loading}
              type="submit"
              className="bg-white/20 h-12 w-36 items-center flex justify-center cursor-pointer text-white rounded-xl hover:scale-105 transition duration-300 ease-in-out"
            >
              {loading ? (
                <img src="/spinner.gif" className="h-12" alt="" />
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
