# HP Customer Support Email Generator

A professional, multilingual HTML-based email generator designed for HP support advisors to create customized, translated customer support emails.

## Features

### ✨ Core Functionality
- **11 Languages Supported**: English, Czech, Dutch, Hungarian, Italian, Polish, Romanian, Serbian, Slovak, Slovenian, Spanish
- **6 Predefined Templates**:
  - Status Update
  - Closure Email
  - Part Backordered
  - Trade
  - Reconnect Email
  - Custom Template
- **Automatic Translation**: Instant translation of issue details and custom content
- **Dynamic Field Injection**: All customer and advisor information dynamically inserted
- **Professional Formatting**: Enterprise-grade email structure with proper formatting

### 🛠️ Technical Features
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Copy-to-Clipboard**: One-click email copying ready for CRM/Outlook
- **UTF-8 Support**: Full multilingual character support
- **Client-Side Processing**: Fast, secure translation using MyMemory API
- **Form Validation**: Required field checks and graceful error handling

## Usage

### Step-by-Step Guide

1. **Select Language**: Choose target language from dropdown (11 options)
2. **Select Template**: Pick a predefined template or select "Custom"
3. **Enter Customer Details**:
   - Customer Name
   - Advisor Name
   - Case Reference Number
   - HP Serial Number
4. **Describe Issue**: Enter issue details (automatically translated)
5. **Add Context**: Optional additional context or notes
6. **Generate Email**: Click "Generate Email" button
7. **Copy Email**: Click "Copy to Clipboard" to copy formatted email
8. **Paste**: Paste directly into Outlook, CRM, or email client

## Predefined Templates

### Status Update
Confirms if the issue is resolved and requests case closure permission.

### Closure Email
Notifies customer that the case will be closed due to no response.

### Part Backordered
Informs customer about backordered part and escalation to logistics team.

### Trade
Notifies customer about incoming repair quotation and process commencement.

### Reconnect Email
Re-engages customer after live chat disconnection with case details.

### Custom
Allows advisors to write custom emails with automatic translation.

## Email Structure

All generated emails follow this professional format:

```
Hello [Customer Name],

Issue Reported: [Translated Issue Details]
Case Ref#: [Case Reference]
HP Serial#: [Serial Number]

[Template-Specific or Custom Body - Translated]

Regards,
[Advisor Name]
HP Trusted Advisor
HP Customer Support
https://support.hp.com/contact
```

## Supported Languages

| Language | Code | Status |
|----------|------|--------|
| English | en | ✓ Native |
| Czech | cs | ✓ Translated |
| Dutch | nl | ✓ Translated |
| Hungarian | hu | ✓ Translated |
| Italian | it | ✓ Translated |
| Polish | pl | ✓ Translated |
| Romanian | ro | ✓ Translated |
| Serbian | sr | ✓ Translated |
| Slovak | sk | ✓ Translated |
| Slovenian | sl | ✓ Translated |
| Spanish | es | ✓ Translated |

## Translation Technology

The application uses the **MyMemory Translation API** for dynamic translation:
- Free, reliable, and fast
- No API key required
- Supports all 11 languages
- Automatic fallback to English if translation fails

## File Structure

```
├── index.html          # Main HTML interface
├── styles.css          # Professional styling and responsive design
├── app.js              # Application logic and translation engine
└── README.md           # Documentation
```

## Browser Compatibility

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Acnkc92/Autoemailgenerator.git
   ```

2. Navigate to directory:
   ```bash
   cd Autoemailgenerator
   ```

3. Open in browser:
   ```bash
   open index.html
   ```
   Or simply double-click `index.html`

## No Dependencies

This is a standalone application with **zero external dependencies**:
- Pure HTML5
- Vanilla CSS3
- Vanilla JavaScript (ES6)
- Uses free translation API

## Key Features in Detail

### Automatic Translation
- All static labels (Hello, Issue Reported, Case Ref#, etc.) are pre-translated
- Issue details are translated on-the-fly using MyMemory API
- Custom email bodies are automatically translated
- English remains default if translation fails

### Professional UI/UX
- Clean, modern interface following HP brand colors
- Intuitive form layout with grouped sections
- Real-time email preview
- Responsive design that adapts to any screen size
- Accessibility-friendly form controls

### Copy-to-Clipboard
- One-click copy functionality
- Visual confirmation feedback
- Preserves all formatting
- Ready for immediate use in email clients

### Custom Template Support
- Write completely custom emails
- Automatic translation of custom content
- Maintains professional tone and formatting
- Optional additional context

## Tips for Best Results

1. **Use Clear Language**: Write issue details clearly for better translations
2. **Check Translations**: Review generated email before sending
3. **Complete All Fields**: All asterisked (*) fields are required
4. **Test Templates**: Familiarize yourself with each template
5. **Custom Templates**: Use for unique situations not covered by presets

## Privacy & Security

- All processing happens in your browser (client-side)
- No data is stored on servers
- Only translation requests are sent to MyMemory API
- No personal customer data is logged or retained

## Support

For issues, feature requests, or feedback:
1. Create an issue on GitHub
2. Include detailed description of issue
3. Specify language and template used

## Version

**v1.0** - Initial Release
- 6 predefined templates
- 11 language support
- Automatic translation
- Copy-to-clipboard functionality
- Responsive design

## License

Proprietary - HP Customer Support Tool

## Credits

Built for HP Customer Support Team
- Translation API: MyMemory
- UI/UX Design: Enterprise Professional Standards
- Tested with HP Support Advisors

---

**Ready to use?** Open `index.html` in your browser and start generating professional support emails in any of 11 languages!
