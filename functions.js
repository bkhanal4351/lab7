function propmtUserForInput(whichPrompt) {
    if (!whichprompt) {
        whichPrompt = 'How many pictures of Nepal would you like to see?';
    }
    let picCount = prompt (whichPrompt);
    if (picCount == ''){
        let message = 'How many pictures of Nepal would you like to see?';
        let error = 'Please enter a number between 1 and 3';
        propmtUserForInput(message + error);
    }

    if (picCount == 3) {
        let counter = 0;
        while (counter < 3){
            document.write ('<img src= " images/Nepal.jpg ">');
            counter++;
        }
    }
}
propmtUserForInput();