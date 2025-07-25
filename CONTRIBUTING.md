# Contributing to Sync Board

Thank you for your interest in contributing to Sync Board! We welcome contributions from everyone.

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally
3. Set up the development environment
4. Create a new branch for your feature or bug fix
5. Make your changes
6. Test your changes
7. Submit a pull request

## Development Setup

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

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/JanishkaM/syncboard/issues)
2. If not, create a new issue with:
   - Clear description of the bug
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Environment details (OS, browser, etc.)

### Suggesting Features

1. Check existing [Issues](https://github.com/JanishkaM/syncboard/issues) for similar suggestions
2. Create a new issue with:
   - Clear description of the feature
   - Use cases and benefits
   - Possible implementation ideas

### Code Contributions

#### Branch Naming
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

3. **Review Process:**
   - Your PR will be reviewed by maintainers
   - Address any feedback or requested changes
   - Once approved, your PR will be merged

## Project Structure

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

## Questions?

If you have questions about contributing, feel free to:
- Open an issue with the "question" label
- Contact the maintainers
- Check existing documentation

Thank you for contributing to Sync Board! 🚀
