export default function Contact() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full p-2 border rounded" required></textarea>
            </div>
            <button type="submit" className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700">Send Message</button>
          </form>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Other Ways to Reach Us</h2>
          <p>Email: contact@feefifofum.com</p>
          <p>Twitter: @FeeFiFoFumToken</p>
          <p>Telegram: t.me/FeeFiFoFumCommunity</p>
        </div>
      </div>
    )
  }
  