class TextFormatter {
  formatName(proposer) {
    return `${proposer.first_names} ${proposer.last_names}`;
  }
  formatAddress(address) {
    return `${address.line_1}, ${address.line_2}, ${address.postcode}`;
  }
  formatVehicle(vehicle) {
    return `${vehicle.make} ${vehicle.model} ${vehicle.colour} - ${vehicle.reg}`;
  }
  formatPolicyRef(policy) {
    const policyRef = policy.policy_reference;
    return policyRef.replaceAll("-", " ");
  }
}

export default TextFormatter;
