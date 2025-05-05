# K6 Load Test

Este projeto executa um teste de carga usando K6 simulando 500 usuários simultâneos por 5 minutos.

## Requisitos

- Node.js (opcional, apenas para ferramentas adicionais)
- K6 (https://k6.io/docs/getting-started/installation/)

## Como rodar

```bash
k6 run load-test.js
```

Para gerar um relatório JSON:

```bash
k6 run --out json=results/output.json load-test.js
```
