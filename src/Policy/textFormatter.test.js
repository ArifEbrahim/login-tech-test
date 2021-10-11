import TextFormatter from "./textFormatter";

const tf = new TextFormatter();

describe("Text formatter", () => {
  it("correctly formats the name", () => {
    const mockProposer = {
      first_names: "Dave",
      last_names: "Jones",
    };
    const proposerName = tf.formatName(mockProposer);
    expect(proposerName).toBe("Dave Jones");
  });

  it("correctly formats the address", () => {
    const mockAddress = {
      line_1: "Flat 1, 11 The Street",
      line_2: "Little Hampton",
      postcode: "W53TR",
    };
    const newAddress = tf.formatAddress(mockAddress);
    expect(newAddress).toBe("Flat 1, 11 The Street, Little Hampton, W53TR");
  });

  it("correctly formats the vehicle", () => {
    const mockVehicle = {
      reg: "WO123XX",
      make: "Tesla",
      model: "S",
      colour: "black",
    };
    const newVehicle = tf.formatVehicle(mockVehicle);
    expect(newVehicle).toBe("Tesla S black - WO123XX");
  });

  it("correctly formats the policy reference", () => {
    const mockPolicy = {
      cover: "Comprehensive",
      policy_reference: "apple-orange-pear",
    };
    const newPolicyRef = tf.formatPolicyRef(mockPolicy);
    expect(newPolicyRef).toBe("apple orange pear");
  });
});
