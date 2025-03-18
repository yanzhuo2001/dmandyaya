// 页面加载时默认显示第一个 section
window.onload = function() {
  showSection('section1');
};

// 用于管理各个 section 的显示/隐藏
function showSection(sectionId) {
  // 隐藏所有 section
  const sections = document.querySelectorAll('section');
  sections.forEach(sec => sec.classList.add('hidden'));
  // 显示指定 section
  const target = document.getElementById(sectionId);
  if (target) target.classList.remove('hidden');
}

// 打开图片/视频弹窗
function openModal(src, comment) {
  const modalOverlay = document.getElementById('photoModal');
  const modalImage = document.getElementById('modalImage');
  const modalVideo = document.getElementById('modalVideo');
  const modalComment = document.getElementById('modalComment');

  // 先全部隐藏
  modalImage.style.display = 'none';
  modalVideo.style.display = 'none';

  // 如果文件名以 .mp4 结尾（忽略大小写），则使用 <video> 播放
  if (src.toLowerCase().endsWith('.mp4')) {
    modalVideo.src = src;
    modalVideo.style.display = 'block';
    // 让之前可能设置过的 img.src 失效
    modalImage.src = '';
  } else {
    modalImage.src = src;
    modalImage.style.display = 'block';
    // 让之前可能设置过的 video.src 失效
    modalVideo.src = '';
  }

  modalComment.textContent = comment || '';
  modalOverlay.style.display = 'flex';
}

// 关闭弹窗
function closeModal() {
  const modalOverlay = document.getElementById('photoModal');
  const modalVideo = document.getElementById('modalVideo');
  const modalImage = document.getElementById('modalImage');

  modalVideo.src = '';
  modalImage.src = '';
  modalOverlay.style.display = 'none';
}

// ============== 写一封信（立刻能看见） ==============
function saveInstantMsg() {
  const msgArea = document.getElementById('instantMsg');
  const msgList = document.getElementById('instantMsgList');

  const text = msgArea.value.trim();
  if (!text) return;

  // 直接显示到页面上
  const p = document.createElement('p');
  p.textContent = text;
  msgList.appendChild(p);

  // 清空输入框
  msgArea.value = '';
}

// ============== 写给未来的信 ==============
function saveFutureMsg() {
  const futureDateInput = document.getElementById('futureDate');
  const futureMsgInput = document.getElementById('futureMsg');
  const futureMsgList = document.getElementById('futureMsgList');

  const dateValue = futureDateInput.value;
  const msgValue = futureMsgInput.value.trim();

  if (!dateValue || !msgValue) return;

  // 这里可以用 localStorage 或者后端接口来存储，这里仅做演示
  const p = document.createElement('p');
  p.textContent = `给 ${dateValue} 的信：${msgValue}`;
  futureMsgList.appendChild(p);

  // 清空输入框
  futureDateInput.value = '';
  futureMsgInput.value = '';
}
