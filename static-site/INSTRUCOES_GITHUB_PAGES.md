# 📋 INSTRUÇÕES COMPLETAS - GitHub Pages

## 🎯 Passo a Passo Detalhado

### 1️⃣ PREPARAR OS ARQUIVOS
1. Baixe todos os arquivos desta pasta para seu computador
2. Verifique se tem a estrutura:
   ```
   📁 lorenagarciabeauty/
   ├── 📄 index.html
   ├── 📁 css/
   │   └── 📄 styles.css
   ├── 📁 js/
   │   └── 📄 scripts.js
   ├── 📄 README.md
   └── 📄 INSTRUCOES_GITHUB_PAGES.md
   ```

### 2️⃣ CRIAR CONTA NO GITHUB (se não tiver)
1. Acesse: https://github.com
2. Clique em "Sign up"
3. Crie sua conta gratuita

### 3️⃣ CRIAR O REPOSITÓRIO
1. No GitHub, clique no **"+"** no canto superior direito
2. Selecione **"New repository"**
3. Nome do repositório: `lorenagarciabeauty` (ou outro nome de sua escolha)
4. ✅ Marque **"Public"**
5. ❌ **NÃO** marque "Add a README file"
6. Clique em **"Create repository"**

### 4️⃣ FAZER UPLOAD DOS ARQUIVOS
**Opção A - Interface Web (Mais Fácil):**
1. Na página do repositório criado, clique em **"uploading an existing file"**
2. Arraste TODOS os arquivos da pasta para a área de upload
3. ⚠️ **IMPORTANTE**: Mantenha a estrutura de pastas (css/, js/)
4. Adicione uma mensagem: "Upload inicial do site"
5. Clique em **"Commit changes"**

**Opção B - Git (Avançado):**
```bash
git clone https://github.com/SEUUSUARIO/lorenagarciabeauty.git
cd lorenagarciabeauty
# Copie todos os arquivos para esta pasta
git add .
git commit -m "Upload inicial do site"
git push origin main
```

### 5️⃣ ATIVAR GITHUB PAGES
1. No repositório, clique na aba **"Settings"** (última aba)
2. Role para baixo até encontrar **"Pages"** na barra lateral esquerda
3. Em **"Source"**, selecione:
   - Branch: **"main"** (ou "master")
   - Folder: **"/ (root)"**
4. Clique em **"Save"**
5. ✅ Uma mensagem verde aparecerá com o link do seu site!

### 6️⃣ ACESSAR SEU SITE
- Aguarde 2-5 minutos para o site ficar online
- URL será: `https://SEUUSUARIO.github.io/lorenagarciabeauty`
- Exemplo: `https://maria123.github.io/lorenagarciabeauty`

## 🔧 PERSONALIZAÇÃO RÁPIDA

### Alterar Informações de Contato:
1. Abra o arquivo `index.html`
2. Procure por `wa.me/554196987908` e substitua pelo seu WhatsApp
3. Procure por `@lorenagarciabeauty` e substitua pelo seu Instagram
4. Procure por `contato@lorengarcia.com` e substitua pelo seu e-mail

### Alterar Textos:
1. No `index.html`, procure pelos textos que quer mudar
2. Exemplo: "Lorena Garcia" → "Seu Nome"
3. Salve e faça upload do arquivo atualizado

### Alterar Imagens:
1. Substitua as URLs das imagens no `index.html`
2. Procure por `https://i.imgur.com/` e substitua pelas suas imagens
3. Salve e faça upload

## ⚠️ PROBLEMAS COMUNS

### Site não carrega:
- ✅ Verifique se o arquivo se chama exatamente `index.html`
- ✅ Aguarde até 10 minutos após ativar Pages
- ✅ Tente acessar em modo anônimo/privado

### CSS não funciona:
- ✅ Verifique se a pasta `css` foi enviada corretamente
- ✅ Confirme que `styles.css` está dentro da pasta `css`

### JavaScript não funciona:
- ✅ Verifique se a pasta `js` foi enviada corretamente
- ✅ Confirme que `scripts.js` está dentro da pasta `js`

### Imagens não carregam:
- ✅ Verifique se as URLs das imagens estão corretas
- ✅ Teste se as imagens abrem em uma nova aba

## 📞 LINKS IMPORTANTES

- **GitHub**: https://github.com
- **Documentação GitHub Pages**: https://pages.github.com
- **Editor Online**: https://github.dev (adicione ao seu repositório)

## 🎉 PRONTO!

Seu site estará online 24/7, gratuito, com:
- ✅ SSL (https://) automático
- ✅ Carregamento rápido
- ✅ Responsivo (mobile/desktop)
- ✅ SEO otimizado

**🔗 Compartilhe o link do seu site em suas redes sociais!**