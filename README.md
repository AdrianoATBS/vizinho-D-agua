# 🌊 Vizinho D’Água — Frontend

---

## 🎯 Sobre o Projeto

Interface web do projeto Vizinho D’Água, desenvolvida em **React + TypeScript + Vite**, com foco em uma experiência simples, intuitiva e otimizada para dispositivos móveis.

O objetivo é facilitar o registro de **denúncias**, participação em **comunidades**, acesso a **dicas** e acompanhamento de **conteúdos educativos**.

Esta é uma **versão de estudo**, utilizando **dados mockados** para simular respostas reais, sem integração com API.

---

## 📱 Foco em Mobile

O projeto segue a metodologia **mobile-first**, garantindo melhor experiência em dispositivos móveis.

---

## 🚀 Funcionalidades

| Funcionalidade | Status | Descrição |
| :--- | :--- | :--- |
| **📝 Denúncias** | Mock | Criar, editar e visualizar denúncias (dados simulados) |
| **👥 Comunidades** | Mock | Visualizar e simular interações com comunidades (dados simulados) |
| **💡 Dicas e Conteúdo** | Mock | Conteúdos educativos simulados (dados simulados) |
| **📣 Alertas** | Mock | Exibição de alertas informativos na Home (dados simulados) |

---

## 🧰 Tecnologias Utilizadas

- **React 18**
- **TypeScript**
- **Vite**
- **Redux**
- **React Router DOM**
- **CSS Modules**
- **Arquitetura modular** (`components` / `pages` / `hooks`)

---

## 📂 Estrutura do Projeto

```bash
/
├── public/                # Assets públicos (imagens, PDFs)
├── src/
│   ├── assets/            # Ícones, imagens internas e mídias
│   ├── components/        # Componentes reutilizáveis
│   ├── contexts/          # Context API (estado global)
│   ├── hooks/             # Hooks personalizados
│   ├── mocks/             # Dados mockados para testes
│   ├── pages/             # Telas da aplicação
│   ├── routes/            # Configuração de rotas
│   ├── theme/             # Variáveis e tema global
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
└── vite.config.ts
```
---

## ⚙️ Como Executar o Projeto

### 🔽 Clone o repositório:

```bash
git clone https://github.com/AdrianoATBS/vizinho-D-agua.git
cd vizinho-D-agua
```
## 📦 Instale as dependências:
```bash
npm install
```
## 🚀 Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
A aplicação estará disponível em: **👉 http://localhost:5173/**

> Recomenda-se **utilizar o modo mobile do navegador** (DevTools) para a melhor experiência.

Para gerar a versão otimizada para produção:
```bash
npm run build
```
---
## ⚠️ Aviso
Este projeto foi desenvolvido exclusivamente para fins educacionais (TCC Estartando Devs 2025).
A reprodução, redistribuição ou publicação deste código sem autorização prévia é proibida.
