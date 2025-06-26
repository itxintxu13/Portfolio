
export const ContactForm = () => {
  return (
    <section className="p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contáctame</h2>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Tu nombre"
          className="p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Tu correo"
          className="p-2 border rounded"
        />
        <textarea
          placeholder="Tu mensaje"
          rows={4}
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};
