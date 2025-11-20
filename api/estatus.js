import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Carrega l'estatus
    const estatus = await kv.get('estatus') || '';
    const descripcio = await kv.get('descripcio') || '';
    res.status(200).json({ estatus, descripcio });
  } else if (req.method === 'POST') {
    // Guarda l'estatus (requereix contrasenya)
    const { nouEstatus, novaDescripcio, contrasenya } = req.body;
    const contrasenyaCorrecta = 'guillem@12';  // La mateixa contrasenya
    if (contrasenya !== contrasenyaCorrecta) {
      return res.status(401).json({ error: 'Contrasenya incorrecta' });
    }
    await kv.set('estatus', nouEstatus);
    await kv.set('descripcio', novaDescripcio);
    res.status(200).json({ message: 'Estatus actualitzat' });
  } else {
    res.status(405).json({ error: 'Mètode no permès' });
  }
}