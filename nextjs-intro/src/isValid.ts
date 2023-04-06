const isValid = () => {
  const token = localStorage.getItem("token");
  let returnType = token ?? true;
  return returnType;
};

export default isValid;
