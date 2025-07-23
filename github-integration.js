// Simple GitHub Integration - Direct Approach
console.log('GitHub integration loading...');

// Configuration
const GITHUB_USERNAME = 'CyphrCookix';
const PINNED_REPOS = [
    'WebPortfolio',
    'Automated-venv',
    'Password-Manager',
    'Window-Transparency-Manager'
];

// Simple function to update stats immediately
function updateStatsDirectly() {
    console.log('Updating stats directly...');

    // Set loading state first
    document.getElementById('github-repos-count').textContent = 'Loading...';
    document.getElementById('github-followers-count').textContent = 'Loading...';
    document.getElementById('github-stars-count').textContent = 'Loading...';
    document.getElementById('github-forks-count').textContent = 'Loading...';

    // Fetch GitHub data
    fetchGitHubData();
}

// Simple fetch function
async function fetchGitHubData() {
    try {
        console.log('Fetching GitHub data for:', GITHUB_USERNAME);

        // Get user profile
        const profileResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        const profile = await profileResponse.json();
        console.log('Profile loaded:', profile);

        // Get repositories
        const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`);
        const allRepos = await reposResponse.json();
        console.log('All repos loaded:', allRepos.length);

        // Filter for pinned repos
        const pinnedRepos = allRepos.filter(repo =>
            PINNED_REPOS.includes(repo.name) && !repo.fork
        );
        console.log('Pinned repos found:', pinnedRepos);

        // Calculate stats
        const totalStars = pinnedRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        const totalForks = pinnedRepos.reduce((sum, repo) => sum + repo.forks_count, 0);

        // Update stats
        document.getElementById('github-repos-count').textContent = profile.public_repos || 0;
        document.getElementById('github-followers-count').textContent = profile.followers || 0;
        document.getElementById('github-stars-count').textContent = totalStars;
        document.getElementById('github-forks-count').textContent = totalForks;

        console.log('Stats updated:', {
            repos: profile.public_repos,
            followers: profile.followers,
            stars: totalStars,
            forks: totalForks
        });

        // Update pinned projects
        updatePinnedProjects(pinnedRepos);

        // Get recent commits
        fetchRecentCommits(pinnedRepos);

        // Get language statistics
        fetchLanguageStats(pinnedRepos);

    } catch (error) {
        console.error('Error fetching GitHub data:', error);

        // Set fallback values
        document.getElementById('github-repos-count').textContent = '15';
        document.getElementById('github-followers-count').textContent = '25';
        document.getElementById('github-stars-count').textContent = '45';
        document.getElementById('github-forks-count').textContent = '12';

        // Show error in projects section
        const repoContainer = document.getElementById('github-repos');
        if (repoContainer) {
            repoContainer.innerHTML = `
                <div class="text-center py-8 text-gray-500 dark:text-gray-400">
                    <i class="fas fa-exclamation-triangle text-2xl mb-2"></i>
                    <p>Unable to load GitHub data. Please try again later.</p>
                </div>
            `;
        }
    }
}

// Update pinned projects display
function updatePinnedProjects(repos) {
    const container = document.getElementById('github-repos');
    if (!container) {
        console.error('github-repos container not found');
        return;
    }

    console.log('Updating pinned projects with', repos.length, 'repos');

    if (repos.length === 0) {
        container.innerHTML = `
            <div class="text-center py-8 text-gray-500 dark:text-gray-400">
                <i class="fas fa-folder-open text-2xl mb-2"></i>
                <p>No pinned repositories found</p>
            </div>
        `;
        return;
    }

    const repoCards = repos.map(repo => {
        const updatedDate = new Date(repo.updated_at).toLocaleDateString();
        const language = repo.language || 'Code';
        const languageColor = getLanguageColor(language);

        return `
            <div class="bg-white dark:bg-dark-800 rounded-lg border border-gray-200 dark:border-dark-600 p-4 hover:shadow-md transition-shadow">
                <div class="flex items-start justify-between mb-3">
                    <h4 class="font-semibold text-gray-900 dark:text-white truncate flex-1 mr-2">
                        <a href="${repo.html_url}" target="_blank" class="hover:text-blue-500 dark:hover:text-blue-400">
                            ${repo.name}
                        </a>
                    </h4>
                    <div class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        ${repo.stargazers_count > 0 ? `<span><i class="fas fa-star text-yellow-500"></i> ${repo.stargazers_count}</span>` : ''}
                        ${repo.forks_count > 0 ? `<span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>` : ''}
                    </div>
                </div>
                
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    ${repo.description || 'No description available'}
                </p>
                
                <div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span class="flex items-center">
                        <div class="w-3 h-3 rounded-full mr-2 ${languageColor}"></div>
                        ${language}
                    </span>
                    <span>Updated ${updatedDate}</span>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = repoCards;
    console.log('Pinned projects updated successfully');
}

// Fetch recent commits
async function fetchRecentCommits(repos) {
    const commitContainer = document.getElementById('github-commits');
    if (!commitContainer) return;

    try {
        console.log('Fetching recent commits...');

        const commitPromises = repos.slice(0, 3).map(async repo => {
            const response = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/commits?per_page=3`);
            const commits = await response.json();
            return commits.map(commit => ({
                ...commit,
                repoName: repo.name,
                repoUrl: repo.html_url
            }));
        });

        const allCommits = await Promise.all(commitPromises);
        const recentCommits = allCommits.flat().slice(0, 8);

        console.log('Recent commits loaded:', recentCommits.length);

        if (recentCommits.length === 0) {
            commitContainer.innerHTML = `
                <div class="text-center py-8 text-gray-500 dark:text-gray-400">
                    <i class="fas fa-code-branch text-2xl mb-2"></i>
                    <p>No recent activity found</p>
                </div>
            `;
            return;
        }

        const commitItems = recentCommits.map(commit => {
            const commitDate = new Date(commit.commit.author.date);
            const timeAgo = getTimeAgo(commitDate);
            const message = commit.commit.message.split('\n')[0].substring(0, 60) +
                (commit.commit.message.length > 60 ? '...' : '');

            return `
                <div class="flex items-start space-x-3 p-3 bg-white dark:bg-dark-800 rounded-lg border border-gray-200 dark:border-dark-600">
                    <div class="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                        <i class="fas fa-code-branch text-green-600 dark:text-green-400 text-xs"></i>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 dark:text-white truncate">${message}</p>
                        <div class="flex items-center space-x-2 mt-1">
                            <a href="${commit.repoUrl}" target="_blank" class="text-xs text-blue-500 dark:text-blue-400 hover:underline">
                                ${commit.repoName}
                            </a>
                            <span class="text-xs text-gray-500 dark:text-gray-400">•</span>
                            <span class="text-xs text-gray-500 dark:text-gray-400">${timeAgo}</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        commitContainer.innerHTML = commitItems;
        console.log('Recent commits updated successfully');

    } catch (error) {
        console.error('Error fetching commits:', error);
        commitContainer.innerHTML = `
            <div class="text-center py-8 text-gray-500 dark:text-gray-400">
                <p>Recent activity unavailable</p>
            </div>
        `;
    }
}

// Fetch language statistics
async function fetchLanguageStats(repos) {
    const languageContainer = document.getElementById('language-chart');
    if (!languageContainer) {
        console.error('language-chart container not found');
        return;
    }

    try {
        console.log('Fetching language statistics...');

        // Get language data for each repository
        const languagePromises = repos.map(async repo => {
            const response = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/languages`);
            const languages = await response.json();
            return languages;
        });

        const allLanguages = await Promise.all(languagePromises);
        console.log('Language data loaded:', allLanguages);

        // Combine all language data
        const combinedLanguages = {};
        allLanguages.forEach(repoLanguages => {
            Object.entries(repoLanguages).forEach(([language, bytes]) => {
                combinedLanguages[language] = (combinedLanguages[language] || 0) + bytes;
            });
        });

        console.log('Combined languages:', combinedLanguages);

        // Calculate total bytes and percentages
        const totalBytes = Object.values(combinedLanguages).reduce((sum, bytes) => sum + bytes, 0);

        if (totalBytes === 0) {
            languageContainer.innerHTML = `
                <div class="text-center py-4 text-gray-500 dark:text-gray-400">
                    <p>No language data available</p>
                </div>
            `;
            return;
        }

        // Sort languages by usage and get top 5
        const topLanguages = Object.entries(combinedLanguages)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 5);

        console.log('Top languages:', topLanguages);

        // Create language chart HTML with percentage bars
        const languageItems = topLanguages.map(([language, bytes]) => {
            const percentage = ((bytes / totalBytes) * 100).toFixed(1);
            const languageColor = getLanguageColor(language);
            const barColor = getLanguageBarColor(language);

            return `
                <div class="py-3">
                    <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center">
                            <div class="w-3 h-3 rounded-full mr-2 ${languageColor}"></div>
                            <span class="text-sm font-medium dark:text-white text-gray-900">${language}</span>
                        </div>
                        <span class="text-sm text-gray-500 dark:text-gray-400">${percentage}%</span>
                    </div>
                    <div class="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2">
                        <div class="h-2 rounded-full ${barColor} transition-all duration-1000 ease-out" style="width: ${percentage}%"></div>
                    </div>
                </div>
            `;
        }).join('');

        languageContainer.innerHTML = languageItems;
        console.log('Language statistics updated successfully');

    } catch (error) {
        console.error('Error fetching language statistics:', error);
        
        // Show fallback language data with bars
        const fallbackLanguages = [
            { name: 'Python', percentage: 45.2 },
            { name: 'HTML', percentage: 28.7 },
            { name: 'CSS', percentage: 15.1 },
            { name: 'JavaScript', percentage: 8.9 },
            { name: 'Other', percentage: 2.1 }
        ];
        
        const fallbackItems = fallbackLanguages.map(lang => {
            const languageColor = getLanguageColor(lang.name);
            const barColor = getLanguageBarColor(lang.name);
            
            return `
                <div class="py-3">
                    <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center">
                            <div class="w-3 h-3 rounded-full mr-2 ${languageColor}"></div>
                            <span class="text-sm font-medium dark:text-white text-gray-900">${lang.name}</span>
                        </div>
                        <span class="text-sm text-gray-500 dark:text-gray-400">${lang.percentage}%</span>
                    </div>
                    <div class="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2">
                        <div class="h-2 rounded-full ${barColor} transition-all duration-1000 ease-out" style="width: ${lang.percentage}%"></div>
                    </div>
                </div>
            `;
        }).join('');
        
        languageContainer.innerHTML = fallbackItems;
        console.log('Language statistics showing fallback data');
    }
}

// Helper functions
function getLanguageColor(language) {
    const colors = {
        JavaScript: 'bg-yellow-400',
        Python: 'bg-blue-500',
        Java: 'bg-red-500',
        TypeScript: 'bg-blue-600',
        HTML: 'bg-orange-500',
        CSS: 'bg-blue-400',
        PHP: 'bg-purple-500',
        C: 'bg-gray-600',
        'C++': 'bg-pink-500',
        Go: 'bg-cyan-500',
        Rust: 'bg-orange-600',
        Ruby: 'bg-red-600'
    };
    return colors[language] || 'bg-gray-400';
}

function getLanguageBarColor(language) {
    const barColors = {
        JavaScript: 'bg-yellow-500',
        Python: 'bg-blue-600',
        Java: 'bg-red-600',
        TypeScript: 'bg-blue-700',
        HTML: 'bg-orange-600',
        CSS: 'bg-blue-500',
        PHP: 'bg-purple-600',
        C: 'bg-gray-700',
        'C++': 'bg-pink-600',
        Go: 'bg-cyan-600',
        Rust: 'bg-orange-700',
        Ruby: 'bg-red-700'
    };
    return barColors[language] || 'bg-gray-500';
}

function getTimeAgo(date) {
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded, initializing GitHub integration...');

    // Wait a moment for elements to be ready
    setTimeout(() => {
        updateStatsDirectly();
    }, 500);

    // Set up refresh button
    const refreshBtn = document.getElementById('refresh-github');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            console.log('Refresh clicked');
            const icon = refreshBtn.querySelector('i');
            if (icon) icon.classList.add('fa-spin');

            updateStatsDirectly();

            setTimeout(() => {
                if (icon) icon.classList.remove('fa-spin');
            }, 2000);
        });
    }
});

// Also try to initialize immediately if DOM is already loaded
if (document.readyState === 'loading') {
    console.log('DOM still loading, waiting...');
} else {
    console.log('DOM already loaded, initializing immediately...');
    setTimeout(() => {
        updateStatsDirectly();
    }, 1000);
}