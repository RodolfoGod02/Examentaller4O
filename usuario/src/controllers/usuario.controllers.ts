export const getAll = (req: any, res: any) => {
  const usuarios = [
      { id: 1, nombre: "Juan Pérez", email: "juan@example.com" },
      { id: 2, nombre: "Ana García", email: "anag@example.com" },
      { id: 3, nombre: "Carlos López", email: "carlos@example.com" }
  ];
  return res.status(200).json(usuarios);
};