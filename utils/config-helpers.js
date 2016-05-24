//take in text body, replace \n with <br>

exports.sourceToHTML = (text) => {
  return text.replace(/\n/g, "<br />");
};
