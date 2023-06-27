// 웹페이지의 넓이
const viewWidth = 1280;
// 메인 이미지의 넓이
const mainImgWidth = 400;

$(document).ready(() => {
    let $slide = $('.slide')
    console.log($slide);
    
    let slideMovePosition = 0;
    
    let slide = document.querySelectorAll('.slide');
    console.log(slide);

    let slideIndex = 0;

    // 2초마다 호출되는 이미지 슬라이드 함수
    setInterval(() => {
        // 이미지 슬라이드를 다음 슬라이드로 넘긴다
        slideMovePosition -= mainImgWidth;
        // 실제로 슬라이드를 넘기는 반복문
        // 슬라이드 배열 트랜스폼을 다음 슬라이드로 이동시킨다
        for (let i = 0; i < slide.length; i++) {
            slide[i].style.transform = `translateX(${slideMovePosition}px)`
        }
        slideIndex++;
        console.log(slideIndex)
        
        // 이미지 슬라이드가 마지막 배열을 넘긴다면 처음으로 되돌린다
        if (slideIndex >= slide.length - 1) {
            slideMovePosition = mainImgWidth;
            slideIndex = 0;
        }
    }, 2000)


    // imgShow(slideIndex)
    // setInterval(() => {
    //     // console.log('ck')
    //     slideIndex < $slide.length - 1 ? slideIndex++ : slideIndex = 0;
    //     imgShow(slideIndex)
    // }, 4000);
})

// 매개변수로 받은 인덱스의 이미지를 보여주는 함수
const imgShow = (index) => {
    let $slide = $('.slide')
    console.log($slide, index)
    $slide.css({ 'display': 'none' })
    $slide[index].style.display = 'block'
}

