let blocks = document.getElementsByTagName('div');

console.log(blocks)

blocks[0].addEventListener('click' , function(){

    blocks[1].classList = 'active';

});