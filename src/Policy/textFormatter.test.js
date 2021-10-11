import TextFormatter from './textFormatter'

const tf = new TextFormatter();

describe('Text formatter', () => {
  it('correctly formats the name', () =>{
    const mockProposer = {
      "title": "003",
      "first_names": "Dave",
      "last_names": "Jones",
      "email": "dave@jones.com",
      "phone_number": "+447999000011",
      "children": 1,
      "has_medical_conditions": true,
      "has_informed_dvla_medical_conditions": false,
      "ncd": 1,
      "dob": "1980-12-31",
      "licence_type": "F",
      "employment": "E",
      "occupation": "51D",
      "business": "077",
      "licence_issued_date": "2000-12-31",
      "residency_date": "2000-12-31",
      "has_criminal_conviction": false,
      "own_home": false
    }
    const proposerName = tf.formatName(mockProposer);
    expect(proposerName).toBe('Dave Jones');
  })
})