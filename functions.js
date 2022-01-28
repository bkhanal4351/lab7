function propmtUserForInput(whichPrompt) {
    if (!whichPrompt) {
        whichPrompt = 'How many pictures of Nepal would you like to see?';
    }
    let picCount = prompt (whichPrompt);
    if (picCount >2 ){
        let message = 'How many pictures of Nepal would you like to see?';
        let error = 'Please enter either 1 or 2';
        propmtUserForInput(message + error);
    }

    if (picCount == '' ){
        let message = 'How many pictures of Nepal would you like to see?';
        let error = 'Please enter either 1 or 2';
        propmtUserForInput(message + error);
    }

    if (picCount == 1) {
        let counter = 0;
        while (counter < 1){
            document.write ('<img src= "images/Nepal.jpg ">');
            counter++;
        }
    }

        if (picCount == 2) {
            let counter = 0;
            while (counter < 2){
                document.write ('<img src= "images/Nepal.jpg ">');
                counter++;
            }
        }
    
    
}

 propmtUserForInput();