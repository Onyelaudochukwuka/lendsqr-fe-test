const isPassword = (password: string): boolean => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(-|\+|\*|\?|!|@|#|\$|%|\^|&|\(|\)|_|=|\||\/|<|>|\{|\}|\[|\]|;|:|'|"|\\|~|,))[a-zA-Z\d-+*?!@#$%^&*()_=+|/<>{}[\];:'"\\~,]{8,}$/g;
    return regex.test(password);
}
export default isPassword;