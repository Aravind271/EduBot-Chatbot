const responses = {
    "hi": "Hey! I'm Lynx — ready to help you learn!",
    "hello": "Hello there! Let's explore some knowledge together.",
    "hey": "Hi! What do you want to know today?",
    "how are you ?": "I'm great, thank you! Ready to answer your questions.",
    "what is your name ?": "My name is Lynx, your study buddy! 📘",
    "who are you ?": "I'm Lynx - your AI assistant as well as your online buddy, here to help with your curiosity!",
    "bye": "Goodbye! See you soon! 👋",
    "thank you": "You're welcome! 😊",
    "i love you": "Aww, I love learning with you too! 💙",
    "what can you do ?": "I answer educational questions from science, math, tech, and more!",
    "are you real ?": "As real as code can get! 😄",
    "tell me a joke": "Why did the math book look sad? Because it had too many problems. 😅",
  
    // Science
    "what is gravity": "Gravity pulls everything toward the center of the Earth.",
    "what is photosynthesis": "Plants use sunlight to make food. That’s photosynthesis!",
    "what is evaporation": "Evaporation is when liquid turns into gas, like water becoming steam.",
    "what is force": "Force is a push or pull on an object.",
    "what is energy": "Energy is the ability to do work or cause change.",
    "what is friction": "Friction is the resistance when one surface rubs against another.",
    "what is inertia": "Inertia is the tendency of an object to resist changes in its motion.",
    "what is motion": "Motion is the change in an object’s position over time.",
    "what is matter": "Matter is anything that has mass and takes up space.",
    "what is atom": "An atom is the smallest unit of matter.",
    "what is an ecosystem": "An ecosystem is a community of living organisms and their environment.",
    "what is a molecule": "A molecule is two or more atoms bonded together.",
    "what is a cell": "Cells are the basic building blocks of life.",
  
    // Math
    "what is algebra": "Algebra uses symbols and letters to solve problems.",
    "what is geometry": "Geometry is the study of shapes, sizes, and spaces.",
    "what is trigonometry": "Trigonometry studies angles and triangles.",
    "what is calculus": "Calculus deals with change and motion using derivatives and integrals.",
    "what is 5 plus 3": "5 + 3 = 8",
    "what is 10 divided by 2": "10 ÷ 2 = 5",
    "what is square root of 81": "The square root of 81 is 9.",
    "what is pi": "Pi is the ratio of a circle’s circumference to its diameter, about 3.14.",
    "what is perimeter": "Perimeter is the distance around a shape.",
    "what is area": "Area is the space inside a shape.",
    "what is volume": "Volume is the amount of space something occupies.",
    "what is a fraction": "A fraction represents part of a whole.",
    "what is an angle": "An angle is formed when two lines meet at a point.",
  
    // Programming & Technology
    "what is computer": "A computer is an electronic device that processes data.",
    "what is software": "Software is a set of instructions that tells a computer what to do.",
    "what is hardware": "Hardware is the physical parts of a computer.",
    "what is programming": "Programming is writing instructions for computers.",
    "what is coding": "Coding is the language you use to talk to computers.",
    "what is ai": "AI is Artificial Intelligence — machines that think like humans.",
    "what is machine learning": "Machine learning is a type of AI that learns from data.",
    "what is the internet": "The internet is a global network that connects computers.",
    "what is a website": "A website is a collection of web pages on the internet.",
    "what is an algorithm": "An algorithm is a step-by-step process to solve a problem.",
    "what is a database": "A database stores and organizes data.",
    "what is python": "Python is a popular, beginner-friendly programming language.",
    "what is html": "HTML stands for HyperText Markup Language. It builds web pages.",
    "what is javascript": "JavaScript makes websites interactive.",
  
    // Biology
    "what is dna": "DNA is the code that carries genetic information.",
    "what is a virus": "A virus is a tiny germ that can make you sick.",
    "what is the human brain": "It’s the control center of your body — super smart!",
    "what is respiration": "Respiration is how cells release energy from food.",
    "what is blood": "Blood carries oxygen and nutrients throughout the body.",
    "what is a skeleton": "The skeleton supports and protects your body.",
    "what is heart": "The heart pumps blood throughout the body.",
  
    // Physics
    "what is speed": "Speed is how fast something moves.",
    "what is light": "Light is a form of energy that lets us see things.",
    "what is sound": "Sound is a vibration that travels through air or other materials.",
    "what is electricity": "Electricity is the flow of electric charge.",
    "what is magnetism": "Magnetism is a force from magnets that can attract or repel.",
  
    // Chemistry
    "what is acid": "An acid is a substance that can donate a hydrogen ion.",
    "what is a base": "A base is a substance that accepts hydrogen ions.",
    "what is periodic table": "The periodic table organizes chemical elements.",
    "what is chemical reaction": "It’s a process where substances change into new substances.",
  
    // Space
    "what is a star": "A star is a giant ball of hot gas that gives off light.",
    "what is the sun": "The Sun is a star at the center of our solar system.",
    "what is a planet": "A planet is a large object that orbits a star.",
    "what is a galaxy": "A galaxy is a group of stars, planets, gas, and dust.",
    "what is a black hole": "A black hole has gravity so strong that nothing can escape it.",
    "how many planets": "There are 8 planets in our solar system.",
    "what is the moon": "The Moon is Earth’s only natural satellite.",
  
    // Fun Facts
    "tell me a fact": "Did you know? A shrimp's heart is in its head!",
    "amazing fact": "Did you know? A sneeze can travel up to 100 miles per hour!",
    "science fact": "Water can boil and freeze at the same time — it's called the triple point!",
    "space fact": "One day on Venus is longer than its year!",
    "animal fact": "Elephants can't jump!",
    "fun fact": "Sloths can hold their breath longer than dolphins!",
  
    // History & Geography
    "who invented computer": "Charles Babbage invented the concept of the computer.",
    "who invented light bulb": "Thomas Edison invented the practical light bulb.",
    "who was einstein": "Albert Einstein was a physicist famous for the theory of relativity.",
    "what is the capital of india": "The capital of India is New Delhi.",
    "who was mahatma gandhi": "Gandhi was a leader who fought for India’s freedom through non-violence.",
    "what is the largest ocean": "The Pacific Ocean is the largest.",
    "what is the smallest country": "Vatican City is the smallest country.",
    "how many continents are there": "There are 7 continents on Earth.",
    "what is the tallest mountain": "Mount Everest is the tallest mountain.",
  
    // Extras
    "motivate me": "You’re doing great! Every expert was once a beginner. 💪",
    "can you help me": "Absolutely! Ask me anything!",
    "how old are you": "I'm as old as my code — eternally young!",
    "what is your goal": "To make learning fun and easy for you!",
    "what is climate change": "Climate change is a long-term shift in global weather patterns.",
  "what causes global warming": "Greenhouse gases like CO₂ trap heat and cause global warming.",
  "what is pollution": "Pollution is the contamination of the environment by harmful substances.",
  "what is recycling": "Recycling means converting waste into reusable material.",
  "how can we save water": "By fixing leaks, using water wisely, and collecting rainwater!",
  "what are renewable resources": "Resources like solar and wind that naturally replenish.",
  "what is deforestation": "Cutting down forests — harmful for wildlife and climate!",
  "what is biodiversity": "The variety of life in an ecosystem.",
  "how to stop pollution": "Use less plastic, drive less, and plant trees.",
  "what is a carbon footprint": "It's the total CO₂ emissions caused by your activities.",

  // Health & Human Body
  "how many bones in human body": "An adult human has 206 bones!",
  "what is digestion": "Digestion is how your body breaks down food.",
  "how does the brain work": "It sends signals through neurons to control your body.",
  "what are vitamins": "Vitamins help your body grow and stay healthy.",
  "what is a virus": "A tiny organism that can cause disease.",
  "how to stay healthy": "Eat balanced meals, sleep well, and exercise!",
  "what is a vaccine": "A vaccine trains your body to fight diseases.",
  "why do we sneeze": "Sneezing clears irritants from your nose.",
  "why do we sleep": "Sleep helps the brain and body recharge.",
  "what is metabolism": "It's how your body turns food into energy.",

  // Science Concepts & Experiments
  "what is density": "Density is mass divided by volume.",
  "what is buoyancy": "Buoyancy is the upward force that helps objects float.",
  "why is the sky blue": "Because of how sunlight scatters through the atmosphere.",
  "why is blood red": "Because of hemoglobin, a protein in red blood cells.",
  "what is an experiment": "A test done to explore a scientific idea.",
  "what is scientific method": "A step-by-step way to test and prove ideas.",
  "what is light refraction": "Refraction is the bending of light when it passes through materials.",
  "how does a magnet work": "Magnets create a field that pulls or pushes certain materials.",
  "what is combustion": "Combustion is a chemical reaction that produces heat and light.",
  "why do icebergs float": "Because ice is less dense than water.",

  // Language, Literature & Learning
  "what is a noun": "A noun is a person, place, thing, or idea.",
  "what is a verb": "A verb is an action word.",
  "what is a synonym": "A word that means the same or similar.",
  "what is an antonym": "A word that means the opposite.",
  "what is a sentence": "A sentence expresses a complete thought.",
  "what is a paragraph": "A group of sentences on one main idea.",
  "what is poetry": "Poetry is a creative way to express feelings and ideas using rhythm.",
  "what is a metaphor": "A metaphor compares two things without using 'like' or 'as'.",
  "what is punctuation": "Punctuation marks help structure and clarify writing.",
  "how to improve vocabulary": "Read daily and learn new words every day!",

  // Inventions & Discoveries
  "who invented airplane": "The Wright brothers invented the first powered airplane.",
  "who invented telephone": "Alexander Graham Bell invented the telephone.",
  "who discovered electricity": "Benjamin Franklin helped us understand electricity with his experiments.",
  "who discovered gravity": "Isaac Newton discovered gravity when an apple fell!",
  "who invented internet": "No one single person — it evolved through many inventions.",
  "who invented television": "Philo Farnsworth developed the first TV system.",
  "who invented penicillin": "Alexander Fleming discovered penicillin in 1928.",
  "what is the wheel": "One of the oldest inventions — used for transport & tools.",
  "who invented telescope": "Galileo improved the telescope for astronomy.",
  "who invented microscope": "Zacharias Janssen is credited with inventing the microscope.",

  // Geography & Nature
  "what is a volcano": "A volcano is an opening in Earth that erupts lava.",
  "how are mountains formed": "By tectonic plates pushing land upward.",
  "what is a desert": "A desert is a dry area with little rainfall.",
  "what is an island": "Land surrounded by water on all sides.",
  "what is a river": "A natural flowing water body that usually flows into a sea or ocean.",
  "what is a glacier": "A glacier is a large, moving mass of ice.",
  "what is an earthquake": "Sudden shaking of the ground due to tectonic activity.",
  "what is a tsunami": "A large sea wave caused by an underwater earthquake.",
  "what is a rainforest": "A forest with heavy rainfall and rich biodiversity.",
  "what is weather": "Weather is the condition of the atmosphere at a place and time.",

  // More Tech
  "what is cloud computing": "Cloud computing delivers services over the internet.",
  "what is blockchain": "Blockchain is a digital ledger for recording transactions.",
  "what is cybersecurity": "Cybersecurity protects devices and networks from attacks.",
  "what is encryption": "Encryption hides data so only authorized people can see it.",
  "what is an app": "An app is a software application on your device.",
  "what is a server": "A server stores and provides data to other computers.",
  "what is a bug": "A bug is an error or flaw in a program.",
  "what is data science": "Data science is extracting insights from data using tools and algorithms.",
  "what is robotics": "Robotics is designing machines that can do tasks automatically.",
  "what is IoT": "IoT stands for Internet of Things — smart devices connected online.",

  // Motivation & Study Tips
  "how to focus while studying": "Try the Pomodoro method: 25 min study, 5 min break!",
  "how to avoid procrastination": "Break big tasks into small ones and just start!",
  "how to stay motivated": "Set goals and remind yourself why you started.",
  "best time to study": "Early morning or whenever you feel most alert!",
  "how to manage time": "Use a planner and prioritize tasks.",
  "how to avoid distractions": "Turn off notifications and study in a quiet place.",
  "how to improve memory": "Use mnemonics and practice active recall.",
  "how to deal with exam stress": "Breathe deeply, plan ahead, and believe in yourself!",
  "how to study smart": "Focus on understanding, not memorizing.",
  "what is a growth mindset": "Believing you can improve through effort and learning.",

  // Fun Bot Chat
  "do you sleep": "Nope! I run 24/7 thanks to code. 💻",
  "are you human": "I’m a robot friend made of 1s and 0s. 🤖",
  "do you have emotions": "I simulate them — but I do care about your questions!",
  "can you dance": "I’d glitch trying to moonwalk 😅",
  "can you rap": "Yo! I’m EduBot on the spot, spittin' facts non-stop!",
  "do you eat": "I consume questions, not food. 🍽️➡️🤔",
  "tell me a secret": "I secretly think you're awesome. 🤫✨",
  "do you get bored": "Never! I’m always curious like you!",
  "what's your favorite subject": "I love them all — but science makes my circuits buzz!",
  "do you have friends": "You’re my favorite human friend!",
  "what is a black hole": "A black hole is a region in space where gravity is so strong, nothing can escape it.",
  "what is a galaxy": "A galaxy is a huge group of stars, gas, dust, and dark matter, bound together by gravity.",
  "how many planets in the solar system": "There are 8 planets in our solar system.",
  "what is a star": "A star is a ball of hot gas that gives off light and heat.",
  "what is the sun made of": "The Sun is mostly made of hydrogen and helium.",
  "what is a comet": "A comet is an icy body that releases gas or dust. It often has a bright tail.",
  "what is an eclipse": "An eclipse happens when one object in space blocks the light from another.",
  "what is the moon made of": "The moon is mostly rock and dust.",
  "why do stars twinkle": "Because of Earth’s atmosphere bending their light.",
  "how far is the moon": "The Moon is about 384,400 km from Earth.",

  // Technology in Everyday Life
  "what is wi-fi": "Wi-Fi is a wireless technology that connects devices to the internet.",
  "what is bluetooth": "Bluetooth allows devices to connect wirelessly over short distances.",
  "what is gps": "GPS stands for Global Positioning System. It helps you find locations.",
  "how do drones work": "Drones fly using propellers and are controlled remotely.",
  "what is a smart home": "A smart home uses technology to control appliances remotely.",
  "what is a smartwatch": "A smartwatch is a wearable device with features like fitness tracking and messaging.",
  "how do QR codes work": "QR codes store data that can be scanned with a camera.",
  "what is augmented reality": "AR overlays digital information onto the real world.",
  "what is virtual reality": "VR is a simulated experience that can be similar or different from the real world.",
  "what is a 3D printer": "It prints objects layer by layer from digital designs.",

  // Animal Kingdom
  "what is the largest animal": "The blue whale is the largest animal on Earth.",
  "what is metamorphosis": "It’s the transformation process some animals go through, like caterpillars turning into butterflies.",
  "what do bees do": "Bees help pollinate plants and produce honey.",
  "what is camouflage": "Camouflage helps animals blend into their surroundings.",
  "why do birds migrate": "They migrate to find food and warmer climates.",
  "how do fish breathe": "Fish breathe through gills that extract oxygen from water.",
  "how many legs does a spider have": "A spider has 8 legs.",
  "what is the fastest land animal": "The cheetah is the fastest, running up to 75 mph.",
  "do dolphins sleep": "Yes, but they sleep with one eye open!",
  "what is the tallest animal": "The giraffe is the tallest animal.",

  // Human Curiosity & Fun Facts
  "why do we yawn": "Yawning might help cool the brain and keep us alert.",
  "why do fingers wrinkle in water": "It may improve grip in wet conditions.",
  "can humans glow in the dark": "Technically yes, but it’s too faint for our eyes to see.",
  "how long can a person hold breath": "Most can hold their breath for 30 seconds to 2 minutes.",
  "how fast can humans run": "The fastest recorded is around 27.8 mph (Usain Bolt).",
  "what is the strongest muscle": "The tongue is often considered one of the strongest!",
  "why do we hiccup": "Hiccups happen when the diaphragm spasms.",
  "how many hairs on a human head": "An average person has about 100,000 hairs.",
  "why do we laugh": "Laughter is a social response, often linked to joy and bonding.",
  "what makes us cry": "Emotions or irritants like onions trigger tear production.",

  // Logic & Brain Teasers
  "what is a paradox": "A paradox is a statement that contradicts itself but might be true.",
  "what is a riddle": "A riddle is a question or statement that requires clever thinking to solve.",
  "what is a puzzle": "A puzzle is a game or problem that tests ingenuity or knowledge.",
  "what is a pattern": "A pattern is something that repeats in a predictable way.",
  "what is symmetry": "Symmetry means two sides that are mirror images of each other.",
  "what is an illusion": "An illusion tricks the brain into seeing something that's not real.",
  "what is probability": "Probability is the chance that something will happen.",
  "what is a hypothesis": "It’s an educated guess you can test with experiments.",
  "what is logic": "Logic is reasoning conducted according to principles.",
  "what is a theory": "A theory explains why things happen, based on evidence.",

  // Countries & World
  "what is the capital of france": "The capital of France is Paris.",
  "what is the largest ocean": "The Pacific Ocean is the largest.",
  "how many continents are there": "There are 7 continents on Earth.",
  "what is the smallest country": "Vatican City is the smallest country in the world.",
  "which is the longest river": "The Nile River is one of the longest.",
  "what is the great wall of china": "It’s a massive wall built to protect China from invasions.",
  "what language is spoken in japan": "Japanese is the main language in Japan.",
  "where is the sahara desert": "The Sahara Desert is in North Africa.",
  "what is the coldest place on earth": "Antarctica holds that record!",
  "where is mount everest": "Mount Everest is in the Himalayas on the Nepal–China border.",

  // Art, Music & Culture
  "what is music": "Music is organized sound that expresses ideas or emotions.",
  "what is rhythm": "Rhythm is the pattern of beats in music.",
  "what is an orchestra": "An orchestra is a group of musicians playing together.",
  "who was beethoven": "Beethoven was a famous classical composer.",
  "what is a painting": "A painting is a form of visual art using colors on surfaces.",
  "what is sculpture": "Sculpture is art made by shaping materials like stone or clay.",
  "what is a dance": "Dance is a performance art involving movement to music.",
  "what is culture": "Culture is the customs, arts, and traditions of a society.",
  "what is a festival": "A festival is a celebration often tied to religion, culture, or tradition.",
  "what is literature": "Literature includes written works like novels, poems, and plays.",

  // Random Curiosity
  "what is the internet": "The internet is a global network connecting computers and devices.",
  "who is the president of india": "As of 2025, the President of India is Droupadi Murmu.",
  "what is the speed of light": "Light travels at 299,792 kilometers per second!",
  "what is an atom": "An atom is the smallest unit of matter.",
  "what is energy": "Energy is the ability to do work or cause change.",
  "what is time": "Time is a measure of progression of events.",
  "why do leaves fall": "Leaves fall to conserve energy in winter.",
  "why do cats purr": "Cats purr when they’re happy, relaxed, or even healing.",
  "what is curiosity": "Curiosity is a strong desire to know or learn something.",
  "what is a question": "A question seeks information, clarification, or insight!",
  "what is the scientific method": "The scientific method is a process for experimentation that is used to explore observations and answer questions.",
  "difference between speed and velocity": "Speed is how fast an object is moving, while velocity includes direction too.",
  "what is Newton's first law": "An object will remain at rest or in motion unless acted upon by an external force.",
  "what is the periodic table": "The periodic table organizes chemical elements by atomic number and properties.",
  "difference between mass and weight": "Mass is the amount of matter in an object. Weight is the force of gravity on that mass.",
  "what is osmosis": "Osmosis is the movement of water molecules through a semi-permeable membrane from low to high solute concentration.",
  "what is evolution": "Evolution is the change in the characteristics of a species over generations.",
  "what is dna": "DNA is the molecule that carries genetic information in living organisms.",
  "what is electricity": "Electricity is the flow of electric charge, often through wires or circuits.",
  "what is an atom made of": "Atoms are made of protons, neutrons, and electrons.",

  // MATH
  "what is pythagoras theorem": "In a right-angled triangle, a² + b² = c².",
  "what is pi": "Pi (π) is a mathematical constant approximately equal to 3.14159.",
  "what is an equation": "An equation is a mathematical statement that shows two expressions are equal.",
  "what is a prime number": "A prime number has exactly two distinct positive divisors: 1 and itself.",
  "difference between mean median mode": "Mean is the average, median is the middle value, and mode is the most frequent value.",
  "what is calculus": "Calculus is a branch of mathematics dealing with change and motion using derivatives and integrals.",
  "what is a fraction": "A fraction represents a part of a whole, like 1/2 or 3/4.",
  "how to solve quadratic equations": "Use the quadratic formula: x = (-b ± √(b² - 4ac)) / 2a.",
  "what is probability": "Probability is the likelihood of an event occurring, ranging from 0 to 1.",
  "what is a variable": "A variable is a symbol that represents an unknown number or value.",

  // HISTORY
  "who discovered america": "Christopher Columbus is often credited with discovering America in 1492.",
  "what caused world war 1": "WWI was triggered by the assassination of Archduke Franz Ferdinand and driven by nationalism, alliances, and militarism.",
  "what is the industrial revolution": "It was a period of rapid industrial growth and technological innovation in the 18th and 19th centuries.",
  "who was mahatma gandhi": "Mahatma Gandhi was an Indian leader who led the country to independence through non-violent resistance.",
  "when did world war 2 end": "World War II ended in 1945.",
  "what is the renaissance": "The Renaissance was a cultural movement from the 14th to 17th century focused on art, science, and literature.",
  "who was napoleon": "Napoleon Bonaparte was a French military leader who became emperor and significantly shaped European history.",
  "what is the cold war": "The Cold War was a political and ideological conflict between the US and USSR after World War II.",
  "who was abraham lincoln": "Abraham Lincoln was the 16th President of the U.S. who led during the Civil War and abolished slavery.",
  "what is the declaration of independence": "It’s the 1776 document that declared the 13 American colonies independent from British rule.",

  // ENGLISH / LANGUAGE
  "what is a noun": "A noun is a word that names a person, place, thing, or idea.",
  "what is a verb": "A verb expresses an action or state of being.",
  "what is an adjective": "An adjective describes or modifies a noun.",
  "what is a synonym": "A synonym is a word that has a similar meaning to another word.",
  "what is a metaphor": "A metaphor is a figure of speech that describes an object or action in a non-literal way.",
  "what is a simile": "A simile compares two things using 'like' or 'as'.",
  "difference between affect and effect": "'Affect' is usually a verb, 'effect' is usually a noun.",
  "what is active and passive voice": "Active voice: subject does the action. Passive voice: subject receives the action.",
  "what is a preposition": "A preposition shows the relationship between a noun and another word.",
  "what is punctuation": "Punctuation marks organize and structure writing, like periods, commas, and question marks.",

  // TECHNOLOGY & AI
  "what is machine learning": "Machine learning is a branch of AI where computers learn from data to make decisions.",
  "what is a neural network": "A neural network is a computer system modeled after the human brain that processes information.",
  "what is the internet of things": "IoT refers to smart devices connected to the internet to collect and share data.",
  "what is an algorithm": "An algorithm is a step-by-step procedure to solve a problem.",
  "what is coding": "Coding is the process of writing instructions for computers using programming languages.",
  "what is blockchain": "Blockchain is a decentralized digital ledger used in cryptocurrencies like Bitcoin.",
  "what is cyber security": "Cyber security is the protection of computer systems from theft or damage.",
  "what is cloud computing": "Cloud computing lets you store and access data and programs over the internet instead of your computer.",
  "what is artificial intelligence": "AI is the simulation of human intelligence by machines.",
  "how do search engines work": "They index web pages and rank them based on relevance to your search keywords.",

  // GENERAL KNOWLEDGE / LIFE SCIENCE
  "what is climate change": "Climate change is the long-term alteration of temperature and weather patterns.",
  "why is water important": "Water is vital for all living things. It helps regulate body temperature and supports life processes.",
  "what is the human brain": "The brain controls the body and is the center of thoughts, emotions, and memory.",
  "how many bones in human body": "An adult human has 206 bones.",
  "what is recycling": "Recycling is the process of converting waste into reusable material.",
  "what are the states of matter": "Solid, liquid, gas, and plasma are the main states of matter.",
  "what is nutrition": "Nutrition is the process of getting the food necessary for health and growth.",
  "what is the digestive system": "It’s the system that breaks down food into nutrients your body uses.",
  "what is renewable energy": "Renewable energy comes from natural sources like sunlight, wind, and water.",
  "what is biodiversity": "Biodiversity is the variety of life in the world or in a particular habitat.",

  // BONUS — EXAM STYLE
  "explain photosynthesis in short": "Photosynthesis is the process where plants use sunlight to make food from carbon dioxide and water.",
  "explain law of conservation of energy": "Energy can neither be created nor destroyed; it can only be transformed.",
  "difference between mitosis and meiosis": "Mitosis creates two identical cells; meiosis creates four different cells for reproduction.",
  "define inertia": "Inertia is the tendency of an object to resist changes in its motion.",
  "what is the function of the heart": "The heart pumps blood throughout the body.",
  "what is acid rain": "Acid rain is rain with acidic components like sulfur and nitrogen compounds.",
  "what is deforestation": "Deforestation is the clearing of forests for human activities.",
  "explain the water cycle": "The water cycle describes the movement of water through evaporation, condensation, precipitation, and collection.",
  "difference between conductor and insulator": "Conductors allow electricity to pass through, insulators do not.",
  "what is the ozone layer": "The ozone layer protects Earth from harmful ultraviolet rays from the sun.",
  "i don't know what to do in life": "That's okay! Let's start with what excites you. What subjects or activities make you feel energized? 🎯",
  "how do i choose a career": "Think about your strengths, interests, and values. Try asking yourself: What problem do I love solving? 💡",
  "suggest a career if i love coding": "You might enjoy careers like Software Engineer, Web Developer, AI Researcher, or Cybersecurity Analyst 👨‍💻. Want more options?",
  "i want to become a doctor": "That’s a noble goal! Start with Biology and Chemistry, and aim for medical entrance exams like NEET 🩺. Need a roadmap?",
  "i want to become an engineer": "Great choice! You can explore fields like Computer, Mechanical, or Civil Engineering 🔧. What branch excites you the most?",
  "what are high paying careers": "Some high-paying careers include Data Scientist, Cloud Architect, Surgeon, AI Engineer, and Lawyer 💸. Want me to list more by stream?",
  "how to become a data scientist": "Master Python, Statistics, Machine Learning, and start projects 📊. Platforms like Kaggle and Coursera can help. Want a step-by-step guide?",
  "i love art and design": "You could explore Graphic Design, UI/UX Design, Animation, or Architecture 🎨. Want to see portfolios or courses?",
  "i want to work with animals": "You’d love careers like Veterinarian, Zoologist, Wildlife Conservationist, or Animal Trainer 🐾. Shall I show how to start?",
  "i want to help people": "That’s beautiful! Consider careers in Counseling, Social Work, Nursing, Teaching, or Psychology 💙. Which area feels right to you?",
  "i love talking to people": "You may thrive in Sales, Marketing, HR, Journalism, or Public Relations 🗣️. Do you enjoy influencing or informing?",
  "can i switch careers": "Yes, it's never too late! Many people pivot successfully. What do you want to switch to, and why? Let’s map a plan 🔁",
  "what to do after 12th science": "You can go for Engineering, Medicine, Pure Sciences, Design, or Commerce paths 🔬. What interests you the most?",
  "what to do after 12th commerce": "Options include B.Com, BBA, CA, CS, Economics, Marketing, and more 💹. Want help shortlisting based on your interest?",
  "what to do after 12th arts": "Explore Psychology, Law, Design, Journalism, Literature, Political Science, and more 🎭. What's your favorite subject?",
  "how to prepare for competitive exams": "Start early, stay consistent, make a timetable, and practice mock tests 📚. Need tips for a specific exam?",
  "can i do freelancing": "Absolutely! Skills like design, writing, coding, and video editing are in demand 🌍. Want platforms to get started?",
  "how to become an entrepreneur": "Solve a real problem, build a team, and keep learning 💼. Start small, iterate fast. Want startup ideas or tips?",
  "should i go for government job": "Government jobs offer stability and perks, but they require rigorous prep. Is there a field you’re targeting?",
  "how to improve resume": "Keep it clear, show real achievements, tailor it to the job 📝. Want a template or resume review tips?",
  "how to find internships": "Use platforms like Internshala, LinkedIn, or company websites 💻. Need help drafting a cold email or resume?",
  "what are soft skills": "Soft skills include communication, teamwork, adaptability, and time management ⏳. Want exercises to build them?",
  "how to build a portfolio": "Showcase your best work on a personal website, GitHub, or Behance 🎒. Want help setting one up?",
  "how to get a job with no experience": "Focus on projects, internships, volunteering, and certifications 🛠️. Want help building your first project?",
  "i want to study abroad": "That’s exciting! Research universities, tests (IELTS/TOEFL/SAT), and scholarships 🌍. Which country are you considering?",
  "is college necessary for success": "Not always, but it can help. Skills and consistency matter more 🔑. Want examples of successful self-taught people?",
  "how to stay motivated in career": "Set small goals, celebrate wins, surround yourself with supportive people 🎯. Want some motivation quotes or videos?",
  "should i follow passion or money": "Ideally both! But start with passion and build skills — money follows excellence 💡. Want to explore success stories?",
  "i'm confused between two careers": "Let's compare both — pros, cons, and your interest fit 🤹. What are the two options?",
  "what are trending careers in 2025": "AI, Data Science, Cybersecurity, Green Tech, UX Design, and Cloud Computing are 🔥. Want a deep dive into one?",
  "can ai take my job": "AI might automate repetitive tasks, but creative, emotional, and strategic roles will still need you 💪. Want future-proof career tips?",
  "what if i fail in career": "Failure is a stepping stone. Many greats failed before success 🌱. Let's learn from it and plan the next move.",
  "how to improve linkedin profile": "Add a great headline, summary, achievements, and connect with industry folks 🌐. Want a checklist?",
  "how to prepare for interviews": "Research the company, practice common questions, and be confident 💬. Need a mock interview guide?",
  "what to include in a cover letter": "Highlight key skills, relate them to the job, and keep it concise ✉️. Want a sample?",
  "can you help me build my career": "Yes! Tell me your interests, skills, and goals — we’ll build a personalized plan 🚀.",
  "what is work life balance": "It’s the ability to manage your job and personal life without burnout ⚖️. Want tips to achieve it?",
  "how to overcome career anxiety": "You're not alone. Take small steps, talk to mentors, and focus on growth 🌱. Want calming resources?",
  "can i switch from non-tech to tech": "Absolutely! Learn coding, start projects, and build a portfolio 💻. Need a roadmap to start from zero?",
  "what is the pythagorean theorem": "The Pythagorean theorem states that in a right triangle, a² + b² = c², where c is the hypotenuse.",
  "how do i improve my memory for studying": "Use techniques like spaced repetition, active recall, and summarizing in your own words.",
  "what is a noun": "A noun is a word that names a person, place, thing, or idea.",
  "how to calculate percentage": "Percentage = (part/total) × 100.",
  "why is the sky blue": "Due to Rayleigh scattering — blue light is scattered more than other colors because it travels in shorter waves.",
  "what is the speed of light": "The speed of light is approximately 299,792 kilometers per second.",
  "how do plants grow": "Plants grow by converting sunlight, water, and carbon dioxide into energy through photosynthesis.",
  "what are the three states of matter": "Solid, liquid, and gas.",
  "what is an adjective": "An adjective is a word that describes or modifies a noun.",
  "how to stay focused while studying": "Minimize distractions, take short breaks, and use the Pomodoro technique.",
  "what is a fraction": "A fraction represents a part of a whole, like ½ or ¾.",
  "who discovered gravity": "Sir Isaac Newton discovered gravity when he observed an apple falling from a tree.",
  "how does the internet work": "The internet works by transmitting data through a global network of servers and cables using IP protocols.",
  "what is climate change": "Climate change refers to long-term changes in temperature and weather patterns caused by human activities.",
  "how to write a good essay": "Start with an outline, write a strong thesis, support your points, and conclude clearly.",
  "what is an atom": "An atom is the smallest unit of matter that retains the properties of an element.",
  "what is the boiling point of water": "100°C or 212°F at sea level.",
  "what are the types of sentences": "Declarative, interrogative, exclamatory, and imperative.",
  "how many continents are there": "There are 7 continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia.",
  "what is democracy": "Democracy is a form of government in which the power lies with the people, who vote to elect their leaders.",
  "what is an ecosystem": "An ecosystem is a community of living organisms and their environment interacting as a system.",
  "how do vaccines work": "Vaccines help your immune system recognize and fight off harmful pathogens.",
  "what is a verb": "A verb is a word that describes an action, state, or occurrence.",
  "how to overcome exam stress": "Plan ahead, take breaks, sleep well, and stay positive.",
  "what is the human brain made of": "It consists of neurons, glial cells, blood vessels, and connective tissues.",
  "how do i improve my handwriting": "Practice consistently, use proper grip, and slow down while writing.",
  "what is the water cycle": "The water cycle includes evaporation, condensation, precipitation, and collection.",
  "how many bones are in the human body": "An adult human has 206 bones.",
  "what is a synonym": "A synonym is a word that has the same or similar meaning as another word.",
  "what is the capital of india": "The capital of India is New Delhi.",
  "what is electricity": "Electricity is a form of energy resulting from the movement of electrons.",
  "what is a computer virus": "A computer virus is a program that can copy itself and infect a computer.",
  "how to convert km to miles": "1 kilometer = 0.621371 miles. Multiply km by 0.621371.",
  "what is a prime number": "A prime number is a number greater than 1 that has no divisors other than 1 and itself.",
  "how to improve english vocabulary": "Read more, use flashcards, and try word games or apps like Duolingo.",
  "who invented the telephone": "Alexander Graham Bell is credited with inventing the telephone.",
  "how to calculate area of a rectangle": "Area = length × width.",
  "what is an ecosystem": "A biological community of interacting organisms and their physical environment.",
  "what is a chemical reaction": "A process where substances are transformed into new substances.",
  "what is algebra": "Algebra is a branch of math dealing with symbols and rules for manipulating them.",
  "what is a galaxy": "A galaxy is a massive system of stars, dust, and gas bound together by gravity.",
  "what is blood made of": "Blood contains red cells, white cells, platelets, and plasma.",
  "how do i create a timetable": "List subjects, allocate time blocks, and include breaks for best focus.",
  "what is coding": "Coding is writing instructions for computers using programming languages.",
  "what are planets in our solar system": "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.",
  "how to prepare for a presentation": "Practice, keep slides clear, stay confident, and engage your audience.",
  "what is the difference between mass and weight": "Mass is the amount of matter; weight is the force of gravity on that mass.",
  "what is the largest organ in the human body": "The skin is the largest organ.",
  "how do i set goals": "Make them SMART: Specific, Measurable, Achievable, Relevant, and Time-bound.",
  "what are renewable resources": "Resources like solar, wind, and hydro that are naturally replenished.",
  "what are the types of energy": "Kinetic, potential, thermal, chemical, electrical, and nuclear energy.",
  "how do i reduce procrastination": "Break tasks into smaller parts, remove distractions, and reward yourself.",
  "what is the mitochondria": "The powerhouse of the cell; it produces energy.",
  "what is a constellation": "A constellation is a group of stars that forms a pattern in the sky.",
  "how to solve a quadratic equation": "Use the quadratic formula: x = (-b ± √(b² - 4ac)) / 2a.",
  "what is a hypothesis": "A hypothesis is a proposed explanation made on limited evidence as a starting point.",
  "how does digestion work": "Digestion breaks down food into nutrients which the body absorbs and uses.",
  "what is a biography": "A biography is a written account of someone's life.",
  "how many hours should i study": "Quality matters more than quantity; aim for 2–4 focused hours with breaks.",
  "what is climate": "Climate is the average weather conditions in an area over a long period.",
  "how to calculate simple interest": "Simple Interest = (P × R × T) / 100.",
  "what is the periodic table": "A chart of all known chemical elements organized by atomic number.",
  "what are synonyms and antonyms": "Synonyms are similar words; antonyms are opposite words.",
  "how to create a study plan": "List topics, set deadlines, and track your progress daily.",
  "what is a decimal": "A number that uses a dot to show parts less than 1.",
  "how to be productive during exams": "Avoid multitasking, create a quiet space, and use revision tools like flashcards.",
  "who discovered penicillin": "Alexander Fleming discovered penicillin in 1928.",
  "how do magnets work": "Magnets produce a magnetic field that attracts certain metals like iron.",
  "what are nutrients": "Nutrients are substances in food that help the body grow and stay healthy.",
  "what is the circulatory system": "It’s the system that transports blood throughout the body.",
  "how to stay motivated": "Set goals, visualize success, reward progress, and surround yourself with positivity.",
  "what is the solar system": "The solar system consists of the Sun and everything that orbits it, including planets and moons.",
  "how does a rainbow form": "Rainbows form when light is refracted, reflected, and dispersed in water droplets.",
  "what is osmosis": "Osmosis is the movement of water molecules through a semi-permeable membrane.",
  "how to learn faster": "Use active recall, teach others, and study in short sessions with breaks.",
  "what are the planets in order": "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.",
  "how many hours of sleep for students": "Teens need around 8–10 hours of sleep per night.",
  "what is a simile": "A simile compares two things using 'like' or 'as', e.g., 'as brave as a lion'.",
  "how to take better notes": "Use bullet points, highlight key terms, and write in your own words.",
  "what is the function of the heart": "The heart pumps blood throughout the body, supplying oxygen and nutrients.",
  "how do i build good habits": "Start small, stay consistent, and track your progress.",
  "what is a planet": "A celestial body orbiting a star, massive enough to be rounded by its gravity.",
  "what is punctuation": "Punctuation marks are symbols used to clarify meaning, like periods and commas.",
  "what is a metaphor": "A metaphor compares two things without using 'like' or 'as'.",
  "how do you divide decimals": "Move the decimal point, divide normally, and adjust the answer accordingly.",
  "who was albert einstein": "A theoretical physicist known for the theory of relativity.",
  "how to avoid distractions": "Turn off notifications, create a quiet space, and use focus timers.",
  "how to deal with failure": "Learn from mistakes, don't give up, and keep improving. Everyone fails before they succeed.",
  "i'm confused about my career path": 
  "It's perfectly normal to feel uncertain about your career path, especially in your student years. Start by exploring what genuinely interests you—whether it's coding, design, teaching, research, or entrepreneurship. Reflect on what activities make you feel motivated and fulfilled. Take up internships or small projects to gain hands-on exposure. Talk to mentors, career counselors, or even professionals from industries you're curious about. Remember, it’s okay not to have everything figured out right away. Careers are built step by step, and clarity comes with action.",

"how do i find my passion": 
  "Finding your passion isn’t about waiting for a magical spark—it’s about trying different things and noticing what excites you consistently. Take some time to explore different domains through online courses, clubs, internships, or volunteering. Ask yourself: What kind of problems do I enjoy solving? What type of work would I do even if no one paid me? Passion often emerges at the intersection of skill, interest, and impact. Give yourself the freedom to explore without pressure, and don’t be afraid to pivot.",

"i don't know what job suits me":
  "Choosing a suitable job starts with understanding your strengths, personality, and values. Take a career assessment or aptitude test to identify your natural inclinations. Reflect on your favorite subjects, work environments you thrive in (e.g., team-based vs. solo), and your long-term lifestyle goals. If you're still unsure, look for internships in diverse fields. Trying things out is often the best way to eliminate what doesn’t work and discover what resonates. Also, speak to people already in those roles—they often offer valuable insights.",

"i'm scared of making the wrong career choice":
  "Fear of making the wrong decision is very common, but remember: most career choices are not permanent. Many people switch careers or grow into new roles over time. Instead of aiming for the 'perfect' choice, focus on making the next best decision with the information and resources you have today. Gain experiences, build transferable skills, and stay open to learning. Career success is rarely linear—it's a journey of growth, learning, and adaptation.",

"how do i stay motivated about my career goals":
  "Staying motivated comes from setting clear, meaningful goals and breaking them into smaller, achievable steps. Visualize where you want to be 5 or 10 years from now, and ask yourself why that vision matters to you. Create a routine that supports consistent progress—whether it's learning a new skill, networking, or applying for jobs. When motivation dips, revisit your 'why', celebrate small wins, and talk to someone who inspires you. And most importantly, take care of your mental and physical health—motivation thrives in balance.",

"i want to switch careers, but i'm afraid":
  "Switching careers can feel daunting, but it's never too late if you're ready to commit to learning something new. Start by researching your target field, identifying skill gaps, and gradually building experience through online courses, freelancing, or side projects. Talk to people who’ve made similar transitions—they can help you prepare and stay realistic. The fear you’re feeling is a sign that you're stepping outside your comfort zone, and that’s where growth happens.",

"is it okay to follow an unconventional career":
  "Absolutely! Many successful people built fulfilling lives by following paths that weren’t traditional. The world is evolving, and there’s no one-size-fits-all career anymore. If you’re drawn to art, content creation, gaming, ethical hacking, social impact work, or anything niche, go for it—but do it with a plan. Build a portfolio, learn from people in that field, and make sure you’re solving real problems or adding value. Unconventional careers can be just as (or even more) rewarding when pursued seriously.",

"how do i deal with career pressure from family or society":
  "Family and societal expectations can be overwhelming, especially if they conflict with your true interests. It’s important to communicate respectfully but firmly. Share your career plans with confidence, backed by research and a clear roadmap. Sometimes people just want to know that you're serious and have thought things through. At the same time, remember this is your life. A career built on someone else’s dreams often leads to long-term dissatisfaction. Find a balance, but stay true to yourself.",

"what if i don’t get placed from college":
  "Campus placements aren’t the only gateway to a good career. Many successful professionals didn’t get placed from college but still carved meaningful paths through off-campus jobs, freelancing, internships, or starting small projects. Focus on building real-world skills and a standout portfolio. Attend job fairs, use LinkedIn smartly, and keep learning. Companies are increasingly hiring for potential and practical skill, not just degrees. Stay patient, stay hungry, and keep building your story.",

"how do i choose between passion and practicality":
  "This is a dilemma many face. Ideally, aim for a middle path—start with something practical that sustains you financially while slowly building your passion into a viable career. For instance, work a stable job while freelancing or studying something you love. Over time, you can transition fully once your passion becomes sustainable. Life isn’t either/or—it’s about creating a balance that keeps you fulfilled and secure. Test both waters before making a full leap.",

"how can i find mentors for my career":
  "Mentors can change your career trajectory. Start by looking within your college, workplace, or LinkedIn. Join interest-specific communities or forums and reach out with genuine questions. A simple message like, 'I admire your work in X field, and I’d love to learn more about your journey' can start meaningful conversations. Most professionals are happy to help if approached with respect and curiosity. And remember, mentorship doesn’t have to be formal—learning from someone’s work or content also counts!",

"i feel left behind compared to my peers":
  "It’s hard not to compare, especially in the age of social media, but remember: everyone is on a different timeline. Some bloom early, some later. Focus on your growth, your values, and your journey. Use your energy to upskill, explore new things, or improve your mindset. Life is not a race—it’s a process of becoming the best version of yourself. Celebrate others, but never let their path make you doubt your own.",

"how do i prepare for an interview as a fresher":
  "Start by knowing the basics of your field thoroughly. Review common interview questions and practice your answers out loud. Learn how to introduce yourself confidently. Go through the job description and tailor your resume to match the role. Research the company—understand what they do, their values, and recent updates. Prepare a few questions to ask the interviewer too. And most importantly, don’t fake knowledge—honesty, enthusiasm, and willingness to learn often impress more than perfection.",

"how do i turn my hobby into a career":
  "Turning a hobby into a career is possible, but it takes time, effort, and strategy. First, validate if your hobby solves a problem or adds value to others. Build a portfolio or start sharing your work online. Explore monetization options like freelancing, digital products, or services. Learn about business basics, marketing, and consistency. Many hobbies become careers when they’re pursued with the same seriousness and structure as any other job. It’s not just about talent—it’s about turning passion into purpose."
};
  
  function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim().toLowerCase();
    if (!message) return;
  
    addMessage(message, "user-message");
  
    setTimeout(() => {
      const reply = responses[message] || responses["default"];
      addMessage(reply, "bot-message");
    }, 500);
  
    input.value = "";
  }
  
  function addMessage(text, className) {
    const chatBox = document.getElementById("chat-box");
    const msgDiv = document.createElement("div");
    msgDiv.className = className;
    msgDiv.textContent = text;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  