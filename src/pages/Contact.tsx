import ContactCards from "../components/ContactCards/ContactCards";

const Contact = () => {
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

        <form className="space-y-6 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-white/10 px-4 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-white/10 px-4 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <textarea
            rows={6}
            placeholder="Your Message"
            className="w-full bg-white/10 resize-none px-4 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-white/20 cursor-pointer text-white px-6 py-3 rounded-xl hover:scale-105 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
