export const validate = {
  //Kilde til regex: https://fullstækk.no/courses/next-final/01-validering
  isEmail(mail) {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  },

  //kilde til regex: https://regexr.com/39c7p
  isName(name) {
    if (
      /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
        name
      )
    ) {
      return true;
    }
    return false;
  },

  containsQuestion(poll) {
    if ('question' in poll){
      return true
    }
    return false
  },

  isQuestion(question) {
    console.log(question)
    if (/[?]/g.test(question)) {
      return true;
    }
    return false;
  },
};
