import apiKey from "../../config";
export default function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action={apiKey.key}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email - oscarveh@gmail.com
          </p>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="p-2 bg-[#ccd6f6]"
        />
        <input
          type="email"
          name="Email"
          placeholder="Email"
          className="my-4 p-2 bg-[#ccd6f6]"
        />
        <textarea
          name="message"
          rows={10}
          className="p-2 bg-[#ccd6f6]"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's collaborate!
        </button>
      </form>
    </div>
  );
}
