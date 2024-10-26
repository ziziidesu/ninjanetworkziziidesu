(function() {
  var defaultTitle = 'Net_Ninja';
  var defaultIcon = 'https://tse2.mm.bing.net/th?id=OIG4.1PyEdpKfqtfUM9Vhmsfx&pid=ImgGn'; // アイコンのURLを変更

  var storedTitle = localStorage.getItem('tabTitle');
  var storedIcon = localStorage.getItem('tabIcon');

  var newTitle = storedTitle || defaultTitle;
  var newIcon = storedIcon || defaultIcon;

  var icon = document.querySelector('link[rel="icon"]');
  if (icon) {
      icon.setAttribute('href', newIcon);
  } else {
      console.log('Tab Cloak Disabled');
      document.title = defaultTitle;
  }

  if (storedTitle) {
      document.title = newTitle;
  }
})();

// Clickoff Check
var defaultTitle = 'Net_Ninja';
var defaultIcon = 'https://tse2.mm.bing.net/th?id=OIG4.1PyEdpKfqtfUM9Vhmsfx&pid=ImgGn'; // アイコンのURLを変更
var storedTitle = localStorage.getItem('tabTitle');
var storedIcon = localStorage.getItem('tabIcon');
var icon = document.querySelector('link[rel="icon"]');
var newTitle = storedTitle || defaultTitle;
var newIcon = storedIcon || defaultIcon;
var clickoff = localStorage.getItem('clickoffCloak');

if (storedIcon === null || storedIcon === '') {
    localStorage.setItem('tabIcon', defaultIcon); // デフォルトのアイコンを保存
}

var storedIcon = localStorage.getItem('tabIcon');

if (clickoff === 'enabled') {
  document.addEventListener("visibilitychange", function() {
      if (document.hidden) {
          document.title = "Google Docs";
          icon.setAttribute('href', 'https://tse2.mm.bing.net/th?id=OIG4.1PyEdpKfqtfUM9Vhmsfx&pid=ImgGn'); // Google Docsのアイコンに設定
      } else {
          document.title = newTitle;
          icon.setAttribute('href', storedIcon);
      }
  });
}

// panic key
var storedKey = localStorage.getItem('pkKey');

if (storedKey) {
  document.addEventListener('keydown', function(event) {
    if (event.key === storedKey) {
        function redirect() {
        document.write(`<script>window.location.href = 'https://www.google.com';</script>`);
    }
        setInterval(redirect, 200);
    }
  });
}
