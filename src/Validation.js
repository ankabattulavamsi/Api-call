

const Validation = ({firstName, lastName, number}) => {
    let errors = {};

    if(!firstName){
        errors.firstName = "Name is Required"
    }
    if(!lastName) {
        errors.lastName = "last name is required"
    }
    if(!number) {
        errors.number = 'number should be valid'
    }
    else if(number.length < 10) {
        errors.number = "numbers should be more than 10 digits"
    }
  return errors
}

export default Validation
