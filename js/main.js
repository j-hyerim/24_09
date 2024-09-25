const imgElement01 = document.getElementById('myImage01');

imgElement01.addEventListener('mouseover', () => {
  imgElement01.src = './img/icon_instaH.svg'; 
});

imgElement01.addEventListener('mouseout', () => {
  imgElement01.src = './img/icon_insta.svg';
});

const imgElement02 = document.getElementById('myImage02');

imgElement02.addEventListener('mouseover', () => {
  imgElement02.src = './img/icon_naverH.svg';
});

imgElement02.addEventListener('mouseout', () => {
    imgElement02.src = './img/icon_naver.svg'; 
});
