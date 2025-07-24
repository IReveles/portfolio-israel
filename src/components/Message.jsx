import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Message.css";

export default function Message() {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setMessageStatus("Message sent successfully!");
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 3000);
        },
        () => {
          setMessageStatus("Failed to send message.");
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 3000);
        }
      );

    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="eform">
      <div className="contact">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          title="Please enter a valid email address"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />
      </div>
      <textarea name="message" placeholder="Your Message" required />
      <button type="submit">Send</button>

      {showPopup && (
        <div
          className={`floating-popup ${
            messageStatus.includes("Failed") ? "error" : "success"
          }`}
        >
          {messageStatus}
        </div>
      )}
    </form>
  );
}
