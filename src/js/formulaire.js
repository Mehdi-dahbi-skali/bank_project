export const validateName=(name)=>{
  const re = /twilio|sendgrid|\b(t[w1][il1]o|s[e3]ndgr[i1]d)\b/i;
      if(name.length < 4){
        return false;
      }
      return true;
}

export const validateLastname=(lastname)=>{
  const re = /twilio|sendgrid|\b(t[w1][il1]o|s[e3]ndgr[i1]d)\b/i;
    if(lastname.length < 4){
      return false;
    }
    return true;
}
export const validatePwd=(pwd)=>{
    if(pwd.length < 16 ){
      return false;
    }
    return true;
}
export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

export function validatePwdrepeatedcharacters(input) {
  const re = /(.)\1\1/;
  return !re.test(input);
}

export function validateInputvariations(input) {
  const re = /twilio|sendgrid|\b(t[w1][il1]o|s[e3]ndgr[i1]d)\b/i;
  return !re.test(input);
}
  


