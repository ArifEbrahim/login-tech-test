import TextFormatter from "./textFormatter";

const tf = new TextFormatter();

describe("Text formatter", () => {
  it("correctly formats the name", () => {
    const mockProposer = {
      title: "003",
      first_names: "Dave",
      last_names: "Jones",
      email: "dave@jones.com",
      phone_number: "+447999000011",
      children: 1,
      has_medical_conditions: true,
      has_informed_dvla_medical_conditions: false,
      ncd: 1,
      dob: "1980-12-31",
      licence_type: "F",
      employment: "E",
      occupation: "51D",
      business: "077",
      licence_issued_date: "2000-12-31",
      residency_date: "2000-12-31",
      has_criminal_conviction: false,
      own_home: false,
    };
    const proposerName = tf.formatName(mockProposer);
    expect(proposerName).toBe("Dave Jones");
  });

  it('correctly formats the address', () => {
    const mockAddress = {
      "line_1": "Flat 1, 11 The Street",
      "line_2": "Little Hampton",
      "line_3": "Burton-on-the-water",
      "county": "Avon",
      "city": "Stroud",
      "country": "GB",
      "postcode": "W53TR"
    }
    const newAddress = tf.formatAddress(mockAddress);
    expect(newAddress).toBe('Flat 1, 11 The Street, Little Hampton, W53TR')
  })
});
