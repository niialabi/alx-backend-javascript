function Teacher(firstName, lastName, fullTimeEmployee, yearsOfExperience, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.yearsOfExperience = yearsOfExperience;
    this.location = location;


    Object.defineProperty(this, 'firstName', { writable: false });
    Object.defineProperty(this, 'lastName', { writable: false });


    if (typeof fullTimeEmployee !== 'boolean' || typeof location !== 'string') {
        throw new Error('fullTimeEmployee must be a boolean and location must be a string');
    }

x
    if (yearsOfExperience !== undefined) {
        this.yearsOfExperience = yearsOfExperience;
    }

    // Dynamically add any additional attributes
    for (let i = 5; i < arguments.length; i += 2) {
        const attributeName = arguments[i];
        const attributeValue = arguments[i + 1];
        this[attributeName] = attributeValue;
    }
}