// vaild input checker, checks if the user input is valid to the programme
const vaildInputChecker = input => {
    if(input === 'past' || input === 'present' || input === 'future'){
        return input
    } else {
        console.log ('I apologize but this terminal only delvs into prophecy revolving around the past,present and future')
    }
};
// This function returns the first component of the prophecy 
const messageComponent1 = input => {
    if(input === 'past'){
        let randomNumber =
        Math.floor(Math.random()*3);
        const component1 = randomNumber
        switch(component1){
            case 0:
            return 'Ahhh a new soul aproaches the terminal, seeking knowledge of the distant past are we? this can be arranged.';
            case 1:
            return 'So my services have been called upon again, and about the past no less, very well.';
            case 2:
            return 'A mortal seeking knowledge of their troubled past? How original.'    
        }
    } else if(input === 'present'){
        let randomNumber =
        Math.floor(Math.random()*3);
        const component1 = randomNumber
        switch(component1){
            case 0:
            return 'Ahhh a new soul aproaches the terminal, and one who inquires about the state of their present world, this can be arranged.';
            case 1:
            return 'So my services have been called upon again, no time like the present is there?';
            case 2:
            return 'Tell me mortal, what is it about your soul currently that calls for cosmic reflection? Let us find out'
    }

} else if(input === 'future'){
    let randomNumber =
    Math.floor(Math.random()*3);
    const component1 = randomNumber
    switch(component1){
        case 0:
        return 'Ahhh a brave soul aproaches the terminal, one who dares face the unknown, do you dare face the future? Yes? Then let us begin.';
        case 1:
        return 'So my services have been called upon again, I warn you however that visions of the future have led many to their own doom.';
        case 2:
        return 'I can see the apeal of seeing into the future but I can also see the danger it cortes, I wonder, do you?.'
}

}

};

const messageComponent2 = input => {

}