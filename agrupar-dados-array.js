const motivos_recusa_elegibilidade = [
  {
    codigo: '176',
    tipo: 'Consulta Apontamento Cadastral',
    descricao: 'Desc 176',
  },
  {
    codigo: '211',
    tipo: 'Consulta Apontamento Cadastral',
    descricao: 'Desc 211',
  },
  {
    codigo: '90001',
    tipo: 'Consulta Receita Federal',
    descricao: 'Desc 90001',
  },
  {
    codigo: '90002',
    tipo: 'Consulta Receita Federal',
    descricao: 'Desc 90002',
  },
];

console.log(motivos_recusa_elegibilidade);

const motivosAgrupadosByTipo = motivos_recusa_elegibilidade.reduce(
  (obj, { tipo, codigo, descricao }) => {
    if (!obj[tipo]) obj[tipo] = [];
    obj[tipo].push(codigo);
    return obj;
  },
  {},
);

const motivos_recusa = Object.keys(motivosAgrupadosByTipo).map((tipo) => {
  return {
    tipo_recusa: tipo,
    codigos: motivosAgrupadosByTipo[tipo],
  };
});

console.log(motivos_recusa);
