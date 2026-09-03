import { useState } from "react";

const faqs = [
  {
    question: "What products are available on the website?",
    answer:
      "Our website features a range of fashion products designed for different styles and preferences.",
  },
  {
    question: "How can I find the right size?",
    answer:
      "You can check the size information provided with each product to choose the most suitable option.",
  },
  {
    question: "Can I return or exchange a product?",
    answer:
      "Return and exchange availability depends on the product and the applicable store policy.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery time depends on your location and the shipping option selected during checkout.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact our customer support team through the contact section of the website.",
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