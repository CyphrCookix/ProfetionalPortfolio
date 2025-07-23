// Translation Data Structure and Management System
// Comprehensive translation object with English and French content for all sections

const translations = {
  en: {
    // Navigation
    nav: {
      portfolio: "Portfolio",
      about: "About",
      skills: "Skills",
      social: "Social",
      contact: "Contact",
      skipToMain: "Skip to main content",
      toggleTheme: "Toggle between light and dark theme",
      selectLanguage: "Select language",
      toggleMobileMenu: "Toggle mobile menu",
      menu: "Menu",
      mainNavigation: "Main navigation",
      mobileNavigationMenu: "Mobile navigation menu",
      languageOptions: "Language options"
    },
    
    // Hero Section
    hero: {
      greeting: "Hello, I'm a",
      title: "Developer",
      description: "I build efficient solutions with Python, automate workflows, develop secure web applications, and protect digital assets.",
      contactBtn: "Contact Me",
      learnBtn: "Learn More"
    },
    
    // About Section
    about: {
      title: "About Me",
      subtitle: "Passionate developer crafting innovative solutions with modern technologies",
      professionalBackground: "Professional Background",
      description1: "I'm a passionate developer with expertise in Python, Java, and web technologies. With over 5 years of experience, I specialize in building scalable applications, automating business processes, and implementing robust security measures.",
      description2: "My journey in tech began with a fascination for problem-solving, which led me to pursue computer science. Since then, I've worked on diverse projects ranging from enterprise automation tools to secure web applications.",
      location: "Location",
      locationValue: "San Francisco, CA",
      email: "Email",
      emailValue: "contact@example.com",
      education: "Education",
      educationValue: "B.Sc. Computer Science",
      experience: "Experience",
      experienceValue: "5+ Years",
      pythonDeveloper: "Python Developer",
      altText: "CyphrCookix - Professional Python Developer and Web Development Specialist"
    },
    
    // Skills Section
    skills: {
      title: "Skills & Expertise",
      subtitle: "Crafting digital solutions with cutting-edge technologies and proven methodologies",
      coreProgramming: "Core Programming",
      coreProgrammingSubtitle: "Languages & Frameworks",
      techStack: "Tech Stack",
      techStackSubtitle: "Tools & Platforms",
      python: "Python",
      java: "Java",
      javascript: "JavaScript",
      webDev: "Web Dev",
      html5: "HTML5",
      css3: "CSS3",
      react: "React",
      nodejs: "Node.js",
      git: "Git",
      docker: "Docker",
      aws: "AWS",
      postgresql: "PostgreSQL",
      downloadResume: "Download Resume",
      downloadResumeDesc: "Get a detailed overview of my experience and skills",
      fullStackDeveloper: "Full Stack Developer",
      pythonSpecialist: "Python Specialist",
      cybersecurityExpert: "Cybersecurity Expert"
    },
    
    // Social Section
    social: {
      title: "Connect & Follow",
      subtitle: "Stay updated with my latest projects, insights, and professional journey across various platforms",
      github: "Code repositories",
      linkedin: "Professional network",
      stackoverflow: "Q&A contributions",
      devto: "Technical articles",
      medium: "Blog posts",
      codepen: "Code experiments",
      hackerrank: "Coding challenges",
      twitter: "Tech discussions",
      totalFollowers: "Total Followers",
      activeRepos: "Active Repos",
      techPosts: "Tech Posts",
      subscribeTitle: "Stay Updated",
      subscribeDesc: "Get notified about new projects, releases, and technical insights",
      emailPlaceholder: "Enter your email address",
      subscribeBtn: "Subscribe",
      subscribing: "Subscribing...",
      subscribeSuccess: "Successfully subscribed! You'll receive updates about new projects and releases.",
      subscribeError: "Please enter a valid email address",
      subscribeErrorEmpty: "Please enter your email address",
      recentActivity: "Recent Activity",
      refreshFeed: "Refresh Feed"
    },
    
    // Contact Section
    contact: {
      title: "Get In Touch",
      subtitle: "Ready to collaborate or have a question? I'd love to hear from you",
      name: "Name",
      namePlaceholder: "Your Name",
      email: "Email",
      emailPlaceholder: "your.email@example.com",
      subject: "Subject",
      subjectPlaceholder: "Project Inquiry",
      message: "Message",
      messagePlaceholder: "Tell me about your project or question...",
      sendMessage: "Send Message",
      sending: "Sending...",
      successMessage: "Message sent successfully! I'll get back to you soon.",
      errorMessage: "Failed to send message. Please try again.",
      directContact: "Direct Contact",
      emailDirect: "Email me directly",
      phoneDirect: "Call me",
      phoneValue: "+1 (555) 123-4567",
      locationDirect: "Visit me",
      responseTime: "Response Time",
      responseTimeValue: "Within 24 hours",
      availability: "Availability",
      availabilityValue: "Open to new projects"
    },
    
    // Footer
    footer: {
      copyright: "© 2024 CyphrCookix. All rights reserved.",
      builtWith: "Built with passion and modern web technologies",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service"
    },
    
    // Language Dropdown
    language: {
      english: "English",
      french: "French",
      englishNative: "English",
      frenchNative: "Français"
    },
    
    // Activity Feed
    activity: {
      projects: "Projects",
      releases: "Releases", 
      research: "Research",
      contributions: "Contributions",
      new: "new",
      updated: "updated",
      completed: "completed"
    },
    
    // Meta Tags
    meta: {
      description: "Professional Python developer specializing in web development, automation, and cybersecurity. View my portfolio showcasing my experience in building scalable applications and secure solutions.",
      keywords: "Python developer, web development, automation, cybersecurity, portfolio, JavaScript, Java, software engineer",
      ogTitle: "CyphrCookix - Portfolio",
      ogDescription: "Professional Python developer specializing in cybersecurity, automation, and webapps. Explore my projects and technical expertise.",
      ogImageAlt: "CyphrCookix Developer Portfolio",
      twitterDescription: "Professional Python developer specializing in web development, automation, and cybersecurity. Explore my projects and technical expertise.",
      twitterImageAlt: "CyphrCookix Developer Portfolio"
    }
  },
  
  fr: {
    // Navigation
    nav: {
      portfolio: "Portfolio",
      about: "À propos",
      skills: "Compétences",
      social: "Social",
      contact: "Contact",
      skipToMain: "Aller au contenu principal",
      toggleTheme: "Basculer entre le thème clair et sombre",
      selectLanguage: "Sélectionner la langue",
      toggleMobileMenu: "Basculer le menu mobile",
      menu: "Menu",
      mainNavigation: "Navigation principale",
      mobileNavigationMenu: "Menu de navigation mobile",
      languageOptions: "Options de langue"
    },
    
    // Hero Section
    hero: {
      greeting: "Bonjour, je suis un",
      title: "Développeur",
      description: "Je crée des solutions efficaces avec Python, automatise les flux de travail, développe des applications web sécurisées et protège les actifs numériques.",
      contactBtn: "Me Contacter",
      learnBtn: "En Savoir Plus"
    },
    
    // About Section
    about: {
      title: "À Propos de Moi",
      subtitle: "Développeur passionné créant des solutions innovantes avec des technologies modernes",
      professionalBackground: "Parcours Professionnel",
      description1: "Je suis un développeur passionné avec une expertise en Python, Java et technologies web. Avec plus de 5 ans d'expérience, je me spécialise dans la création d'applications évolutives, l'automatisation des processus métier et la mise en œuvre de mesures de sécurité robustes.",
      description2: "Mon parcours dans la technologie a commencé par une fascination pour la résolution de problèmes, ce qui m'a amené à poursuivre l'informatique. Depuis, j'ai travaillé sur des projets divers allant des outils d'automatisation d'entreprise aux applications web sécurisées.",
      location: "Localisation",
      locationValue: "San Francisco, CA",
      email: "Email",
      emailValue: "contact@example.com",
      education: "Formation",
      educationValue: "B.Sc. Informatique",
      experience: "Expérience",
      experienceValue: "5+ Années",
      pythonDeveloper: "Développeur Python",
      altText: "CyphrCookix - Développeur Python Professionnel et Spécialiste du Développement Web"
    },
    
    // Skills Section
    skills: {
      title: "Compétences et Expertise",
      subtitle: "Création de solutions numériques avec des technologies de pointe et des méthodologies éprouvées",
      coreProgramming: "Programmation Principale",
      coreProgrammingSubtitle: "Langages et Frameworks",
      techStack: "Stack Technique",
      techStackSubtitle: "Outils et Plateformes",
      python: "Python",
      java: "Java",
      javascript: "JavaScript",
      webDev: "Dév Web",
      html5: "HTML5",
      css3: "CSS3",
      react: "React",
      nodejs: "Node.js",
      git: "Git",
      docker: "Docker",
      aws: "AWS",
      postgresql: "PostgreSQL",
      downloadResume: "Télécharger le CV",
      downloadResumeDesc: "Obtenez un aperçu détaillé de mon expérience et de mes compétences",
      fullStackDeveloper: "Développeur Full Stack",
      pythonSpecialist: "Spécialiste Python",
      cybersecurityExpert: "Expert en Cybersécurité"
    },
    
    // Social Section
    social: {
      title: "Se Connecter et Suivre",
      subtitle: "Restez informé de mes derniers projets, insights et parcours professionnel sur diverses plateformes",
      github: "Dépôts de code",
      linkedin: "Réseau professionnel",
      stackoverflow: "Contributions Q&R",
      devto: "Articles techniques",
      medium: "Articles de blog",
      codepen: "Expériences de code",
      hackerrank: "Défis de codage",
      twitter: "Discussions tech",
      totalFollowers: "Total Abonnés",
      activeRepos: "Dépôts Actifs",
      techPosts: "Articles Tech",
      subscribeTitle: "Rester Informé",
      subscribeDesc: "Soyez notifié des nouveaux projets, versions et insights techniques",
      emailPlaceholder: "Entrez votre adresse email",
      subscribeBtn: "S'abonner",
      subscribing: "Abonnement...",
      subscribeSuccess: "Abonnement réussi ! Vous recevrez des mises à jour sur les nouveaux projets et versions.",
      subscribeError: "Veuillez entrer une adresse email valide",
      subscribeErrorEmpty: "Veuillez entrer votre adresse email",
      recentActivity: "Activité Récente",
      refreshFeed: "Actualiser le Flux"
    },
    
    // Contact Section
    contact: {
      title: "Entrer en Contact",
      subtitle: "Prêt à collaborer ou avez-vous une question ? J'aimerais avoir de vos nouvelles",
      name: "Nom",
      namePlaceholder: "Votre Nom",
      email: "Email",
      emailPlaceholder: "votre.email@exemple.com",
      subject: "Sujet",
      subjectPlaceholder: "Demande de Projet",
      message: "Message",
      messagePlaceholder: "Parlez-moi de votre projet ou question...",
      sendMessage: "Envoyer le Message",
      sending: "Envoi...",
      successMessage: "Message envoyé avec succès ! Je vous répondrai bientôt.",
      errorMessage: "Échec de l'envoi du message. Veuillez réessayer.",
      directContact: "Contact Direct",
      emailDirect: "M'envoyer un email directement",
      phoneDirect: "M'appeler",
      phoneValue: "+1 (555) 123-4567",
      locationDirect: "Me rendre visite",
      responseTime: "Temps de Réponse",
      responseTimeValue: "Dans les 24 heures",
      availability: "Disponibilité",
      availabilityValue: "Ouvert aux nouveaux projets"
    },
    
    // Footer
    footer: {
      copyright: "© 2024 CyphrCookix. Tous droits réservés.",
      builtWith: "Construit avec passion et technologies web modernes",
      privacyPolicy: "Politique de Confidentialité",
      termsOfService: "Conditions d'Utilisation"
    },
    
    // Language Dropdown
    language: {
      english: "Anglais",
      french: "Français",
      englishNative: "English",
      frenchNative: "Français"
    },
    
    // Activity Feed
    activity: {
      projects: "Projets",
      releases: "Versions",
      research: "Recherche",
      contributions: "Contributions",
      new: "nouveau",
      updated: "mis à jour",
      completed: "terminé"
    },
    
    // Meta Tags
    meta: {
      description: "Développeur Python professionnel spécialisé dans le développement web, l'automatisation et la cybersécurité. Consultez mon portfolio présentant mon expérience dans la création d'applications évolutives et de solutions sécurisées.",
      keywords: "développeur Python, développement web, automatisation, cybersécurité, portfolio, JavaScript, Java, ingénieur logiciel",
      ogTitle: "CyphrCookix - Portfolio",
      ogDescription: "Développeur Python professionnel spécialisé en cybersécurité, automatisation et applications web. Explorez mes projets et expertise technique.",
      ogImageAlt: "Portfolio Développeur CyphrCookix",
      twitterDescription: "Développeur Python professionnel spécialisé dans le développement web, l'automatisation et la cybersécurité. Explorez mes projets et expertise technique.",
      twitterImageAlt: "Portfolio Développeur CyphrCookix"
    }
  }
};

/**
 * Translation Engine Class
 * Handles key lookup, fallback mechanisms, and content replacement
 */
class TranslationEngine {
  constructor() {
    this.currentLanguage = 'en';
    this.translations = translations;
    this.fallbackLanguage = 'en';
    this.isLoading = false;
    this.observers = [];
    
    // Initialize from localStorage if available
    this.initializeLanguage();
  }
  
  /**
   * Initialize language from localStorage or default to English
   */
  initializeLanguage() {
    try {
      const savedLanguage = localStorage.getItem('preferredLanguage');
      if (savedLanguage && this.translations[savedLanguage]) {
        this.currentLanguage = savedLanguage;
      }
    } catch (error) {
      console.warn('Failed to load language preference from localStorage:', error);
      this.currentLanguage = this.fallbackLanguage;
    }
  }
  
  /**
   * Get nested value from object using dot notation
   * @param {Object} obj - The object to search in
   * @param {string} path - The dot-notation path (e.g., 'nav.about')
   * @returns {string|null} - The found value or null
   */
  getNestedValue(obj, path) {
    try {
      return path.split('.').reduce((current, key) => {
        return current && current[key] !== undefined ? current[key] : null;
      }, obj);
    } catch (error) {
      console.warn(`Error accessing nested value for path "${path}":`, error);
      return null;
    }
  }
  
  /**
   * Translate a key with fallback mechanism
   * @param {string} key - The translation key in dot notation
   * @param {string} language - Optional language override
   * @returns {string} - The translated text or fallback
   */
  translate(key, language = this.currentLanguage) {
    try {
      // Try to get translation in requested language
      let translation = this.getNestedValue(this.translations[language], key);
      
      // If not found and not using fallback language, try fallback
      if (translation === null && language !== this.fallbackLanguage) {
        translation = this.getNestedValue(this.translations[this.fallbackLanguage], key);
        
        if (translation !== null) {
          console.warn(`Translation key "${key}" not found in "${language}", using fallback "${this.fallbackLanguage}"`);
        }
      }
      
      // If still not found, return the key itself as last resort
      if (translation === null) {
        console.error(`Translation key "${key}" not found in any language`);
        return key;
      }
      
      return translation;
    } catch (error) {
      console.error(`Error translating key "${key}":`, error);
      return key;
    }
  }
  
  /**
   * Get current language
   * @returns {string} - Current language code
   */
  getCurrentLanguage() {
    return this.currentLanguage;
  }
  
  /**
   * Get available languages
   * @returns {Array} - Array of available language codes
   */
  getAvailableLanguages() {
    return Object.keys(this.translations);
  }
  
  /**
   * Check if a language is supported
   * @param {string} language - Language code to check
   * @returns {boolean} - Whether the language is supported
   */
  isLanguageSupported(language) {
    return this.translations.hasOwnProperty(language);
  }
  
  /**
   * Save language preference to localStorage
   * @param {string} language - Language code to save
   */
  saveLanguagePreference(language) {
    try {
      localStorage.setItem('preferredLanguage', language);
    } catch (error) {
      console.warn('Failed to save language preference to localStorage:', error);
    }
  }
  
  /**
   * Change language with smooth transition
   * @param {string} newLanguage - The new language code
   * @returns {Promise} - Promise that resolves when transition is complete
   */
  async changeLanguage(newLanguage) {
    if (!this.isLanguageSupported(newLanguage)) {
      throw new Error(`Language "${newLanguage}" is not supported`);
    }
    
    if (newLanguage === this.currentLanguage) {
      return; // No change needed
    }
    
    if (this.isLoading) {
      throw new Error('Language change already in progress');
    }
    
    try {
      this.isLoading = true;
      
      // Fade out content
      await this.fadeOutContent();
      
      // Update language
      this.currentLanguage = newLanguage;
      
      // Save preference
      this.saveLanguagePreference(newLanguage);
      
      // Update all content
      this.updateAllContent();
      
      // Update HTML lang attribute
      document.documentElement.lang = newLanguage;
      
      // Fade in content
      await this.fadeInContent();
      
      // Notify observers
      this.notifyObservers(newLanguage);
      
      // Announce language change for screen readers
      this.announceLanguageChange(newLanguage);
      
    } catch (error) {
      console.error('Error changing language:', error);
      throw error;
    } finally {
      this.isLoading = false;
    }
  }
  
  /**
   * Fade out content with smooth animation
   * @returns {Promise} - Promise that resolves when fade out is complete
   */
  fadeOutContent() {
    return new Promise((resolve) => {
      const elements = document.querySelectorAll('[data-translate], [data-translate-attr]');
      
      elements.forEach(element => {
        element.classList.add('content-fade-out');
      });
      
      // Wait for animation to complete
      setTimeout(resolve, 300);
    });
  }
  
  /**
   * Fade in content with smooth animation
   * @returns {Promise} - Promise that resolves when fade in is complete
   */
  fadeInContent() {
    return new Promise((resolve) => {
      const elements = document.querySelectorAll('[data-translate], [data-translate-attr]');
      
      elements.forEach(element => {
        element.classList.remove('content-fade-out');
        element.classList.add('content-fade-in');
      });
      
      // Remove fade-in class after animation
      setTimeout(() => {
        elements.forEach(element => {
          element.classList.remove('content-fade-in');
        });
        resolve();
      }, 400);
    });
  }
  
  /**
   * Update all translatable content on the page
   */
  updateAllContent() {
    // Update text content
    const textElements = document.querySelectorAll('[data-translate]');
    textElements.forEach(element => {
      const key = element.getAttribute('data-translate');
      if (key) {
        element.textContent = this.translate(key);
      }
    });
    
    // Update attributes (placeholder, aria-label, title, etc.)
    const attrElements = document.querySelectorAll('[data-translate-attr]');
    attrElements.forEach(element => {
      const attrData = element.getAttribute('data-translate-attr');
      if (attrData) {
        try {
          const attrMap = JSON.parse(attrData);
          Object.entries(attrMap).forEach(([attr, key]) => {
            element.setAttribute(attr, this.translate(key));
          });
        } catch (error) {
          console.warn('Invalid data-translate-attr format:', attrData, error);
        }
      }
    });
    
    // Update meta tags
    this.updateMetaTags();
  }
  
  /**
   * Update meta tags for SEO
   */
  updateMetaTags() {
    const metaUpdates = [
      { selector: 'meta[name="description"]', attr: 'content', key: 'meta.description' },
      { selector: 'meta[name="keywords"]', attr: 'content', key: 'meta.keywords' },
      { selector: 'meta[property="og:title"]', attr: 'content', key: 'meta.ogTitle' },
      { selector: 'meta[property="og:description"]', attr: 'content', key: 'meta.ogDescription' },
      { selector: 'meta[property="og:image:alt"]', attr: 'content', key: 'meta.ogImageAlt' },
      { selector: 'meta[name="twitter:description"]', attr: 'content', key: 'meta.twitterDescription' },
      { selector: 'meta[name="twitter:image:alt"]', attr: 'content', key: 'meta.twitterImageAlt' }
    ];
    
    metaUpdates.forEach(({ selector, attr, key }) => {
      const element = document.querySelector(selector);
      if (element) {
        element.setAttribute(attr, this.translate(key));
      }
    });
    
    // Update locale meta tag
    const localeElement = document.querySelector('meta[property="og:locale"]');
    if (localeElement) {
      const localeMap = { en: 'en_US', fr: 'fr_FR' };
      localeElement.setAttribute('content', localeMap[this.currentLanguage] || 'en_US');
    }
  }
  
  /**
   * Add observer for language changes
   * @param {Function} callback - Callback function to call on language change
   */
  addObserver(callback) {
    if (typeof callback === 'function') {
      this.observers.push(callback);
    }
  }
  
  /**
   * Remove observer
   * @param {Function} callback - Callback function to remove
   */
  removeObserver(callback) {
    this.observers = this.observers.filter(obs => obs !== callback);
  }
  
  /**
   * Notify all observers of language change
   * @param {string} newLanguage - The new language code
   */
  notifyObservers(newLanguage) {
    this.observers.forEach(callback => {
      try {
        callback(newLanguage);
      } catch (error) {
        console.warn('Error in language change observer:', error);
      }
    });
  }
  
  /**
   * Announce language change for screen readers
   * @param {string} newLanguage - The new language code
   */
  announceLanguageChange(newLanguage) {
    const languageNames = {
      en: 'English',
      fr: 'French'
    };
    
    const announcement = `Language changed to ${languageNames[newLanguage] || newLanguage}`;
    
    // Create temporary announcement element
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    announcer.textContent = announcement;
    
    document.body.appendChild(announcer);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcer);
    }, 1000);
  }
  
  /**
   * Get loading state
   * @returns {boolean} - Whether a language change is in progress
   */
  isLoading() {
    return this.isLoading;
  }
  
  /**
   * Initialize translation system on page load
   */
  initialize() {
    // Update content with current language
    this.updateAllContent();
    
    // Set up mutation observer for dynamic content
    this.setupMutationObserver();
  }
  
  /**
   * Set up mutation observer to handle dynamically added content
   */
  setupMutationObserver() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            // Check if the added node or its children have translation attributes
            const translatableElements = node.querySelectorAll ? 
              node.querySelectorAll('[data-translate], [data-translate-attr]') : [];
            
            if (node.hasAttribute && (node.hasAttribute('data-translate') || node.hasAttribute('data-translate-attr'))) {
              translatableElements.push(node);
            }
            
            // Translate new elements
            translatableElements.forEach(element => {
              if (element.hasAttribute('data-translate')) {
                const key = element.getAttribute('data-translate');
                element.textContent = this.translate(key);
              }
              
              if (element.hasAttribute('data-translate-attr')) {
                const attrData = element.getAttribute('data-translate-attr');
                try {
                  const attrMap = JSON.parse(attrData);
                  Object.entries(attrMap).forEach(([attr, key]) => {
                    element.setAttribute(attr, this.translate(key));
                  });
                } catch (error) {
                  console.warn('Invalid data-translate-attr format:', attrData, error);
                }
              }
            });
          }
        });
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
}

// Create global translation engine instance
const translationEngine = new TranslationEngine();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TranslationEngine, translationEngine, translations };
}