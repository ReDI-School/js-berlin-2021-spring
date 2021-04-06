function introduce(person)
{
    let studentStatus;
    if (person.isStudent) {
        studentStatus = "I am a student";
    } else {
        studentStatus = "I am not a student";
    }
    return "Hi, my name is " + person.name + "." +
        "I am " + person.age + " years-old." +
        "My favourite food is " + person.favouriteFood + "." +
        "I like " + hobbies + "." +
        "I enjoy listening to " + favouriteMusic + "." +
        studentStatus;
    
}
