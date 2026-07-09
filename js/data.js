// Default Mock Data for CasRael Automobiles Platform - Nigeria/Naira Base

const DEFAULT_DATA = {
  brands: [
    {
      id: "porsche",
      name: "Porsche",
      logo: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 15 L80 20 C80 50 65 75 50 85 C35 75 20 50 20 20 Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
        <path d="M35 30 L35 65 M50 23 L50 78 M65 30 L65 65" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M28 35 Q35 40 42 35 M28 48 Q35 53 42 48 M58 35 Q65 40 72 35 M58 48 Q65 53 72 48" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/>
        <path d="M46 48 C46 44 54 44 54 48 C54 52 46 52 46 48" fill="currentColor"/>
      </svg>`,
      description: "Founded in Stuttgart, Porsche represents the pinnacle of sports car engineering, balancing track-bred dynamics with everyday refinement."
    },
    {
      id: "tesla",
      name: "Tesla",
      logo: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 25 C35 27 65 27 80 25 C75 32 62 38 54 44 L54 75 C54 77 52 79 50 79 C48 79 46 77 46 75 L46 44 C38 38 25 32 20 25 Z" fill="currentColor"/>
        <path d="M22 18 C38 22 62 22 78 18 C72 20 60 21 50 21 C40 21 28 20 22 18 Z" fill="currentColor"/>
      </svg>`,
      description: "A pioneer in premium electric propulsion, delivering highly integrated software architecture and instantaneous performance."
    },
    {
      id: "bmw",
      name: "BMW",
      logo: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="3"/>
        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" stroke-width="1"/>
        <path d="M50 20 A30 30 0 0 1 80 50 L50 50 Z" fill="currentColor" fill-opacity="0.15"/>
        <path d="M50 50 L80 50 A30 30 0 0 1 50 80 Z" fill="none" stroke="currentColor" stroke-width="0.5"/>
        <path d="M20 50 A30 30 0 0 1 50 20 L50 50 Z" fill="none" stroke="currentColor" stroke-width="0.5"/>
        <path d="M50 50 L50 80 A30 30 0 0 1 20 50 Z" fill="currentColor" fill-opacity="0.15"/>
      </svg>`,
      description: "Bayerische Motoren Werke (BMW) combines driver-focused chassis dynamics, progressive powertrain technology, and executive luxury."
    },
    {
      id: "mercedes",
      name: "Mercedes-Benz",
      logo: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="2.5"/>
        <path d="M50 50 L50 15 L46 47 Z" fill="currentColor"/>
        <path d="M50 50 L50 15 L54 47 Z" fill="currentColor"/>
        <path d="M50 50 L80 67 L53 55 Z" fill="currentColor"/>
        <path d="M50 50 L80 67 L74 61 Z" fill="currentColor"/>
        <path d="M50 50 L20 67 L47 55 Z" fill="currentColor"/>
        <path d="M50 50 L20 67 L26 61 Z" fill="currentColor"/>
      </svg>`,
      description: "Defining automotive luxury and comfort since 1886. Mercedes-Benz delivers prestige styling, safety leadership, and AMG performance."
    },
    {
      id: "audi",
      name: "Audi",
      logo: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="26" cy="50" r="16" fill="none" stroke="currentColor" stroke-width="2.5"/>
        <circle cx="42" cy="50" r="16" fill="none" stroke="currentColor" stroke-width="2.5"/>
        <circle cx="58" cy="50" r="16" fill="none" stroke="currentColor" stroke-width="2.5"/>
        <circle cx="74" cy="50" r="16" fill="none" stroke="currentColor" stroke-width="2.5"/>
      </svg>`,
      description: "Audi embodies high-technology engineering and minimalist modern design, centered around their historic quattro all-wheel-drive systems."
    }
  ],
  models: [
    {
      id: "porsche-911-gt3-rs",
      brandId: "porsche",
      name: "911 GT3 RS",
      price: 335000000,
      category: "Motorsport / Coupe",
      image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
      hp: "518 hp",
      range: "16 MPG",
      transmission: "7-Speed Dual-Clutch (PDK)",
      acceleration: "3.0s",
      topSpeed: "184 mph",
      description: "This Weissach Package-equipped 911 GT3 RS represents the absolute peak of Porsche motorsport engineering. Propelled by a high-revving 4.0-liter naturally aspirated boxer engine producing 518 horsepower, it features an advanced active aerodynamic drag reduction system (DRS), a full carbon fiber monocoque cabin structure, and track-derived double-wishbone front suspension. Highly customizable steering wheel dials allow real-time driver adjustment of rebound, compression damping, and rear differential locking values.",
      features: [
        "4.0-Liter Naturally Aspirated Flat-6 Engine (9,000 RPM Redline)",
        "Active Aerodynamics with F1-Derived Drag Reduction System (DRS)",
        "Weissach Package: Carbon fiber hood, roof, anti-roll bars, and magnesium wheels",
        "Steering Wheel Controls for Rebound/Compression Damping and ESC/TC traction levels",
        "Motorsport Lightweight Glass, CFRP door loops, and Carbon-Shell Bucket Seats",
        "Porsche Ceramic Composite Brakes (PCCB) with 6-piston front calipers"
      ]
    },
    {
      id: "porsche-taycan-turbo-s",
      brandId: "porsche",
      name: "Taycan Turbo S",
      price: 292000000,
      category: "Electric / Sedan",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      hp: "750 hp",
      range: "246 miles",
      transmission: "2-Speed Automatic",
      acceleration: "2.6s",
      topSpeed: "161 mph",
      description: "An engineering masterpiece in electric propulsion, this Taycan Turbo S delivers a monumental 750 horsepower in overboost launch mode. Utilizing a specialized 800-volt battery architecture, it supports high-rate charging speeds up to 270 kW, replenishing 5% to 80% charge in just 22.5 minutes. Chassis dynamics are optimized through active air suspension, active roll stabilization, and standard rear-axle steering to deliver sports car handling in a luxurious four-door cabin.",
      features: [
        "Dual-Motor Electric AWD Layout with 750 HP Overboost Launch Control",
        "800-Volt Battery Architecture supporting 270 kW high-speed DC charging",
        "Porsche Ceramic Composite Brakes (PCCB) with Yellow Calipers",
        "Rear-Axle Steering with Power Steering Plus variable feedback",
        "Porsche Dynamic Chassis Control Sport (PDCC Sport) active anti-roll system",
        "16.8-inch curved digital instrument cluster and premium club leather upholstery"
      ]
    },
    {
      id: "tesla-model-s-plaid",
      brandId: "tesla",
      name: "Model S Plaid",
      price: 135000000,
      category: "Electric / Sedan",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=80",
      hp: "1,020 hp",
      range: "396 miles",
      transmission: "Single-Speed Direct Drive",
      acceleration: "1.99s",
      topSpeed: "200 mph",
      description: "Redefining acceleration benchmarks, the Model S Plaid utilizes a tri-motor configuration with carbon-sleeved rotors to deliver a constant 1,020 horsepower. This engineering prevents power drop-off at high speeds, propelling the sedan to 60 mph in under two seconds. The cabin represents minimalist luxury, dominated by a 17-inch tiltable central screen, yoke steering assembly, and dual rear passenger screens, all backed by Tesla's Hardware 4 autopilot compute suite.",
      features: [
        "Tri-Motor Configuration with Carbon-Sleeved Rotors (1,020 HP)",
        "0-60 MPH in 1.99 seconds with full active torque vectoring",
        "Autopilot Hardware 4 (HW4) with Full Self-Driving capability prep",
        "17-inch cinematic center display with 2200x1300 resolution and gaming compute",
        "960-Watt, 22-Speaker Premium Sound System with active road noise reduction",
        "Executive rear seating with dedicated console control screen"
      ]
    },
    {
      id: "tesla-model-y-lr",
      brandId: "tesla",
      name: "Model Y Long Range",
      price: 72000000,
      category: "Electric / SUV",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
      hp: "384 hp",
      range: "320 miles",
      transmission: "Single-Speed Direct Drive",
      acceleration: "4.8s",
      topSpeed: "135 mph",
      description: "Designed for premium family versatility and maximum efficiency, the Model Y Long Range features dual-motor all-wheel drive, providing confident handling in all climates. It offers a spacious 5-seat cabin configuration with over 76 cubic feet of cargo room and a full panoramic glass canopy. Standard hardware includes a suite of external cameras enabling active collision avoidance, lane centering, and automated lane change capabilities.",
      features: [
        "Dual-Motor Electronic All-Wheel Drive with instantaneous torque",
        "320-mile EPA range capacity with high-efficiency heat pump thermal management",
        "Full Panoramic Glass Roof with UV and infrared protection coating",
        "Autopilot suite: traffic-aware cruise control and autosteer",
        "Premium audio system featuring 13 speakers, 1 subwoofer, and 2 amps",
        "Configurable flat-folding second-row seats for maximum cargo capability"
      ]
    },
    {
      id: "bmw-m5-comp",
      brandId: "bmw",
      name: "M5 Competition",
      price: 168000000,
      category: "Combustion / Sedan",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
      hp: "617 hp",
      range: "17 MPG",
      transmission: "8-Speed M Steptronic",
      acceleration: "3.1s",
      topSpeed: "190 mph",
      description: "The absolute benchmark for executive performance sedans. This M5 Competition houses a 4.4-liter twin-turbocharged V8 engine pumping out 617 horsepower. Power is distributed through an 8-speed M Steptronic transmission and the highly configurable M xDrive all-wheel-drive system, which can be locked into a pure 100% rear-wheel-drive mode. It features track-tuned stiffer engine mounts, adaptive M suspension, and a carbon fiber reinforced plastic (CFRP) roof for lower center of gravity.",
      features: [
        "4.4-Liter TwinPower Twin-Turbo V8 Engine (617 HP / 553 lb-ft)",
        "M xDrive configurable AWD with active electronic locking rear differential",
        "Carbon Fiber Reinforced Plastic (CFRP) lightweight roof panel",
        "Stiffened chassis mountings and track-optimized adaptive dampers",
        "M Compound brakes with blue calipers (optional Carbon Ceramics)",
        "Harman Kardon Surround Sound System and Merino leather seating"
      ]
    },
    {
      id: "bmw-i7-m70",
      brandId: "bmw",
      name: "i7 M70 xDrive",
      price: 253000000,
      category: "Electric / Sedan",
      image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=1200&q=80",
      hp: "650 hp",
      range: "291 miles",
      transmission: "Single-Speed Automatic",
      acceleration: "3.5s",
      topSpeed: "155 mph",
      description: "BMW's all-electric luxury flagship, the i7 M70 represents the pinnacle of executive transport. It pairs two high-performance M-division electric motors yielding 650 horsepower with an ultra-quiet active air-suspension chassis. Rear passengers enjoy a private workspace and cinema environment, featuring a 31.3-inch 8K Theater screen that folds down from the ceiling, automated soft-close entry doors, and executive reclining lounge chairs upholstered in premium cashmere-merino blend wool.",
      features: [
        "Dual-Motor Electric Drive (650 HP and 811 lb-ft peak torque)",
        "31.3-inch 8K folding Theater Screen with integrated Amazon Fire TV",
        "Executive Lounge Rear Seating with leg rest, massage, and cooling",
        "Automatic self-opening and closing doors with obstacle sensors",
        "Executive Drive Pro active roll stabilization and integral active steering",
        "Bowers & Wilkins Diamond Surround Sound System (36 speakers)"
      ]
    },
    {
      id: "mercedes-amg-gt-63",
      brandId: "mercedes",
      name: "AMG GT 63 S 4-Door",
      price: 255000000,
      category: "Combustion / Coupe",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
      hp: "630 hp",
      range: "16 MPG",
      transmission: "9-Speed AMG SPEEDSHIFT MCT",
      acceleration: "3.1s",
      topSpeed: "195 mph",
      description: "This hand-built AMG GT 63 S combines supercar performance with four-door executive usability. Power originates from AMG's legendary 4.0-liter biturbo V8, producing 630 horsepower and 664 lb-ft of torque. It utilizes a wet-clutch 9-speed sports transmission, fully variable AMG Performance 4MATIC+ all-wheel drive, and electromagnetic rear-axle steering. Dynamic select modes adjust active engine mounts, exhaust bypass valves, and air suspension volume in milliseconds.",
      features: [
        "Handcrafted AMG 4.0-Liter Twin-Turbo V8 Engine (630 HP)",
        "AMG SPEEDSHIFT MCT 9-Speed Transmission with wet start-off clutch",
        "AMG RIDE CONTROL+ adaptive air suspension with dual-valve damping",
        "Active Electromagnetic Rear-Axle Steering (up to 1.3 degrees)",
        "Dynamic active engine mounts and switchable performance exhaust",
        "Nappa Leather sport seats with heating, cooling, and dynamic bolster support"
      ]
    },
    {
      id: "mercedes-eqs-580",
      brandId: "mercedes",
      name: "EQS 580 SUV",
      price: 189000000,
      category: "Electric / SUV",
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
      hp: "536 hp",
      range: "285 miles",
      transmission: "Single-Speed Automatic",
      acceleration: "4.5s",
      topSpeed: "130 mph",
      description: "The EQS 580 SUV represents the pinnacle of electric luxury utility. Its interior is defined by the massive 56-inch MBUX Hyperscreen, merging three digital displays under a single curved glass pane. It is powered by dual electric motors supplying 536 horsepower, supported by a large 108.4 kWh battery pack. Driving comfort is refined via acoustic sound-laminated glass, AIRMATIC air suspension, and a high-efficiency HEPA cabin filtration system that scrubs PM2.5 particles, gases, and odors.",
      features: [
        "Dual-Motor 4MATIC Electric Drive (536 HP and 633 lb-ft torque)",
        "56-inch MBUX Hyperscreen glass dashboard system",
        "AIRMATIC air suspension with adaptive damping and lift function",
        "Acoustic Comfort Package: extra soundproofing and laminated glass",
        "HEPA filtration system (Energizing Air Control Plus) with charcoal filter",
        "Rear-axle steering with 10-degree turning angle capability"
      ]
    },
    {
      id: "audi-r8-v10",
      brandId: "audi",
      name: "R8 Coupe V10 Performance",
      price: 315000000,
      category: "Combustion / Supercar",
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
      hp: "602 hp",
      range: "15 MPG",
      transmission: "7-Speed Dual-Clutch (S tronic)",
      acceleration: "3.2s",
      topSpeed: "205 mph",
      description: "A legendary mid-engine supercar celebrating the final era of naturally aspirated combustion. The R8 Performance houses a high-revving 5.2-liter dry-sump V10 engine delivering 602 horsepower directly behind the cockpit. It features an advanced Audi Space Frame composed of 79% aluminum and 13% carbon fiber reinforced polymer, mechanical quattro all-wheel drive, and performance-tuned magnetic ride control. The interior is driver-centric, featuring the virtual cockpit dashboard and fine Nappa leather bucket seats.",
      features: [
        "5.2-Liter Naturally Aspirated V10 Engine (8,700 RPM limit)",
        "Dry-Sump Lubrication system supporting high lateral G-forces",
        "Audi Space Frame (ASF) lightweight aluminum/carbon chassis",
        "Audi Magnetic Ride adaptive damper fluid control",
        "Carbon Fiber engine cover panels and front sway bar",
        "Sport exhaust system with sound-adjustable bypass valves"
      ]
    },
    {
      id: "audi-rs-etron-gt",
      brandId: "audi",
      name: "RS e-tron GT",
      price: 221000000,
      category: "Electric / Sedan",
      image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1200&q=80",
      hp: "637 hp",
      range: "249 miles",
      transmission: "2-Speed Automatic",
      acceleration: "3.1s",
      topSpeed: "155 mph",
      description: "An artistic fusion of performance and sustainable luxury, the RS e-tron GT produces 637 horsepower in boost mode. Sharing a high-voltage 800V charging platform, it features a dual-motor electric quattro system and a 2-speed rear axle gearbox to optimize high-speed acceleration. Ride comfort is managed by a 3-chamber air suspension system, and cabin aesthetics incorporate sustainable recycled Dinamica microfiber and Nappa leather detailing.",
      features: [
        "Dual-Motor configuration with 2-Speed rear-axle transmission",
        "800-Volt charging architecture supporting DC rapid charge",
        "Three-Chamber Adaptive Air Suspension with ride height settings",
        "Electronic Torque Vectoring Plus active rear differential lock",
        "RS-specific active sound synthesis cabin acoustics",
        "21-inch 5-spoke wheels with carbon fiber aero blades"
      ]
    }
  ]
};

function initDatabase() {
  const data = localStorage.getItem("automobile_platform_data");
  const currencyReset = localStorage.getItem("automobile_platform_currency") !== "NGN";
  const dbVersionCheck = localStorage.getItem("automobile_platform_db_version") !== "v3";
  
  if (!data || currencyReset || dbVersionCheck) {
    localStorage.setItem("automobile_platform_data", JSON.stringify(DEFAULT_DATA));
    localStorage.setItem("automobile_platform_currency", "NGN");
    localStorage.setItem("automobile_platform_db_version", "v3");
  }
}

initDatabase();
