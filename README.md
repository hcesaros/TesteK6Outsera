# 🚀 Testes de Carga com K6

Este projeto utiliza o [K6](https://k6.io) para simular testes de carga em uma API pública, com o objetivo de avaliar o desempenho e identificar gargalos sob alta demanda.

---

## 📌 Objetivo

Executar testes de carga simulando **500 usuários simultâneos por 5 minutos** contra o endpoint da API JSONPlaceholder:

GET https://jsonplaceholder.typicode.com/posts

---

## 🛠️ Ferramentas Utilizadas

- [K6](https://k6.io): ferramenta de testes de performance open source
- JavaScript: linguagem utilizada para escrever os scripts de teste

---

## 📁 Estrutura do Projeto

├── k6-load-test.js # Script principal do teste de carga

├── resultados/ # Pasta para armazenar os relatórios (opcional)

├── relatorio-performance-k6.html # arquivo html com as execucoes do teste

└── README.md # Documentação do projeto

---

## ⚙️ Configuração do teste

O teste simula a seguinte carga de usuários:

| Fase           | Duração | Usuários Virtuais (VUs) |
|----------------|---------|--------------------------|
| Ramp-up        | 30s     | de 0 a 500               |
| Sustentação    | 4m      | 500                      |
| Ramp-down      | 30s     | de 500 a 0               |

---

## 🎯 Critérios de sucesso (thresholds)

- ✅ **95% das requisições** devem responder em **menos de 500ms**
- ❌ A taxa de falhas deve ser **menor que 1%**

javascript

thresholds: {

  http_req_duration: ['p(95)<500'],
  http_req_failed: ['rate<0.01'],
  
}

---

▶️ Como executar
1. Instalar o K6 (se ainda não tiver)
Via Homebrew (macOS):

brew install k6

2. Rodar o teste

k6 run k6-load-test.js

---

📊 Exemplo de saída
Durante a execução, o K6 exibirá informações como:

* Tempo médio de resposta

* Percentis (p(90), p(95), etc.)

* Requisições por segundo

* Taxa de falhas

* Cumprimento dos thresholds
