let userTags = [];
// 별점 리뷰 구현 기능
const drawStar = (target) => {
    let starRating = Math.floor(target.value / 2);
    $('.star span').css('width', `${starRating * 20}%`);
}
// 유저가 입력한 리뷰를 리뷰칸에 추가하는 함수
const addReview = () => {
    let userInput = $('#user-input').val();
    let starRating = Math.floor($('#star input').val() / 2);
    let reviewCode = `
        <div class="user-review">
            <div class='user'>
                <span>user-id</span>
            </div>
            <div class='review'>
                <div class="text-box">
                    <span>${userInput}</span>
                </div>
                <div class="star-box">
                    <span class="user-star">${'★'.repeat(starRating)}</span>
                </div>
            </div>
            <div class='user-tag'><span>${userTags}</span></div>
        </div>
    `;
    $('#review-container').append(reviewCode);
    $('#user-input').val('')
    $('#star input').val('0')
    $('#star span').css('width', '0')
    $('#tag-input input').val('')
    $('#tag-select span').remove()
    console.log(userTags)
    userTags=[];
}
//태그를 추가하고 초기화하는 함수
const addTag = ()=>{
    $('#tag-select').append(`<span>#${$('#tag-input input').val()}</span>`)
    userTags.push(`#${$('#tag-input input').val()}`)
    $('#tag-input input').val('')
}
const resetTag = ()=>{
    $('#tag-select span').remove()
    userTags=[];
}
//태그 호버 기능
$('#tag').on('mouseover',()=>{
    $('#tag-select').css('display','block')
})
$('#tag-select').on('mouseleave',()=>{
    $('#tag-select').css('display','none')
})
//클릭이벤트        
$('#input-btn').on('click',addReview)
$('#add-btn').on('click',addTag)
$('#remove-btn').on('click',resetTag)