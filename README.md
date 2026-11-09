# CNPJ Consult

Consulta de CNPJ em React usando a [BrasilAPI](https://brasilapi.com.br/docs#tag/CNPJ).

## Funcionalidades

- Busca um CNPJ (somente números) no endpoint `https://brasilapi.com.br/api/cnpj/v1/{cnpj}`.
- Exibe razão social, nome fantasia, endereço completo (logradouro, número, bairro, complemento, CEP, município e UF).

## Tecnologias

- React 18 (Create React App)
- CSS puro
- BrasilAPI (sem chave de API)

## Como rodar

```bash
npm install
npm start      # http://localhost:3000
```

Build de produção: `npm run build`.
