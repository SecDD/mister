export default function Contact() {
  return (
    <section className="px-6 py-20 max-w-2xl mx-auto">
      <h3 className="text-3xl font-bold text-center mb-6">Let’s Secure Your Digital World</h3>
      <p className="text-center mb-8">Reach out and let us know how we can help.</p>
      <form
        action="https://formspree.io/f/your-form-id" // Replace with your Formspree ID
        method="POST"
        className="space-y-4"
      >
        <input name="name" type="text" placeholder="Your Name" className="w-full p-3 rounded border border-gray-300 dark:bg-gray-800" required />
        <input name="email" type="email" placeholder="Your Email" className="w-full p-3 rounded border border-gray-300 dark:bg-gray-800" required />
        <textarea name="message" placeholder="Your Message" rows="5" className="w-full p-3 rounded border border-gray-300 dark:bg-gray-800" required></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send Message</button>
      </form>
    </section>
  );
}
