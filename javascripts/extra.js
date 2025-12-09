(function aboutMeModule(baseUrl = '') {
  function renderAboutMe() {
    const aboutMe = document.getElementById('about-me');
    if (!aboutMe) return;

    const lang = document.documentElement.lang || 'en';

    const html = lang === 'zh'
      ? `
          <p>单丹枫，副教授，博导</p>
          <p>
            <a href="http://www.xjtu.edu.cn">西安交通大学</a>
            <a href="http://www.cs.xjtu.edu.cn">计算机科学与技术学院</a>
          </p>
          <p>
            地址: 西安交通大学创新港校区泓理楼4-6076
            <br>
            <abbr title="E-mail">邮箱:</abbr>
            <img src="${baseUrl}/assets/images/xjtu-mail.png" class="mh-25" alt="email"> 或
            <img src="${baseUrl}/assets/images/gmail.gif" alt="email" height="22">
          </p>
        `
      : `
          <p>Danfeng Shan, Associate Professor</p>
          <p>
            <a href="http://www.cs.xjtu.edu.cn">School of Computer Science and Technology</a>
            <br />
            <a href="http://www.xjtu.edu.cn">Xi'an Jiaotong University</a>
          </p>
          <p>
            Address:
            Room 6076, Hongli Building, iHabour,
            Xi'an, Shaanxi, 710049, China.
            <br>
            E-mail:
            <img src="${baseUrl}/assets/images/xjtu-mail.png" class="mh-25" alt="email"> or
            <img src="${baseUrl}/assets/images/gmail.gif" alt="email" height="22">
          </p>
        `;

    aboutMe.innerHTML = html.trim();
  }

  // Run once on initial load
  renderAboutMe();

  // Re-run after MkDocs Material swaps page content
  if (window.document$ && typeof window.document$.subscribe === 'function') {
    window.document$.subscribe(renderAboutMe);
  }

  // Re-run when the <html lang="..."> attribute changes (language switch)
  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'lang') {
        renderAboutMe();
        break;
      }
    }
  });

  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
})();
