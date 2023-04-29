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
            return 'A mortal seeking knowledge of their troubled past? How original.' ;   
        }
    } else if(input === 'present'){
        let randomNumber =
        Math.floor(Math.random()*3);
        const component1 = randomNumber
        switch(component1){
            case 0:
            return 'Greetings seeker of wisdom, you are one who inquires about the state of their present world, this can be arranged.';
            case 1:
            return 'The terminal has been called upon again, no time like the present is there?';
            case 2:
            return 'Tell me mortal, what is it about your soul currently that calls for cosmic reflection? Let us find out';
    }

} else if(input === 'future'){
    let randomNumber =
    Math.floor(Math.random()*3);
    const component1 = randomNumber
    switch(component1){
        case 0:
        return 'Ahhh a brave soul aproaches the terminal, one who dares face the unknown, do you dare face the future? Yes? Then let us begin.';
        case 1:
        return 'ah yes another who seeks divination, I warn you however that visions of the future have led many to their own doom.';
        case 2:
        return 'I can see the apeal of seeing into the future but I can also see the danger it cortes, I wonder, do you?.';
}

}

};

const messageComponent2 = input => {
    if(input === 'past'){
        let randomNumber =
        Math.floor(Math.random()*3);
        const component2 = randomNumber
        switch(component2){
            case 0:
            return 'I sense a complicated history, one of dissilution, rebellion and change, who I see in the vision, is certainly not who has accessed this terminal.';
            case 1:
            return 'Hahaha, forgive me, I often forget that  these visions of the past can often reveal embarrising truths one may want hidden.';
            case 2:
            return 'ah scandalous, I am suprised that one with such a checkerd history dares dredge it up I thought you would want this buried.';    
        }
    } else if(input === 'present'){
        let randomNumber =
        Math.floor(Math.random()*3);
        const component2 = randomNumber
        switch(component2){
            case 0:
            return 'You currently stand at the edge of a new frontier, the path forward forks, your roads are truly open.';
            case 1:
            return 'You have sorted alot of problems out and found a position you can truly call your own. YOU ARE ACTUALIZED!';
            case 2:
            return 'Hehehe cheer, harmony, joy of life. You really do have it all and more than that, a sense of self-worth.';
    }

} else if(input === 'future'){
    let randomNumber =
    Math.floor(Math.random()*3);
    const component2 = randomNumber
    switch(component2){
        case 0:
        return 'your future is associated with disruption, wild power and above all...change. A storm is coming!';
        case 1:
        return 'The algorithom computes a future of reward, gain and fruition. A fruitful season is on the way!';
        case 2:
        return 'You who seeks the future, are you familiar with the norse rune LAGUZ? it is ascociated with the flow of emotions and new life and so is your future.';
}

}
};