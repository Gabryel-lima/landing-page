# EcoRide

**Landing Page One-Page responsiva e moderna para soluções de caronas sustentáveis.**

## 📂 Estrutura de Diretórios

```bash
ecoride/
├── assets/
│   ├── css/
│   │   └── styles.css        # Estilos separados (Tailwind custom + overrides)
│   ├── js/
│   │   └── script.js         # Lógica de interação (Back-to-Top, menu mobile, formulário)
│   └── images/               # Imagens e SVGs utilizados (otimizados)
├── index.html               # Página principal
├── README.md                # Documentação do projeto
└── .gitignore               # Arquivos e pastas a ignorar no Git
```

## 🚀 Como usar

1. Clone o repositório:
   ```bash
   git clone <URL-do-repositório>
   cd ecoride
   ```
2. Abra o arquivo `index.html` no seu navegador.
3. (Opcional) Customize cores e fontes em `assets/css/styles.css` ou no arquivo de configuração do Tailwind.

## 🛠 Tecnologias

- HTML5
- CSS3 com Tailwind CSS (CDN ou via build)
- Font Awesome 6
- JavaScript Vanilla

## 🎨 Personalização

- **Cores e tema:** Ajuste as variáveis CSS em `:root` ou configure o `tailwind.config.js`.
- **Imagens:** Substitua arquivos em `assets/images/` por seus próprios visuais.
- **Formulário de contato:** Integre a um serviço de backend ou Formspree/Netlify Forms.

## ✅ Checklist e O que falta

- [ ] Integrar formulário com backend ou serviço de e-mail
- [ ] Otimizar e converter imagens para WebP
- [ ] Adicionar meta tags de SEO (OG, Twitter Cards)
- [ ] Configurar analytics (Google Analytics, Hotjar etc.)
- [ ] Implementar PWA (manifest.json e service worker)
- [ ] Pipeline de build com PurgeCSS e minificação de assets
- [ ] Testes de responsividade e acessibilidade (WCAG)

## 📈 Próximos Passos Recomendados

1. **SEO e Performance**: adicione meta tags, use Lighthouse para otimização, purgue CSS e minifique HTML/CSS/JS.
2. **Deploy Automático**: configure GitHub Pages, Netlify ou Vercel para CI/CD.
3. **Formulário Dinâmico**: conecte o formulário a um endpoint (Node.js, PHP ou serviço serverless).
4. **PWA**: crie um `manifest.json` e um service worker para tornar o site installable.
5. **Monitoramento**: integre Google Analytics e Sentry para tracking e erros.
6. **Acessibilidade**: valide ARIA, contraste de cores e navegação por teclado.

## 📄 Licença

Distribuído sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

## 🤝 Contato

- Autor: @Code Len
- Site: https://www.youtube.com/@Code_Len
- Email: contatocodelen@gmail.com

---
