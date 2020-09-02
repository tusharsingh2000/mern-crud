export const SetErrors = (name , quantity ) => {
    let errors = {};
    errors.name = name?"":"Name is required";
    errors.quantity = quantity?"":"quantity is required";
    return errors;
}; 