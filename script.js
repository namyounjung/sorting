const imgEls = document.querySelectorAll("#gallary img");

function start(type){
  const imgs = extactImgs();
  const sortExtactImgs = sortImgs(imgs);

  // 
  if(type === 'down') sortExtactImgs.reverse();
  printDomImg(sortExtactImgs);
}

/**
 * 이미지 추출
 */
function extactImgs(){

  const originArr = [];
  imgEls.forEach(function(el){

    originArr.push({
      src: el.src, 
      name: el.dataset.name
    })
  });

  return originArr;
}

/**
 * 이미지 정렬
 * @param {*} imgs 
 * @returns 
 */
function sortImgs(imgs){
  imgs.sort(function (a, b) {
    if (a.name > b.name)  return 1;
    else if (a.name < b.name)  return -1;
    else return 0;
  });

  return imgs;
}

function printDomImg(sortExtactImgs){
  console.log(sortExtactImgs)
  imgEls.forEach(function(el, i){
    el.src = sortExtactImgs[i].src;
    el.dataset.name = sortExtactImgs[i].name; 
    el.nextElementSibling.innerText = sortExtactImgs[i].name;
  });
}