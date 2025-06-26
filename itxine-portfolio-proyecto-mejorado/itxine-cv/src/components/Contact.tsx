import { useState, FormEvent } from 'react';

export const Contact = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error cuando el usuario comienza a escribir
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    setFormError('');
    
    try {
      const form = e.target as HTMLFormElement;
      const data = new FormData(form);
      
      // Verificar conexión a internet
      if (!navigator.onLine) {
        throw new Error('No hay conexión a internet. Por favor, verifica tu conexión e inténtalo de nuevo.');
      }
      
      const response = await fetch("https://formspree.io/f/xdoqzjzv", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });
      
      const responseData = await response.json();
      
      if (response.ok) {
        setSent(true);
        form.reset();
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Extraer mensaje de error específico de Formspree si está disponible
        const errorMessage = responseData.error || 
                            (responseData.errors && responseData.errors.length > 0 ? responseData.errors[0].message : null) || 
                            'Error al enviar el formulario';
        throw new Error(errorMessage);
      }
    } catch (error: any) {
      console.error('Error:', error);
      setFormError(error.message || "Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-4xl mx-auto mb-12" id="contact">
      <h2 className="text-3xl font-bold mb-4">Contacto</h2>
      <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded flex flex-col sm:flex-row items-start sm:items-center gap-2">
        <span className="font-semibold">Teléfono:</span>
        <a href="tel:635757818" className="text-blue-600 hover:underline text-lg">635757818</a>
      </div>
      {sent ? (
        <div className="p-4 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200 rounded mb-4">
          <p className="font-medium">¡Mensaje enviado correctamente!</p>
          <p className="text-sm mt-2">Gracias por contactarme, responderé a la brevedad posible.</p>
          <button 
            onClick={() => setSent(false)} 
            className="mt-3 text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form
          className="space-y-4"
          method="POST"
          action="https://formspree.io/f/xdoqzjzv"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_subject" value="Nuevo mensaje de contacto" />
          <input type="text" name="_gotcha" style={{ display: 'none' }} />
          {formError && (
            <div className="p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded mb-4">
              <p className="font-medium">Error:</p>
              <p className="text-sm">{formError}</p>
            </div>
          )}
          <div>
            <input 
              type="text" 
              name="name" 
              placeholder="Nombre" 
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-2 rounded border ${errors.name ? 'border-red-500' : 'border-gray-300'}`} 
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          
          <div>
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 rounded border ${errors.email ? 'border-red-500' : 'border-gray-300'}`} 
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          
          <div>
            <textarea 
              name="message" 
              placeholder="Mensaje" 
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`w-full p-2 rounded border ${errors.message ? 'border-red-500' : 'border-gray-300'}`} 
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className={`${loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} text-white px-4 py-2 rounded transition-colors flex items-center justify-center`}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </>
            ) : 'Enviar'}
          </button>
        </form>
      )}
    </section>
  );
};
