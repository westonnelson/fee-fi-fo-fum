export default function FAQ() {
    const faqs = [
      {
        question: "What is FeeFiFoFum (FFF)?",
        answer: "FeeFiFoFum (FFF) is a memecoin launched on the Solana blockchain, aiming to bring fun and community engagement to the world of cryptocurrency."
      },
      {
        question: "How can I buy FFF tokens?",
        answer: "FFF tokens can be purchased on various decentralized exchanges on the Solana network. Always ensure you're using the correct contract address."
      },
      {
        question: "What makes FFF unique?",
        answer: "FFF combines the fun aspect of memecoins with real utility on the Solana blockchain, including staking, governance, and future DeFi applications."
      },
      {
        question: "Is FFF safe to invest in?",
        answer: "As with all cryptocurrencies, investing in FFF carries risks. Always do your own research and never invest more than you can afford to lose."
      }
    ]
  
    return (
      <div>
        <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
              <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  