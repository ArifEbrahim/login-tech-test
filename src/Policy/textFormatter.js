class TextFormatter{
  formatName(proposer){
    return `${proposer.first_names} ${proposer.last_names}`
  }
}

export default TextFormatter;