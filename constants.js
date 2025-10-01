// Constants reference table
window.constants = {
  h: {
    name: "Planck's constant",
    definition: "Fundamental constant relating the energy of a photon to its frequency: E = hν.",
    values: {
      "J*s": 6.62607015e-34,
      "erg*s": 6.62607015e-27,
      "eV*s": 4.135667696e-15,
      "keV*s": 4.135667696e-18
    }
  },
  c: {
    name: "Speed of Light",
    definition: "Universal constant describing the speed of light in vacuum, and the maximum speed of information transfer.",
    values: {
      "m*s^-1": 2.99792458e8,
      "cm*s^-1": 2.99792458e10,
      "km*s^-1": 2.99792458e5,
      "Å*s^-1": 2.99792458e18
    }
  },
  eV: {
    name: "Electronvolt",
    definition: "Energy gained by an electron when accelerated through an electric potential difference of one volt.",
    values: {
      "J": 1.602176634e-19,
      "erg": 1.602176634e-12,
      "keV": 0.001
    }
  },
  kB: {
    name: "Boltzmann constant",
    definition: "Relates temperature to energy at the particle level: E = kB*T.",
    values: {
      "J*K^-1": 1.380649e-23,
      "erg*K^-1": 1.380649e-16,
      "eV*K^-1": 8.617333262e-5,
      "keV*K^-1": 8.617333262e-8
    }
  },
  G: {
    name: "Gravitational constant",
    definition: "Constant of proportionality in Newton's law of universal gravitation.",
    values: {
      "m^3*kg^-1*s^-2": 6.67430e-11,
      "cm^3*g^-1*s^-2": 6.67430e-8
    }
  },
  sigma: {
    name: "Stefan-Boltzmann constant",
    definition: "Constant relating total radiated power of a blackbody to the fourth power of its temperature.",
    values: {
      "W*m^-2*K^-4": 5.670374419e-8,
      "erg*cm^-2*s^-1*K^-4": 5.670374419e-5
    }
  },
  me: {
    name: "Electron mass",
    definition: "Rest mass of the electron, a fundamental particle with negative charge.",
    values: {
      "kg": 9.10938356e-31,
      "g": 9.10938356e-28,
      "MeV*c^-2": 0.51099895
    }
  },
  mp: {
    name: "Proton mass",
    definition: "Rest mass of the proton, the lightest baryon and stable particle found in atomic nuclei.",
    values: {
      "kg": 1.67262192369e-27,
      "g": 1.67262192369e-24,
      "MeV*c^-2": 938.27208816
    }
  },

  // ================= Astronomical Bodies =================
  RE: {
    name: "Earth radius",
    definition: "Mean radius of the Earth.",
    values: {
      "m": 6.371e6,
      "km": 6371
    }
  },
  ME: {
    name: "Earth mass",
    definition: "Total mass of the Earth.",
    values: {
      "kg": 5.972e24,
      "g": 5.972e27
    }
  },
  RS: {
    name: "Solar radius",
    definition: "Mean radius of the Sun.",
    values: {
      "m": 6.9634e8,
      "km": 6.9634e5
    }
  },
  MS: {
    name: "Solar mass",
    definition: "Total mass of the Sun.",
    values: {
      "kg": 1.9885e30,
      "g": 1.9885e33
    }
  },
  MMW: {
    name: "Milky Way mass",
    definition: "Estimated mass of the Milky Way galaxy including dark matter.",
    values: {
      "kg": 1.5e42,
      "Msun": 7.5e11
    }
  },
  RMW: {
    name: "Milky Way radius",
    definition: "Approximate radius of the Milky Way's stellar disk.",
    values: {
      "m": 5e20,   // ~50 kpc in meters
      "kpc": 50
    }
  }
};
