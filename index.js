// const passwords = ["{[Q8hWTW", "sL2^txO(", "ULo[6IjT", "I0,nO_N{", "yG9}M%ZB", "sD8&!H+", "mL3^UD_)", "aJ4+?bvA", "wA4_tBUA", "cM4-ab%m", "pD0|e&w-", "bQ6%>B74"];


const regex = /^[^\s]+$/ 

// const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+[{\]};:<>|./?]).{8,}$/;

passwords.forEach(password => {
  if (regex.test(password)) {
    console.log(`Password "${password}" is valid`);
  } else {
    console.log(`Password "${password}" is invalid`);
  }
});
