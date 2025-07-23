// Enhanced Theme Toggle System
const themeToggle = document.getElementById('themeToggle');
const themeCheckbox = themeToggle.querySelector('input[type="checkbox"]');
const html = document.documentElement;

// Animation state management
let isAnimating = false;

function toggleTheme() {
  if (isAnimating) return; // Prevent rapid clicking
  
  isAnimating = true;
  
  // Toggle theme classes
  const isDarkMode = html.classList.contains('dark');
  
  if (isDarkMode) {
    html.classList.remove('dark');
    html.classList.add('light');
    themeCheckbox.checked = false;
  } else {
    html.classList.remove('light');
    html.classList.add('dark');
    themeCheckbox.checked = true;
  }
  
  // Save theme preference
  localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
  
  // Reset animation state after transition
  setTimeout(() => {
    isAnimating = false;
  }, 300);
}

// Click event handler
themeToggle.addEventListener('click', (e) => {
  e.preventDefault();
  toggleTheme();
});

// Keyboard event handler for accessibility
themeToggle.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleTheme();
  }
});

// Initialize theme from localStorage
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'light') {
    html.classList.remove('dark');
    html.classList.add('light');
    themeCheckbox.checked = false;
  } else {
    // Default to dark theme
    html.classList.add('dark');
    html.classList.remove('light');
    themeCheckbox.checked = true;
  }
  
  // Add loaded animation
  setTimeout(() => {
    themeToggle.classList.add('loaded');
  }, 100);
}

// Initialize theme on page load
initializeTheme();

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuButton.addEventListener('click', () => {
  const isHidden = mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden');

  // Update ARIA attributes for accessibility
  mobileMenuButton.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenuButton.setAttribute('aria-expanded', 'false');
  });
});

// Close mobile menu when pressing Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
    mobileMenuButton.setAttribute('aria-expanded', 'false');
    mobileMenuButton.focus();
  }
});

// Animate skill bars when they come into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillBars = entry.target.querySelectorAll('.skill-bar');
      skillBars.forEach(bar => {
        // Trigger the animation by setting the width again
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      });
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('#skills').forEach(section => {
  observer.observe(section);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

let vantaEffect = null;

function setVantaBackground(theme) {
  if (vantaEffect) {
    vantaEffect.destroy();
    vantaEffect = null;
  }
  if (window.VANTA && window.VANTA.GLOBE) {
    if (theme === 'dark') {
      vantaEffect = VANTA.GLOBE({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x8f68f5,
        backgroundColor: 0x0f0a34
      });
    } else {
      vantaEffect = VANTA.GLOBE({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x4f39cd,
        color2: 0xd0d5c,
        backgroundColor: 0xdddde6
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const theme = html.classList.contains('dark') ? 'dark' : 'light';
  setVantaBackground(theme);
});

// Update Vanta background when theme changes
function updateVantaBackground() {
  const theme = html.classList.contains('dark') ? 'dark' : 'light';
  setTimeout(() => setVantaBackground(theme), 10);
}

// Integrate Vanta update with theme toggle
const originalToggleTheme = toggleTheme;
toggleTheme = function() {
  originalToggleTheme();
  updateVantaBackground();
};

// Dynamic Social Media Integration
const socialMediaData = {
  github: {
    platform: 'GitHub',
    username: 'username',
    url: 'https://github.com',
    icon: 'fab fa-github',
    color: 'gray',
    description: 'Code repositories',
    followers: 1200,
    repos: 45,
    recentActivity: '3 commits today'
  },
  linkedin: {
    platform: 'LinkedIn',
    username: 'username',
    url: 'https://linkedin.com',
    icon: 'fab fa-linkedin-in',
    color: 'blue',
    description: 'Professional network',
    followers: 850,
    connections: 500,
    recentActivity: 'Posted 2 days ago'
  },
  stackoverflow: {
    platform: 'Stack Overflow',
    username: 'username',
    url: 'https://stackoverflow.com',
    icon: 'fab fa-stack-overflow',
    color: 'orange',
    description: 'Q&A contributions',
    reputation: 2500,
    answers: 45,
    recentActivity: 'Answered yesterday'
  },
  devto: {
    platform: 'Dev.to',
    username: 'username',
    url: 'https://dev.to',
    icon: 'fab fa-dev',
    color: 'gray',
    description: 'Technical articles',
    followers: 320,
    posts: 12,
    recentActivity: 'Published 3 days ago'
  },
  medium: {
    platform: 'Medium',
    username: 'username',
    url: 'https://medium.com',
    icon: 'fab fa-medium',
    color: 'gray',
    description: 'Blog posts',
    followers: 180,
    posts: 8,
    recentActivity: 'Published 1 week ago'
  },
  codepen: {
    platform: 'CodePen',
    username: 'username',
    url: 'https://codepen.io',
    icon: 'fab fa-codepen',
    color: 'gray',
    description: 'Code experiments',
    followers: 95,
    pens: 23,
    recentActivity: 'Created 5 days ago'
  },
  hackerrank: {
    platform: 'HackerRank',
    username: 'username',
    url: 'https://hackerrank.com',
    icon: 'fab fa-hackerrank',
    color: 'green',
    description: 'Coding challenges',
    rank: 'Gold',
    badges: 15,
    recentActivity: 'Solved yesterday'
  },
  twitter: {
    platform: 'Twitter',
    username: 'username',
    url: 'https://twitter.com',
    icon: 'fab fa-twitter',
    color: 'blue',
    description: 'Tech discussions',
    followers: 420,
    tweets: 156,
    recentActivity: 'Tweeted 1 hour ago'
  }
};

// Function to get color classes based on platform
function getColorClasses(color) {
  const colorMap = {
    gray: {
      bg: 'bg-gray-200 dark:bg-dark-600',
      hover: 'group-hover:bg-gray-300 dark:group-hover:bg-dark-500',
      text: 'text-gray-800 dark:text-gray-200'
    },
    blue: {
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      hover: 'group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30',
      text: 'text-blue-500 dark:text-blue-400'
    },
    orange: {
      bg: 'bg-orange-100 dark:bg-orange-900/30',
      hover: 'group-hover:bg-orange-200 dark:group-hover:bg-orange-800/30',
      text: 'text-orange-500 dark:text-orange-400'
    },
    green: {
      bg: 'bg-green-100 dark:bg-green-900/30',
      hover: 'group-hover:bg-green-200 dark:group-hover:bg-green-800/30',
      text: 'text-green-500 dark:text-green-400'
    }
  };
  return colorMap[color] || colorMap.gray;
}

// Function to create social media card
function createSocialCard(platform, data) {
  const colors = getColorClasses(data.color);

  return `
        <a href="${data.url}" target="_blank" class="group social-card" data-platform="${platform}">
            <div class="bg-gray-50 dark:bg-dark-700 p-8 rounded-xl shadow-md text-center card-hover transition-transform">
                <div class="w-20 h-20 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-6 ${colors.hover} transition-colors">
                    <i class="${data.icon} text-3xl ${colors.text}"></i>
                </div>
                <h3 class="text-xl font-bold mb-2 dark:text-white text-gray-900">${data.platform}</h3>
                <p class="dark:text-gray-400 text-gray-600 mb-4">${data.description}</p>
                <span class="text-blue-500 dark:text-blue-400 font-medium">@${data.username}</span>
                <div class="mt-3 text-sm text-gray-500 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div class="social-stats">
                        ${platform === 'github' ? `<span>${data.repos} repos</span>` : ''}
                        ${platform === 'linkedin' ? `<span>${data.connections}+ connections</span>` : ''}
                        ${platform === 'stackoverflow' ? `<span>${data.reputation} reputation</span>` : ''}
                        ${platform === 'hackerrank' ? `<span>${data.rank} rank</span>` : ''}
                        ${data.followers ? `<span>${data.followers} followers</span>` : ''}
                    </div>
                </div>
            </div>
        </a>
    `;
}

// Function to update social stats
function updateSocialStats() {
  const totalFollowers = Object.values(socialMediaData).reduce((sum, data) => sum + (data.followers || 0), 0);
  const totalRepos = socialMediaData.github.repos;
  const totalPosts = Object.values(socialMediaData).reduce((sum, data) => sum + (data.posts || 0), 0);

  // Update stats with animation
  setTimeout(() => {
    const followersEl = document.getElementById('total-followers');
    const reposEl = document.getElementById('total-repos');
    const postsEl = document.getElementById('total-posts');

    if (followersEl) followersEl.innerHTML = `${(totalFollowers / 1000).toFixed(1)}K+`;
    if (reposEl) reposEl.innerHTML = `${totalRepos}+`;
    if (postsEl) postsEl.innerHTML = `${totalPosts}+`;
  }, 500);
}

// Function to load social media cards
function loadSocialMediaCards() {
  const container = document.getElementById('social-links-container');
  if (!container) return;

  let cardsHTML = '';
  Object.entries(socialMediaData).forEach(([platform, data]) => {
    cardsHTML += createSocialCard(platform, data);
  });

  container.innerHTML = cardsHTML;

  // Add click tracking
  container.querySelectorAll('.social-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const platform = card.dataset.platform;
      console.log(`Clicked on ${platform} social link`);
    });
  });
}

// Function to simulate real-time updates
function simulateRealTimeUpdates() {
  setInterval(() => {
    // Simulate follower growth
    Object.keys(socialMediaData).forEach(platform => {
      if (socialMediaData[platform].followers) {
        const growth = Math.floor(Math.random() * 3); // 0-2 new followers
        socialMediaData[platform].followers += growth;
      }
    });

    // Update display
    updateSocialStats();
  }, 30000); // Update every 30 seconds
}

// Add hover effects for social cards
document.addEventListener('mouseover', function (e) {
  if (e.target.closest('.social-card')) {
    const card = e.target.closest('.social-card');
    card.style.transform = 'translateY(-8px) scale(1.02)';
  }
});

document.addEventListener('mouseout', function (e) {
  if (e.target.closest('.social-card')) {
    const card = e.target.closest('.social-card');
    card.style.transform = 'translateY(0) scale(1)';
  }
});

// Dynamic Activity Feed Integration
const activityData = {
  projects: [
    { title: "AI-Powered Task Automation", type: "project", date: "2 hours ago", status: "updated", icon: "fas fa-robot", color: "blue" },
    { title: "Secure Web API Framework", type: "project", date: "5 hours ago", status: "new", icon: "fas fa-shield-alt", color: "green" },
    { title: "Python Data Analysis Tool", type: "project", date: "1 day ago", status: "updated", icon: "fab fa-python", color: "blue" },
    { title: "Cybersecurity Scanner", type: "project", date: "2 days ago", status: "completed", icon: "fas fa-search", color: "purple" }
  ],
  releases: [
    { title: "TaskBot v2.1.0", type: "release", date: "3 hours ago", description: "Added ML-based priority detection", icon: "fas fa-tag", color: "green" },
    { title: "SecureAPI v1.5.2", type: "release", date: "1 day ago", description: "Security patches and performance improvements", icon: "fas fa-code-branch", color: "orange" },
    { title: "DataViz v3.0.0", type: "release", date: "3 days ago", description: "Major UI overhaul with dark mode support", icon: "fas fa-chart-bar", color: "blue" }
  ],
  research: [
    { title: "Machine Learning in Cybersecurity", type: "research", date: "4 hours ago", description: "Published findings on anomaly detection", icon: "fas fa-microscope", color: "purple" },
    { title: "Automated Testing Strategies", type: "research", date: "2 days ago", description: "Comparative analysis of testing frameworks", icon: "fas fa-flask", color: "green" },
    { title: "Web Performance Optimization", type: "research", date: "1 week ago", description: "Study on modern bundling techniques", icon: "fas fa-tachometer-alt", color: "blue" }
  ],
  contributions: [
    { title: "Fixed critical bug in Django REST", type: "contribution", date: "1 hour ago", repo: "django/django-rest-framework", icon: "fab fa-github", color: "gray" },
    { title: "Added TypeScript definitions", type: "contribution", date: "6 hours ago", repo: "microsoft/vscode", icon: "fab fa-microsoft", color: "blue" },
    { title: "Performance optimization PR", type: "contribution", date: "12 hours ago", repo: "facebook/react", icon: "fab fa-react", color: "cyan" },
    { title: "Documentation improvements", type: "contribution", date: "1 day ago", repo: "python/cpython", icon: "fab fa-python", color: "yellow" }
  ]
};

// Function to create activity item
function createActivityItem(item) {
  const colorClasses = {
    blue: 'text-blue-500 dark:text-blue-400',
    green: 'text-green-500 dark:text-green-400',
    purple: 'text-purple-500 dark:text-purple-400',
    orange: 'text-orange-500 dark:text-orange-400',
    gray: 'text-gray-500 dark:text-gray-400',
    cyan: 'text-cyan-500 dark:text-cyan-400',
    yellow: 'text-yellow-500 dark:text-yellow-400'
  };

  const statusBadges = {
    new: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    updated: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    completed: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
  };

  return `
        <div class="flex items-start space-x-4 p-4 bg-white dark:bg-dark-800 rounded-lg border border-gray-200 dark:border-dark-600 hover:shadow-md transition-shadow">
            <div class="flex-shrink-0">
                <div class="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-600 flex items-center justify-center">
                    <i class="${item.icon} ${colorClasses[item.color] || colorClasses.blue}"></i>
                </div>
            </div>
            <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between">
                    <h4 class="text-sm font-medium dark:text-white text-gray-900 truncate">${item.title}</h4>
                    ${item.status ? `<span class="px-2 py-1 text-xs rounded-full ${statusBadges[item.status] || ''}">${item.status}</span>` : ''}
                </div>
                ${item.description ? `<p class="text-sm text-gray-600 dark:text-gray-400 mt-1">${item.description}</p>` : ''}
                ${item.repo ? `<p class="text-sm text-gray-500 dark:text-gray-500 mt-1"><i class="fab fa-github mr-1"></i>${item.repo}</p>` : ''}
                <p class="text-xs text-gray-500 dark:text-gray-500 mt-2">${item.date}</p>
            </div>
        </div>
    `;
}

// Function to load activity feed
function loadActivityFeed() {
  const feedContainer = document.getElementById('activity-feed');
  if (!feedContainer) return;

  // Combine all activities and sort by recency (simulate with random order for demo)
  const allActivities = [
    ...activityData.projects,
    ...activityData.releases,
    ...activityData.research,
    ...activityData.contributions
  ].sort(() => Math.random() - 0.5).slice(0, 8); // Show latest 8 items

  feedContainer.innerHTML = allActivities.map(item => createActivityItem(item)).join('');
}

// Function to update activity stats
function updateActivityStats() {
  const stats = {
    projects: activityData.projects.length,
    releases: activityData.releases.length,
    research: activityData.research.length,
    contributions: activityData.contributions.length
  };

  // Update counters with animation
  Object.entries(stats).forEach(([key, value]) => {
    const element = document.getElementById(`${key === 'projects' ? 'project' : key === 'releases' ? 'release' : key === 'research' ? 'research' : 'contribution'}-count`);
    if (element) {
      animateCounter(element, value);
    }
  });
}

// Function to animate counter
function animateCounter(element, targetValue) {
  const startValue = 0;
  const duration = 1000;
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const currentValue = Math.floor(startValue + (targetValue - startValue) * progress);

    element.textContent = currentValue;

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }

  requestAnimationFrame(updateCounter);
}

// Function to handle subscription
function handleSubscription() {
  const emailInput = document.getElementById('update-email');
  const subscribeBtn = document.getElementById('subscribe-btn');

  if (!emailInput || !subscribeBtn) return;

  subscribeBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();

    if (!email) {
      showSubscriptionMessage('Please enter your email address', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showSubscriptionMessage('Please enter a valid email address', 'error');
      return;
    }

    // Simulate subscription (in real app, this would be an API call)
    subscribeBtn.textContent = 'Subscribing...';
    subscribeBtn.disabled = true;

    setTimeout(() => {
      showSubscriptionMessage('Successfully subscribed! You\'ll receive updates about new projects and releases.', 'success');
      emailInput.value = '';
      subscribeBtn.textContent = 'Subscribe';
      subscribeBtn.disabled = false;
    }, 1500);
  });
}

// Function to validate email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to show subscription message
function showSubscriptionMessage(message, type) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `mt-3 p-3 rounded-lg text-sm ${type === 'success'
    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
    }`;
  messageDiv.textContent = message;

  const subscribeSection = document.getElementById('subscribe-btn').parentElement.parentElement;
  subscribeSection.appendChild(messageDiv);

  setTimeout(() => {
    subscribeSection.removeChild(messageDiv);
  }, 5000);
}

// Function to handle refresh feed
function handleRefreshFeed() {
  const refreshBtn = document.getElementById('refresh-feed');
  if (!refreshBtn) return;

  refreshBtn.addEventListener('click', () => {
    const icon = refreshBtn.querySelector('i');
    icon.classList.add('fa-spin');

    setTimeout(() => {
      loadActivityFeed();
      icon.classList.remove('fa-spin');
    }, 1000);
  });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Load social media cards (if container exists)
  if (document.getElementById('social-links-container')) {
    loadSocialMediaCards();
    updateSocialStats();
    simulateRealTimeUpdates();
  }

  // Load activity feed (if container exists)
  if (document.getElementById('activity-feed')) {
    loadActivityFeed();
    updateActivityStats();
  }

  // Set up event handlers
  handleSubscription();
  handleRefreshFeed();
});
// ===== LANGUAGE DROPDOWN AND TRANSLATION SYSTEM INTEGRATION =====

// Language Dropdown Management
class LanguageDropdown {
  constructor() {
    this.dropdown = document.getElementById('languageDropdown');
    this.button = document.getElementById('languageButton');
    this.menu = document.getElementById('languageMenu');
    this.currentFlag = document.getElementById('currentFlag');
    this.currentLang = document.getElementById('currentLang');
    this.options = document.querySelectorAll('.language-option');
    
    this.isOpen = false;
    this.isAnimating = false;
    
    this.init();
  }
  
  init() {
    if (!this.dropdown || !this.button || !this.menu) {
      console.warn('Language dropdown elements not found');
      return;
    }
    
    this.setupEventListeners();
    this.updateCurrentLanguageDisplay();
    
    // Listen for translation engine language changes
    if (typeof translationEngine !== 'undefined') {
      translationEngine.addObserver((newLanguage) => {
        this.updateCurrentLanguageDisplay(newLanguage);
        this.updateSelectedOption(newLanguage);
      });
    }
  }
  
  setupEventListeners() {
    // Button click handler
    this.button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.toggle();
    });
    
    // Keyboard navigation for button
    this.button.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.toggle();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        this.open();
        this.focusFirstOption();
      }
    });
    
    // Option click handlers
    this.options.forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const lang = option.getAttribute('data-lang');
        this.selectLanguage(lang);
      });
      
      // Keyboard navigation for options
      option.addEventListener('keydown', (e) => {
        this.handleOptionKeydown(e, option);
      });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.dropdown.contains(e.target)) {
        this.close();
      }
    });
    
    // Close dropdown on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
        this.button.focus();
      }
    });
  }
  
  toggle() {
    if (this.isAnimating) return;
    
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
  
  async open() {
    if (this.isOpen || this.isAnimating) return;
    
    this.isAnimating = true;
    this.isOpen = true;
    
    // Update ARIA attributes
    this.button.setAttribute('aria-expanded', 'true');
    this.dropdown.classList.add('open');
    
    // Show menu with animation
    this.menu.classList.remove('opacity-0', 'invisible');
    this.menu.classList.add('open');
    
    // Add backdrop for mobile
    if (window.innerWidth <= 767) {
      this.addMobileBackdrop();
    }
    
    // Wait for animation to complete
    await new Promise(resolve => setTimeout(resolve, 300));
    this.isAnimating = false;
  }
  
  async close() {
    if (!this.isOpen || this.isAnimating) return;
    
    this.isAnimating = true;
    this.isOpen = false;
    
    // Update ARIA attributes
    this.button.setAttribute('aria-expanded', 'false');
    this.dropdown.classList.remove('open');
    
    // Hide menu with animation
    this.menu.classList.add('closing');
    
    // Remove mobile backdrop
    this.removeMobileBackdrop();
    
    // Wait for animation to complete
    await new Promise(resolve => setTimeout(resolve, 200));
    
    this.menu.classList.remove('open', 'closing');
    this.menu.classList.add('opacity-0', 'invisible');
    this.isAnimating = false;
  }
  
  addMobileBackdrop() {
    if (document.querySelector('.language-dropdown-backdrop')) return;
    
    const backdrop = document.createElement('div');
    backdrop.className = 'language-dropdown-backdrop';
    backdrop.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.1);
      z-index: 40;
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(2px);
    `;
    
    backdrop.addEventListener('click', () => this.close());
    document.body.appendChild(backdrop);
  }
  
  removeMobileBackdrop() {
    const backdrop = document.querySelector('.language-dropdown-backdrop');
    if (backdrop) {
      backdrop.remove();
    }
  }
  
  focusFirstOption() {
    const firstOption = this.menu.querySelector('.language-option');
    if (firstOption) {
      firstOption.focus();
    }
  }
  
  handleOptionKeydown(e, option) {
    const options = Array.from(this.options);
    const currentIndex = options.indexOf(option);
    
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        const lang = option.getAttribute('data-lang');
        this.selectLanguage(lang);
        break;
        
      case 'ArrowDown':
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % options.length;
        options[nextIndex].focus();
        break;
        
      case 'ArrowUp':
        e.preventDefault();
        const prevIndex = currentIndex === 0 ? options.length - 1 : currentIndex - 1;
        options[prevIndex].focus();
        break;
        
      case 'Escape':
        e.preventDefault();
        this.close();
        this.button.focus();
        break;
        
      case 'Tab':
        // Allow normal tab behavior but close dropdown
        this.close();
        break;
    }
  }
  
  async selectLanguage(lang) {
    if (!lang || this.isAnimating) return;
    
    try {
      // Add loading state
      this.dropdown.classList.add('loading');
      
      // Change language using translation engine
      if (typeof translationEngine !== 'undefined') {
        await translationEngine.changeLanguage(lang);
      }
      
      // Update UI
      this.updateCurrentLanguageDisplay(lang);
      this.updateSelectedOption(lang);
      
      // Show success indicator
      this.showLanguageChangeSuccess(lang);
      
      // Close dropdown
      await this.close();
      
    } catch (error) {
      console.error('Error changing language:', error);
      this.showLanguageChangeError();
    } finally {
      this.dropdown.classList.remove('loading');
    }
  }
  
  updateCurrentLanguageDisplay(lang) {
    const currentLang = lang || (typeof translationEngine !== 'undefined' ? translationEngine.getCurrentLanguage() : 'en');
    
    const languageConfig = {
      en: { flag: '🇺🇸', code: 'EN' },
      fr: { flag: '🇫🇷', code: 'FR' }
    };
    
    const config = languageConfig[currentLang] || languageConfig.en;
    
    if (this.currentFlag) {
      this.currentFlag.textContent = config.flag;
    }
    
    if (this.currentLang) {
      this.currentLang.textContent = config.code;
      
      // Add animation class
      this.currentLang.classList.add('language-switched');
      setTimeout(() => {
        this.currentLang.classList.remove('language-switched');
      }, 300);
    }
  }
  
  updateSelectedOption(lang) {
    this.options.forEach(option => {
      const optionLang = option.getAttribute('data-lang');
      const isSelected = optionLang === lang;
      
      option.setAttribute('aria-selected', isSelected.toString());
      
      const checkmark = option.querySelector('.checkmark');
      if (checkmark) {
        checkmark.style.opacity = isSelected ? '1' : '0';
      }
    });
  }
  
  showLanguageChangeSuccess(lang) {
    const languageNames = {
      en: 'English',
      fr: 'Français'
    };
    
    const message = `Language changed to ${languageNames[lang] || lang}`;
    
    // Remove existing success indicator
    const existing = document.querySelector('.language-switch-success');
    if (existing) {
      existing.remove();
    }
    
    // Create new success indicator
    const indicator = document.createElement('div');
    indicator.className = 'language-switch-success';
    indicator.textContent = message;
    
    document.body.appendChild(indicator);
    
    // Remove after animation
    setTimeout(() => {
      if (indicator.parentNode) {
        indicator.parentNode.removeChild(indicator);
      }
    }, 3000);
  }
  
  showLanguageChangeError() {
    console.error('Failed to change language');
    // Could add error UI here if needed
  }
}

// ===== BACK TO TOP BUTTON FUNCTIONALITY =====

// Back to Top Button Management - Footer Version
class BackToTopButton {
  constructor() {
    this.button = document.getElementById('backToTop');
    this.isScrolling = false;
    
    this.init();
  }
  
  init() {
    if (!this.button) {
      console.warn('Back to top button not found');
      return;
    }
    
    this.setupEventListeners();
  }
  
  setupEventListeners() {
    // Click event for smooth scroll to top
    this.button.addEventListener('click', (e) => {
      e.preventDefault();
      this.scrollToTop();
    });
    
    // Keyboard support
    this.button.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.scrollToTop();
      }
    });
    
    // Add hover effects
    this.button.addEventListener('mouseenter', () => {
      this.button.classList.add('hover-active');
    });
    
    this.button.addEventListener('mouseleave', () => {
      this.button.classList.remove('hover-active');
    });
  }
  
  scrollToTop() {
    if (this.isScrolling) return;
    
    this.isScrolling = true;
    const startPosition = window.pageYOffset;
    const duration = Math.min(startPosition / 3, 1000); // Dynamic duration, max 1 second
    let start = null;
    
    // Add active state for visual feedback
    this.button.classList.add('scrolling-active');
    
    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeInOutCubic = progress < 0.5 
        ? 4 * progress * progress * progress 
        : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1;
      
      const currentPosition = startPosition * (1 - easeInOutCubic);
      window.scrollTo(0, currentPosition);
      
      if (progress < 1) {
        requestAnimationFrame(animation);
      } else {
        this.isScrolling = false;
        this.button.classList.remove('scrolling-active');
        
        // Add completion feedback
        this.button.classList.add('scroll-completed');
        setTimeout(() => {
          this.button.classList.remove('scroll-completed');
        }, 500);
      }
    };
    
    requestAnimationFrame(animation);
  }
}

// Initialize Back to Top Button
let backToTopButton;

// Initialize language dropdown when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize translation engine
  if (typeof translationEngine !== 'undefined') {
    translationEngine.initialize();
  }
  
  // Initialize Back to Top Button
  backToTopButton = new BackToTopButton();
  
  // Initialize language dropdown
  const languageDropdown = new LanguageDropdown();
  
  // Make it globally accessible for debugging
  window.languageDropdown = languageDropdown;
});

// ===== END LANGUAGE DROPDOWN AND TRANSLATION SYSTEM INTEGRATION =====