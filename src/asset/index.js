document.addEventListener('DOMContentLoaded',function(){
    // code toggle === Monthly === //
    // const pricingClickElement = document.querySelector('#page-pricing__click');
    // const label = document.querySelector('.page-pricing__label');
    // const brg = document.querySelector('.page-pricing__toggle');
    
    // pricingClickElement.addEventListener('change', function() {
    //     if (this.checked) {
    //         label.classList.add('active');
    //         brg.classList.add('active');
    //     } else {
    //         label.classList.remove('active');
    //         brg.classList.remove('active');
    //     }
    // });

    // // code slide //
    // const texts = document.querySelectorAll(".page-about__text");
    // const dots = document.querySelectorAll(".page-about__dot");

    // dots.forEach((dot,index)=>{
    //     dot.addEventListener('click',()=>{
    //         // xoá 'active' class từ tất cả các texts và dots
    //         texts.forEach(text=>{
    //             text.classList.remove('active');
    //         })
    //         dots.forEach(dot=>{
    //             dot.classList.remove('active');
    //         })
    //         // thêm 'active' class để click dots và texts tương ứng
    //         dot.classList.add('active');
    //         texts[index].classList.add('active');
    //     })
    // });

    // dropdown
    document.addEventListener('DOMContentLoaded', function () {
        const imgClickElements = document.querySelectorAll('.product__img-click');
    
        imgClickElements.forEach(img => {
            img.addEventListener('click', function () {
                const targetId = this.getAttribute('data-target');
                const checkboxGroup = document.querySelector(`.product__item-content--${targetId}`);
    
                // Toggle the 'active' class
                checkboxGroup.classList.toggle('active');
            });
        });
    });
    
})
