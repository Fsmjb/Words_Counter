let inputbox = $("#inputtext");

inputbox.on("input", function(){
    let word = $("#word_count");
    let sentence = $("#sentence_count");
    let char = $("#char_count");

    // character count 
    let total_text = inputbox.val();
    let char_count = total_text.length;
    
    let word_count = total_text.trim().split(/\s+/).filter(function (word) {
        return word.length > 0;
    }).length;

    
    let sentence_count = total_text.split(/[.!?]+/).filter(function (sentence) {
        return sentence.trim().length > 0;
    }).length;

    char.text(char_count);
    word.text(word_count);
    sentence.text(sentence_count);
});