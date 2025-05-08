import { useState } from 'react';
import { Spacer } from "@heroui/spacer";

const ContactForm = () => {
  const [form, setForm] = useState({
    nome: '',
    cognome: '',
    telefono: '',
    email: '',
    messaggio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bodyLines = [
      `Cliente: ${form.nome.trim()}` + ` ${form.cognome.trim()}`,
      `Telefono: ${form.telefono.trim()}`,
      `Email: ${form.email.trim()}`,
      `\n${(form.messaggio != ``) ? form.messaggio : "Ciao, vorrei liberarmi velocemente di alcuni libri usati. Potete aiutarmi?"}`,
    ];
    const prefillMessage = encodeURIComponent(bodyLines.join('\n'));
    const url_redirect = `https://wa.me/3514229421?text=${prefillMessage}`
    
    window.open(url_redirect);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div>
        <label>Nome*</label>
        <input name="nome" required value={form.nome} onChange={handleChange} />
      </div>
      <div>
        <label>Cognome*</label>
        <input name="cognome" required value={form.cognome} onChange={handleChange} />
      </div>
      <div>
        <label>Telefono*</label>
        <input name="telefono" required value={form.telefono} onChange={handleChange} />
      </div>
      <div>
        <label>Email*</label>
        <input name="email" type="email" required value={form.email} onChange={handleChange} />
      </div>
      <div>
        <label>Messaggio</label>
        <textarea
          name="messaggio"
          placeholder="Ad esempio, quantità approssimativa di libri..."
          value={form.messaggio}
          onChange={handleChange}
        />
        <Spacer y={4} />
        <button type="submit">Invia richiesta</button>
      </div>
    </form>
  );
}

export default ContactForm;