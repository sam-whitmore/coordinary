export async function seed(knex) {
  await knex('charities_info').insert([
    {
      id: 1,
      charity_id: 1,
      physical_address: "123 Street Place, Suburb, City 4567, New Zealand",
      postal_address: "",
      opening_hours: "Monday - Friday: 9am - 4pm",
      phone: "0800-838-383",
      email: "kiaora@coordinary.org",
      vision: 'a world where charity is ordinary; not extraordinary.',
      mission: 'to facilitate our altriustic instincts.',
      values: 'congruence',
      services:
        'give a platform for all charities; connect charities and their audience; provide administrative levers to streamline the donation process.',
      story:
        'Coordinary was built as the final group project of a coding bootcamp, based in New Zealand, called Dev Academy...',
      emphatic: '0 charities on our platform',
      cta_statement:
        "If you'd like to follow our story as it continues into the future, you should follow us on Coordinary and consider subscribing to our mailing list!",
      stakeholders: "Dev Academy"
    },
    {
      id: 2,
      charity_id: 2,
      physical_address: "171 Elizabeth Street, Tauranga 3110",
      postal_address: "",
      opening_hours: "Monday - Friday: 9am - 6pm",
      phone: "07-579-5322",
      email: "annamarie@tmnt.org.nz",
      vision: 'to provide safe homes to live in dignity, empowering men to transform and thrive. Whare ki to wairua, mo te mana tāne.',
      mission: 'to provide safe, warm accommodation and services for those without a home.',
      values: 'congruence',
      services:
        'Listed: Homeless Services; Health and Social Support; Drug/Alcohol Support; Budgeting and Lifeskills; Employment and Training',
      story:
        'provide homeless men in Tauranga trasitional accommodation and access to services designed to break the cycle of homelessness and offer hope of a better future. We embrace a beyond homelessness kaupapa, providing a range of services to our men, including shelter, housing placements, employment, life skills and counselling. /n This is a new line.',
      emphatic: '0 charities on our platform',
      cta_statement:
        "If you'd like to follow our story as it continues into the future, you should follow us on Coordinary and consider subscribing to our mailing list!",
      stakeholders: "Ministry of Social Development"
      },
    {
      id: 3,
      charity_id: 3,
      physical_address: "19 Gordon Place, Newtown, Wellington 6242",
      postal_address: "PO Box 7477, Newtown, Wellington 6242",
      opening_hours: "Monday - Thursday: 9am - 4:30pm; Friday: 10:30am - 4:30pm",
      phone: "04-245-0900; 0800-245-0900",
      email: "enquiries@wgtncitymission.org.nz",
      vision: "unlocking Wellington's most open home",
      mission: "to enhance the mana to all Wellingtonians, to contribute to the empowerment, transformation, and fullness of life for those we serve so that, together, we can create positive outcomes.",
      values: "connection, inclusion",
      services: "Supported transitional housing; Food support through our Social Supermarket; Financial Mentoring and Budget Advising; Ono-on-one support through our Registered Community Practitioners; Connection, company, and nourishment within our Community Lounge, Tā te Manawa; Rest home and hospital-level residential care at Kemp Home and Hospital.",
      story: "The Wellington City Mission has been supporting people and families in the Wellington region for 120 years. With the support of our incredible community, The Mission provides free holistic support to a broad range of people, including families, seniors, sole-parents, and individuals. Wellington City Mission offers support through a range of services. Our services include transitional housing, food support through our Social Supermarket, financial mentoring, social work support, and daily connection, meals, and activities through Tā te Manawa – our Community Lounge. The Mission’s services are open to anyone who needs assistance, regardless of religious belief, age, gender, ethnicity, or social background. We treat all people with dignity, respect, and without judgment. From the community we serve, to our staff and volunteers, we are committed to embracing diversity and inclusion. At The Mission, we accept everyone as they are and aim to celebrate the differences among us. We strive to deliver our services in a mana-enhancing way, to contribute to the empowerment, transformation, and fullness of life for those we serve, so that together, we can create positive outcomes.",
      emphatic: "helping those most in need in the Wellington region for 120 years",
      cta_statement: "If you'd like to follow our story as it continues into the future, you should follow us on Coordinary and consider subscribing to our mailing list! (test 2)",
      stakeholders: "The Anglican Church"
    }
  ])
}
