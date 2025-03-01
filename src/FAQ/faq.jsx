const FAQ = () => {
  const faqs = [
    "How much do blockchain app development services cost?",
    "How long does it take to build a blockchain app?",
    "How to hire the right blockchain developers from a blockchain application development company?",
    "What blockchain platforms do you work on?",
    "How can I assess the progress of my blockchain project?",
  ];

  return (
    <div className="w-full max-w-5xl mx-auto my-5">
      <h2 className="text-2xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      {faqs.map((question, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 mb-4 flex justify-between items-center cursor-pointer"
        >
          <span className="text-lg">{question}</span>
          <span className="text-xl">↓</span>
        </div>
      ))}
    </div>
  );
};
export default FAQ;
