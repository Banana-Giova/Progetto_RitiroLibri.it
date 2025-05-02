import { useState } from 'react';
import { Spacer } from "@heroui/spacer";

export default function ContactForm() {
  const [form, setForm] = useState({
    nome: '',
    cognome: '',
    telefono: '',
    email: '',
    messaggio: '',
  });

  // Per eventuale file upload (non incluso nell’email mailto)
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Costruisci il body: ogni campo su nuova riga
    const bodyLines = [
      `Nome: ${form.nome}`,
      `Cognome: ${form.cognome}`,
      `Telefono: ${form.telefono}`,
      `Email: ${form.email}`,
      `Messaggio: ${form.messaggio}`,
      file ? `(Foto o lista allegata via allegato manuale)` : '',
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));

    // Parametri mailto: destinatario, subject e body
    const mailto = `mailto:ritirolibri@esempio.it?subject=Richiesta%20Ritiro&body=${body}`;

    // Apri il client email
    window.location.href = mailto;
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
        <label>Carica foto o elenco libri (opzionale)</label>
        <input type="file" onChange={handleFile} />
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
