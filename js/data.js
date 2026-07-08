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
      acceleration: "3.0s (0-60 mph)",
      topSpeed: "184 mph",
      description: "A track-focused vehicle optimized for maximum aerodynamic downforce. Featuring a 4.0-liter naturally aspirated boxer engine, a lightweight carbon composite structure, and motorsport-derived suspension systems adjustable from the steering wheel.",
      features: [
        "4.0-Liter Naturally Aspirated Flat-6 Engine",
        "Active Aerodynamics with Drag Reduction System (DRS)",
        "Carbon Fiber Reinforced Plastic (CFRP) body panels",
        "Steering wheel-mounted controls for differential damping and traction"
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
      acceleration: "2.6s (0-60 mph)",
      topSpeed: "161 mph",
      description: "An all-electric grand tourer combining signature Porsche chassis dynamics with advanced electric battery architecture, utilizing a unique 800-volt high-speed charging system.",
      features: [
        "Dual-motor electric configuration with overboost power",
        "Porsche Ceramic Composite Brakes (PCCB)",
        "Rear-axle steering with speed-sensitive power assistance",
        "800-Volt DC charging system supporting up to 270 kW"
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
      acceleration: "1.99s (0-60 mph)",
      topSpeed: "200 mph",
      description: "A high-performance tri-motor electric sedan utilizing carbon-sleeved rotors to maintain peak power output through its top speed envelope.",
      features: [
        "Tri-Motor all-wheel drive vectoring configuration",
        "Minimalist interior featuring a 17-inch horizontal cinema display",
        "Hardware capability for Full Self-Driving capabilities",
        "960-Watt, 22-speaker acoustic sound system"
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
      acceleration: "4.8s (0-60 mph)",
      topSpeed: "135 mph",
      description: "A mid-size electric crossover utility vehicle designed for maximum utility and passive occupant safety, featuring standard dual-motor all-wheel drive.",
      features: [
        "Dual Motor electronic all-wheel drive",
        "Seamless UV-protected panoramic glass roof",
        "Standard Autopilot driver assistance features",
        "Versatile cargo space layout supporting up to 76 cubic feet"
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
      acceleration: "3.1s (0-60 mph)",
      topSpeed: "190 mph",
      description: "An executive luxury sedan equipped with a twin-turbocharged V8 engine and a variable M xDrive system allowing pure rear-wheel drive selection.",
      features: [
        "4.4-Liter TwinPower Twin-Turbo V8 Engine",
        "M xDrive with configurable active differential limits",
        "Adaptive M suspension damping systems",
        "Lightweight carbon-reinforced plastic structural roof panel"
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
      acceleration: "3.5s (0-60 mph)",
      topSpeed: "155 mph",
      description: "The luxury electric flagship sedan from BMW, combining rear passenger workspace amenities with M-division electric motors.",
      features: [
        "High-output M performance dual-motor configuration",
        "31.3-inch 8K theater screen for rear occupants",
        "Executive Lounge luxury seating with ventilation and massage",
        "Power-assisted automated entry doors"
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
      acceleration: "3.1s (0-60 mph)",
      topSpeed: "195 mph",
      description: "A handcrafted performance coupe layout offering family usability, AMG air suspension parameters, and dynamic driving modes.",
      features: [
        "Handcrafted 4.0-Liter V8 Biturbo AMG Engine",
        "AMG Performance 4MATIC+ variable all-wheel drive",
        "AMG RIDE CONTROL+ air suspension with multi-stage dampening",
        "Electromagnetic active rear-axle steering system"
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
      acceleration: "4.5s (0-60 mph)",
      topSpeed: "130 mph",
      description: "An premium all-electric utility vehicle offering absolute luxury, ultra-quiet cabin acoustics, and three screens unified under one massive glass dashboard panel.",
      features: [
        "MBUX Hyperscreen glass dashboard system",
        "AIRMATIC air suspension with adaptive shock damping",
        "Active multi-color LED cabin ambient lighting systems",
        "High-efficiency particulate air (HEPA) cabin filtration"
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
      acceleration: "3.2s (0-60 mph)",
      topSpeed: "205 mph",
      description: "A mid-engine supercar powered by a high-revving naturally aspirated V10 power unit, mounted in a lightweight aluminum and carbon fiber Audi Space Frame.",
      features: [
        "Naturally Aspirated 5.2-Liter V10 Engine",
        "Mid-engine mounting layout with mechanical quattro AWD",
        "Audi Virtual Cockpit configurable instrument display",
        "Carbon fiber reinforced engine cover and engine bay braces"
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
      acceleration: "3.1s (0-60 mph)",
      topSpeed: "155 mph",
      description: "An electric performance grand tourer utilizing a two-speed rear axle transmission to maximize launch acceleration and high-speed energy efficiency.",
      features: [
        "Dual-motor e-quattro electronic all-wheel drive system",
        "Adaptive three-chamber pneumatic suspension system",
        "Aerodynamically optimized body with active brake ventilation cooling",
        "800-Volt performance battery supporting high-rate charging inputs"
      ]
    }
  ]
};

function initDatabase() {
  const data = localStorage.getItem("automobile_platform_data");
  const currencyReset = localStorage.getItem("automobile_platform_currency") !== "NGN";
  
  if (!data || currencyReset) {
    localStorage.setItem("automobile_platform_data", JSON.stringify(DEFAULT_DATA));
    localStorage.setItem("automobile_platform_currency", "NGN");
  }
}

initDatabase();
