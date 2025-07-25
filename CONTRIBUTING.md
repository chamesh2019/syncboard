# Contributing to Sync Board

Thank you for your interest in contributing to Sync Board! 🎉 

We're excited to have you join our open source community. This project welcomes contributions from developers of all skill levels - whether you're fixing a typo, adding a new feature, or improving documentation, every contribution matters!

## 🌟 Ways to Contribute

- 🐛 **Report bugs** - Help us identify and fix issues
- ✨ **Suggest features** - Share ideas for new functionality
- 🔧 **Write code** - Implement new features or fix bugs
- 📚 **Improve documentation** - Help others understand the project
- 🎨 **Design improvements** - Enhance UI/UX
- 🧪 **Write tests** - Improve code quality and reliability
- 💬 **Help others** - Answer questions in issues and discussions

## 🚀 Quick Start for Contributors

## 🚀 Quick Start for Contributors

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Set up the development environment**
4. **Create a new branch** for your feature or bug fix
5. **Make your changes** and test them
6. **Submit a pull request** with a clear description

### First-time Contributors
New to open source? No problem! Look for issues labeled `good first issue` or `help wanted`. These are beginner-friendly and a great way to get started.

## 🛠️ Development Setup

1. **Prerequisites:**
   - Node.js (v18 or higher)
   - MongoDB Atlas account or local MongoDB
   - Git

2. **Installation:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/syncboard.git
   cd syncboard
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file with:
   ```env
   MONGO_URI=your-mongodb-connection-string
   APP_URL_API=http://localhost:3000/api/
   ```

4. **Start Development Server:**
   ```bash
   npm run dev
   ```

## How to Contribute

## 🐛 Reporting Bugs

Found a bug? We want to hear about it! Here's how to report it effectively:

1. **Search existing issues** first to avoid duplicates
2. **Use our bug report template** when creating a new issue
3. **Provide detailed information:**
   - Clear description of the bug
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots or videos if applicable
   - Environment details (OS, browser, Node.js version, etc.)
   - Console errors (if any)

### Bug Report Template
```markdown
**Bug Description**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected Behavior**
What you expected to happen.

**Screenshots**
Add screenshots to help explain your problem.

**Environment:**
- OS: [e.g. macOS, Windows, Linux]
- Browser: [e.g. Chrome, Firefox, Safari]
- Node.js version: [e.g. 18.17.0]
- Project version: [e.g. 1.0.0]

**Additional Context**
Any other context about the problem.
```

## 💡 Suggesting Features

Have an idea for a new feature? We'd love to hear it!

## 💡 Suggesting Features

Have an idea for a new feature? We'd love to hear it!

1. **Check existing feature requests** in [Issues](https://github.com/JanishkaM/syncboard/issues)
2. **Create a detailed feature request** with:
   - Clear description of the feature
   - Problem it solves or value it adds
   - Possible implementation approach
   - User stories or use cases
   - Mockups or examples (if applicable)

### 🎯 Feature Ideas We're Looking For
- User authentication and private boards
- Real-time collaborative editing
- Board templates and categories
- Export functionality (PDF, JSON, etc.)
- Dark mode support
- Mobile app development
- Browser extensions
- API improvements
- Performance optimizations
- Accessibility enhancements

## 👨‍💻 Code Contributions

Ready to write some code? Here's everything you need to know:

## 👨‍💻 Code Contributions

Ready to write some code? Here's everything you need to know:

### 🏷️ Issue Labels
Look for these labels to find the right issue for you:
- `good first issue` - Perfect for beginners
- `help wanted` - We need community help on these
- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to documentation
- `priority: high` - Important issues that need attention
- `priority: low` - Nice to have improvements

### 🌿 Branch Naming Convention
- `feature/description` - for new features
- `bugfix/description` - for bug fixes
- `hotfix/description` - for urgent fixes
- `docs/description` - for documentation updates

#### Coding Standards
- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Write descriptive commit messages

#### Commit Messages
Follow the conventional commit format:
```
type(scope): description

- feat: new feature
- fix: bug fix
- docs: documentation changes
- style: formatting changes
- refactor: code refactoring
- test: adding tests
- chore: maintenance tasks
```

Example:
```
feat(boards): add board sharing functionality
fix(api): resolve board deletion error
docs(readme): update installation instructions
```

#### Pull Request Process

1. **Before submitting:**
   - Ensure your code follows the project's coding standards
   - Test your changes locally
   - Update documentation if needed
   - Run `npm run lint` to check for linting errors
   - Run `npm run build` to ensure the project builds successfully

2. **Pull Request Template:**
   ```markdown
   ## Description
   Brief description of changes

   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Documentation update
   - [ ] Code refactoring

   ## Testing
   - [ ] Tested locally
   - [ ] All tests pass
   - [ ] No linting errors

   ## Screenshots (if applicable)
   Add screenshots for UI changes

   ## Additional Notes
   Any additional information
   ```

   - Address any feedback or requested changes
   - Once approved, your PR will be merged

## 🏗️ Project Structure

```
syncboard/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── addNewBoard/       # Add board page
│   ├── editBoard/         # Edit board pages
│   └── globals.css        # Global styles
├── components/            # Reusable React components
├── libs/                  # Utility libraries
├── models/                # MongoDB models
└── public/               # Static assets
```

## 🏆 Recognition

We believe in recognizing our contributors! Here's how we show appreciation:

- 🎉 **Contributors List**: All contributors are listed in our README
- 🌟 **Special Recognition**: Outstanding contributions get special mentions in releases
- 📈 **GitHub Profile**: Your contributions show up on your GitHub profile
- 🤝 **Community**: Join our community of developers improving Sync Board

## 🔄 Development Workflow

### For Small Changes (Documentation, Bug fixes)
1. Fork the repository
2. Create a branch: `git checkout -b fix/issue-description`
3. Make your changes
4. Test locally
5. Submit a pull request

### For New Features
1. **Open an issue first** to discuss the feature
2. Wait for maintainer approval
3. Fork and create a feature branch
4. Implement the feature with tests
5. Update documentation
6. Submit a pull request

## 🧪 Testing Guidelines

- Test your changes locally before submitting
- Add tests for new features when possible
- Ensure existing tests still pass
- Test on different browsers if making UI changes
- Check mobile responsiveness

## 📱 Mobile & Accessibility

We care about making Sync Board accessible to everyone:
- Test your changes on mobile devices
- Ensure proper contrast ratios
- Add alt text for images
- Use semantic HTML
- Test with screen readers when possible

## 🌍 Internationalization

Interested in translating Sync Board to other languages? We'd love your help! Open an issue to discuss adding i18n support.

## ❓ Questions & Support

## ❓ Questions & Support

Need help? Here are the best ways to get support:

- 💬 **GitHub Discussions**: For general questions and community chat
- 🐛 **GitHub Issues**: For bug reports and feature requests
- 📧 **Email**: Contact maintainers directly for sensitive issues
- 📖 **Documentation**: Check our README and docs first

## 🤝 Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/). By participating, you're expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## 📜 License

By contributing to Sync Board, you agree that your contributions will be licensed under the MIT License.

---

## 🎉 Thank You!

Every contribution, no matter how small, makes Sync Board better for everyone. Whether you're fixing a typo, adding a feature, or helping other users, you're part of making this project awesome!

**Ready to contribute?** Check out our [open issues](https://github.com/JanishkaM/syncboard/issues) and let's build something great together! 🚀

### 💝 Special Thanks

Thanks to all our amazing contributors who have helped make Sync Board better:

<!-- This will be auto-updated -->
[Contributors List](https://github.com/JanishkaM/syncboard/graphs/contributors)
