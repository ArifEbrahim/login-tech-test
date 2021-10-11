class TextFormatter {
  formatName(proposer) {
    return `${proposer.first_names} ${proposer.last_names}`;
  }
  formatAddress(address) {
    return `${address.line_1}, ${address.line_2}, ${address.postcode}`
  }
}

export default TextFormatter;
