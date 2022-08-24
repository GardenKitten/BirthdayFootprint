var image = document.querySelectorAll('.image');

// 照片倾斜
for (var i = 0; i < image.length; i++) {
  // 1至4循环
  var num = (i + 1) % 4;
  switch (num) {
    case 1:
      image[i].style.transform = 'rotate(12deg)';
      break;
    case 2:
      image[i].style.transform = 'rotate(-5deg)';
      break;
    case 3:
      image[i].style.transform = 'rotate(10deg)';
      break;
    case 0:
      image[i].style.transform = 'rotate(8deg)';
      break;
  }
}