/**
 * Constants for AstroNotes
 * Each constant has the following properties:
 * - name: plain text used for searching (no HTML tags)
 * - displayName: HTML formatted string for display (can include symbols/subscripts)
 * - definition: textual description of the constant
 * - values: object mapping units to numeric values
 */

window.constants = {

  planck_constant_h: {
    name: "Planck constant h",
    displayName: "Planck constant (h)",
    definition: "Relates the energy of a photon to its frequency.",
    values: {
      "J*s": 6.62607015*10^-34,
      "erg*s": 6.62607015*10^-27,
      "eV*s": 4.135667696*10^-15,
      "keV*s": 4.135667696*10^-18
    }
  },

  speed_of_light_c: {
    name: "Speed of light c",
    displayName: "Speed of Light (c)",
    definition: "Universal constant for the speed of light in vacuum.",
    values: {
      "m*s^-1": 2.99792458*10^8,
      "cm*s^-1": 2.99792458*10^10,
      "km*s^-1": 2.99792458*10^5,
      "Å*s^-1": 2.99792458*10^18
    }
  },

  boltzmann_constant_kB: {
    name: "Boltzmann constant kB",
    displayName: "Boltzmann constant (k<sub>B</sub>)",
    definition: "Relates temperature to thermal energy.",
    values: {
      "J*K^-1": 1.380649*10^-23,
      "erg*K^-1": 1.380649*10^-16,
      "eV*K^-1": 8.617333262*10^-5
    }
  },

  stefan_boltzmann_constant_sigma: {
    name: "Stefan-Boltzmann constant sigma",
    displayName: "Stefan–Boltzmann constant (σ)",
    definition: "Constant of proportionality in Stefan–Boltzmann law.",
    values: {
      "W*m^-2*K^-4": 5.670374419*10^-8
    }
  },

  universal_gravitational_constant_G: {
    name: "Gravitational constant G",
    displayName: "Universal Gravitational Constant (G)",
    definition: "Proportionality factor in Newton’s law of gravitation.",
    values: {
      "m^3*kg^-1*s^-2": 6.67430*10^-11
    }
  },

  electronvolt_eV: {
    name: "Electronvolt eV",
    displayName: "Electronvolt (eV)",
    definition: "Energy gained by an electron when accelerated through 1 volt.",
    values: {
      "J": 1.602176634*10^-19,
      "erg": 1.602176634*10^-12,
      "keV": 1*10^-3
    }
  },

  earth_radius_R_earth: {
    name: "Earth radius",
    displayName: "Earth radius (R<sub>⊕</sub>)",
    definition: "Mean radius of Earth.",
    values: {
      "m": 6.371^10^6,
      "km": 6371
    }
  },

  earth_mass_M_earth: {
    name: "Earth mass",
    displayName: "Earth mass (M<sub>⊕</sub>)",
    definition: "Mass of Earth.",
    values: {
      "kg": 5.972*10^24,
      "g": 5.972*10^27
    }
  },

  solar_radius_R_sun: {
    name: "Solar radius",
    displayName: "Solar radius (R<sub>⊙</sub>)",
    definition: "Mean radius of the Sun.",
    values: {
      "m": 6.957*10^8,
      "km": 6.957*10^5
    }
  },

  solar_mass_M_sun: {
    name: "Solar mass",
    displayName: "Solar mass (M<sub>⊙</sub>)",
    definition: "Mass of the Sun.",
    values: {
      "kg": 1.989*10^30,
      "g": 1.989*10^33
    }
  },

  milky_way_mass_M_MW: {
    name: "Milky Way mass",
    displayName: "Milky Way mass (M<sub>MW</sub>)",
    definition: "Estimated total mass of the Milky Way galaxy (stars + gas + dark matter).",
    values: {
      "M<sub>⊙</sub>": 1.5*10^12,
      "kg": 2.98*10^42
    }
  },

  reduced_planck_constant_hbar: {
    name: "Reduced Planck constant hbar",
    displayName: "Reduced Planck constant (ℏ)",
    definition: "Planck constant divided by 2π, used in quantum mechanics.",
    values: {
      "J*s": 1.054571817*10^-34,        // h / 2π
      "erg*s": 1.054571817*10^-27,      // h / 2π
      "eV*s": 6.582119569*10^-16,       // h / 2π
      "keV*s": 6.582119569*10^-19       // h / 2π
    }
  },

  luminosity_of_sun: {
  name: "Luminosity of the Sun L sun",
  displayName: "Solar Luminosity (L☉)",
  definition: "Total power output of the Sun across all wavelengths.",
  values: {
    "W": 3.828*10^26,
    "J/s": 3.828*10^26,
    "kg*m^2/s^3": 3.828*10^26,
    "erg/s": 3.828*10^33
  }
},

parsec: {
  name: "Parsec pc",
  displayName: "Parsec (pc)",
  definition: "Distance at which 1 astronomical unit subtends an angle of one arcsecond.",
  values: {
    "m": 3.0857*10^16,
    "km": 3.0857*10^13,
    "ly": 3.26156,
    "AU": 206265
  }
},

light_year: {
  name: "Light-year ly",
  displayName: "Light-year (ly)",
  definition: "Distance that light travels in one Julian year in vacuum.",
  values: {
    "m": 9.4607*10^15,
    "km": 9.4607*10^12,
    "mi": 5.8786*10^12,
    "AU": 63241.1
  }
},

joule: {
  name: "Joule J",
  displayName: "Joule (J)",
  definition: "SI unit of energy; equal to one newton meter.",
  values: {
    "N*m": 1,
    "kg*m^2/s^2": 1,
    "erg": 1*10^7,
    "eV": 6.241509074*10^18
  }
},

newton: {
  name: "Newton N",
  displayName: "Newton (N)",
  definition: "SI unit of force; the force required to accelerate one kilogram by one meter per second squared.",
  values: {
    "kg*m/s^2": 1,
    "dyn": 1*10^5,
    "lbf": 0.2248089431
  }
},

watt: {
  name: "Watt W",
  displayName: "Watt (W)",
  definition: "SI unit of power; one joule per second.",
  values: {
    "J/s": 1,
    "N*m/s": 1,
    "kg*m^2/s^3": 1,
    "erg/s": 1*10^7
  }
},

density_of_water: {
  name: "Density of Water rho",
  displayName: "Density of Water (ρ<sub>water</sub>)",
  definition: "Approximate density of water at 4°C.",
  values: {
    "kg/m^3": 1000,
    "g/cm^3": 1,
    "lb/ft^3": 62.428
  }
},

mass_of_proton: {
  name: "Mass of Proton mp",
  displayName: "Proton Mass (mₚ)",
  definition: "Rest mass of a proton.",
  values: {
    "kg": 1.67262192369*10^-27,
    "g": 1.67262192369*10^-24,
    "u": 1.007276466621,
    "MeV/c^2": 938.27208816
  }
},

mass_of_electron: {
  name: "Mass of Electron me",
  displayName: "Electron Mass (mₑ)",
  definition: "Rest mass of an electron.",
  values: {
    "kg": 9.1093837015*10^-31,
    "g": 9.1093837015*10^-28,
    "u": 5.48579909065*10^-4,
    "MeV/c^2": 0.510998950
  }
},
  // de broglie wavelength
  // Add more constants as necessary...
};
