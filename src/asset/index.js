document.addEventListener('DOMContentLoaded',function(){
    // code toggle === Monthly === //
    const pricingClickElement = document.querySelector('#page-pricing__click');
    const label = document.querySelector('.page-pricing__label');
    const brg = document.querySelector('.page-pricing__toggle');
    
    pricingClickElement.addEventListener('change', function() {
        if (this.checked) {
            label.classList.add('active');
            brg.classList.add('active');
        } else {
            label.classList.remove('active');
            brg.classList.remove('active');
        }
    });

    // code slide //
    const texts = document.querySelectorAll(".page-about__text");
    const dots = document.querySelectorAll(".page-about__dot");

    dots.forEach((dot,index)=>{
        dot.addEventListener('click',()=>{
            // alert('ok')
            // xoá 'active' class từ tất cả các texts và dots
            texts.forEach(text=>{
                text.classList.remove('active');
            })
            dots.forEach(dot=>{
                dot.classList.remove('active');
            })
            // thêm 'active' class để click dots và texts tương ứng
            dot.classList.add('active');
            texts[index].classList.add('active');
        })
    });

    // dropdown //
    const content_cb = document.querySelector('.product__item-content');
    const dropClickElement = document.querySelector('.product__icon-drop');
    const img = document.querySelector('.product__img-click');

    dropClickElement.addEventListener('click',()=>{
        if(content_cb.style.display === 'none'){
            content_cb.style.display = 'block';
        }else{
            content_cb.style.display = 'none';
        }
    });
})
