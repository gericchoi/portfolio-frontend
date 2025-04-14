import "../../index.css";

const GetInTouch = () => {
  const phoneNumber = "+639162513326";
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const linkedInLink = "https://www.linkedin.com/in/gerico-mangali";

  return (
    <div id="get-in-touch" className="text-center my-4">
      <h2 className="text-lg font-semibold mb-2">Prefer a quick chat?</h2>
      <p className="mb-4 text-sm">
        You can contact me via{" "}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-green-600"
        >
          WhatsApp
        </a>
        ,{" "}
        <a
          href={linkedInLink}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600"
        >
          LinkedIn
        </a>
        , call/text at 09162513326, or email at{" "}
        <a
          href="mailto:gericchoi@gmail.com"
          className="underline text-blue-600"
        >
          gericchoi@gmail.com
        </a>
        .
      </p>
      <br />
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="custom-button"
      >
        Get In Touch{" "}
      </a>
    </div>
  );
};

export default GetInTouch;
