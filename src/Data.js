import presidentialRoom from "./img/presidentialRoom.png";
import presidential from "./img/presidential.png";
import room12 from "./img/room 12.png";
import room1 from "./img/room1.png";
import room2 from "./img/room2.png";
import room3 from "./img/room3.png";
import room4 from "./img/room4.png";
import room5 from "./img/room5.png";
import room6 from "./img/room6.png";
import room7 from "./img/room7.png";
import room8 from "./img/room8.png";
import room9 from "./img/room9.png";
import room10 from "./img/room10.png";

export default [
  {
    sys: {
      id: "1",
    },
    fields: {
      name: "single economy",
      slug: "single-economy",
      type: "single",
      price: 100,
      size: 250,
      capacity: 1,
      pets: false,
      breakFast: false,

      description:
        "When you are in charge of a team,lead by example.say 'we' more often than'i' but always understand that the buck stops with you. If something goes wrong, take responsibility without blaming others.When the right time comes, discuss the problems calmly with the team.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Full-sized, pH-balanced toiletries",
        "Adequate safety/security",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: room1,
            },
          },
        },
        {
          fields: {
            file: {
              url: room12,
            },
          },
        },

        {
          fields: {
            file: {
              url: room5,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "2",
    },
    fields: {
      name: "single standard",
      slug: "single-standard",
      type: "single",
      price: 150,
      size: 300,
      capacity: 2,
      pets: false,
      breakFast: true,
      featured: false,
      description:
        "When you are in charge of a team,lead by example.say 'we' more often than'i' but always understand that the buck stops with you. If something goes wrong, take responsibility without blaming others.When the right time comes, discuss the problems calmly with the team.",
      extras: [
        "Plush pillows and breathable bed linens",
        "soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Adequate safety/security",
        "Free internet ",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
        {
          fields: {
            file: {
              url: room6,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "3",
    },
    fields: {
      name: "single deluxe",
      slug: "single-deluxe",
      type: "single",
      price: 250,
      size: 500,
      capacity: 3,
      pets: true,
      breakFast: false,
      description:
        "When you are in charge of a team,lead by example.say 'we' more often than'i' but always understand that the buck stops with you. If something goes wrong, take responsibility without blaming others.When the right time comes, discuss the problems calmly with the team.",
      extras: [
        "Plush pillows and breathable bed linens",
        "soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Adequate safety/security",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room7,
            },
          },
        },
        {
          fields: {
            file: {
              url: room8,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "4",
    },
    fields: {
      name: "double economy",
      slug: "double-economy",
      type: "double",
      price: 300,
      size: 350,
      capacity: 2,
      pets: false,
      breakFast: true,
      featured: false,
      description:
        "When you are in charge of a team,lead by example.say 'we' more often than'i' but always understand that the buck stops with you. If something goes wrong, take responsibility without blaming others.When the right time comes, discuss the problems calmly with the team.",
      extras: [
        "Plush pillows and breathable bed linens",
        "soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Adequate safety/security",
        "Free internet ",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: room9,
            },
          },
        },
        {
          fields: {
            file: {
              url: room10,
            },
          },
        },
        {
          fields: {
            file: {
              url: room1,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "5",
    },
    fields: {
      name: "double basic",
      slug: "double-basic",
      type: "double",
      price: 350,
      size: 600,
      capacity: 3,
      pets: false,
      breakFast: true,
      description:
        "When you are in charge of a team,lead by example.say 'we' more often than'i' but always understand that the buck stops with you. If something goes wrong, take responsibility without blaming others.When the right time comes, discuss the problems calmly with the team.",
      extras: [
        "Plush pillows and breathable bed linens",
        "soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Free internet of good bandwidth",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: presidential,
            },
          },
        },
        {
          fields: {
            file: {
              url: presidentialRoom,
            },
          },
        },
        {
          fields: {
            file: {
              url: room5,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "6",
    },
    fields: {
      name: "double standard",
      slug: "double-standard",
      type: "double",
      price: 100,
      size: 750,
      capacity: 5,
      pets: true,
      breakFast: false,
      // featured: false,
      description:
        "When you are in charge of a team,lead by example.say 'we' more often than'i' but always understand that the buck stops with you. If something goes wrong, take responsibility without blaming others.When the right time comes, discuss the problems calmly with the team.",
      extras: [
        "Plush pillows and breathable bed linens",
        "soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Free internet of good bandwidth",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room1,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "7",
    },
    fields: {
      name: "double deluxe",
      slug: "double-deluxe",
      type: "double",
      price: 150,
      size: 800,
      capacity: 7,
      pets: false,
      breakFast: true,
      description:
        "When you are in charge of a team,lead by example.say 'we' more often than'i' but always understand that the buck stops with you. If something goes wrong, take responsibility without blaming others.When the right time comes, discuss the problems calmly with the team.",
      extras: [
        "Plush pillows and breathable bed linens",
        "soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Free internet of good bandwidth",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
        {
          fields: {
            file: {
              url: room5,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "8",
    },
    fields: {
      name: "family economy",
      slug: "family-economy",
      type: "family",
      price: 250,
      size: 900,
      capacity: 8,
      pets: true,
      breakFast: true,
      featured: false,
      description:
        "When you are in charge of a team,lead by example.say 'we' more often than'i' but always understand that the buck stops with you. If something goes wrong, take responsibility without blaming others.When the right time comes, discuss the problems calmly with the team.",
      extras: [
        "Plush pillows and breathable bed linens",
        "soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "swimming pool",
        "Free internet of good bandwidth",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: room7,
            },
          },
        },
        {
          fields: {
            file: {
              url: room12,
            },
          },
        },
        {
          fields: {
            file: {
              url: room8,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "9",
    },
    fields: {
      name: "family basic",
      slug: "family-basic",
      type: "family",
      price: 450,
      size: 1000,
      capacity: 10,
      pets: true,
      breakFast: true,
      // featured: false,
      description:
        "When you are in charge of a team,lead by example.say 'we' more often than'i' but always understand that the buck stops with you. If something goes wrong, take responsibility without blaming others.When the right time comes, discuss the problems calmly with the team.",
      extras: [
        "Plush pillows and breathable bed linens",
        "soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Free internet of good bandwidth",
        "roof top hot swimming pool",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: presidential,
            },
          },
        },
        {
          fields: {
            file: {
              url: presidentialRoom,
            },
          },
        },
        {
          fields: {
            file: {
              url: room5,
            },
          },
        },
      ],
    },
  },
];
