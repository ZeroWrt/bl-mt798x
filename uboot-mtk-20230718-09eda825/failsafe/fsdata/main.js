const translations = {
  zh: {
    title: "固件更新",
    subtitle: "您将在这台设备上更新固件",
    hint: "请从本地硬盘中选择文件，然后单击更新按钮",
    selectFile: "选择文件",
    noFileSelected: "未选择文件",
    upload: "上传",
    update: "更新",
    start: "启动",
    size: "镜像大小",
    md5: "MD5",
    mtdLayout: "MTD 布局",
    currentMtd: "当前 MTD 布局",
    selectMtd: "选择MTD布局",
    uploaded: "已上传",
    readyToUpdate: "固件已上传，请点击\"更新\"",
    readyToBoot: "如果以上信息均正确，请点击\"启动\"",
    warning: "警告",
    warnings: [
      "更新期间不要关闭设备电源",
      "如果一切顺利，设备将重新启动",
      "你可以上传任何你想要的东西，所以一定要为你的设备选择合适的固件映像"
    ],
    ubootWarnings: [
      "更新期间不要关闭设备电源",
      "如果一切顺利，设备将重新启动",
      "你可以上传任何你想要的东西，但请确保一定要为你的设备选择合适的 U-Boot",
      "更新U-Boot是一项非常危险的操作，可能会损坏您的设备!"
    ],
    gptWarnings: [
      "更新期间请勿断电",
      "如果一切正常，设备将自动重启",
      "您可以上传任意文件，但请确保选择适合您设备的 GPT 镜像",
      "更新 GPT 是一项危险操作，可能会损坏您的设备!"
    ],
    bl2Warnings: [
      "更新期间不要关闭设备电源",
      "如果一切顺利，设备将重新启动",
      "你可以上传任何你想要的东西，所以一定要为你的设备选择合适的 U-Boot",
      "更新BL2是一项非常危险的操作，可能会损坏您的设备!"
    ],
    initramfsWarnings: [
      "如果一切正常，设备将进入 initramfs",
      "您可以上传任意文件，但请确保为您的设备选择了正确的 initramfs 镜像"
    ],
    firmware: "固件",
    uboot: "U-Boot",
    gpt: "GPT",
    initramfs: "Initramfs",
    bl2: "BL2",
    firmwareCard: "固件更新",
    firmwareCardDesc: "更新设备固件文件",
    ubootCard: "U-Boot 更新",
    ubootCardDesc: "更新引导加载程序",
    gptCard: "GPT 更新",
    gptCardDesc: "更新磁盘分区表",
    initramfsCard: "加载 Initramfs",
    initramfsCardDesc: "启动初始化内存文件系统",
    bl2Card: "BL2 更新",
    bl2CardDesc: "更新二级引导程序",
    ubootTitle: "U-Boot 更新",
    ubootSubtitle: "更新 U-Boot 引导加载程序",
    gptTitle: "GPT 更新",
    gptSubtitle: "更新 GPT 分区表",
    initramfsTitle: "加载 Initramfs",
    initramfsSubtitle: "启动 Initramfs",
    bl2Title: "BL2 更新",
    bl2Subtitle: "更新 BL2 引导加载程序",
    menu: "菜单",
    settings: "设置",
    theme: "主题",
    language: "语言",
    auto: "自动",
    light: "亮色",
    dark: "暗色",
    brandName: "联发科工具",
    brandTagline: "MediaTek Firmware Tool"
  },
  en: {
    title: "Firmware Update",
    subtitle: "You are about to update firmware on this device",
    hint: "Select a file from your local drive, then click Update",
    selectFile: "Select File",
    noFileSelected: "No file selected",
    upload: "Upload",
    update: "Update",
    start: "Start",
    size: "Size",
    md5: "MD5",
    mtdLayout: "MTD Layout",
    currentMtd: "Current MTD Layout",
    selectMtd: "Select MTD Layout",
    uploaded: "Uploaded",
    readyToUpdate: "Firmware uploaded, click Update to continue",
    readyToBoot: "If the information is correct, click Start",
    warning: "Warning",
    warnings: [
      "Do not power off during update",
      "Device will restart if everything goes well",
      "You can upload any file, but make sure to choose the correct firmware for your device"
    ],
    ubootWarnings: [
      "Do not power off during update",
      "Device will restart if everything goes well",
      "You can upload any file, but make sure to choose the correct U-Boot",
      "Updating U-Boot is very dangerous and may damage your device!"
    ],
    gptWarnings: [
      "Do not power off during update",
      "Device will restart automatically if everything is normal",
      "You can upload any file, but make sure to choose the correct GPT for your device",
      "Updating GPT is dangerous and may damage your device!"
    ],
    bl2Warnings: [
      "Do not power off during update",
      "Device will restart if everything goes well",
      "You can upload any file, but make sure to choose the correct U-Boot",
      "Updating BL2 is very dangerous and may damage your device!"
    ],
    initramfsWarnings: [
      "Device will boot into initramfs if everything is normal",
      "You can upload any file, but make sure to choose the correct initramfs for your device"
    ],
    firmware: "Firmware",
    uboot: "U-Boot",
    gpt: "GPT",
    initramfs: "Initramfs",
    bl2: "BL2",
    firmwareCard: "Firmware Update",
    firmwareCardDesc: "Update device firmware",
    ubootCard: "U-Boot Update",
    ubootCardDesc: "Update bootloader",
    gptCard: "GPT Update",
    gptCardDesc: "Update partition table",
    initramfsCard: "Load Initramfs",
    initramfsCardDesc: "Boot initramfs",
    bl2Card: "BL2 Update",
    bl2CardDesc: "Update second stage bootloader",
    ubootTitle: "U-Boot Update",
    ubootSubtitle: "Update U-Boot bootloader",
    gptTitle: "GPT Update",
    gptSubtitle: "Update GPT partition table",
    initramfsTitle: "Load Initramfs",
    initramfsSubtitle: "Boot initramfs",
    bl2Title: "BL2 Update",
    bl2Subtitle: "Update BL2 bootloader",
    menu: "Menu",
    settings: "Settings",
    theme: "Theme",
    language: "Language",
    auto: "Auto",
    light: "Light",
    dark: "Dark",
    brandName: "MediaTek Tool",
    brandTagline: "Firmware Update"
  }
};

let currentLang = localStorage.getItem('lang') || 'zh';
let currentTheme = localStorage.getItem('theme') || 'auto';

function t(key) {
  return translations[currentLang][key] || key;
}

function initTheme() {
  currentTheme = localStorage.getItem('theme') || 'auto';
  applyTheme(currentTheme);
  updateThemeIcon(currentTheme);
}

function applyTheme(theme) {
  if (theme === 'auto') {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  } else if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  localStorage.setItem('theme', theme);
}

function updateThemeIcon(theme) {
  const themeBtn = document.getElementById('theme-btn');
  if (!themeBtn) return;
  
  if (theme === 'auto') {
    themeBtn.innerHTML = '🌓';
    themeBtn.title = currentLang === 'zh' ? '自动' : 'Auto';
  } else if (theme === 'dark') {
    themeBtn.innerHTML = '🌙';
    themeBtn.title = currentLang === 'zh' ? '暗色' : 'Dark';
  } else {
    themeBtn.innerHTML = '☀️';
    themeBtn.title = currentLang === 'zh' ? '亮色' : 'Light';
  }
}

function cycleTheme() {
  if (currentTheme === 'auto') {
    currentTheme = 'dark';
  } else if (currentTheme === 'dark') {
    currentTheme = 'light';
  } else {
    currentTheme = 'auto';
  }
  applyTheme(currentTheme);
  updateThemeIcon(currentTheme);
}

function initLang() {
  const savedLang = localStorage.getItem('lang') || 'zh';
  currentLang = savedLang;
}

function changeLang(value) {
  currentLang = value;
  localStorage.setItem('lang', value);
  updatePageTexts();
  updateThemeIcon(currentTheme);
}

function updatePageTexts() {
  const page = document.body.getAttribute('data-page') || 'firmware';
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
  
  if (document.getElementById('form-title')) {
    const titles = {
      firmware: t('title'),
      uboot: t('ubootTitle'),
      gpt: t('gptTitle'),
      initramfs: t('initramfsTitle'),
      bl2: t('bl2Title')
    };
    document.getElementById('form-title').textContent = titles[page] || t('title');
  }
  
  if (document.getElementById('form-desc')) {
    const subtitles = {
      firmware: t('hint'),
      uboot: t('ubootSubtitle'),
      gpt: t('gptSubtitle'),
      initramfs: t('initramfsSubtitle'),
      bl2: t('bl2Subtitle')
    };
    document.getElementById('form-desc').textContent = subtitles[page] || t('hint');
  }
  
  if (document.getElementById('file-label')) {
    document.getElementById('file-label').innerHTML = '<span>📂</span> ' + t('selectFile');
  }
  
  const warningList = document.getElementById('warning-list');
  if (warningList) {
    const warnings = {
      firmware: t('warnings'),
      uboot: t('ubootWarnings'),
      gpt: t('gptWarnings'),
      initramfs: t('initramfsWarnings'),
      bl2: t('bl2Warnings')
    };
    const currentWarnings = warnings[page] || t('warnings');
    warningList.innerHTML = currentWarnings.map(w => `<li>${w}</li>`).join('');
  }
  
  const brandName = document.querySelector('.brand-name');
  if (brandName) {
    brandName.textContent = t('brandName');
  }
  
  const brandTagline = document.querySelector('.brand-tagline');
  if (brandTagline) {
    brandTagline.textContent = t('brandTagline');
  }
  
  const cardItems = document.querySelectorAll('.card');
  const cardData = [
    { title: 'firmwareCard', desc: 'firmwareCardDesc' },
    { title: 'ubootCard', desc: 'ubootCardDesc' },
    { title: 'gptCard', desc: 'gptCardDesc' },
    { title: 'initramfsCard', desc: 'initramfsCardDesc' },
    { title: 'bl2Card', desc: 'bl2CardDesc' }
  ];
  cardItems.forEach((card, index) => {
    if (cardData[index]) {
      const titleEl = card.querySelector('.card-title');
      const descEl = card.querySelector('.card-desc');
      if (titleEl) titleEl.textContent = t(cardData[index].title);
      if (descEl) descEl.textContent = t(cardData[index].desc);
    }
  });
}

function ajax(opt) {
  var xmlhttp;

  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
  }

  xmlhttp.upload.addEventListener('progress', function(e) {
    if (opt.progress)
      opt.progress(e);
  });

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      if (opt.done)
        opt.done(xmlhttp.responseText);
    }
  };

  if (opt.timeout)
    xmlhttp.timeout = opt.timeout;

  var method = 'GET';
  if (opt.data)
    method = 'POST';

  xmlhttp.open(method, opt.url);
  xmlhttp.send(opt.data);
}

function startup() {
  initTheme();
  initLang();
  updatePageTexts();
  setupEventListeners();
  getversion();
  getmtdlayoutlist();
}

function setupEventListeners() {
  const themeBtn = document.getElementById('theme-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', cycleTheme);
  }
  
  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.addEventListener('change', function() {
      changeLang(this.value);
    });
  }
  
  const fileInput = document.getElementById('file');
  if (fileInput) {
    fileInput.addEventListener('change', handleFileSelect);
  }
  
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function() {
      if (currentTheme === 'auto') {
        applyTheme('auto');
      }
    });
  }
}

function getmtdlayoutlist() {
  ajax({
    url: '/getmtdlayout',
    done: function(mtd_layout_list) {
      if (mtd_layout_list == "error")
        return;

      var mtd_layout = mtd_layout_list.split(';');

      var currentMtd = document.getElementById('current_mtd_layout');
      if (currentMtd) {
        currentMtd.innerHTML = t('currentMtd') + ": " + mtd_layout[0];
      }

      var e = document.getElementById('mtd_layout_label');
      if (e) {
        for (var i = 1; i < mtd_layout.length; i++) {
          if (mtd_layout[i].length > 0) {
            e.options.add(new Option(mtd_layout[i], mtd_layout[i]));
          }
        }
      }
      
      var mtdSection = document.getElementById('mtd_layout_section');
      if (mtdSection) {
        mtdSection.style.display = '';
      }
    }
  });
}

function getversion() {
  ajax({
    url: '/version',
    done: function(version) {
      var versionEl = document.getElementById('version');
      if (versionEl) {
        versionEl.innerHTML = version;
      }
    }
  });
}

function upload(name) {
  var fileInput = document.getElementById('file');
  var file = fileInput.files[0];
  if (!file)
    return;

  document.getElementById('form').style.display = 'none';
  document.getElementById('hint').style.display = 'none';

  var form = new FormData();
  form.append(name, file);

  var mtd_layout_list = document.getElementById('mtd_layout_label');
  if (mtd_layout_list && mtd_layout_list.options.length > 0) {
    var mtd_idx = mtd_layout_list.selectedIndex;
    form.append("mtd_layout", mtd_layout_list.options[mtd_idx].value);
  }

  ajax({
    url: '/upload',
    data: form,
    done: function(resp) {
      if (resp == 'fail') {
        location = '/fail.html';
      } else {
        const info = resp.split(' ');

        var sizeEl = document.getElementById('size');
        if (sizeEl) {
          sizeEl.style.display = 'block';
          sizeEl.innerHTML = t('size') + ': ' + info[0];
        }

        var md5El = document.getElementById('md5');
        if (md5El) {
          md5El.style.display = 'block';
          md5El.innerHTML = t('md5') + ': ' + info[1];
        }

        if (info[2]) {
          var mtdEl = document.getElementById('mtd');
          if (mtdEl) {
            mtdEl.style.display = 'block';
            mtdEl.innerHTML = t('mtdLayout') + ': ' + info[2];
          }
        }

        var upgradeEl = document.getElementById('upgrade');
        if (upgradeEl) {
          upgradeEl.style.display = 'block';
        }
      }
    },
    progress: function(e) {
      var percentage = parseInt(e.loaded / e.total * 100);
      var bar = document.getElementById('bar');
      if (bar) {
        bar.style.display = 'block';
        bar.querySelector('.progress-fill').style.width = percentage + '%';
        bar.querySelector('.progress-fill').textContent = percentage + '%';
      }
    }
  });
}

function handleFileSelect(event) {
  var file = event.target.files[0];
  var uploadZone = document.getElementById('upload-zone');
  var fileSelected = document.getElementById('file-selected');
  var fileNameEl = document.getElementById('file-name');
  var fileSizeEl = document.getElementById('file-size');
  var uploadBtn = document.getElementById('upload-btn');
  
  if (file) {
    if (uploadZone) uploadZone.style.display = 'none';
    if (fileSelected) {
      fileSelected.classList.remove('hidden');
      if (fileNameEl) fileNameEl.textContent = file.name;
      if (fileSizeEl) fileSizeEl.textContent = formatFileSize(file.size);
    }
    if (uploadBtn) uploadBtn.disabled = false;
  }
}

function removeFile() {
  var fileInput = document.getElementById('file');
  var uploadZone = document.getElementById('upload-zone');
  var fileSelected = document.getElementById('file-selected');
  var uploadBtn = document.getElementById('upload-btn');
  
  if (fileInput) fileInput.value = '';
  if (uploadZone) uploadZone.style.display = 'block';
  if (fileSelected) fileSelected.classList.add('hidden');
  if (uploadBtn) uploadBtn.disabled = true;
}

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  var k = 1024;
  var sizes = ['Bytes', 'KB', 'MB', 'GB'];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

document.addEventListener('DOMContentLoaded', function() {
  setupEventListeners();
});
