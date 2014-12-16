ASQ = {}

ASQ.ElementTypeMixin = {
  

  isASQElement_ : true,
  isQuestion_ : false,

  get isASQElement() {
    return this.isASQElement_;
  },

  get isQuestion() {
    return this.isQuestion_;
  }

}

ASQ.QuestionTypeMixin = {
  isQuestion_ : true,
}