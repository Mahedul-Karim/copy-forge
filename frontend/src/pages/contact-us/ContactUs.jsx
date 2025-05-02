import Container from "@/components/common/Container";
import Title from "@/components/common/section/Title";
import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import DetailsCard from "@/components/contact-us/DetailsCard";
import Form from "@/components/contact-us/Form";

const DETAILS = [
  {
    icon: MapPin,
    label: "Address",
    description: "180 Flinders Street Melbourne, Victoria, 3000 Australia",
  },
  {
    icon: Mail,
    label: "Email",
    description: "contact@copyforge.com",
  },
  {
    icon: Phone,
    label: "Phone",
    description: "+1234 5678",
  },
];

const ContactUs = () => {
  return (
    <Container className="py-8 md:py-16">
      <Title text="Get in touch" highlight={"touch"} />
      <div className="my-6 grid md:grid-cols-3 gap-4">
        {DETAILS.map((det, i) => (
          <DetailsCard
            key={i}
            Icon={det.icon}
            label={det.label}
            description={det.description}
          />
        ))}
      </div>
      <div className="my-16 grid md:grid-cols-2 gap-10">
        <div className="hidden md:flex flex-col items-center justify-center" >
            <img src="/contact.png" alt="" />
        </div>
        <Form />
      </div>
    </Container>
  );
};

export default ContactUs;
