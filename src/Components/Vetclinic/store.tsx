export const client = {
  1: {
    id: 1,
    name: "Nowak",
    surname: "Kowalski",
    email: "n.kowaski@gmail.com",
    password: "haslo",
    role: "client"
  },
  2: {
    id: 2,
    name: "Andrzej",
    surname: "Kowalczyk",
    email: "a.kowalczyk@gmail.com",
    password: "akowlaczyk",
    role: "vet"
  },
  3: {
    id: 3,
    name: "Krzysztof",
    surname: "Bezdanowicz",
    email: "k.bezdanowicz@gmail.com",
    password: "haslo",
    role: "client"
  },
  4: {
    id: 4,
    name: "Jezus",
    surname: "Chrystus",
    email: "j.chrystus@gmail.com",
    password: "amen",
    role: "admin"
  }
};

export const appointment = [
  {
    id: 1,
    title: "wizyta pilna",
    location: "Kotkowo",
    startdate: "2019-11-26",
    enddate: "2019-12-10",
    desc: "Kotek musi być operowany.",
    all_day: false,
    timezone: "UTC",
    repeat: false,
    date: "2019-11-26"
  },
  {
    id: 2,
    title: "wizyta kontrolna",
    location: "Kotkowo",
    startdate: "2019-11-27",
    enddate: "2019-11-17",
    desc: "Wizyta kontrolna, sprawdzenie ogólnego stanu zwierzęcia",
    all_day: false,
    timezone: "UTC",
    repeat: false,
    date: "2019-11-27"
  }
];

export const Pet = [
  {
    id: 1,
    name: "filemon",
    species: "cat"
  },
  {
    id: 2,
    name: "garfield",
    species: "cat"
  },
  {
    id: 3,
    name: "burek",
    species: "dog"
  },
  {
    id: 4,
    name: "lipton",
    species: "dog"
  }
];

export const petappoitment = {
  1: {
    id: 1,
    name: "filemon",
    species: "cat",
    appointment: [
      {
        id: 1,
        title: "wizyta pilna",
        location: "Kotkowo",
        startdate: "2019-11-26",
        enddate: "2019-12-10",
        desc: "Kotek musi być operowany.",
        all_day: false,
        timezone: "UTC",
        repeat: false,
        date: "2019-11-26"
      }
    ]
  },
  2: {
    id: 2,
    name: "garfield",
    species: "cat"
  },
  3: {
    id: 3,
    name: "burek",
    species: "dog"
  },
  4: {
    id: 4,
    name: "lipton",
    species: "dog"
  }
};
