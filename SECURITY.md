# Security Policy

## Supported Versions

We release patches for security vulnerabilities in the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

The Sync Board team takes security bugs seriously. We appreciate your efforts to responsibly disclose your findings, and will make every effort to acknowledge your contributions.

To report a security issue, please use the GitHub Security Advisory ["Report a Vulnerability"](https://github.com/JanishkaM/syncboard/security/advisories/new) tab.

The Sync Board team will send a response indicating the next steps in handling your report. After the initial reply to your report, the security team will keep you informed of the progress towards a fix and full announcement, and may ask for additional information or guidance.

### What to Include

Please include the following information in your report:

- Type of issue (e.g. buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit the issue

This information will help us triage your report more quickly.

### Preferred Languages

We prefer all communications to be in English.

## Security Best Practices

When contributing to Sync Board, please follow these security best practices:

### For Contributors

- Never commit sensitive information like API keys, passwords, or personal data
- Use environment variables for configuration
- Validate all user inputs
- Use HTTPS for all external requests
- Keep dependencies up to date
- Follow the principle of least privilege
- Sanitize data before displaying it

### For Users

- Keep your dependencies updated
- Use strong environment variable values
- Don't expose your MongoDB connection string
- Use HTTPS in production
- Regularly backup your data
- Monitor your application logs

## Vulnerability Disclosure Process

1. **Report**: Security vulnerabilities should be reported through GitHub Security Advisories
2. **Acknowledge**: We will acknowledge receipt of your vulnerability report within 48 hours
3. **Assess**: We will assess the vulnerability and determine its impact
4. **Fix**: We will develop and test a fix for the vulnerability
5. **Release**: We will release a security patch as soon as possible
6. **Disclose**: We will publicly disclose the vulnerability after a fix is available

## Security Updates

Security updates will be released as patch versions (e.g., 1.0.1) and will be clearly marked in the changelog. We recommend all users update to the latest version as soon as possible.

## Contact

For general security questions or concerns, you can reach out to the maintainers through:

- GitHub Issues (for non-sensitive security discussions)
- GitHub Security Advisories (for vulnerability reports)

Thank you for helping keep Sync Board and our users safe!
