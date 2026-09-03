import { useState } from "react";

const faqs = [
  {
    question: "What types of smart home appliances does BuyTech offer?",
    answer:
      "BuyTech offers a range of smart home appliances and consumer electronics designed to make everyday living more convenient, efficient, and connected.",
  },
  {
    question: "How can smart home appliances make daily life easier?",
    answer:
      "Smart home appliances can simplify everyday tasks through convenient features such as remote control, automation, energy management, and smart connectivity.",
  },
  {
    question: "Are smart appliances energy efficient?",
    answer:
      "Many modern smart appliances include energy-saving features that can help monitor and manage energy usage, potentially making everyday appliance use more efficient.",
  },
  {
    question: "Can I control smart appliances remotely?",
    answer:
      "Many smart appliances can be connected to compatible mobile apps or smart home systems, allowing users to monitor and control supported functions remotely.",
  },
  {
    question: "How do I choose the right smart appliance?",
    answer:
      "Consider the appliance's features, size, energy efficiency, smart connectivity, compatibility, and your specific household requirements before making a choice.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>

      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <button
            className="faq-question"
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            <span>{faq.question}</span>
            <span>{openIndex === index ? "−" : "+"}</span>
          </button>

          {openIndex === index && (
            <p className="faq-answer">{faq.answer}</p>
          )}
        </div>
      ))}
    </section>
  );
}