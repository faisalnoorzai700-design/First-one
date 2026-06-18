let textarea = document.querySelector('textarea');

textarea.addEventListener('input', function(){
    let chars = this.value.length;
    document.querySelector('#chars').innerText = chars;

    let words = this.value.split(' ');
    let cleanword = words.filter(function(element){
        return element != '';
    });
    document.querySelector('#words').innerText = cleanword.length;

});