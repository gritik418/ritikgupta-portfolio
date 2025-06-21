import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactCards = () => {
  const contactInfo = [
    {
      label: "Email",
      value: (
        <a href="mailto:gritik418@gmail.com" className="hover:underline">
          gritik418@gmail.com
        </a>
      ),
      icon: "📧",
    },
    {
      label: "Location",
      value: "India (IST)",
      icon: "📍",
    },
    {
      label: "Socials",
      value: (
        <div className="flex items-center gap-4 text-xl text-gray-300">
          <a
            href="https://github.com/gritik418"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ritik-gupta-849680251/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaLinkedin />
          </a>
        </div>
      ),
      icon: "🌐",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
      {contactInfo.map((item) => (
        <div
          key={item.label}
          className="bg-white/10 rounded-2xl p-6 backdrop-blur-lg shadow-xl border border-white/10 hover:shadow-2xl transition duration-300 ease-in-out"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="text-3xl">{item.icon}</div>
            <div className="text-lg font-semibold text-white">{item.label}</div>
          </div>
          <div className="text-gray-300 text-base break-words">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactCards;
