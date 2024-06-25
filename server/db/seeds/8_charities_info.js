export async function seed(knex) {
  await knex('charities_info').insert([
    {
      id: 1,
      charity_id: 4,
      physical_address: '123 Street Place, Suburb, City 4567, New Zealand',
      postal_address: '',
      opening_hours: 'Monday - Friday: 9am - 4pm',
      phone: '0800-838-383',
      email: 'kiaora@coordinary.org',
      vision: 'For generosity to be ordinary.',
      mission:
        'To coordinate the distribution of our resources and virtue toward those that need it most.',
      values: 'Generosity; Forgiveness; Optimism; Cohesion',
      services:
        'We provide a platform for charities to connect with their audience; We provide administrative levers that streamline the accounting process for charities.',
      story:
        'Coordinary was built as the final group project of a coding bootcamp, based in New Zealand, called Dev Academy...',
      emphatic: '0 charities on our platform',
      cta_statement:
        "If you'd like to follow our story as it continues into the future, you should follow us on Coordinary and consider subscribing to our mailing list!",
      stakeholders: 'Dev Academy',
      image: 'placeholder.png',
    },
    {
      id: 2,
      charity_id: 2,
      physical_address: '171 Elizabeth Street, Tauranga 3110',
      postal_address: '',
      opening_hours: 'Monday - Friday: 9am - 6pm',
      phone: '07-579-5322',
      email: 'annamarie@tmnt.org.nz',
      vision:
        'For all to live in dignity, empowered to transform and thrive; Whare ki to wairua, mo te mana tāne.',
      mission:
        'To provide safe, warm accommodation and services for those without a home.',
      values: 'Warmth; Whanaungatanga; Understanding; Patience; Stability',
      services:
        'Homeless Services; Health and Social Support; Drug/Alcohol Support; Budgeting and Lifeskills; Employment and Training',
      story:
        'Takitimu House provides homeless men in Tauranga trasitional accommodation and access to services designed to break the cycle of homelessness and offer hope of a better future. We embrace a beyond homelessness kaupapa, providing a range of services to our men, including shelter, housing placements, employment, life skills and counselling.\nThis is the beginning of a second paragraph...',
      emphatic: '0 charities on our platform',
      cta_statement:
        "If you'd like to follow our story as it continues into the future, you should follow us on Coordinary and consider subscribing to our mailing list!",
      stakeholders: 'Ministry of Social Development',
      image: 'w1920.jpg',
    },
    {
      id: 3,
      charity_id: 3,
      physical_address: '19 Gordon Place, Newtown, Wellington 6242',
      postal_address: 'PO Box 7477, Newtown, Wellington 6242',
      opening_hours:
        'Monday - Thursday: 9am - 4:30pm; Friday: 10:30am - 4:30pm',
      phone: '04-245-0900; 0800-245-0900',
      email: 'enquiries@wgtncitymission.org.nz',
      vision: 'For Wellingtonians to feel Welcome.',
      mission:
        'To enhance the mana to all Wellingtonians; to contribute to their empowerment, transformation, and fullness of life for those we serve so that, together, we can create positive outcomes.',
      values: 'Community; Inclusion; Independence;',
      services:
        'Supported transitional housing; Food support through our Social Supermarket; Financial Mentoring and Budget Advising; One-on-one support through our Registered Community Practitioners; Connection, company, and nourishment within our Community Lounge, Tā te Manawa; Rest home and hospital-level residential care at Kemp Home and Hospital.',
      story:
        'The Wellington City Mission has been supporting people and families in the Wellington region for 120 years. With the support of our incredible community, The Mission provides free holistic support to a broad range of people, including families, seniors, sole-parents, and individuals.',
      emphatic:
        'Helping those most in need in the Wellington region for 120 years',
      cta_statement:
        "If you'd like to follow our story as it continues into the future, you should follow us on Coordinary and consider subscribing to our mailing list!",
      stakeholders: 'The Anglican Church',
      image: 'mission.png',
    },
    {
      id: 4,
      charity_id: 1,
      physical_address: '2 Lukes Lane, Te Aro, Wellington 6011, New Zealand',
      postal_address: 'PO Box 6133, Te Aro, Wellington 6011',
      opening_hours:
        'Monday - Thursday: 9am - 4:30pm; Friday: 10:30am - 4:30pm',
      phone: '04-384-7699; 0800-119-689',
      email: 'office@dcm.org.nz',
      vision: 'For every Wellingtonian to enjoy a dignified home.',
      mission: 'To end homelessness in Wellington, New Zealand.',
      values:
        'Manaakitanga; Kotahitanga; Pono; Rangitiratanga; Hihiritanga; Whanaungatanga',
      services:
        'Toro Atu: Our outreach program to connect with people who are rough sleeping and street begging in the Wellington region; Te Pae Manaaki: Connecting our whānau with the supports they need; Aro Mai Housing First: Securing properties for our whānau and providing wrap-around support to ensure whānau thrive in all aspects of their lives; Noho Pai: Supporting housed and vulnerable whānau to sustain their tenancies, to be good neighbours, and to thrive in their communities; Te Hāpai: A safe space for people who are rough sleeping that provides kai, kōrero, and meaningful activities such as carving, chess and poetry; Te Awatea: A service aimed to reduce the harm associated with substance abuse.',
      story:
        'A group of inner-city congregations – St. Peter’s Anglican Church, Kent Terrace Presbyterian Church (now St. Andrew’s on the Terrace), Wesley Methodist Church, joined soon afterwards by the Religious Society of Friends – came together to respond to the needs of the rapidly changing inner city area of Wellington. ICM (Inner City Ministry) sought to find ways of helping those who lived in the city, but who were marginalised by it, to take greater control of their lives.\nICM became an incorporated society in 1989 and changed its name to DCM (Downtown Community Ministry) in 1995. Many projects were undertaken by ICM over the first 25 years of its existence, such as Vincent’s Art Gallery, the Pantry (now Foodbank), the Street People Project (now Money Management Service), the Clean Team, and the People’s Resource Centre.\nSince its inception, the membership and support base of DCM has expanded and evolved, as has the nature and scope of its work. In 1995 St. Joseph’s Catholic Church, and in 1997 St. John’s in the City, became members. In 2009 Temple Sinai became a member, and in 2014 Elim International Church and Sacred Heart Cathedral Parish became members.\nFor 24 years, DCM’s largest fundraiser was an annual Bookfair, a lifeline for DCM in terms of funding, and an iconic event in the city for book lovers.\nToday DCM continues to receive funds and practical support from the people of Wellington. We have a diverse and sustainable funding base – which includes Wellington City Council, Ministry of Social Development, Ministry of Housing and Urban Development, and charitable trusts. DCM celebrated its 50th birthday in 2019.',
      emphatic:
        'approx. 1,000 people continue to access our services each year.',
      cta_statement:
        'DCM is the leading social service supporting the most marginalised in our city. We value your support because it enables us to carry out our life-changing mahi to enable the people we work with to make meaningful change in their lives. We know that we make a real difference and supporting us is an opportunity for you to make a difference too. If you are able too, please see our registries to see how you may be able to support. Alternatively, you can support us by following our work via Coordinary, or by signing up to our mailing list.',
      stakeholders: 'Te Aro Health Centre',
      image: 'DCM.jpg',
    },
  ])
}
