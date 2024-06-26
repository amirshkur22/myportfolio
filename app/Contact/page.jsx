"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    text: "Phone",
    info: "+251 987 27 35 52",
  },
  {
    icon: <FaEnvelope />,
    text: "Email",
    info: "amirminaplay@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    text: "Address",
    info: "01 Jemo, Addis Abeba, Ethiopia",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // Loading state
  const [errorMessage, setErrorMessage] = useState(""); // Error message state for email
  const [phoneError, setPhoneError] = useState(""); // Error message state for phone number

  const [messageError, setMessageError] = useState(""); // Error message state for message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate email and update error message
    if (name === "email") {
      if (!value.trim()) {
        setErrorMessage("Email cannot be empty."); // Show error message for empty email
      } else if (!validateEmail(value)) {
        setErrorMessage("Please enter a valid email address."); // Show error message for invalid email format
      } else {
        setErrorMessage(""); // Clear error message for valid email
      }
    }

    // Validate phone number and update error message
    if (name === "phone") {
      if (!value.trim()) {
        setPhoneError("Phone number cannot be empty."); // Show error message for empty phone number
      } else if (!validatePhoneNumber(value)) {
        setPhoneError("Please enter a valid phone number."); // Show error message for invalid phone number format
      } else {
        setPhoneError(""); // Clear error message for valid phone number
      }
    }


    // Validate message and update error message
    if (name === "message") {
      if (!value.trim()) {
        setMessageError("Message cannot be empty."); // Show error message for empty message
      } else {
        setMessageError(""); // Clear error message for valid message
      }
    }
  };

  const validateEmail = (email) => {
    // Regular expression for basic email validation
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const validatePhoneNumber = (phone) => {
    // Regular expression for basic phone number validation
    const pattern = /^\+?[1-9]\d{1,14}$/; // Allows numbers with optional leading '+', 1-15 digits
    return pattern.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      if (!formData.email.trim()) {
        setErrorMessage("Email cannot be empty.");
      } else {
        setErrorMessage("Please enter a valid email address.");
      }
      return;
    }

    // Validate phone number
    if (!formData.phone.trim() || !validatePhoneNumber(formData.phone)) {
      if (!formData.phone.trim()) {
        setPhoneError("Phone number cannot be empty.");
      } else {
        setPhoneError("Please enter a valid phone number.");
      }
      return;
    }

    

    // Validate message
    if (!formData.message.trim()) {
      setMessageError("Message cannot be empty.");
      return;
    }

    setLoading(true); // Start loading

    const { firstname, lastname, email, phone, message } = formData;

    // Construct the mailto link with basic info excluding service from body
    const mailtoLink = `mailto:amirminaplay@gmail.com?subject=Contact Request&body=First Name: ${firstname}%0D%0ALast Name: ${lastname}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0A%0D%0AMessage: ${message}`;

    // Open mail client
    window.open(mailtoLink, "_blank");

    // Reset form after a short delay (simulated confirmation)
    setTimeout(() => {
      setLoading(false); // Stop loading
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      }); // Clear form data
    }, 5000); // Adjust timing as needed
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row g-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent-default">
                Let us Work together
              </h3>
              <p className="text-white/60"></p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  onChange={handleChange}
                  value={formData.firstname}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  onChange={handleChange}
                  value={formData.lastname}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={formData.email}
                />
                {errorMessage && (
                  <p className="text-red-500 mt-2">{errorMessage}</p>
                )}
                <Input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  value={formData.phone}
                />
                {phoneError && (
                  <p className="text-red-500 mt-2">{phoneError}</p>
                )}
                <Select name="service" onChange={handleChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="Web Development">
                        Web Development
                      </SelectItem>
                      <SelectItem value="Mobile App Development">
                        Mobile App Development
                      </SelectItem>
                      <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                      <SelectItem value="Graphics Design">
                        Graphics Design
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              
                <Textarea
                  className="h-[200px]"
                  name="message"
                  placeholder="Type Your message here"
                  onChange={handleChange}
                  value={formData.message}
                />
                {messageError && (
                  <p className="text-red-500 mt-2">{messageError}</p>
                )}
              </div>
              <Button size="lg" className="max-w-40" type="submit">
                {loading ? (
                  <div
                    className="spinner-border animate-spin inline-block w-6 h-6 border-4 rounded-full"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent-default rounded-md flex items-center justify-center">
                    <div>{info.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{info.text}</p>
                    <h3 className="text-xl">{info.info}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
